(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/testcase/list.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/testcase/list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _api_testcases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/testcases */ "./src/api/testcases.js");

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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TestcaseList',
  filters: {
    pretty: function pretty(value) {
      return JSON.stringify(value, null, 2);
    }
  },
  data: function data() {
    return {
      fields: [{
        key: 'cre.time',
        sortable: true,
        label: 'Created at'
      }, {
        key: 'tcid',
        sortable: true
      }, {
        key: 'other_info.type',
        sortable: true,
        label: 'Test Type'
      }, {
        key: 'status.value',
        sortable: true,
        label: 'Status'
      }, {
        key: 'show_details'
      }],
      total: 0,
      sortBy: 'tcid',
      sortDesc: false,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10
      }
    };
  },
  methods: {
    updateList: function updateList(page) {
      this.listQuery.page = page;
      this.$root.$emit('bv::refresh::table', 'my-table');
    },
    getList: function getList() {
      var _this = this;

      var query = this._.clone(this.listQuery);

      query.l = query.limit;
      query.sk = (query.page - 1) * query.limit;

      if (this.sortBy) {
        query.s = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.sortBy, this.sortDesc ? -1 : 1);
      } else {
        query.s = '{"cre.time": -1}';
      }

      this._.unset(query, 'limit');

      this._.unset(query, 'page');

      var countQuery = this._.merge({
        t: 'count'
      }, this._.omit(query, ['s', 'l', 'sk']));

      return Object(_api_testcases__WEBPACK_IMPORTED_MODULE_1__["testList"])(countQuery).then(function (_ref) {
        var data = _ref.data;
        _this.total = data.count;
        return Object(_api_testcases__WEBPACK_IMPORTED_MODULE_1__["testList"])(query);
      }).then(function (_ref2) {
        var data = _ref2.data;
        return data;
      }).catch(function (error) {
        console.error(error);
        _this.total = 0; // Returning an empty array, allows table to correctly handle
        // internal busy state in case of error

        return [];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/testcase/list.vue?vue&type=template&id=859222be&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/testcase/list.vue?vue&type=template&id=859222be& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("b-table", {
        staticClass: "mt-3",
        attrs: {
          id: "my-table",
          striped: "",
          hover: "",
          items: _vm.getList,
          fields: _vm.fields,
          busy: _vm.listLoading,
          responsive: "sm",
          "no-local-sorting": "",
          "primary-key": "_id",
          "sort-changed": _vm.listLoading,
          "sort-by": _vm.sortBy,
          "sort-desc": _vm.sortDesc
        },
        on: {
          "update:busy": function($event) {
            _vm.listLoading = $event
          },
          "update:sortBy": function($event) {
            _vm.sortBy = $event
          },
          "update:sort-by": function($event) {
            _vm.sortBy = $event
          },
          "update:sortDesc": function($event) {
            _vm.sortDesc = $event
          },
          "update:sort-desc": function($event) {
            _vm.sortDesc = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "cell(cre.time)",
            fn: function(data) {
              return [
                _c("i", [
                  _vm._v(
                    _vm._s(_vm._f("moment")(data.value, "MM/DD/YYYY hh:mm"))
                  )
                ])
              ]
            }
          },
          {
            key: "table-busy",
            fn: function() {
              return [
                _c(
                  "div",
                  { staticClass: "text-center text-danger my-2" },
                  [
                    _c("b-spinner", { staticClass: "align-middle" }),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Loading...")])
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "cell(show_details)",
            fn: function(row) {
              return [
                _c(
                  "b-button",
                  {
                    staticClass: "mr-2",
                    attrs: { size: "sm" },
                    on: { click: row.toggleDetails }
                  },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(row.detailsShowing ? "Hide" : "Show") +
                        " Details\n      "
                    )
                  ]
                )
              ]
            }
          },
          {
            key: "row-details",
            fn: function(row) {
              return [_c("pre", [_vm._v(_vm._s(_vm._f("pretty")(row.item)))])]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("b-pagination", {
        attrs: {
          "total-rows": _vm.total,
          "per-page": _vm.listQuery.limit,
          "aria-controls": "my-table",
          "first-number": "",
          "last-number": ""
        },
        on: { change: _vm.updateList },
        model: {
          value: _vm.listQuery.page,
          callback: function($$v) {
            _vm.$set(_vm.listQuery, "page", $$v)
          },
          expression: "listQuery.page"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/api/testcases.js":
/*!******************************!*\
  !*** ./src/api/testcases.js ***!
  \******************************/
/*! exports provided: searchTests, testList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTests", function() { return searchTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testList", function() { return testList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");

function searchTests(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/api/v0/testcases/".concat(id),
    method: 'get'
  });
}
function testList(query) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/v0/testcases',
    method: 'get',
    params: query
  });
}

/***/ }),

/***/ "./src/views/testcase/list.vue":
/*!*************************************!*\
  !*** ./src/views/testcase/list.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_859222be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=859222be& */ "./src/views/testcase/list.vue?vue&type=template&id=859222be&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./src/views/testcase/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_859222be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_859222be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('859222be')) {
      api.createRecord('859222be', component.options)
    } else {
      api.reload('859222be', component.options)
    }
    module.hot.accept(/*! ./list.vue?vue&type=template&id=859222be& */ "./src/views/testcase/list.vue?vue&type=template&id=859222be&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _list_vue_vue_type_template_id_859222be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=859222be& */ "./src/views/testcase/list.vue?vue&type=template&id=859222be&");
(function () {
      api.rerender('859222be', {
        render: _list_vue_vue_type_template_id_859222be___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _list_vue_vue_type_template_id_859222be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/testcase/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/testcase/list.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/views/testcase/list.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/testcase/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/testcase/list.vue?vue&type=template&id=859222be&":
/*!********************************************************************!*\
  !*** ./src/views/testcase/list.vue?vue&type=template&id=859222be& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_859222be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=859222be& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/testcase/list.vue?vue&type=template&id=859222be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_859222be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_859222be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=20.js.map