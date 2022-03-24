(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/components/ResourceDetail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/components/ResourceDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/resources */ "./src/api/resources.js");
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ResourceDetail',
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      json: {},
      schema: {}
    };
  },
  created: function created() {
    var _this = this;

    Object(_api_resources__WEBPACK_IMPORTED_MODULE_0__["getSchema"])(this._).then(function (schema) {
      _this.schema = schema;
    });
  },
  methods: {
    handleChange: function handleChange(val) {}
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ResourceDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ResourceDetail */ "./src/views/resource/components/ResourceDetail.vue");
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EditForm',
  components: {
    ResourceDetail: _components_ResourceDetail__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/components/ResourceDetail.vue?vue&type=template&id=ba8440de&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/components/ResourceDetail.vue?vue&type=template&id=ba8440de& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("schema-json-vue", {
    attrs: { schema: _vm.schema, json: _vm.json },
    on: { onJsonChange: _vm.handleChange }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/edit.vue?vue&type=template&id=88e4a37e&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/edit.vue?vue&type=template&id=88e4a37e& ***!
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
  return _c("resource-detail", { attrs: { "is-edit": true } })
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

/***/ "./src/views/resource/components/ResourceDetail.vue":
/*!**********************************************************!*\
  !*** ./src/views/resource/components/ResourceDetail.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResourceDetail_vue_vue_type_template_id_ba8440de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceDetail.vue?vue&type=template&id=ba8440de& */ "./src/views/resource/components/ResourceDetail.vue?vue&type=template&id=ba8440de&");
/* harmony import */ var _ResourceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceDetail.vue?vue&type=script&lang=js& */ "./src/views/resource/components/ResourceDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResourceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResourceDetail_vue_vue_type_template_id_ba8440de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResourceDetail_vue_vue_type_template_id_ba8440de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('ba8440de')) {
      api.createRecord('ba8440de', component.options)
    } else {
      api.reload('ba8440de', component.options)
    }
    module.hot.accept(/*! ./ResourceDetail.vue?vue&type=template&id=ba8440de& */ "./src/views/resource/components/ResourceDetail.vue?vue&type=template&id=ba8440de&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ResourceDetail_vue_vue_type_template_id_ba8440de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceDetail.vue?vue&type=template&id=ba8440de& */ "./src/views/resource/components/ResourceDetail.vue?vue&type=template&id=ba8440de&");
(function () {
      api.rerender('ba8440de', {
        render: _ResourceDetail_vue_vue_type_template_id_ba8440de___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ResourceDetail_vue_vue_type_template_id_ba8440de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/resource/components/ResourceDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/resource/components/ResourceDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/views/resource/components/ResourceDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/components/ResourceDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/resource/components/ResourceDetail.vue?vue&type=template&id=ba8440de&":
/*!*****************************************************************************************!*\
  !*** ./src/views/resource/components/ResourceDetail.vue?vue&type=template&id=ba8440de& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceDetail_vue_vue_type_template_id_ba8440de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceDetail.vue?vue&type=template&id=ba8440de& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/components/ResourceDetail.vue?vue&type=template&id=ba8440de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceDetail_vue_vue_type_template_id_ba8440de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceDetail_vue_vue_type_template_id_ba8440de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/resource/edit.vue":
/*!*************************************!*\
  !*** ./src/views/resource/edit.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_88e4a37e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=88e4a37e& */ "./src/views/resource/edit.vue?vue&type=template&id=88e4a37e&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./src/views/resource/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_88e4a37e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_88e4a37e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!api.isRecorded('88e4a37e')) {
      api.createRecord('88e4a37e', component.options)
    } else {
      api.reload('88e4a37e', component.options)
    }
    module.hot.accept(/*! ./edit.vue?vue&type=template&id=88e4a37e& */ "./src/views/resource/edit.vue?vue&type=template&id=88e4a37e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _edit_vue_vue_type_template_id_88e4a37e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=88e4a37e& */ "./src/views/resource/edit.vue?vue&type=template&id=88e4a37e&");
(function () {
      api.rerender('88e4a37e', {
        render: _edit_vue_vue_type_template_id_88e4a37e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _edit_vue_vue_type_template_id_88e4a37e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/resource/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/resource/edit.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/views/resource/edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/resource/edit.vue?vue&type=template&id=88e4a37e&":
/*!********************************************************************!*\
  !*** ./src/views/resource/edit.vue?vue&type=template&id=88e4a37e& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_88e4a37e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fc6c80c8-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=88e4a37e& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"fc6c80c8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/edit.vue?vue&type=template&id=88e4a37e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_88e4a37e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_fc6c80c8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_88e4a37e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=8.js.map