// synchronously, using the browser, import out shim JS scripts
importScripts('pkg/raytrace_parallel.js');

// Wait for the main thread to send us the shared module/memory. Once we've got
// it, initialize it all with the `wasm_bindgen` global we imported via
// `importScripts`.
//
// After our first message all subsequent messages are an entry point to run,
// so we just do that.
self.onmessage = initEvent => {
  let initialised;

  self.onmessage = async event => {
    initialised = initialised || (wasm_bindgen(...initEvent.data));
    // This will queue further commands up until the module is fully initialised:
    await initialised;
    wasm_bindgen.child_entry_point(event.data);
    close();
  };
};
