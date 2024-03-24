(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/testcase/view.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/testcase/view.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _api_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/results */ "./src/api/results.js");
/* harmony import */ var vue_json_pretty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-json-pretty */ "./node_modules/vue-json-pretty/lib/vue-json-pretty.js");
/* harmony import */ var vue_json_pretty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_json_pretty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_json_pretty_lib_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-json-pretty/lib/styles.css */ "./node_modules/vue-json-pretty/lib/styles.css");
/* harmony import */ var vue_json_pretty_lib_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_json_pretty_lib_styles_css__WEBPACK_IMPORTED_MODULE_4__);


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
  components: {
    VueJsonPretty: vue_json_pretty__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      loading: false,
      result: null,
      error: null,
      listLoading: false,
      fields: [{
        key: 'cre.time',
        sortable: true,
        label: 'Created at',
        tooltip: 'Search greater than day X: "{gt}2022.3.29"'
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
        label: 'Note',
        tooltip: 'search supports regex. E.g. /error/'
      }, {
        key: 'exec.duts.0.model',
        sortable: false,
        label: 'Dut model'
      }, {
        key: 'exec.duts.0.sn',
        sortable: false,
        label: 'Dut SN'
      }],
      items: [],
      currentPage: 0,
      perPage: 10,
      totalItems: 0
    };
  },
  mounted: function mounted() {
    console.log(this.$refs);
    var tableScrollBody = this.$refs['history-table'].$el;
    /* Consider debouncing the event call */

    tableScrollBody.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy: function beforeDestroy() {
    /* Clean up just to be sure */
    var tableScrollBody = this.$refs['history-table'].$el;
    tableScrollBody.removeEventListener('scroll', this.onScroll);
  },
  created: function () {
    var _created = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // watch the params of the route to fetch the data again
              this.$watch(function () {
                return _this.$route.params;
              }, function () {
                _this.fetchData();
              }, // fetch the data when the view is created and the data is
              // already being observed
              {
                immediate: true
              });
              _context.next = 3;
              return this.fetchData();

            case 3:
              _context.next = 5;
              return this.refreshHistoryTotals();

            case 5:
              _context.next = 7;
              return this.fetchHistory();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    fetchData: function () {
      var _fetchData = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var id, _ref, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = this.$route.params.id;

                if (!(this._.get(this.result, '_id') === id)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                this.error = this.result = null;
                this.loading = true;
                _context2.prev = 5;
                _context2.next = 8;
                return Object(_api_results__WEBPACK_IMPORTED_MODULE_2__["searchResult"])(id);

              case 8:
                _ref = _context2.sent;
                data = _ref.data;
                this.result = data;
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](5);
                this.error = "result with id \"".concat(id, "\" not found!");

              case 16:
                this.loading = false;
                this.$root.$emit('bv::refresh::table', 'result-history-table');

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 13]]);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }(),
    refreshHistoryTotals: function () {
      var _refreshHistoryTotals = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _ref2, data;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_api_results__WEBPACK_IMPORTED_MODULE_2__["resultsList"])({
                  tcid: this.result.tcid,
                  t: 'count'
                });

              case 2:
                _ref2 = _context3.sent;
                data = _ref2.data;
                this.totalItems = data;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function refreshHistoryTotals() {
        return _refreshHistoryTotals.apply(this, arguments);
      }

      return refreshHistoryTotals;
    }(),
    fetchHistory: function () {
      var _fetchHistory = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var query, _ref3, data, newItems;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = {
                  tcid: this.result.tcid,
                  l: this.perPage,
                  sk: this.currentPage * this.perPage,
                  s: {
                    'cre.time': -1
                  }
                };
                /* No need to call if all items retrieved */

                if (!(this.items.length === this.totalItems)) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                _context4.next = 5;
                return Object(_api_results__WEBPACK_IMPORTED_MODULE_2__["resultsList"])(query);

              case 5:
                _ref3 = _context4.sent;
                data = _ref3.data;
                newItems = data;
                /* Add new items to existing ones */

                this.items = this._.uniq(this.items.concat(newItems));

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function fetchHistory() {
        return _fetchHistory.apply(this, arguments);
      }

      return fetchHistory;
    }(),
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
    onScroll: function onScroll(event) {
      if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight) {
        if (!this.isBusy) {
          this.fetchHistory();
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/testcase/view.vue?vue&type=template&id=976dc5b0&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/testcase/view.vue?vue&type=template&id=976dc5b0& ***!
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
  return _c("div", { staticClass: "app-container" }, [
    _vm.loading
      ? _c("div", { staticClass: "loading" }, [_vm._v("Loading...")])
      : _vm._e(),
    _vm._v(" "),
    _vm.error
      ? _c("div", { staticClass: "error" }, [_vm._v(_vm._s(_vm.error))])
      : _vm._e(),
    _vm._v(" "),
    _vm.result
      ? _c(
          "div",
          { staticClass: "content" },
          [
            _c("h3", [_vm._v("Testcase ID: " + _vm._s(_vm.result.tcid))]),
            _vm._v(" "),
            _c(
              "b-tabs",
              { attrs: { "content-class": "mt-3" } },
              [
                _c(
                  "b-tab",
                  { attrs: { title: "Details" } },
                  [
                    _c("vue-json-pretty", {
                      attrs: {
                        data: _vm.result,
                        deep: 3,
                        "deep-collapse-children": true,
                        "show-length": true,
                        "show-double-quotes": false
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-tab",
                  { attrs: { title: "Results History", active: "" } },
                  [
                    _c("b-table", {
                      ref: "history-table",
                      staticClass: "mt-3",
                      attrs: {
                        id: "result-history-table",
                        striped: "true",
                        bordered: "true",
                        "head-variant": "light",
                        small: "true",
                        hover: "true",
                        items: _vm.items,
                        fields: _vm.fields,
                        busy: _vm.listLoading,
                        responsive: "sm",
                        "no-local-sorting": "",
                        "primary-key": "_id",
                        selectable: "",
                        "select-mode": "single"
                      },
                      on: {
                        "update:busy": function($event) {
                          _vm.listLoading = $event
                        },
                        "row-clicked": _vm.rowClicked
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "cell(cre.time)",
                            fn: function(ref) {
                              var value = ref.value
                              return [
                                _c("i", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("moment")(
                                        value,
                                        "YYYY.MM.DD hh:mm"
                                      )
                                    )
                                  )
                                ])
                              ]
                            }
                          },
                          {
                            key: "cell(exec.verdict)",
                            fn: function(ref) {
                              var value = ref.value
                              return [
                                _c(
                                  "span",
                                  {
                                    style:
                                      "color: " + _vm.getVerdictColor(value)
                                  },
                                  [
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(value) +
                                        "\n            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "cell(exec.duts.0.sn)",
                            fn: function(data) {
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
                                    attrs: {
                                      placement: "bottom",
                                      title: "View resource: " + data.value
                                    }
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: {
                                            name: "ViewResource",
                                            params: {
                                              sn: _vm._.get(
                                                data,
                                                "item.exec.duts.0.sn"
                                              )
                                            }
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(data.value))]
                                    )
                                  ],
                                  1
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
                                  {
                                    staticClass: "text-center text-danger my-2"
                                  },
                                  [
                                    _c("b-spinner", {
                                      staticClass: "align-middle"
                                    }),
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
                                _c("vue-json-pretty", {
                                  attrs: {
                                    data: row.item,
                                    deep: 3,
                                    "deep-collapse-children": true,
                                    "show-length": true,
                                    "show-double-quotes": false
                                  }
                                })
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        3089833911
                      )
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-json-pretty/lib/styles.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??ref--6-oneOf-3-2!./node_modules/vue-json-pretty/lib/styles.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vjs-tree__brackets{cursor:pointer}.vjs-tree__brackets:hover{color:#1890ff}.vjs-check-controller{position:absolute;left:0}.vjs-check-controller.is-checked .vjs-check-controller__inner{background-color:#1890ff;border-color:#0076e4}.vjs-check-controller.is-checked .vjs-check-controller__inner.is-checkbox:after{-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1)}.vjs-check-controller.is-checked .vjs-check-controller__inner.is-radio:after{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.vjs-check-controller .vjs-check-controller__inner{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:2px;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;width:16px;height:16px;background-color:#fff;z-index:1;cursor:pointer;-webkit-transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);-o-transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46)}.vjs-check-controller .vjs-check-controller__inner:after{-webkit-box-sizing:content-box;box-sizing:content-box;content:\"\";border:2px solid #fff;border-left:0;border-top:0;height:8px;left:4px;position:absolute;top:1px;-webkit-transform:rotate(45deg) scaleY(0);transform:rotate(45deg) scaleY(0);width:4px;-webkit-transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;-o-transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s, -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;-webkit-transform-origin:center;transform-origin:center}.vjs-check-controller .vjs-check-controller__inner.is-radio{border-radius:100%}.vjs-check-controller .vjs-check-controller__inner.is-radio:after{border-radius:100%;height:4px;background-color:#fff;left:50%;top:50%}.vjs-check-controller .vjs-check-controller__original{opacity:0;outline:none;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;margin:0}.vjs-tree__node{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative}.vjs-tree__node.has-selector{padding-left:30px}.vjs-tree__node.is-highlight,.vjs-tree__node:hover{background-color:#e6f7ff}.vjs-tree__node .vjs-tree__indent{-webkit-box-flex:0;-webkit-flex:0 0 1em;-ms-flex:0 0 1em;flex:0 0 1em}.vjs-tree__node .vjs-tree__indent.has-line{border-left:1px dashed #bfcbd9}.vjs-comment{color:#bfcbd9}.vjs-value__null{color:#ff4949}.vjs-value__boolean,.vjs-value__number{color:#1d8ce0}.vjs-value__string{color:#13ce66}.vjs-tree{font-family:Monaco,Menlo,Consolas,Bitstream Vera Sans Mono,monospace;font-size:14px}.vjs-tree.is-virtual{overflow:auto}.vjs-tree.is-virtual .vjs-tree__node{white-space:nowrap}", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-json-pretty/lib/styles.css":
/*!*****************************************************!*\
  !*** ./node_modules/vue-json-pretty/lib/styles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader??ref--6-oneOf-3-1!../../postcss-loader/src??ref--6-oneOf-3-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-json-pretty/lib/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("91fdbc0a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../css-loader??ref--6-oneOf-3-1!../../postcss-loader/src??ref--6-oneOf-3-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-json-pretty/lib/styles.css", function() {
     var newContent = __webpack_require__(/*! !../../css-loader??ref--6-oneOf-3-1!../../postcss-loader/src??ref--6-oneOf-3-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-json-pretty/lib/styles.css");
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
    params: query,
    timeout: query.to + 1000
  });
}

/***/ }),

/***/ "./src/views/testcase/view.vue":
/*!*************************************!*\
  !*** ./src/views/testcase/view.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_976dc5b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=976dc5b0& */ "./src/views/testcase/view.vue?vue&type=template&id=976dc5b0&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./src/views/testcase/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_976dc5b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_976dc5b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('976dc5b0')) {
      api.createRecord('976dc5b0', component.options)
    } else {
      api.reload('976dc5b0', component.options)
    }
    module.hot.accept(/*! ./view.vue?vue&type=template&id=976dc5b0& */ "./src/views/testcase/view.vue?vue&type=template&id=976dc5b0&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _view_vue_vue_type_template_id_976dc5b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=976dc5b0& */ "./src/views/testcase/view.vue?vue&type=template&id=976dc5b0&");
(function () {
      api.rerender('976dc5b0', {
        render: _view_vue_vue_type_template_id_976dc5b0___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _view_vue_vue_type_template_id_976dc5b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/testcase/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/testcase/view.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/views/testcase/view.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/testcase/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/testcase/view.vue?vue&type=template&id=976dc5b0&":
/*!********************************************************************!*\
  !*** ./src/views/testcase/view.vue?vue&type=template&id=976dc5b0& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_976dc5b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=976dc5b0& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/testcase/view.vue?vue&type=template&id=976dc5b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_976dc5b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_976dc5b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=22.js.map