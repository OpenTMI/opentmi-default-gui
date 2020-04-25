(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/tree.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/tree.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_jstree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-jstree */ "./node_modules/vue-jstree/dist/vue-jstree.js");
/* harmony import */ var vue_jstree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_jstree__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/resources */ "./src/api/resources.js");

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
    _query: function _query(filters) {
      var query = {
        f: "_id name"
      };
      return this._.merge(query, filters);
    },
    _loadData: function _loadData(node, resolve) {
      var id = node.data.id ? node.data.id : 0;
      var _node$data = node.data,
          level = _node$data.level,
          type = _node$data.type,
          _node$data$filters = _node$data.filters,
          filters = _node$data$filters === void 0 ? {} : _node$data$filters;

      if (id === 0) {
        this.getRoot().then(resolve);
      } else if (type === 'rooms') {
        if (level === 0) {
          // room
          var options = {
            level: 1,
            type: type,
            filters: {
              type: 'room'
            }
          };
          this.getDistinct(options).then(resolve);
        } else if (level === 1) {
          // system
          var _options = {
            level: 2,
            type: type,
            filters: filters
          };
          this.getDistinct(_options).then(resolve);
        } else if (level === 2) {
          // computer
          var _options2 = {
            level: 3,
            type: type,
            filters: filters
          };
          return this.getDistinct(_options2).then(resolve);
        } else {
          var icon = undefined; // 'fa fa-check icon-state-success'

          var isLeaf = true;
          var _options3 = {
            level: 4,
            type: type,
            filters: filters,
            isLeaf: isLeaf,
            icon: icon
          };
          return this.getDistinct(_options3).then(resolve);
        }
      } else {
        resolve([]);
      }
    },
    getRoot: function getRoot() {
      return Promise.resolve([{
        text: 'rooms',
        level: 0,
        type: 'rooms',
        isLeaf: false
      } // { text: 'system', level: 0, type: 'systems', isLeaf: false },
      // { text: 'dut', level: 0, type: 'duts', isLeaf: false }
      ]);
    },
    getDistinct: function getDistinct(_ref) {
      var _this = this;

      var level = _ref.level,
          _ref$filters = _ref.filters,
          filters = _ref$filters === void 0 ? {} : _ref$filters,
          type = _ref.type,
          _ref$isLeaf = _ref.isLeaf,
          isLeaf = _ref$isLeaf === void 0 ? false : _ref$isLeaf,
          icon = _ref.icon;

      var query = this._query(filters);

      return Object(_api_resources__WEBPACK_IMPORTED_MODULE_2__["resourceList"])(query).then(function (_ref2) {
        var data = _ref2.data;

        var mapper = function mapper(obj) {
          var text = obj.name;

          var filters = _this._.merge(filters, {
            parent: obj._id
          });

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
    itemClick: function itemClick(node, item, e) {
      // eslint-disable-next-line no-console
      console.log(node.model.text + ' clicked !', item, e);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/tree.vue?vue&type=template&id=a2a06c56&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/tree.vue?vue&type=template&id=a2a06c56& ***!
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

/***/ "./src/api/resources.js":
/*!******************************!*\
  !*** ./src/api/resources.js ***!
  \******************************/
/*! exports provided: searchResource, resourceList, getSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchResource", function() { return searchResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceList", function() { return resourceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchema", function() { return getSchema; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");

function searchResource(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/api/v0/resources/".concat(id),
    method: 'get'
  });
}
function resourceList(query) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/v0/resources',
    method: 'get',
    params: query
  });
}
function getSchema(_) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/api/v0/schemas/Resource.json",
    method: 'get'
  }).then(function (_ref) {
    var data = _ref.data;
    var schema = data.schema;
    return schema;
  });
}

/***/ }),

/***/ "./src/views/resource/tree.vue":
/*!*************************************!*\
  !*** ./src/views/resource/tree.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_vue_vue_type_template_id_a2a06c56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree.vue?vue&type=template&id=a2a06c56& */ "./src/views/resource/tree.vue?vue&type=template&id=a2a06c56&");
/* harmony import */ var _tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree.vue?vue&type=script&lang=js& */ "./src/views/resource/tree.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tree_vue_vue_type_template_id_a2a06c56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tree_vue_vue_type_template_id_a2a06c56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('a2a06c56')) {
      api.createRecord('a2a06c56', component.options)
    } else {
      api.reload('a2a06c56', component.options)
    }
    module.hot.accept(/*! ./tree.vue?vue&type=template&id=a2a06c56& */ "./src/views/resource/tree.vue?vue&type=template&id=a2a06c56&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _tree_vue_vue_type_template_id_a2a06c56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree.vue?vue&type=template&id=a2a06c56& */ "./src/views/resource/tree.vue?vue&type=template&id=a2a06c56&");
(function () {
      api.rerender('a2a06c56', {
        render: _tree_vue_vue_type_template_id_a2a06c56___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _tree_vue_vue_type_template_id_a2a06c56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/resource/tree.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/resource/tree.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/views/resource/tree.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tree.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/tree.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/resource/tree.vue?vue&type=template&id=a2a06c56&":
/*!********************************************************************!*\
  !*** ./src/views/resource/tree.vue?vue&type=template&id=a2a06c56& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_template_id_a2a06c56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./tree.vue?vue&type=template&id=a2a06c56& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/tree.vue?vue&type=template&id=a2a06c56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_template_id_a2a06c56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_template_id_a2a06c56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=21.js.map