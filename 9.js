(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/list.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var vue_json_pretty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-json-pretty */ "./node_modules/vue-json-pretty/lib/vue-json-pretty.js");
/* harmony import */ var vue_json_pretty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_json_pretty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_json_pretty_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-json-pretty/lib/styles.css */ "./node_modules/vue-json-pretty/lib/styles.css");
/* harmony import */ var vue_json_pretty_lib_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_json_pretty_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/resources */ "./src/api/resources.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ResourceList',
  components: {
    VueJsonPretty: vue_json_pretty__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      fields: [{
        key: 'cre.time',
        sortable: true,
        label: 'Created at'
      }, {
        key: 'name',
        sortable: true
      }, {
        key: 'type',
        sortable: true
      }, {
        key: 'item.model',
        sortable: true
      }, {
        key: 'status.value',
        sortable: true,
        label: 'Status'
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
  methods: {
    lengthLimiter: function lengthLimiter(value) {
      var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var out = value.substr(0, maxLength);

      if (value.length > maxLength) {
        out += '...';
      }

      return out;
    },
    rowClicked: function rowClicked(row) {
      this.$set(row, '_showDetails', !row._showDetails);
    },
    updateList: function updateList(page) {
      this.listQuery.page = page;
      this.reload();
    },
    _reload: function _reload() {
      this.$root.$emit('bv::refresh::table', 'my-table');
    },
    _getList: function _getList() {
      var _this = this;

      var query = this._.omitBy(this.listQuery, this._.isNil);

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

      return Object(_api_resources__WEBPACK_IMPORTED_MODULE_3__["resourceList"])(countQuery).then(function (_ref) {
        var data = _ref.data;
        _this.total = data.count;
        return Object(_api_resources__WEBPACK_IMPORTED_MODULE_3__["resourceList"])(query);
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/list.vue?vue&type=template&id=a774f256&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/list.vue?vue&type=template&id=a774f256& ***!
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
          "sort-changed": _vm.listLoading,
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
            fn: function(data) {
              return _vm._l(data.fields, function(field) {
                return _c("td", { key: field.key }, [
                  field.key == "type"
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
                          _c("option", [_vm._v("system")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("dut")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("instrument")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("accessories")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("computer")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("room")])
                        ]
                      )
                    : field.key == "status.value"
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
                          _c("option", [_vm._v("active")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("maintenance")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("storage")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("broken")])
                        ]
                      )
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
            key: "cell(name)",
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
                            params: { id: data.item._id }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/list.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/list.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tooltip .tooltip-inner{\n  max-width: 500px !important;\n  width: 400px !important;\n}\n", ""]);

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

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/list.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/list.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/list.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("43ba36da", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/list.vue?vue&type=style&index=0&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/list.vue?vue&type=style&index=0&lang=css&");
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

/***/ "./src/views/resource/list.vue":
/*!*************************************!*\
  !*** ./src/views/resource/list.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_a774f256___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=a774f256& */ "./src/views/resource/list.vue?vue&type=template&id=a774f256&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./src/views/resource/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&lang=css& */ "./src/views/resource/list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_a774f256___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_a774f256___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('a774f256')) {
      api.createRecord('a774f256', component.options)
    } else {
      api.reload('a774f256', component.options)
    }
    module.hot.accept(/*! ./list.vue?vue&type=template&id=a774f256& */ "./src/views/resource/list.vue?vue&type=template&id=a774f256&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _list_vue_vue_type_template_id_a774f256___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=a774f256& */ "./src/views/resource/list.vue?vue&type=template&id=a774f256&");
(function () {
      api.rerender('a774f256', {
        render: _list_vue_vue_type_template_id_a774f256___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _list_vue_vue_type_template_id_a774f256___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/resource/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/resource/list.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/views/resource/list.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/resource/list.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./src/views/resource/list.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/views/resource/list.vue?vue&type=template&id=a774f256&":
/*!********************************************************************!*\
  !*** ./src/views/resource/list.vue?vue&type=template&id=a774f256& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_a774f256___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=a774f256& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/list.vue?vue&type=template&id=a774f256&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_a774f256___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_a774f256___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=9.js.map