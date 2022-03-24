(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/tree.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/tree.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var vue_jstree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-jstree */ "./node_modules/vue-jstree/dist/vue-jstree.js");
/* harmony import */ var vue_jstree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_jstree__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_json_pretty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-json-pretty */ "./node_modules/vue-json-pretty/lib/vue-json-pretty.js");
/* harmony import */ var vue_json_pretty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_json_pretty__WEBPACK_IMPORTED_MODULE_2__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ResultTree',
  components: {
    VJstree: vue_jstree__WEBPACK_IMPORTED_MODULE_1___default.a,
    VueJsonPretty: vue_json_pretty__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      row: {},
      treeData: [],
      loadData: this._.debounce(this._loadData, 250)
    };
  },
  methods: {
    distinct: function distinct(filters, field) {
      var query = {
        t: 'distinct',
        f: field,
        l: 1000,
        to: 5000
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
      var options = {
        level: level + 1,
        field: NaN,
        type: type,
        filters: filters
      };

      if (id === 0) {
        this.getRoot().then(resolve);
      } else if (type === 'location') {
        if (level === 0) {
          options.field = 'location.site';
        } else if (level === 1) {
          options.field = 'location.room';
        } else if (level === 2) {
          options.field = 'location.rack';
        } else if (level === 3) {
          options.field = 'location.bed';
        } else if (level === 4) {
          options.field = 'location.slot';
        } else {
          options.icon = 'el-icon-tickets';
          options.isLeaf = true;
          options.field = '_id';
        }
      } else if (type === 'type') {
        if (level === 0) {
          options.field = 'type';
        } else if (level === 1) {
          options.field = 'item.model';
        } else {
          options.isLeaf = true;
          options.icon = 'el-icon-tickets';
          options.field = '_id';
        }
      } else if (type === 'model') {
        if (level === 0) {
          options.field = 'item.model';
        } else {
          options.isLeaf = true;
          options.icon = 'el-icon-tickets';
          options.field = '_id';
        }
      } else {
        return resolve([]);
      }

      return this.getDistinct(options).then(resolve);
    },
    getRoot: function getRoot() {
      return Promise.resolve([{
        text: 'by location',
        level: 0,
        type: 'location',
        isLeaf: false
      }, {
        text: 'by type',
        level: 0,
        type: 'type',
        isLeaf: false
      }, {
        text: 'by model',
        level: 0,
        type: 'model',
        isLeaf: false
      }]);
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
      return Object(_api_resources__WEBPACK_IMPORTED_MODULE_3__["resourceList"])(query).then(function (_ref2) {
        var data = _ref2.data;

        var mapper = function mapper(text) {
          var _filters = _this._.clone(filters);

          _this._.merge(_filters, Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, text));

          return {
            text: text,
            level: level,
            isLeaf: isLeaf,
            icon: icon,
            type: type,
            filters: _filters
          };
        };

        var treeData = _this._.map(data, mapper);

        return treeData;
      });
    },
    itemClick: function itemClick(node, item, e) {
      var _this2 = this;

      var filters = this._.cloneDeep(node.model.filters);

      if (node.model.isLeaf) {
        var _id = node.model.filters._id;
        console.log('Get result: ', _id);
        Object(_api_resources__WEBPACK_IMPORTED_MODULE_3__["searchResource"])(_id).then(function (_ref3) {
          var data = _ref3.data;
          // eslint-disable-next-line no-console
          console.log("searchResult(".concat(_id, "): ").concat(JSON.stringify(data)));

          _this2._.unset(data, '__v');

          _this2._.unset(data, '_id');

          _this2.row = data;
        });
      } else {
        this.row = filters;
      }
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
      _c(
        "el-row",
        [
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c("v-jstree", {
                attrs: { data: _vm.treeData, async: _vm.loadData },
                on: { "item-click": _vm.itemClick }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c("vue-json-pretty", {
                attrs: {
                  data: _vm.row,
                  deep: 1,
                  "deep-collapse-children": true,
                  "show-length": true,
                  "show-double-quotes": false
                }
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
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");



function searchResource(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: "/api/v0/resources/".concat(id),
    method: 'get'
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
  }).then(function (_ref) {
    var data = _ref.data;
    var schema = data.schema;

    var fill = function fill(key, _ref2) {
      var title = _ref2.title,
          _ref2$def = _ref2.def,
          def = _ref2$def === void 0 ? '' : _ref2$def,
          type = _ref2.type;
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
//# sourceMappingURL=20.js.map