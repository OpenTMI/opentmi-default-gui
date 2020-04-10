(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/pivot.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/result/pivot.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _api_results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/results */ "./src/api/results.js");
/* harmony import */ var vue_pivottable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-pivottable */ "./node_modules/vue-pivottable/src/index.js");
/* harmony import */ var vue_pivottable_dist_vue_pivottable_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-pivottable/dist/vue-pivottable.css */ "./node_modules/vue-pivottable/dist/vue-pivottable.css");
/* harmony import */ var vue_pivottable_dist_vue_pivottable_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_pivottable_dist_vue_pivottable_css__WEBPACK_IMPORTED_MODULE_7__);




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
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ResultPivot',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VuePivottable: vue_pivottable__WEBPACK_IMPORTED_MODULE_6__["VuePivottable"],
    VuePivottableUi: vue_pivottable__WEBPACK_IMPORTED_MODULE_6__["VuePivottableUi"]
  },
  data: function data() {
    var dateFormat = function dateFormat(field, format) {
      return function (record) {
        return vue__WEBPACK_IMPORTED_MODULE_4__["default"].moment(record[field]).format(format);
      };
    };

    return {
      aggregatorName: 'Count',
      pivotData: [],
      rendererName: 'Table Heatmap',
      rows: ['campaign'],
      cols: ['exec.verdict'],
      derivedAttributes: {
        'year': dateFormat('cre.time', 'YYYY'),
        'month': dateFormat('cre.time', 'M'),
        'day': dateFormat('cre.time', 'D'),
        'month name': dateFormat('cre.time', 'MMM'),
        'day name': dateFormat('cre.time', 'ddd'),
        'Week number': dateFormat('cre.time', 'W')
      },
      hiddenAttributes: ['exec.logs']
    };
  },
  created: function created() {
    this.refreshData();
  },
  methods: {
    bin: function bin(value, binWidth) {
      return value - value % binWidth;
    },
    refreshData: function refreshData() {
      var _this = this;

      var query = {
        fl: true,
        s: {
          'cre.time': -1
        }
      };
      Object(_api_results__WEBPACK_IMPORTED_MODULE_5__["resultsList"])(query).then(function (_ref) {
        var data = _ref.data;

        var results = _this._.map(data, function (r) {
          // not need these keys
          delete r['__v'];
          delete r['_id._bsontype'];
          delete r['_id.id']; // round duration by 10s

          r.duration = _this.bin(parseFloat(r['exec.duration']), 10);
          delete r['exec.duration'];
          var components = [];
          var features = [];

          for (var _i = 0, _Object$keys = Object.keys(r); _i < _Object$keys.length; _i++) {
            var k = _Object$keys[_i];

            if (k.match(/\.\d/)) {
              if (k.match(/\.fut\.\d/)) {
                features.push(r[k].toLowerCase());
              }

              if (k.match(/\.cut\.\d/)) {
                components.push(r[k].toLowerCase());
              }

              delete r[k];
            }
          }

          delete r['exec.sut.tag'];
          delete r['exec.sut.cut'];
          delete r['exec.sut.fut'];
          r.component = components.sort().join(',');
          r.feature = features.sort().join(',');
          r.passrate = r['exec.verdict'] === 'pass' ? 100.0 : 0;
          r.inconcRate = r['exec.verdict'] === 'inconclusive' ? 100.0 : 0;
          return r;
        });

        _this.pivotData = results;
      });
    },
    toggle: function toggle(todo) {
      todo.done = !todo.done;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/pivot.vue?vue&type=template&id=eaed562c&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/result/pivot.vue?vue&type=template&id=eaed562c& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("Results Pivottable")]),
      _vm._v(" "),
      _c("vue-pivottable-ui", {
        attrs: {
          data: _vm.pivotData,
          cols: _vm.cols,
          rows: _vm.rows,
          "hidden-attributes": _vm.hiddenAttributes,
          "aggregator-name": _vm.aggregatorName,
          "renderer-name": _vm.rendererName,
          "derived-attributes": _vm.derivedAttributes
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/api/results.js":
/*!****************************!*\
  !*** ./src/api/results.js ***!
  \****************************/
/*! exports provided: searchResult, getSchema, resultsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchResult", function() { return searchResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchema", function() { return getSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultsList", function() { return resultsList; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");



function searchResult(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: "/api/v0/results/".concat(id),
    method: 'get'
  });
}
function getSchema(_) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: "/api/v0/schemas/Result.json",
    method: 'get'
  }).then(function (_ref) {
    var data = _ref.data;
    var schema = data.schema;

    var fill = function fill(key, _ref2) {
      var title = _ref2.title,
          _ref2$def = _ref2.def,
          def = _ref2$def === void 0 ? '' : _ref2$def;
      key = key.split('.').join('.properties.');

      _.set(schema, "properties.".concat(key, ".title"), title);

      _.set(schema, "properties.".concat(key, ".default"), def);
    };

    var drop = function drop(key) {
      key = key.split('.').join('.properties.');

      _.unset(schema, "properties.".concat(key));
    };

    var dropKeys = function dropKeys(keys) {
      keys.forEach(drop);
    };

    fill('tcid', {
      title: 'Testcase ID'
    });
    fill('campaign', {
      title: 'Campaign'
    });
    fill('job.id', {
      title: 'Job ID'
    });
    fill('exec.duration', {
      title: 'Duration'
    });
    fill('exec.verdict', {
      title: 'Verdict'
    });
    fill('exec.env.framework.name', {
      title: 'Framework name'
    });
    fill('exec.env.framework.ver', {
      title: 'Framework Version'
    });
    fill('exec.env.rackId', {
      title: 'Rack ID'
    });
    fill('exec.note', {
      title: 'Note'
    });
    fill('exec.sut.gitUrl', {
      title: 'git uri'
    });
    fill('exec.sut.buildName', {
      title: 'build name'
    });
    fill('exec.sut.buildDate', {
      title: 'build date'
    });
    fill('exec.sut.branch', {
      title: 'branch'
    });
    dropKeys(['exec.env.ref', 'exec.sut.ref', 'tcRef', '_id', 'campaignRef', 'cre', 'exec.dut']);
    return schema;
  });
}
function resultsList(query) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: '/api/v0/results',
    method: 'get',
    params: query
  });
}

/***/ }),

/***/ "./src/views/result/pivot.vue":
/*!************************************!*\
  !*** ./src/views/result/pivot.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pivot_vue_vue_type_template_id_eaed562c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pivot.vue?vue&type=template&id=eaed562c& */ "./src/views/result/pivot.vue?vue&type=template&id=eaed562c&");
/* harmony import */ var _pivot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pivot.vue?vue&type=script&lang=js& */ "./src/views/result/pivot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pivot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pivot_vue_vue_type_template_id_eaed562c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pivot_vue_vue_type_template_id_eaed562c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('eaed562c')) {
      api.createRecord('eaed562c', component.options)
    } else {
      api.reload('eaed562c', component.options)
    }
    module.hot.accept(/*! ./pivot.vue?vue&type=template&id=eaed562c& */ "./src/views/result/pivot.vue?vue&type=template&id=eaed562c&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _pivot_vue_vue_type_template_id_eaed562c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pivot.vue?vue&type=template&id=eaed562c& */ "./src/views/result/pivot.vue?vue&type=template&id=eaed562c&");
(function () {
      api.rerender('eaed562c', {
        render: _pivot_vue_vue_type_template_id_eaed562c___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _pivot_vue_vue_type_template_id_eaed562c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/result/pivot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/result/pivot.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/views/result/pivot.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pivot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pivot.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/pivot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pivot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/result/pivot.vue?vue&type=template&id=eaed562c&":
/*!*******************************************************************!*\
  !*** ./src/views/result/pivot.vue?vue&type=template&id=eaed562c& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pivot_vue_vue_type_template_id_eaed562c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pivot.vue?vue&type=template&id=eaed562c& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/pivot.vue?vue&type=template&id=eaed562c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pivot_vue_vue_type_template_id_eaed562c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pivot_vue_vue_type_template_id_eaed562c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=21.js.map