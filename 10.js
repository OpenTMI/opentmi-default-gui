(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/list.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/result/list.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_results__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/results */ "./src/api/results.js");








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
  name: 'ResultList',
  filters: {
    pretty: function pretty(value) {
      return JSON.stringify(value, null, 2);
    }
  },
  data: function data() {
    var _this = this;

    return {
      selectedColumns: [],
      fields: [],
      columns: [{
        key: 'cre.time',
        sortable: true,
        label: 'Created at'
      }, {
        key: 'tcid',
        sortable: true,
        label: 'Testcase ID'
      }, {
        key: 'campaign',
        sortable: true,
        label: 'Campaign'
      }, {
        key: 'exec.verdict',
        sortable: true,
        label: 'Verdict'
      }, {
        key: 'exec.note',
        sortable: false,
        label: 'Note'
      }, {
        key: 'exec.duts.vendor',
        sortable: false,
        label: 'Dut0 Vendor',
        formatter: function formatter(value, key, item) {
          return _this._.get(item, 'exec.duts.0.vendor', '');
        }
      }, {
        key: 'exec.duts.model',
        sortable: false,
        label: 'Dut0 Model',
        formatter: function formatter(value, key, item) {
          return _this._.get(item, 'exec.duts.0.model', '');
        }
      }, {
        key: 'exec.sut.branch',
        sortable: false,
        label: 'Sut Branch',
        formatter: function formatter(value, key, item) {
          return _this._.get(item, 'exec.sut.branch', '');
        }
      }, {
        key: 'exec.sut.branch',
        sortable: false,
        label: 'Sut commitId',
        formatter: function formatter(value, key, item) {
          return _this._.get(item, 'exec.sut.commitId', '').substr(0, 7);
        }
      }],
      reload: this._.debounce(this._reload, 2000),
      total: 0,
      sortBy: 'cre.time',
      sortDesc: true,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 20
      }
    };
  },
  watch: {
    listQuery: {
      handler: function handler() {
        this.reload();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.selectedColumns = ['cre.time', 'tcid', 'campaign', 'exec.verdict', 'exec.duts', 'exec.sut', 'exec.note', 'exec.duts.model'];
    this.columnChange();
  },
  methods: {
    lengthLimiter: function lengthLimiter(value) {
      var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var out = value.substr(0, maxLength);

      if (value.length > maxLength) {
        out += '...';
      }

      return out;
    },
    columnChange: function columnChange() {
      var _this2 = this;

      this.fields = this.selectedColumns.map(function (key) {
        return _this2.columns.find(function (obj) {
          return obj.key === key;
        });
      });
    },
    rowClicked: function rowClicked(row) {
      this.$set(row, '_showDetails', !row._showDetails);
    },
    getVerdictColor: function getVerdictColor(value) {
      var colors = {
        pass: '#2E7D32',
        inconclusive: '#a15c00',
        fail: '#C62828',
        skip: '#455A64',
        blocked: '#000c44',
        error: '#C62828'
      };
      var color = colors[value];
      return color || '#000000';
    },
    updateList: function updateList(page) {
      this.listQuery.page = page;
      this.reload();
    },
    _reload: function _reload() {
      this.$root.$emit('bv::refresh::table', 'my-table');
    },
    _getList: function _getList() {
      var _this3 = this;

      var query = this._.omitBy(this.listQuery, this._.isNil);

      query.l = query.limit;
      query.sk = (query.page - 1) * query.limit;

      this._.unset(query, 'limit');

      this._.unset(query, 'page');

      if (this.sortBy) {
        query.s = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, this.sortBy, this.sortDesc ? -1 : 1);
      } else {
        query.s = '{"cre.time": -1}';
      }

      Object.keys(query).map(function (key) {
        if (_this3._.includes(['cre.time', 'exec.verdict', 't', 'l', 'sk', 's'], key)) {
          return;
        }

        var value = query[key];

        if (value.startsWith('*')) {
          value = value.slice(1);

          if (value.endsWith('*')) {
            query[key] = "/".concat(value.slice(0, -1), "/");
          } else {
            query[key] = "{ei}".concat(value);
          }
        } else if (value.endsWith('*')) {
          value = value.slice(0, -1);
          query[key] = "{bi}".concat(value);
        }
      });

      var countQuery = this._.merge({
        t: 'count'
      }, this._.omit(query, ['s', 'l', 'sk']));

      return Object(_api_results__WEBPACK_IMPORTED_MODULE_8__["resultsList"])(countQuery).then(function (_ref) {
        var data = _ref.data;
        _this3.total = data.count;
        return Object(_api_results__WEBPACK_IMPORTED_MODULE_8__["resultsList"])(query);
      }).then(function (_ref2) {
        var data = _ref2.data;
        return data;
      }).catch(function (error) {
        console.error(error);
        _this3.total = 0; // Returning an empty array, allows table to correctly handle
        // internal busy state in case of error

        return [];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/list.vue?vue&type=template&id=1debfb26&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/result/list.vue?vue&type=template&id=1debfb26& ***!
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
      _c(
        "el-select",
        {
          staticStyle: { width: "100%" },
          attrs: { multiple: "", type: "small", placeholder: "Select columns" },
          on: { change: _vm.columnChange },
          model: {
            value: _vm.selectedColumns,
            callback: function($$v) {
              _vm.selectedColumns = $$v
            },
            expression: "selectedColumns"
          }
        },
        _vm._l(_vm.columns, function(item) {
          return _c("el-option", {
            key: item.key,
            attrs: { label: item.label, value: item.key }
          })
        }),
        1
      ),
      _vm._v(" "),
      _c("b-table", {
        staticClass: "mt-3",
        attrs: {
          id: "my-table",
          striped: "true",
          bordered: "true",
          "head-variant": "light",
          small: "true",
          hover: "",
          items: _vm._getList,
          fields: _vm.fields,
          busy: _vm.listLoading,
          responsive: "sm",
          "no-local-sorting": "",
          "primary-key": "_id",
          "sort-by": _vm.sortBy,
          "sort-desc": _vm.sortDesc,
          selectable: "",
          "select-mode": "single"
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
          },
          "row-clicked": _vm.rowClicked
        },
        scopedSlots: _vm._u([
          {
            key: "top-row",
            fn: function(ref) {
              var fields = ref.fields
              return _vm._l(fields, function(field) {
                return _c("td", { key: field.key }, [
                  field.key == "exec.verdict"
                    ? _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.listQuery[field.key],
                              expression: "listQuery[field.key]"
                            }
                          ],
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.listQuery,
                                field.key,
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option"),
                          _vm._v(" "),
                          _c("option", [_vm._v("pass")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("fail")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("inconclusive")])
                        ]
                      )
                    : field.key == "exec.duts"
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.listQuery["exec.duts.model"],
                            expression: "listQuery['exec.duts.model']"
                          }
                        ],
                        attrs: { placeholder: "Dut Model" },
                        domProps: { value: _vm.listQuery["exec.duts.model"] },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.listQuery,
                              "exec.duts.model",
                              $event.target.value
                            )
                          }
                        }
                      })
                    : field.key == "exec.sut"
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.listQuery["exec.sut.branch"],
                            expression: "listQuery['exec.sut.branch']"
                          }
                        ],
                        attrs: { placeholder: "Branch" },
                        domProps: { value: _vm.listQuery["exec.sut.branch"] },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.listQuery,
                              "exec.sut.branch",
                              $event.target.value
                            )
                          }
                        }
                      })
                    : _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.listQuery[field.key],
                            expression: "listQuery[field.key]"
                          }
                        ],
                        attrs: { placeholder: field.label },
                        domProps: { value: _vm.listQuery[field.key] },
                        on: {
                          keyup: function($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            return _vm._reload($event)
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.listQuery,
                              field.key,
                              $event.target.value
                            )
                          }
                        }
                      })
                ])
              })
            }
          },
          {
            key: "cell(tcid)",
            fn: function(ref) {
              var value = ref.value
              return [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover",
                        modifiers: { hover: true }
                      }
                    ],
                    attrs: { placement: "bottom", title: value }
                  },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.lengthLimiter(value, 30)) +
                        "\n      "
                    )
                  ]
                )
              ]
            }
          },
          {
            key: "cell(cre.time)",
            fn: function(ref) {
              var value = ref.value
              return [
                _c("i", [
                  _vm._v(_vm._s(_vm._f("moment")(value, "MM/DD/YYYY hh:mm")))
                ])
              ]
            }
          },
          {
            key: "cell(exec.verdict)",
            fn: function(ref) {
              var value = ref.value
              return [
                _c("span", { style: "color: " + _vm.getVerdictColor(value) }, [
                  _vm._v("\n        " + _vm._s(value) + "\n      ")
                ])
              ]
            }
          },
          {
            key: "cell(exec.note)",
            fn: function(ref) {
              var value = ref.value
              return [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover",
                        modifiers: { hover: true }
                      }
                    ],
                    attrs: { placement: "bottom", title: value }
                  },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.lengthLimiter(value)) +
                        "\n      "
                    )
                  ]
                )
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
            key: "row-details",
            fn: function(row) {
              return [
                _c(
                  "el-collapse",
                  {
                    staticStyle: {
                      "margin-left": "50px",
                      "margin-right": "50px"
                    }
                  },
                  [
                    _c(
                      "el-collapse-item",
                      { attrs: { title: "View Raw data", accordion: "true" } },
                      [_c("pre", [_vm._v(_vm._s(_vm._f("pretty")(row.item)))])]
                    )
                  ],
                  1
                )
              ]
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
          align: "center",
          "first-number": "",
          "last-number": ""
        },
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

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/list.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/result/list.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tooltip .tooltip-inner{\n  max-width: 500px !important;\n  width: 400px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/list.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/result/list.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/list.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6866e86b", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/list.vue?vue&type=style&index=0&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/list.vue?vue&type=style&index=0&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

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

/***/ "./src/views/result/list.vue":
/*!***********************************!*\
  !*** ./src/views/result/list.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_1debfb26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=1debfb26& */ "./src/views/result/list.vue?vue&type=template&id=1debfb26&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./src/views/result/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&lang=css& */ "./src/views/result/list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_1debfb26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_1debfb26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('1debfb26')) {
      api.createRecord('1debfb26', component.options)
    } else {
      api.reload('1debfb26', component.options)
    }
    module.hot.accept(/*! ./list.vue?vue&type=template&id=1debfb26& */ "./src/views/result/list.vue?vue&type=template&id=1debfb26&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _list_vue_vue_type_template_id_1debfb26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=1debfb26& */ "./src/views/result/list.vue?vue&type=template&id=1debfb26&");
(function () {
      api.rerender('1debfb26', {
        render: _list_vue_vue_type_template_id_1debfb26___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _list_vue_vue_type_template_id_1debfb26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/result/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/result/list.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/views/result/list.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/result/list.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************!*\
  !*** ./src/views/result/list.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/views/result/list.vue?vue&type=template&id=1debfb26&":
/*!******************************************************************!*\
  !*** ./src/views/result/list.vue?vue&type=template&id=1debfb26& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_1debfb26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=1debfb26& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/list.vue?vue&type=template&id=1debfb26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_1debfb26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_1debfb26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=10.js.map