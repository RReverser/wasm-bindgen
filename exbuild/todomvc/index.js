/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./todomvc_bg.wasm": function() {
/******/ 			return {
/******/ 				"./todomvc": {
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_forget": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbindgen_cb_forget"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__widl_f_get_DOMStringMap": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_get_DOMStringMap"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_set_DOMStringMap": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_set_DOMStringMap"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32);
/******/ 					},
/******/ 					"__widl_f_add_1_DOMTokenList": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_add_1_DOMTokenList"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_remove_1_DOMTokenList": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_remove_1_DOMTokenList"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_create_element_Document": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_create_element_Document"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_query_selector_all_Document": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_query_selector_all_Document"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_location_Document": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_location_Document"](p0i32);
/******/ 					},
/******/ 					"__widl_f_body_Document": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_body_Document"](p0i32);
/******/ 					},
/******/ 					"__widl_instanceof_Element": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_instanceof_Element"](p0i32);
/******/ 					},
/******/ 					"__widl_f_query_selector_Element": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_query_selector_Element"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_set_class_name_Element": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_set_class_name_Element"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_class_list_Element": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_class_list_Element"](p0i32);
/******/ 					},
/******/ 					"__widl_f_set_inner_html_Element": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_set_inner_html_Element"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_target_Event": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_target_Event"](p0i32);
/******/ 					},
/******/ 					"__widl_instanceof_EventTarget": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_instanceof_EventTarget"](p0i32);
/******/ 					},
/******/ 					"__widl_f_add_event_listener_with_callback_EventTarget": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_add_event_listener_with_callback_EventTarget"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__widl_f_add_event_listener_with_callback_and_bool_EventTarget": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_add_event_listener_with_callback_and_bool_EventTarget"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32);
/******/ 					},
/******/ 					"__widl_f_remove_event_listener_with_callback_EventTarget": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_remove_event_listener_with_callback_EventTarget"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__widl_instanceof_HTMLElement": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_instanceof_HTMLElement"](p0i32);
/******/ 					},
/******/ 					"__widl_f_blur_HTMLElement": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_blur_HTMLElement"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_focus_HTMLElement": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_focus_HTMLElement"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_dataset_HTMLElement": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_dataset_HTMLElement"](p0i32);
/******/ 					},
/******/ 					"__widl_f_inner_text_HTMLElement": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_inner_text_HTMLElement"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_set_hidden_HTMLElement": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_set_hidden_HTMLElement"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_instanceof_HTMLInputElement": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_instanceof_HTMLInputElement"](p0i32);
/******/ 					},
/******/ 					"__widl_f_checked_HTMLInputElement": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_checked_HTMLInputElement"](p0i32);
/******/ 					},
/******/ 					"__widl_f_set_checked_HTMLInputElement": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_set_checked_HTMLInputElement"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_value_HTMLInputElement": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_value_HTMLInputElement"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_set_value_HTMLInputElement": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_set_value_HTMLInputElement"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_instanceof_KeyboardEvent": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_instanceof_KeyboardEvent"](p0i32);
/******/ 					},
/******/ 					"__widl_f_key_code_KeyboardEvent": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_key_code_KeyboardEvent"](p0i32);
/******/ 					},
/******/ 					"__widl_f_hash_Location": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_hash_Location"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_instanceof_Node": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_instanceof_Node"](p0i32);
/******/ 					},
/******/ 					"__widl_f_append_child_Node": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_append_child_Node"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_is_equal_node_Node": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_is_equal_node_Node"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_remove_child_Node": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_remove_child_Node"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_parent_node_Node": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_parent_node_Node"](p0i32);
/******/ 					},
/******/ 					"__widl_f_parent_element_Node": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_parent_element_Node"](p0i32);
/******/ 					},
/******/ 					"__widl_f_set_text_content_Node": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_set_text_content_Node"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_get_NodeList": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_get_NodeList"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_length_NodeList": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_length_NodeList"](p0i32);
/******/ 					},
/******/ 					"__widl_f_get_item_Storage": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_get_item_Storage"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__widl_f_set_item_Storage": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_set_item_Storage"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32);
/******/ 					},
/******/ 					"__widl_instanceof_Window": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_instanceof_Window"](p0i32);
/******/ 					},
/******/ 					"__widl_f_document_Window": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_document_Window"](p0i32);
/******/ 					},
/******/ 					"__widl_f_local_storage_Window": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_local_storage_Window"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_exception_1_": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__widl_f_exception_1_"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Array_43ce3be9bdfdbd27": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_instanceof_Array_43ce3be9bdfdbd27"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_55d176391eb5bbb4": function() {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_new_55d176391eb5bbb4"]();
/******/ 					},
/******/ 					"__wbg_push_a3d2caf057c8ab57": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_push_a3d2caf057c8ab57"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_shift_5a99549aee4959f1": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_shift_5a99549aee4959f1"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_96cbdf0d056b2fa8": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_newnoargs_96cbdf0d056b2fa8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_ee8306f6b79399de": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_call_ee8306f6b79399de"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_next_ec5b8a62604cec10": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_next_ec5b8a62604cec10"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_done_d5ee5b152ea8b24e": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_done_d5ee5b152ea8b24e"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_41a5cb4557080d33": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_value_41a5cb4557080d33"](p0i32);
/******/ 					},
/******/ 					"__wbg_now_962dce7db2e8e13c": function() {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_now_962dce7db2e8e13c"]();
/******/ 					},
/******/ 					"__wbg_get_2e4828201151a11f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_get_2e4828201151a11f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_parse_9e6831225e8d1d22": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_parse_9e6831225e8d1d22"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_stringify_57821d09ce56a15d": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_stringify_57821d09ce56a15d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_toString_a31d68b5e68b14cd": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_toString_a31d68b5e68b14cd"](p0i32);
/******/ 					},
/******/ 					"__wbg_iterator_6afa72416dfe121f": function() {
/******/ 						return installedModules["./todomvc.js"].exports["__wbg_iterator_6afa72416dfe121f"]();
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper938": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbindgen_closure_wrapper938"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper940": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./todomvc.js"].exports["__wbindgen_closure_wrapper940"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./todomvc_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./todomvc_bg.wasm":"c2c2a715a47e16e02166"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./todomvc */ \"./todomvc.js\")).then(todomvc => {\n  todomvc.run();\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });