(function() {
    var wasm;
    var memory;
    const __exports = {};


    let cachedTextDecoder = new TextDecoder('utf-8');

    let cachegetUint8Memory = null;
    function getUint8Memory() {
        if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== memory.buffer) {
            cachegetUint8Memory = new Uint8Array(memory.buffer);
        }
        return cachegetUint8Memory;
    }

    function getStringFromWasm(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory().slice(ptr, ptr + len));
    }

    __exports.__wbg_log_875a8b4f03a0d521 = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);
        console.log(varg0);
    };

    const stack = [];

    function addBorrowedObject(obj) {
        stack.push(obj);
        return ((stack.length - 1) << 1) | 1;
    }

    const slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];

    let slab_next = slab.length;

    function addHeapObject(obj) {
        if (slab_next === slab.length) slab.push(slab.length + 1);
        const idx = slab_next;
        const next = slab[idx];

        slab_next = next;

        slab[idx] = { obj, cnt: 1 };
        return idx << 1;
    }

    function getObject(idx) {
        if ((idx & 1) === 1) {
            return stack[idx >> 1];
        } else {
            const val = slab[idx >> 1];

            return val.obj;

        }
    }

    function dropRef(idx) {

        idx = idx >> 1;
        if (idx < 4) return;
        let obj = slab[idx];

        obj.cnt -= 1;
        if (obj.cnt > 0) return;

        // If we hit 0 then free up our space in the slab
        slab[idx] = slab_next;
        slab_next = idx;
    }

    function takeObject(idx) {
        const ret = getObject(idx);
        dropRef(idx);
        return ret;
    }

    let cachegetUint32Memory = null;
    function getUint32Memory() {
        if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== memory.buffer) {
            cachegetUint32Memory = new Uint32Array(memory.buffer);
        }
        return cachegetUint32Memory;
    }

    __exports.__wbg_new_558a897481b09ebc = function(arg0, arg1, arg2, exnptr) {
        try {
            return addHeapObject(new ImageData(getObject(arg0), arg1, arg2));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };
    /**
    * @param {number} arg0
    * @returns {void}
    */
    __exports.child_entry_point = function(arg0) {
        return wasm.child_entry_point(arg0);
    };

    __exports.__wbg_error_cc95a3d302735ca3 = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);

        varg0 = varg0.slice();
        wasm.__wbindgen_free(arg0, arg1 * 1);

        console.error(varg0);
    };

    const __widl_f_put_image_data_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.putImageData || function() {
        throw new Error(`wasm-bindgen: CanvasRenderingContext2D.putImageData does not exist`);
    };

    __exports.__widl_f_put_image_data_CanvasRenderingContext2D = function(arg0, arg1, arg2, arg3, exnptr) {
        try {
            __widl_f_put_image_data_CanvasRenderingContext2D_target.call(getObject(arg0), getObject(arg1), arg2, arg3);
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    __exports.__widl_f_post_message_DedicatedWorkerGlobalScope = function(arg0, arg1, exnptr) {
        try {
            getObject(arg0).postMessage(getObject(arg1));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    __exports.__widl_instanceof_ErrorEvent = function(idx) {
        return getObject(idx) instanceof ErrorEvent ? 1 : 0;
    };

    let cachedTextEncoder = new TextEncoder('utf-8');

    let WASM_VECTOR_LEN = 0;

    function passStringToWasm(arg) {

        const buf = cachedTextEncoder.encode(arg);
        const ptr = wasm.__wbindgen_malloc(buf.length);
        getUint8Memory().set(buf, ptr);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    function GetOwnOrInheritedPropertyDescriptor(obj, id) {
        while (obj) {
            let desc = Object.getOwnPropertyDescriptor(obj, id);
            if (desc) return desc;
            obj = Object.getPrototypeOf(obj);
        }
    return {}
}

const __widl_f_message_ErrorEvent_target = GetOwnOrInheritedPropertyDescriptor(typeof ErrorEvent === 'undefined' ? null : ErrorEvent.prototype, 'message').get || function() {
    throw new Error(`wasm-bindgen: ErrorEvent.message does not exist`);
};

__exports.__widl_f_message_ErrorEvent = function(ret, arg0) {

    const retptr = passStringToWasm(__widl_f_message_ErrorEvent_target.call(getObject(arg0)));
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

};

const __widl_f_type_Event_target = GetOwnOrInheritedPropertyDescriptor(typeof Event === 'undefined' ? null : Event.prototype, 'type').get || function() {
    throw new Error(`wasm-bindgen: Event.type does not exist`);
};

__exports.__widl_f_type_Event = function(ret, arg0) {

    const retptr = passStringToWasm(__widl_f_type_Event_target.call(getObject(arg0)));
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

};

__exports.__widl_instanceof_MessageEvent = function(idx) {
    return getObject(idx) instanceof MessageEvent ? 1 : 0;
};

const __widl_f_data_MessageEvent_target = GetOwnOrInheritedPropertyDescriptor(typeof MessageEvent === 'undefined' ? null : MessageEvent.prototype, 'data').get || function() {
    throw new Error(`wasm-bindgen: MessageEvent.data does not exist`);
};

__exports.__widl_f_data_MessageEvent = function(arg0) {
    return addHeapObject(__widl_f_data_MessageEvent_target.call(getObject(arg0)));
};

__exports.__widl_f_new_Worker = function(arg0, arg1, exnptr) {
    let varg0 = getStringFromWasm(arg0, arg1);
    try {
        return addHeapObject(new Worker(varg0));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_post_message_Worker_target = typeof Worker === 'undefined' ? null : Worker.prototype.postMessage || function() {
    throw new Error(`wasm-bindgen: Worker.postMessage does not exist`);
};

__exports.__widl_f_post_message_Worker = function(arg0, arg1, exnptr) {
    try {
        __widl_f_post_message_Worker_target.call(getObject(arg0), getObject(arg1));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_terminate_Worker_target = typeof Worker === 'undefined' ? null : Worker.prototype.terminate || function() {
    throw new Error(`wasm-bindgen: Worker.terminate does not exist`);
};

__exports.__widl_f_terminate_Worker = function(arg0) {
    __widl_f_terminate_Worker_target.call(getObject(arg0));
};

const __widl_f_set_onmessage_Worker_target = GetOwnOrInheritedPropertyDescriptor(typeof Worker === 'undefined' ? null : Worker.prototype, 'onmessage').set || function() {
    throw new Error(`wasm-bindgen: Worker.onmessage does not exist`);
};

__exports.__widl_f_set_onmessage_Worker = function(arg0, arg1) {
    __widl_f_set_onmessage_Worker_target.call(getObject(arg0), getObject(arg1));
};

const __widl_f_set_onerror_Worker_target = GetOwnOrInheritedPropertyDescriptor(typeof Worker === 'undefined' ? null : Worker.prototype, 'onerror').set || function() {
    throw new Error(`wasm-bindgen: Worker.onerror does not exist`);
};

__exports.__widl_f_set_onerror_Worker = function(arg0, arg1) {
    __widl_f_set_onerror_Worker_target.call(getObject(arg0), getObject(arg1));
};

__exports.__wbg_instanceof_Array_43ce3be9bdfdbd27 = function(idx) {
    return getObject(idx) instanceof Array ? 1 : 0;
};

__exports.__wbg_new_55d176391eb5bbb4 = function() {
    return addHeapObject(new Array());
};

__exports.__wbg_pop_98365b89368cf313 = function(arg0) {
    return addHeapObject(getObject(arg0).pop());
};

__exports.__wbg_push_a3d2caf057c8ab57 = function(arg0, arg1) {
    return getObject(arg0).push(getObject(arg1));
};

__exports.__wbg_new_dd4c3522b45b0e21 = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Error(varg0));
};

__exports.__wbg_newnoargs_96cbdf0d056b2fa8 = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
};

__exports.__wbg_call_ee8306f6b79399de = function(arg0, arg1, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

__exports.__wbg_call_6810db23cc77bd1a = function(arg0, arg1, arg2, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1), getObject(arg2)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

__exports.__wbg_new_ec7cab6a82d8b0e0 = function(arg0) {
    return addHeapObject(new Uint8ClampedArray(getObject(arg0)));
};

__exports.__wbg_slice_808e93866efb6e6a = function(arg0, arg1, arg2) {
    return addHeapObject(getObject(arg0).slice(arg1, arg2));
};

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    }
    return cachedGlobalArgumentPtr;
}

function getGlobalArgument(arg) {
    const idx = globalArgumentPtr() / 4 + arg;
    return getUint32Memory()[idx];
}

__exports.__wbg_new_e3559247dc9c35ee = function(arg0) {
    let cbarg0 = function(arg0, arg1) {
        let a = this.a;
        this.a = 0;
        try {
            return this.f(a, this.b, addHeapObject(arg0), addHeapObject(arg1));

        } finally {
            this.a = a;

        }

    };
    cbarg0.f = wasm.__wbg_function_table.get(arg0);
    cbarg0.a = getGlobalArgument(0);
    cbarg0.b = getGlobalArgument(0 + 1);
    try {
        return addHeapObject(new Promise(cbarg0.bind(cbarg0)));
    } finally {
        cbarg0.a = cbarg0.b = 0;

    }
};

__exports.__wbg_resolve_21fce8c5fa3dfdfd = function(arg0) {
    return addHeapObject(Promise.resolve(getObject(arg0)));
};

__exports.__wbg_then_bc478047d993ad04 = function(arg0, arg1) {
    return addHeapObject(getObject(arg0).then(getObject(arg1)));
};

__exports.__wbg_buffer_c6180b818cf4d37e = function(arg0) {
    return addHeapObject(getObject(arg0).buffer);
};

function freeScene(ptr) {

    wasm.__wbg_scene_free(ptr);
}
/**
*/
class Scene {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeScene(ptr);
    }

    /**
    * @param {any} arg0
    * @returns {}
    */
    constructor(arg0) {
        try {
            this.ptr = wasm.scene_new(addBorrowedObject(arg0));

        } finally {
            stack.pop();

        }

    }
    /**
    * @param {number} arg0
    * @param {WorkerPool} arg1
    * @param {any} arg2
    * @returns {RenderingScene}
    */
    render(arg0, arg1, arg2) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr1 = arg1.ptr;
        arg1.ptr = 0;
        return RenderingScene.__wrap(wasm.scene_render(ptr, arg0, ptr1, addHeapObject(arg2)));
    }
}
__exports.Scene = Scene;

function freeWorkerPool(ptr) {

    wasm.__wbg_workerpool_free(ptr);
}
/**
*/
class WorkerPool {

    static __wrap(ptr) {
        const obj = Object.create(WorkerPool.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeWorkerPool(ptr);
    }

    /**
    * @param {number} arg0
    * @returns {}
    */
    constructor(arg0) {
        this.ptr = wasm.workerpool_new(arg0);
    }
}
__exports.WorkerPool = WorkerPool;

function freeRenderingScene(ptr) {

    wasm.__wbg_renderingscene_free(ptr);
}
/**
*/
class RenderingScene {

    static __wrap(ptr) {
        const obj = Object.create(RenderingScene.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeRenderingScene(ptr);
    }

    /**
    * @returns {any}
    */
    promise() {
        return takeObject(wasm.renderingscene_promise(this.ptr));
    }
    /**
    * @returns {void}
    */
    requestUpdate() {
        return wasm.renderingscene_requestUpdate(this.ptr);
    }
    /**
    * @returns {WorkerPool}
    */
    cancel() {
        const ptr = this.ptr;
        this.ptr = 0;
        return WorkerPool.__wrap(wasm.renderingscene_cancel(ptr));
    }
}
__exports.RenderingScene = RenderingScene;

__exports.__wbindgen_object_clone_ref = function(idx) {
    // If this object is on the stack promote it to the heap.
    if ((idx & 1) === 1) return addHeapObject(getObject(idx));

    // Otherwise if the object is on the heap just bump the
    // refcount and move on
    const val = slab[idx >> 1];
    val.cnt += 1;
    return idx;
};

__exports.__wbindgen_object_drop_ref = function(i) {
    dropRef(i);
};

__exports.__wbindgen_string_new = function(p, l) {
    return addHeapObject(getStringFromWasm(p, l));
};

__exports.__wbindgen_number_new = function(i) {
    return addHeapObject(i);
};

__exports.__wbindgen_number_get = function(n, invalid) {
    let obj = getObject(n);
    if (typeof(obj) === 'number') return obj;
    getUint8Memory()[invalid] = 1;
    return 0;
};

__exports.__wbindgen_is_null = function(idx) {
    return getObject(idx) === null ? 1 : 0;
};

__exports.__wbindgen_is_undefined = function(idx) {
    return getObject(idx) === undefined ? 1 : 0;
};

__exports.__wbindgen_boolean_get = function(i) {
    let v = getObject(i);
    if (typeof(v) === 'boolean') {
        return v ? 1 : 0;
    } else {
        return 2;
    }
};

__exports.__wbindgen_is_symbol = function(i) {
    return typeof(getObject(i)) === 'symbol' ? 1 : 0;
};

__exports.__wbindgen_string_get = function(i, len_ptr) {
    let obj = getObject(i);
    if (typeof(obj) !== 'string') return 0;
    const ptr = passStringToWasm(obj);
    getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;
    return ptr;
};

__exports.__wbindgen_cb_drop = function(i) {
    const obj = getObject(i).original;
    dropRef(i);
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return 1;
    }
    return 0;
};

__exports.__wbindgen_json_serialize = function(idx, ptrptr) {
    const ptr = passStringToWasm(JSON.stringify(getObject(idx)));
    getUint32Memory()[ptrptr / 4] = ptr;
    return WASM_VECTOR_LEN;
};

__exports.__wbindgen_memory = function() {
    return addHeapObject(memory);
};

__exports.__wbindgen_module = function() {
    return addHeapObject(init.__wbindgen_wasm_module);
};

__exports.__wbindgen_rethrow = function(idx) { throw takeObject(idx); };

__exports.__wbindgen_closure_wrapper136 = function(a, b, fi, di, _ignored) {
    const f = wasm.__wbg_function_table.get(fi);
    const d = wasm.__wbg_function_table.get(di);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_closure_wrapper138 = function(a, b, fi, di, _ignored) {
    const f = wasm.__wbg_function_table.get(fi);
    const d = wasm.__wbg_function_table.get(di);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_closure_wrapper184 = function(a, b, fi, di, _ignored) {
    const f = wasm.__wbg_function_table.get(fi);
    const d = wasm.__wbg_function_table.get(di);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_throw = function(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
};

function init(module_or_path, maybe_memory) {
    let result;
    const imports = { './raytrace_parallel': __exports };
    if (module_or_path instanceof WebAssembly.Module) {
        memory = __exports.memory = maybe_memory;
        result = WebAssembly.instantiate(module_or_path, imports)
        .then(instance => {
        return { instance, module: module_or_path }
    });
} else {
    memory = __exports.memory = new WebAssembly.Memory({initial:17,maximum:16384,shared:true});
    const response = fetch(module_or_path);
    if (typeof WebAssembly.instantiateStreaming === 'function') {
        result = WebAssembly.instantiateStreaming(response, imports);
    } else {
        result = response
        .then(r => r.arrayBuffer())
        .then(bytes => WebAssembly.instantiate(bytes, imports));
    }
}
return result.then(({instance, module}) => {
    wasm = init.wasm = instance.exports;
    init.__wbindgen_wasm_instance = instance;
    init.__wbindgen_wasm_module = module;
    init.__wbindgen_wasm_memory = __exports.memory;
});
};
self.wasm_bindgen = Object.assign(init, __exports);
})();
