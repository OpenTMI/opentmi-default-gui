(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[17],{

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
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-storage */ "./node_modules/vue2-storage/dist/vue2-storage.esm.js");
/* harmony import */ var _api_results__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/results */ "./src/api/results.js");
/* harmony import */ var vue_pivottable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-pivottable */ "./node_modules/vue-pivottable/src/index.js");
/* harmony import */ var vue_pivottable_dist_vue_pivottable_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-pivottable/dist/vue-pivottable.css */ "./node_modules/vue-pivottable/dist/vue-pivottable.css");
/* harmony import */ var vue_pivottable_dist_vue_pivottable_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_pivottable_dist_vue_pivottable_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var string_similarity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! string-similarity */ "./node_modules/string-similarity/src/index.js");
/* harmony import */ var string_similarity__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(string_similarity__WEBPACK_IMPORTED_MODULE_10__);





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






Object.defineProperty(vue__WEBPACK_IMPORTED_MODULE_5__["default"].prototype, '$ss', {
  value: string_similarity__WEBPACK_IMPORTED_MODULE_10___default.a
});
vue__WEBPACK_IMPORTED_MODULE_5__["default"].use(vue2_storage__WEBPACK_IMPORTED_MODULE_6__["Vue2Storage"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ResultPivot',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VuePivottable: vue_pivottable__WEBPACK_IMPORTED_MODULE_8__["VuePivottable"],
    VuePivottableUi: vue_pivottable__WEBPACK_IMPORTED_MODULE_8__["VuePivottableUi"]
  },
  data: function data() {
    var dateFormat = function dateFormat(field, format) {
      return function (record) {
        return vue__WEBPACK_IMPORTED_MODULE_5__["default"].moment(record[field]).format(format);
      };
    };

    return {
      similarityDialogTableVisible: false,
      similarityEnabled: true,
      similarityValue: 0.6,
      defaultNotes: [],
      dateRange: [new Date(Date.now() - 3600 * 1000 * 24 * 7), new Date(Date.now() + 3600 * 1000 * 24)],
      pickerOptions: {
        firstDayOfWeek: 1,
        shortcuts: [{
          text: 'Last week',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            end.setTime(end.getTime() + 3600 * 1000 * 24);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: 'Last month',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            end.setTime(end.getTime() + 3600 * 1000 * 24);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: 'Last 3 months',
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            end.setTime(end.getTime() + 3600 * 1000 * 24);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      loading: true,
      limit: 1000,
      aggregatorName: 'Count',
      pivotData: [],
      rendererName: 'Table Heatmap',
      rows: ['exec.duts.0.model'],
      cols: ['month name', 'day', 'exec.verdict'],
      derivedAttributes: {
        'year': dateFormat('cre.time', 'YYYY'),
        'month': dateFormat('cre.time', 'M'),
        'day': dateFormat('cre.time', 'D'),
        'month name': dateFormat('cre.time', 'MMM'),
        'day name': dateFormat('cre.time', 'ddd'),
        'Week number': dateFormat('cre.time', 'W')
      },
      hiddenAttributes: ['exec.logs'],
      similarNotes: [],
      filter: {
        'branch': '',
        'exec.verdict': ''
      }
    };
  },
  mounted: function mounted() {
    this.similarNotes = this.$storage.get('similarNotes', this.defaultNotes);
  },
  created: function created() {
    // The configuration of the plugin can be changed at any time.
    // Just call the setOptions method and pass the object with the settings to it.
    this.$storage.setOptions({
      prefix: 'result_pivot_',
      driver: 'local'
    });
    var config = {
      aggregatorName: this.aggregatorName,
      rendererName: this.rendererName,
      rows: this.rows,
      cols: this.cols
    };
    config = this.$storage.get('currentView', config);

    this._.merge(this, this._.pick(config, Object.keys(config)));

    this.similarityValue = this.$storage.get('similarityValue', 0.6);
    this.refreshData();
  },
  methods: {
    bin: function bin(value, binWidth) {
      return value - value % binWidth;
    },
    analyseSimilarities: function analyseSimilarities() {
      var _this = this;

      var notes = this._.filter(this._.uniq(this.pivotData.map(function (r) {
        return r['exec.note'];
      })), function (r) {
        return !_this._.isEmpty(r);
      });

      if (this._.isEmpty(notes)) {
        return;
      }

      var similars = [notes[0]];

      this._.forEach(notes, function (note) {
        if (_this._.isEmpty(note)) return;

        var _this$$ss$findBestMat = _this.$ss.findBestMatch(note, similars),
            bestMatch = _this$$ss$findBestMat.bestMatch;

        if (bestMatch.rating < _this.similarityValue) {
          similars.push(note);
        }
      });

      this.similarNotes = similars.map(function (value) {
        return {
          value: value
        };
      });
    },
    resetDefaults: function resetDefaults() {
      var _this2 = this;

      this.$confirm('This will permanently restore defaults similarity notes. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(function () {
        _this2.similarNotes = _this2.defaultNotes;

        _this2.saveSimilarityConfig();
      }).catch(function () {
        _this2.$message({
          type: 'info',
          message: 'Canceled'
        });
      });
    },
    deleteRow: function deleteRow(index, rows) {
      this.similarNotes.splice(index, 1);
    },
    addRow: function addRow() {
      var newRow = {
        value: ''
      };
      this.similarNotes = [newRow].concat(Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(this.similarNotes));
    },
    saveSimilarityConfig: function saveSimilarityConfig() {
      this.$storage.set('similarNotes', this.similarNotes);
      this.$storage.set('similarityValue', this.similarityValue);
    },
    getSimilarityTable: function getSimilarityTable() {
      return this._.map(this.similarNotes, 'value');
    },
    findSimilarity: function findSimilarity(note) {
      if (!this.similarityEnabled) return note;
      if (this._.isEmpty(note)) return '';
      var similars = this.getSimilarityTable();
      if (similars.length === 0) return note;

      var _this$$ss$findBestMat2 = this.$ss.findBestMatch(note, similars),
          bestMatch = _this$$ss$findBestMat2.bestMatch; // console.log(`${bestMatch.rating}: ${note.substr(0, 200)}`)


      if (bestMatch.rating > this.similarityValue) {
        return bestMatch.target;
      }

      return note;
    },
    storeView: function storeView() {
      var config = {
        aggregatorName: this.aggregatorName,
        rendererName: this.rendererName,
        rows: this.rows,
        cols: this.cols
      };
      this.$storage.set('currentView', config);
    },
    refreshData: function refreshData() {
      var _this3 = this;

      var query = {
        fl: true,
        'cre.time': {
          $gt: this.dateRange[0].toISOString(),
          $lt: this.dateRange[1].toISOString()
        },
        s: {
          'cre.time': -1
        },
        l: this.limit,
        f: '-__v -_id -exec.duts.0.__v -exec.duts._id'
      };

      this._.merge(query, this._.omitBy(this.filter, this._.isEmpty));

      if (query['exec.verdict']) {
        console.log(query['exec.verdict']);
        query['exec.verdict'] = "{in}".concat(query['exec.verdict'].join(','));
      }

      this.loading = true;
      Object(_api_results__WEBPACK_IMPORTED_MODULE_7__["resultsList"])(query).then(function (_ref) {
        var data = _ref.data;

        var results = _this3._.map(data, function (r) {
          // round duration by 10s
          r.duration = _this3.bin(parseFloat(r['exec.duration']), 10);
          delete r['exec.duration'];
          var components = [];
          var features = [];

          for (var _i = 0, _Object$keys = Object.keys(r); _i < _Object$keys.length; _i++) {
            var k = _Object$keys[_i];

            if (k.match(/\.\d/)) {
              if (k.match(/\.fut\.\d/)) {
                features.push(r[k].toLowerCase());
                delete r[k];
              }

              if (k.match(/\.cut\.\d/)) {
                components.push(r[k].toLowerCase());
                delete r[k];
              }
            }
          }

          delete r['exec.sut.tag'];
          delete r['exec.sut.cut'];
          delete r['exec.sut.fut'];
          r.component = components.sort().join(',');
          r.feature = features.sort().join(',');
          r.noteSimilar = _this3.findSimilarity(r['exec.note']);
          r.passrate = r['exec.verdict'] === 'pass' ? 100.0 : 0;
          r.inconcRate = r['exec.verdict'] === 'inconclusive' ? 100.0 : 0;
          return r;
        });

        _this3.pivotData = results;
        _this3.loading = false;
      });
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
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Similarity Note table",
            visible: _vm.similarityDialogTableVisible
          },
          on: {
            "update:visible": function($event) {
              _vm.similarityDialogTableVisible = $event
            }
          }
        },
        [
          _c("el-input-number", {
            attrs: { precision: 2, step: 0.1, max: 1, min: 0 },
            model: {
              value: _vm.similarityValue,
              callback: function($$v) {
                _vm.similarityValue = $$v
              },
              expression: "similarityValue"
            }
          }),
          _vm._v(" "),
          _c("el-button", { on: { click: _vm.addRow } }, [_vm._v("Add")]),
          _vm._v(" "),
          _c("el-button", { on: { click: _vm.saveSimilarityConfig } }, [
            _vm._v("Save")
          ]),
          _vm._v(" "),
          _c("el-button", { on: { click: _vm.resetDefaults } }, [
            _vm._v("Reset")
          ]),
          _vm._v(" "),
          _c("el-button", { on: { click: _vm.analyseSimilarities } }, [
            _vm._v("Analyse")
          ]),
          _vm._v(" "),
          _c(
            "el-table",
            {
              staticStyle: { width: "100%" },
              attrs: { data: _vm.similarNotes, height: "250" }
            },
            [
              _c("el-table-column", {
                attrs: { property: "value", label: "Note" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("el-input", {
                          staticStyle: { "text-align": "center" },
                          attrs: { size: "small" },
                          model: {
                            value: scope.row.value,
                            callback: function($$v) {
                              _vm.$set(scope.row, "value", $$v)
                            },
                            expression: "scope.row.value"
                          }
                        })
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { fixed: "right", label: "Operations", width: "120" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", size: "small" },
                            nativeOn: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.deleteRow(scope.$index, scope.row)
                              }
                            }
                          },
                          [_vm._v("\n            Delete\n          ")]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v("Results Pivottable")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "filter-container" },
        [
          _c("el-date-picker", {
            attrs: {
              type: "daterange",
              size: "small",
              "range-separator": "To",
              "start-placeholder": "Start date",
              "end-placeholder": "End date",
              "picker-options": _vm.pickerOptions,
              format: "yyyy-MM-dd"
            },
            model: {
              value: _vm.dateRange,
              callback: function($$v) {
                _vm.dateRange = $$v
              },
              expression: "dateRange"
            }
          }),
          _vm._v(" "),
          _c("el-input-number", {
            attrs: { size: "small", step: "1000", min: "100" },
            model: {
              value: _vm.limit,
              callback: function($$v) {
                _vm.limit = $$v
              },
              expression: "limit"
            }
          }),
          _vm._v(" "),
          _c("el-input", {
            staticStyle: { width: "150px" },
            attrs: { size: "small", placeholder: "Campaign" },
            model: {
              value: _vm.filter.campaign,
              callback: function($$v) {
                _vm.$set(
                  _vm.filter,
                  "campaign",
                  typeof $$v === "string" ? $$v.trim() : $$v
                )
              },
              expression: "filter.campaign"
            }
          }),
          _vm._v(" "),
          _c(
            "el-select",
            {
              attrs: { size: "small", multiple: "", placeholder: "Verdict" },
              model: {
                value: _vm.filter["exec.verdict"],
                callback: function($$v) {
                  _vm.$set(_vm.filter, "exec.verdict", $$v)
                },
                expression: "filter['exec.verdict']"
              }
            },
            _vm._l(["pass", "inconclusive", "fail", "skip"], function(item) {
              return _c("el-option", {
                key: item,
                attrs: { label: item, value: item }
              })
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: {
                type: "primary",
                size: "small",
                icon: "el-icon-refresh"
              },
              on: { click: _vm.refreshData }
            },
            [_vm._v("\n      Refresh\n    ")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { type: "primary", size: "small", icon: "el-icon-save" },
              on: { click: _vm.storeView }
            },
            [_vm._v("\n      Store view\n    ")]
          ),
          _vm._v(" "),
          _c(
            "el-checkbox",
            {
              model: {
                value: _vm.similarityEnabled,
                callback: function($$v) {
                  _vm.similarityEnabled = $$v
                },
                expression: "similarityEnabled"
              }
            },
            [_vm._v("Enable")]
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              attrs: {
                content:
                  "These rules allows to categorize exec.notes. Normally there is notes when test fails.",
                placement: "bottom"
              }
            },
            [
              _c(
                "el-button",
                {
                  attrs: {
                    disabled: !_vm.similarityEnabled,
                    type: "primary",
                    size: "small",
                    icon: "el-icon-edit"
                  },
                  on: {
                    click: function($event) {
                      _vm.similarityDialogTableVisible = true
                    }
                  }
                },
                [_vm._v("\n        noteSimilar rules\n      ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("vue-pivottable-ui", {
        directives: [
          {
            name: "loading",
            rawName: "v-loading",
            value: _vm.loading,
            expression: "loading"
          }
        ],
        attrs: {
          id: "pivot",
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/pivot.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/result/pivot.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pvtUi {\n  margin-left: 0px;\n  #table-layout:fixed;\n}\n.pvtTable th {\n  max-width: 600px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.el-table__row .el-input .el-input__inner{\n  border-style:none;\n}\n.hover-row .el-input .el-input__inner{\n  border-style:solid;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/pivot.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/result/pivot.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pivot.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/pivot.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0bfc7fa7", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pivot.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/pivot.vue?vue&type=style&index=0&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pivot.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/pivot.vue?vue&type=style&index=0&lang=css&");
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
/* empty/unused harmony star reexport *//* harmony import */ var _pivot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pivot.vue?vue&type=style&index=0&lang=css& */ "./src/views/result/pivot.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./src/views/result/pivot.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************!*\
  !*** ./src/views/result/pivot.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pivot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../node_modules/css-loader??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pivot.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/pivot.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pivot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pivot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pivot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pivot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pivot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
//# sourceMappingURL=17.js.map