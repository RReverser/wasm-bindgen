use alloc::collections::VecDeque;
use alloc::rc::Rc;
use core::cell::{Cell, RefCell};
use js_sys::{Function, Promise};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen]
    fn queueMicrotask(closure: &Function);

    #[wasm_bindgen(thread_local_v2, js_name = queueMicrotask)]
    static HAS_QUEUE_MICROTASK: Option<Function>;

    #[wasm_bindgen(extends = Promise)]
    type PromiseExt;

    #[wasm_bindgen(method, js_name = then)]
    fn then_func(this: &PromiseExt, cb: &Function) -> Function;

    #[wasm_bindgen(thread_local_v2, js_namespace = WebAssembly, js_name = promising)]
    static WASM_PROMISING: Option<Function>;

    #[wasm_bindgen(thread_local_v2, js_namespace = wasm, js_name = __wbg_futures_tick)]
    static __WBG_FUTURES_TICK: Function;
}

struct QueueState {
    // The queue of Tasks which are to be run in order. In practice this is all the
    // synchronous work of futures, and each `Task` represents calling `poll` on
    // a future "at the right time".
    tasks: RefCell<VecDeque<Rc<crate::task::Task>>>,

    // This flag indicates whether we've scheduled `run_all` to run in the future.
    // This is used to ensure that it's only scheduled once.
    is_scheduled: Cell<bool>,
}

impl QueueState {
    fn run_all(&self) {
        // "consume" the schedule
        let _was_scheduled = self.is_scheduled.replace(false);
        debug_assert!(_was_scheduled);

        // Stop when all tasks that have been scheduled before this tick have been run.
        // Tasks that are scheduled while running tasks will run on the next tick.
        let mut task_count_left = self.tasks.borrow().len();
        while task_count_left > 0 {
            task_count_left -= 1;
            let task = match self.tasks.borrow_mut().pop_front() {
                Some(task) => task,
                None => break,
            };
            task.run();
        }

        // All of the Tasks have been run, so it's now possible to schedule the
        // next tick again
    }
}

pub(crate) struct Queue {
    state: Rc<QueueState>,
    promise_fallback_for_queue_microtask: Option<PromiseExt>,
    wbg_futures_tick: Function,
}

impl Queue {
    // Schedule a task to run on the next tick
    pub(crate) fn schedule_task(&self, task: Rc<crate::task::Task>) {
        self.state.tasks.borrow_mut().push_back(task);
        // Use queueMicrotask to execute as soon as possible. If it does not exist
        // fall back to the promise resolution
        if !self.state.is_scheduled.replace(true) {
            if let Some(promise) = self.promise_fallback_for_queue_microtask.as_ref() {
                let _ = promise.then_func(&self.wbg_futures_tick);
            } else {
                queueMicrotask(&self.wbg_futures_tick);
            }
        }
    }
    // Append a task to the currently running queue, or schedule it
    #[cfg(not(target_feature = "atomics"))]
    pub(crate) fn push_task(&self, task: Rc<crate::task::Task>) {
        // It would make sense to run this task on the same tick.  For now, we
        // make the simplifying choice of always scheduling tasks for a future tick.
        self.schedule_task(task)
    }
}

impl Queue {
    fn new() -> Self {
        let state = Rc::new(QueueState {
            is_scheduled: Cell::new(false),
            tasks: RefCell::new(VecDeque::new()),
        });

        Self {
            promise_fallback_for_queue_microtask: HAS_QUEUE_MICROTASK.with(|opt| {
                opt.is_none()
                    .then(|| Promise::resolve(&JsValue::undefined()).unchecked_into::<PromiseExt>())
            }),

            wbg_futures_tick: __WBG_FUTURES_TICK.with(|wbg_futures_tick| {
                WASM_PROMISING.with(|wasm_promising| match wasm_promising {
                    Some(wasm_promising) => wasm_promising
                        .call1(&JsValue::undefined(), &wbg_futures_tick)
                        .unwrap()
                        .dyn_into()
                        .expect("WebAssembly.promising should return a Function"),
                    None => wbg_futures_tick.clone(),
                })
            }),

            state,
        }
    }

    pub(crate) fn with<R>(f: impl FnOnce(&Self) -> R) -> R {
        use once_cell::unsync::Lazy;

        struct Wrapper<T>(Lazy<T>);

        #[cfg(not(target_feature = "atomics"))]
        unsafe impl<T> Sync for Wrapper<T> {}

        #[cfg(not(target_feature = "atomics"))]
        unsafe impl<T> Send for Wrapper<T> {}

        #[cfg_attr(target_feature = "atomics", thread_local)]
        static QUEUE: Wrapper<Queue> = Wrapper(Lazy::new(Queue::new));

        f(&QUEUE.0)
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn __wbg_futures_tick() {
    Queue::with(|queue| queue.state.run_all())
}
