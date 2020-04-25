(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/guide/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/guide/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var driver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! driver.js */ "./node_modules/driver.js/dist/driver.min.js");
/* harmony import */ var driver_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(driver_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var driver_js_dist_driver_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! driver.js/dist/driver.min.css */ "./node_modules/driver.js/dist/driver.min.css");
/* harmony import */ var driver_js_dist_driver_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(driver_js_dist_driver_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./steps */ "./src/views/guide/steps.js");
//
//
//
//
//
//
//
//
//
//
//
 // import driver.js

 // import driver.js css


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Guide',
  data: function data() {
    return {
      driver: null
    };
  },
  mounted: function mounted() {
    this.driver = new driver_js__WEBPACK_IMPORTED_MODULE_0___default.a({
      // there seems to be problem with driver to focus with dark theme when animate is on
      animate: false
    });
  },
  methods: {
    guide: function guide() {
      this.driver.defineSteps(_steps__WEBPACK_IMPORTED_MODULE_2__["default"]);
      this.driver.start();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/guide/index.vue?vue&type=template&id=2f057756&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/guide/index.vue?vue&type=template&id=2f057756& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-container" },
    [
      _c("aside", [_vm._v("\n    Press button below to start guide.. :)\n  ")]),
      _vm._v(" "),
      _c(
        "el-button",
        {
          attrs: { icon: "el-icon-question", type: "primary" },
          on: {
            click: function($event) {
              $event.preventDefault()
              $event.stopPropagation()
              return _vm.guide($event)
            }
          }
        },
        [_vm._v("\n    Show Guide\n  ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/views/guide/index.vue":
/*!***********************************!*\
  !*** ./src/views/guide/index.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2f057756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2f057756& */ "./src/views/guide/index.vue?vue&type=template&id=2f057756&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/guide/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2f057756___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2f057756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2f057756')) {
      api.createRecord('2f057756', component.options)
    } else {
      api.reload('2f057756', component.options)
    }
    module.hot.accept(/*! ./index.vue?vue&type=template&id=2f057756& */ "./src/views/guide/index.vue?vue&type=template&id=2f057756&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _index_vue_vue_type_template_id_2f057756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2f057756& */ "./src/views/guide/index.vue?vue&type=template&id=2f057756&");
(function () {
      api.rerender('2f057756', {
        render: _index_vue_vue_type_template_id_2f057756___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _index_vue_vue_type_template_id_2f057756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/guide/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/guide/index.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/views/guide/index.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/guide/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/guide/index.vue?vue&type=template&id=2f057756&":
/*!******************************************************************!*\
  !*** ./src/views/guide/index.vue?vue&type=template&id=2f057756& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f057756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2f057756& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/guide/index.vue?vue&type=template&id=2f057756&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f057756___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f057756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/guide/steps.js":
/*!**********************************!*\
  !*** ./src/views/guide/steps.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var steps = [{
  element: '#hamburger-container',
  popover: {
    title: 'Sidebar',
    description: 'Open and Close sidebar',
    position: 'bottom'
  }
}, {
  element: '#results-menu',
  stageBackground: '#304156',
  popover: {
    title: 'Results',
    description: 'Browse and analyse results.<br>Options to browse results are old-fashion table view, tree view and pivottable.',
    position: 'right'
  },
  padding: 0
}, {
  element: '#testcases-menu',
  stageBackground: '#304156',
  popover: {
    title: 'Testcases',
    description: 'Browse test cases',
    position: 'right'
  },
  padding: 0
}, {
  element: '#resources-menu',
  stageBackground: '#304156',
  popover: {
    title: 'Resources',
    description: 'Browse Resources.<br>Tree view is also available.',
    position: 'right'
  },
  padding: 0
}, {
  element: '#log-menu',
  stageBackground: '#304156',
  popover: {
    title: 'Logs',
    description: 'Monitor server side logs',
    position: 'right'
  },
  padding: 0
}, {
  element: '#breadcrumb-container',
  popover: {
    title: 'Location',
    description: 'Indicate the current page location',
    position: 'bottom'
  }
}, {
  element: '#header-search',
  popover: {
    title: 'Page Search',
    description: 'Page search, quick navigation',
    position: 'left'
  }
}, {
  element: '#screenfull',
  popover: {
    title: 'Screenfull',
    description: 'Set the page into fullscreen',
    position: 'left'
  }
}, {
  element: '#size-select',
  popover: {
    title: 'Switch Size',
    description: 'Switch the system size',
    position: 'left'
  }
}, {
  element: '#tabs-view-container',
  popover: {
    title: 'Tabs view',
    description: 'The history of the page you visited',
    position: 'bottom'
  },
  padding: 0
}];
/* harmony default export */ __webpack_exports__["default"] = (steps);

/***/ })

}]);
//# sourceMappingURL=20.js.map