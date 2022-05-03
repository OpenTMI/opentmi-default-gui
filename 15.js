(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/view.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/view.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var _api_resources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/resources */ "./src/api/resources.js");


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
        label: 'Created at'
      }, {
        key: 'tcid',
        sortable: true,
        label: 'Testcase'
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
      }]
    };
  },
  created: function created() {
    var _this = this;

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
  },
  methods: {
    fetchData: function () {
      var _fetchData = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id, query, _ref, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.error = this.resource = null;
                this.loading = true;
                id = this.$route.params.id;
                _context.prev = 3;
                query = {
                  q: {
                    $or: [{
                      _id: id
                    }, {
                      'hw.sn': id
                    }]
                  },
                  l: 2
                };
                _context.next = 7;
                return Object(_api_resources__WEBPACK_IMPORTED_MODULE_5__["resourceList"])(query);

              case 7:
                _ref = _context.sent;
                data = _ref.data;

                if (!(data.length !== 1)) {
                  _context.next = 11;
                  break;
                }

                throw new Error('not found');

              case 11:
                this.resource = data[0];
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](3);
                this.error = "result with id \"".concat(id, "\" not found!");

              case 17:
                this.loading = false;
                this.$root.$emit('bv::refresh::table', 'result-history-table');

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 14]]);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }(),
    getList: function () {
      var _getList = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var query, _ref2, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = {
                  q: {
                    'exec.duts.0.sn': this.resource.hw.sn
                  },
                  l: 100,
                  s: {
                    'cre.time': -1
                  }
                };
                _context2.next = 3;
                return Object(_api_results__WEBPACK_IMPORTED_MODULE_2__["resultsList"])(query);

              case 3:
                _ref2 = _context2.sent;
                data = _ref2.data;
                return _context2.abrupt("return", data);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getList() {
        return _getList.apply(this, arguments);
      }

      return getList;
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
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/view.vue?vue&type=template&id=b9509548&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/view.vue?vue&type=template&id=b9509548& ***!
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
    _vm.resource
      ? _c(
          "div",
          { staticClass: "content" },
          [
            _c("h3", [_vm._v("Resource: " + _vm._s(_vm.resource.name))]),
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
                        data: _vm.resource,
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
                  { attrs: { title: "Test History", active: "" } },
                  [
                    _c("b-table", {
                      staticClass: "mt-3",
                      attrs: {
                        id: "result-history-table",
                        striped: "true",
                        bordered: "true",
                        "head-variant": "light",
                        small: "true",
                        hover: "true",
                        items: _vm.getList,
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
                        2103773289
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

/***/ "./src/api/resources.js":
/*!******************************!*\
  !*** ./src/api/resources.js ***!
  \******************************/
/*! exports provided: searchResource, createResource, deleteResource, updateResource, resourceList, getSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchResource", function() { return searchResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResource", function() { return createResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteResource", function() { return deleteResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateResource", function() { return updateResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceList", function() { return resourceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchema", function() { return getSchema; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




function searchResource(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: "/api/v0/resources/".concat(id),
    method: 'get'
  });
}
function createResource(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: "/api/v0/resources",
    method: 'post',
    data: data
  }).then(function (_ref) {
    var data = _ref.data;
    return data;
  });
}
function deleteResource(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: "/api/v0/resources/".concat(id),
    method: 'delete'
  }).then(function (_ref2) {
    var data = _ref2.data;
    return data;
  });
}
function updateResource(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: "/api/v0/resources/".concat(data._id),
    method: 'put',
    data: lodash__WEBPACK_IMPORTED_MODULE_3___default()(data, ['_id'])
  }).then(function (_ref3) {
    var data = _ref3.data;
    return data;
  });
}
function resourceList(query) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: '/api/v0/resources',
    method: 'get',
    params: query
  });
}
function getSchema(_) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: "/api/v0/schemas/Resource.json",
    method: 'get'
  }).then(function (_ref4) {
    var data = _ref4.data;
    var schema = data.schema;

    var fill = function fill(key, _ref5) {
      var title = _ref5.title,
          _ref5$def = _ref5.def,
          def = _ref5$def === void 0 ? '' : _ref5$def,
          type = _ref5.type;
      key = key.split('.').join('.properties.');

      _.set(schema, "properties.".concat(key, ".title"), title);

      if (def) _.set(schema, "properties.".concat(key, ".default"), def);
      if (type) _.set(schema, "properties.".concat(key, ".type"), type);
    };

    var drop = function drop(key) {
      key = key.split('.').join('.properties.');

      _.unset(schema, "properties.".concat(key));
    };

    var dropKeys = function dropKeys(keys) {
      keys.forEach(drop);
    };

    fill('name', {
      title: 'Name'
    });
    fill('type', {
      title: 'Type'
    });
    fill('item.model', {
      title: 'Model'
    });
    fill('status.value', {
      title: 'Status'
    });
    fill('status.note', {
      title: 'Note'
    });
    fill('status.availability', {
      title: 'Availability'
    });
    fill('hw.firmware.name', {
      title: 'Name'
    });
    fill('hw.firmware.version', {
      title: 'Version'
    });
    fill('hw.sn', {
      title: 'Serial Number'
    });
    fill('hw.imei', {
      title: 'Imei'
    });
    fill('hw.hwid', {
      title: 'HW ID'
    });
    fill('ownership.corporation', {
      title: 'Owner corporation'
    });
    fill('ownership.unit', {
      title: 'unit'
    });
    fill('ownership.division', {
      title: 'division'
    });
    fill('ownership.department', {
      title: 'department'
    });
    fill('ownership.cost_center', {
      title: 'cost center'
    });
    fill('ownership.author', {
      title: 'author'
    });
    fill('ownership.purchased.timestamp', {
      title: 'Purchaced time'
    });
    fill('ownership.purchased.note', {
      title: 'Purchaced note'
    });
    fill('user_info.corporation', {
      title: 'corporation'
    });
    fill('user_info.unit', {
      title: 'unit'
    });
    fill('user_info.division', {
      title: 'division'
    });
    fill('user_info.department', {
      title: 'department'
    });
    fill('user_info.author', {
      title: 'author'
    });
    fill('user_info.cost_center', {
      title: 'cost_center'
    });
    fill('usage.type', {
      title: 'Type'
    });
    fill('usage.group', {
      title: 'Group'
    });
    fill('usage.automation.system', {
      title: 'Automation System'
    });
    fill('network.hostname', {
      title: 'Hostname'
    });
    fill('network.domain', {
      title: 'domain'
    });
    fill('network.remote_connection.protocol', {
      title: 'Protocol'
    });
    fill('network.remote_connection.url', {
      title: 'Url'
    });
    fill('network.remote_connection.authentication.username', {
      title: 'Username'
    });
    fill('network.remote_connection.authentication.password', {
      title: 'Password'
    });
    fill('location.site', {
      title: 'Site'
    });
    fill('location.country', {
      title: 'country'
    });
    fill('location.city', {
      title: 'city'
    });
    fill('location.adddress', {
      title: 'adddress'
    });
    fill('location.postcode', {
      title: 'postcode'
    });
    fill('location.room', {
      title: 'room'
    });
    fill('location.subRoom', {
      title: 'subRoom'
    });
    fill('location.geo', {
      title: 'geo'
    });
    fill('location.rack', {
      title: 'Rack'
    });
    fill('location.bed', {
      title: 'Test Bed'
    });
    fill('location.slot', {
      title: 'Slot'
    });
    fill('shield.rf', {
      title: 'RF shielded',
      type: 'boolean'
    });
    fill('childs', {
      title: 'childs'
    });
    fill('parent', {
      title: 'parent',
      type: 'boolean'
    });
    fill('installed.os.name', {
      title: 'OS'
    });
    fill('installed.os.build', {
      title: 'Build _id'
    });
    dropKeys(['_id', 'cre', 'status.time', 'mod', 'item.ref', 'ownership.purchased.user']);
    return schema;
  });
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

/***/ "./src/views/resource/view.vue":
/*!*************************************!*\
  !*** ./src/views/resource/view.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_b9509548___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=b9509548& */ "./src/views/resource/view.vue?vue&type=template&id=b9509548&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./src/views/resource/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_b9509548___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_b9509548___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('b9509548')) {
      api.createRecord('b9509548', component.options)
    } else {
      api.reload('b9509548', component.options)
    }
    module.hot.accept(/*! ./view.vue?vue&type=template&id=b9509548& */ "./src/views/resource/view.vue?vue&type=template&id=b9509548&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _view_vue_vue_type_template_id_b9509548___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=b9509548& */ "./src/views/resource/view.vue?vue&type=template&id=b9509548&");
(function () {
      api.rerender('b9509548', {
        render: _view_vue_vue_type_template_id_b9509548___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _view_vue_vue_type_template_id_b9509548___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/resource/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/resource/view.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/views/resource/view.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/resource/view.vue?vue&type=template&id=b9509548&":
/*!********************************************************************!*\
  !*** ./src/views/resource/view.vue?vue&type=template&id=b9509548& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_b9509548___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=b9509548& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/view.vue?vue&type=template&id=b9509548&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_b9509548___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_b9509548___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=15.js.map