(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/tree.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/result/tree.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var vue_jstree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-jstree */ "./node_modules/vue-jstree/dist/vue-jstree.js");
/* harmony import */ var vue_jstree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_jstree__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/results */ "./src/api/results.js");

//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ResultTree',
  components: {
    VJstree: vue_jstree__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      treeData: [],
      loadData: this._.debounce(this._loadData, 250)
    };
  },
  methods: {
    _loadData: function _loadData(node, resolve) {
      var id = node.data.id ? node.data.id : 0;
      var _node$data = node.data,
          level = _node$data.level,
          type = _node$data.type,
          _node$data$filters = _node$data.filters,
          filters = _node$data$filters === void 0 ? {} : _node$data$filters;

      if (id === 0) {
        this.getRoot().then(resolve);
      } else if (type === 'tests') {
        if (level === 0) {
          var options = {
            level: 1,
            field: 'tcid',
            type: type,
            filters: filters
          };
          this.getDistinct(options).then(resolve);
        } else if (level === 1) {
          var _options = {
            level: 2,
            field: 'exec.duts.0.model',
            type: type,
            filters: filters
          };
          this.getDistinct(_options).then(resolve);
        } else if (level === 1) {
          var _options2 = {
            level: 2,
            field: 'exec.verdict',
            type: type,
            filters: filters
          };
          return this.getDistinct(_options2).then(resolve);
        } else if (level === 2) {
          var _options3 = {
            level: 3,
            field: 'exec.verdict',
            type: type,
            filters: filters
          };
          return this.getDistinct(_options3).then(resolve);
        } else if (level === 3) {
          var icon = 'fa fa-check icon-state-success';
          var isLeaf = true;
          var _options4 = {
            level: 3,
            field: 'job.id',
            type: type,
            filters: filters,
            isLeaf: isLeaf,
            icon: icon
          };
          return this.getDistinct(_options4).then(resolve);
        }
      } else {
        resolve([]);
      }
    },
    distinct: function distinct(filters, field) {
      var query = {
        t: 'distinct',
        f: field,
        s: {
          'cre.time': 1
        },
        'cre.time': {
          $gt: this.lastWeekDate().toISOString()
        }
      };
      return this._.merge(query, filters);
    },
    getRoot: function getRoot() {
      return Promise.resolve([{
        text: 'tests',
        level: 0,
        type: 'tests',
        isLeaf: false
      } // {text: 'campaigns', level: 0, type: 'campaign', isLeaf: false},
      // {text: 'dut models', level: 0, type: 'dutModel', isLeaf: false},
      ]);
    },
    getDistinct: function getDistinct(_ref) {
      var _this = this;

      var level = _ref.level,
          field = _ref.field,
          _ref$filters = _ref.filters,
          filters = _ref$filters === void 0 ? {} : _ref$filters,
          type = _ref.type,
          _ref$isLeaf = _ref.isLeaf,
          isLeaf = _ref$isLeaf === void 0 ? false : _ref$isLeaf,
          icon = _ref.icon;
      var query = this.distinct(filters, field);
      return Object(_api_results__WEBPACK_IMPORTED_MODULE_2__["resultsList"])(query).then(function (_ref2) {
        var data = _ref2.data;

        var mapper = function mapper(text) {
          var filters = _this._.merge(filters, Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, text));

          return {
            text: text,
            level: level,
            isLeaf: isLeaf,
            icon: icon,
            type: type,
            filters: filters
          };
        };

        var treeData = _this._.map(data, mapper);

        return treeData;
      });
    },
    lastWeekDate: function lastWeekDate() {
      var ourDate = new Date(); // Change it so that it is 7 days in the past.

      var pastDate = ourDate.getDate() - 7;
      ourDate.setDate(pastDate);
      return ourDate;
    },
    itemClick: function itemClick(node, item, e) {
      // eslint-disable-next-line no-console
      console.log(node.model.text + ' clicked !', item, e);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/tree.vue?vue&type=template&id=20563e26&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/result/tree.vue?vue&type=template&id=20563e26& ***!
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
      _c("v-jstree", {
        attrs: { data: _vm.treeData, async: _vm.loadData },
        on: { "item-click": _vm.itemClick }
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

/***/ "./src/views/result/tree.vue":
/*!***********************************!*\
  !*** ./src/views/result/tree.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_vue_vue_type_template_id_20563e26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree.vue?vue&type=template&id=20563e26& */ "./src/views/result/tree.vue?vue&type=template&id=20563e26&");
/* harmony import */ var _tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree.vue?vue&type=script&lang=js& */ "./src/views/result/tree.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tree_vue_vue_type_template_id_20563e26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tree_vue_vue_type_template_id_20563e26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('20563e26')) {
      api.createRecord('20563e26', component.options)
    } else {
      api.reload('20563e26', component.options)
    }
    module.hot.accept(/*! ./tree.vue?vue&type=template&id=20563e26& */ "./src/views/result/tree.vue?vue&type=template&id=20563e26&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _tree_vue_vue_type_template_id_20563e26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree.vue?vue&type=template&id=20563e26& */ "./src/views/result/tree.vue?vue&type=template&id=20563e26&");
(function () {
      api.rerender('20563e26', {
        render: _tree_vue_vue_type_template_id_20563e26___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _tree_vue_vue_type_template_id_20563e26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/result/tree.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/result/tree.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/views/result/tree.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tree.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/tree.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/result/tree.vue?vue&type=template&id=20563e26&":
/*!******************************************************************!*\
  !*** ./src/views/result/tree.vue?vue&type=template&id=20563e26& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_template_id_20563e26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tree.vue?vue&type=template&id=20563e26& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/result/tree.vue?vue&type=template&id=20563e26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_template_id_20563e26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_template_id_20563e26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=17.js.map