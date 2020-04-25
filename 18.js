(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@femessage/log-viewer/dist/log-viewer.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@femessage/log-viewer/dist/log-viewer.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var vue_virtual_scroll_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-virtual-scroll-list */ "./node_modules/vue-virtual-scroll-list/dist/index.js");
/* harmony import */ var vue_virtual_scroll_list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_virtual_scroll_list__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'LineContent',
  props: {
    /**
     * log text content
     */
    content: Array
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "line-content" },
    _vm._l(_vm.content, function(item, index) {
      return _c(
        "span",
        {
          key: index,
          class: [
            {
              "log-bold": item.bold,
              "log-underline": item.underline,
              "log-italic": item.italic
            },
            item.foreground ? "log-fore-" + item.foreground : "",
            item.background ? "log-back-" + item.background : ""
          ]
        },
        [_vm._v(_vm._s(item.text))]
      )
    }),
    0
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-0acb7131_0", { source: ".line-content .log-bold {\n  font-weight: bold;\n}\n.line-content .log-underline {\n  text-decoration: underline;\n}\n.line-content .log-italic {\n  font-style: italic;\n}\n.line-content .log-fore-black {\n  color: #000000;\n}\n.line-content .log-fore-black.log-underline {\n  -webkit-text-decoration-color: #000000;\n          text-decoration-color: #000000;\n}\n.line-content .log-fore-bright-black {\n  color: #818383;\n}\n.line-content .log-fore-bright-black.log-underline {\n  -webkit-text-decoration-color: #818383;\n          text-decoration-color: #818383;\n}\n.line-content .log-back-black {\n  background: #000000;\n}\n.line-content .log-back-bright-black {\n  background: #818383;\n}\n.line-content .log-fore-red {\n  color: #c23621;\n}\n.line-content .log-fore-red.log-underline {\n  -webkit-text-decoration-color: #c23621;\n          text-decoration-color: #c23621;\n}\n.line-content .log-fore-bright-red {\n  color: #fc391f;\n}\n.line-content .log-fore-bright-red.log-underline {\n  -webkit-text-decoration-color: #fc391f;\n          text-decoration-color: #fc391f;\n}\n.line-content .log-back-red {\n  background: #c23621;\n}\n.line-content .log-back-bright-red {\n  background: #fc391f;\n}\n.line-content .log-fore-green {\n  color: #25bc24;\n}\n.line-content .log-fore-green.log-underline {\n  -webkit-text-decoration-color: #25bc24;\n          text-decoration-color: #25bc24;\n}\n.line-content .log-fore-bright-green {\n  color: #31e722;\n}\n.line-content .log-fore-bright-green.log-underline {\n  -webkit-text-decoration-color: #31e722;\n          text-decoration-color: #31e722;\n}\n.line-content .log-back-green {\n  background: #25bc24;\n}\n.line-content .log-back-bright-green {\n  background: #31e722;\n}\n.line-content .log-fore-yellow {\n  color: #adad27;\n}\n.line-content .log-fore-yellow.log-underline {\n  -webkit-text-decoration-color: #adad27;\n          text-decoration-color: #adad27;\n}\n.line-content .log-fore-bright-yellow {\n  color: #eaec23;\n}\n.line-content .log-fore-bright-yellow.log-underline {\n  -webkit-text-decoration-color: #eaec23;\n          text-decoration-color: #eaec23;\n}\n.line-content .log-back-yellow {\n  background: #adad27;\n}\n.line-content .log-back-bright-yellow {\n  background: #eaec23;\n}\n.line-content .log-fore-blue {\n  color: #492ee1;\n}\n.line-content .log-fore-blue.log-underline {\n  -webkit-text-decoration-color: #492ee1;\n          text-decoration-color: #492ee1;\n}\n.line-content .log-fore-bright-blue {\n  color: #5833ff;\n}\n.line-content .log-fore-bright-blue.log-underline {\n  -webkit-text-decoration-color: #5833ff;\n          text-decoration-color: #5833ff;\n}\n.line-content .log-back-blue {\n  background: #492ee1;\n}\n.line-content .log-back-bright-blue {\n  background: #5833ff;\n}\n.line-content .log-fore-magenta {\n  color: #d338d3;\n}\n.line-content .log-fore-magenta.log-underline {\n  -webkit-text-decoration-color: #d338d3;\n          text-decoration-color: #d338d3;\n}\n.line-content .log-fore-bright-magenta {\n  color: #b4009e;\n}\n.line-content .log-fore-bright-magenta.log-underline {\n  -webkit-text-decoration-color: #b4009e;\n          text-decoration-color: #b4009e;\n}\n.line-content .log-back-magenta {\n  background: #d338d3;\n}\n.line-content .log-back-bright-magenta {\n  background: #b4009e;\n}\n.line-content .log-fore-cyan {\n  color: #33bbc8;\n}\n.line-content .log-fore-cyan.log-underline {\n  -webkit-text-decoration-color: #33bbc8;\n          text-decoration-color: #33bbc8;\n}\n.line-content .log-fore-bright-cyan {\n  color: #61d6d6;\n}\n.line-content .log-fore-bright-cyan.log-underline {\n  -webkit-text-decoration-color: #61d6d6;\n          text-decoration-color: #61d6d6;\n}\n.line-content .log-back-cyan {\n  background: #33bbc8;\n}\n.line-content .log-back-bright-cyan {\n  background: #61d6d6;\n}\n.line-content .log-fore-white {\n  color: #cbcccd;\n}\n.line-content .log-fore-white.log-underline {\n  -webkit-text-decoration-color: #cbcccd;\n          text-decoration-color: #cbcccd;\n}\n.line-content .log-fore-bright-white {\n  color: #f2f2f2;\n}\n.line-content .log-fore-bright-white.log-underline {\n  -webkit-text-decoration-color: #f2f2f2;\n          text-decoration-color: #f2f2f2;\n}\n.line-content .log-back-white {\n  background: #cbcccd;\n}\n.line-content .log-back-bright-white {\n  background: #f2f2f2;\n}\n", map: {"version":3,"sources":["line-content.vue","/home/travis/build/FEMessage/log-viewer/src/components/line-content.vue"],"names":[],"mappings":"AAAA;EACE,iBAAiB;AACnB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,kBAAkB;AACpB;AACA;EACE,cAAc;AAChB;AACA;EACE,sCAA8B;UAA9B,8BAA8B;AAChC;AACA;EACE,cAAc;AAChB;AACA;EACE,sCAA8B;UAA9B,8BAA8B;AAChC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;AACA;ECCA,sCAAA;UAAA,8BAAA;AACA;AACA;EACA,cAAA;AACA;AACA;EACA,sCAAA;UAAA,8BAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,cAAA;AACA;AACA;EDCE,sCAA8B;UAA9B,8BAA8B;ACChC;AACA;EDCE,cAAc;ACChB;AACA;EACA,sCAAA;UAAA,8BAAA;AACA;ADCA;ECCA,mBAAA;AACA;ADCA;ECCA,mBAAA;AACA;AACA;EACA,cAAA;ADCA;ACCA;EACA,sCAAA;UAAA,8BAAA;AACA;ADCA;ECCA,cAAA;AACA;AACA;EACA,sCAAA;UAAA,8BAAA;ADCA;ACCA;EACA,mBAAA;AACA;AACA;EDCE,mBAAmB;ACCrB;AACA;EACA,cAAA;ADCA;ACCA;EACA,sCAAA;UAAA,8BAAA;AACA;AACA;EACA,cAAA;AACA;AACA;EACA,sCAAA;UAAA,8BAAA;AACA;AACA;EACA,mBAAA;AACA;ADCA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;AACA;EACE,sCAA8B;UAA9B,8BAA8B;AAChC;AACA;EACE,cAAc;AAChB;AACA;EACE,sCAA8B;UAA9B,8BAA8B;AAChC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;AACA;EACE,sCAA8B;UAA9B,8BAA8B;AAChC;AACA;EACE,cAAc;AAChB;AACA;EACE,sCAA8B;UAA9B,8BAA8B;AAChC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;AACA;EACE,sCAA8B;UAA9B,8BAA8B;AAChC;AACA;EACE,cAAc;AAChB;AACA;EACE,sCAA8B;UAA9B,8BAA8B;AAChC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB","file":"line-content.vue","sourcesContent":[".line-content .log-bold {\n  font-weight: bold;\n}\n.line-content .log-underline {\n  text-decoration: underline;\n}\n.line-content .log-italic {\n  font-style: italic;\n}\n.line-content .log-fore-black {\n  color: #000000;\n}\n.line-content .log-fore-black.log-underline {\n  text-decoration-color: #000000;\n}\n.line-content .log-fore-bright-black {\n  color: #818383;\n}\n.line-content .log-fore-bright-black.log-underline {\n  text-decoration-color: #818383;\n}\n.line-content .log-back-black {\n  background: #000000;\n}\n.line-content .log-back-bright-black {\n  background: #818383;\n}\n.line-content .log-fore-red {\n  color: #c23621;\n}\n.line-content .log-fore-red.log-underline {\n  text-decoration-color: #c23621;\n}\n.line-content .log-fore-bright-red {\n  color: #fc391f;\n}\n.line-content .log-fore-bright-red.log-underline {\n  text-decoration-color: #fc391f;\n}\n.line-content .log-back-red {\n  background: #c23621;\n}\n.line-content .log-back-bright-red {\n  background: #fc391f;\n}\n.line-content .log-fore-green {\n  color: #25bc24;\n}\n.line-content .log-fore-green.log-underline {\n  text-decoration-color: #25bc24;\n}\n.line-content .log-fore-bright-green {\n  color: #31e722;\n}\n.line-content .log-fore-bright-green.log-underline {\n  text-decoration-color: #31e722;\n}\n.line-content .log-back-green {\n  background: #25bc24;\n}\n.line-content .log-back-bright-green {\n  background: #31e722;\n}\n.line-content .log-fore-yellow {\n  color: #adad27;\n}\n.line-content .log-fore-yellow.log-underline {\n  text-decoration-color: #adad27;\n}\n.line-content .log-fore-bright-yellow {\n  color: #eaec23;\n}\n.line-content .log-fore-bright-yellow.log-underline {\n  text-decoration-color: #eaec23;\n}\n.line-content .log-back-yellow {\n  background: #adad27;\n}\n.line-content .log-back-bright-yellow {\n  background: #eaec23;\n}\n.line-content .log-fore-blue {\n  color: #492ee1;\n}\n.line-content .log-fore-blue.log-underline {\n  text-decoration-color: #492ee1;\n}\n.line-content .log-fore-bright-blue {\n  color: #5833ff;\n}\n.line-content .log-fore-bright-blue.log-underline {\n  text-decoration-color: #5833ff;\n}\n.line-content .log-back-blue {\n  background: #492ee1;\n}\n.line-content .log-back-bright-blue {\n  background: #5833ff;\n}\n.line-content .log-fore-magenta {\n  color: #d338d3;\n}\n.line-content .log-fore-magenta.log-underline {\n  text-decoration-color: #d338d3;\n}\n.line-content .log-fore-bright-magenta {\n  color: #b4009e;\n}\n.line-content .log-fore-bright-magenta.log-underline {\n  text-decoration-color: #b4009e;\n}\n.line-content .log-back-magenta {\n  background: #d338d3;\n}\n.line-content .log-back-bright-magenta {\n  background: #b4009e;\n}\n.line-content .log-fore-cyan {\n  color: #33bbc8;\n}\n.line-content .log-fore-cyan.log-underline {\n  text-decoration-color: #33bbc8;\n}\n.line-content .log-fore-bright-cyan {\n  color: #61d6d6;\n}\n.line-content .log-fore-bright-cyan.log-underline {\n  text-decoration-color: #61d6d6;\n}\n.line-content .log-back-cyan {\n  background: #33bbc8;\n}\n.line-content .log-back-bright-cyan {\n  background: #61d6d6;\n}\n.line-content .log-fore-white {\n  color: #cbcccd;\n}\n.line-content .log-fore-white.log-underline {\n  text-decoration-color: #cbcccd;\n}\n.line-content .log-fore-bright-white {\n  color: #f2f2f2;\n}\n.line-content .log-fore-bright-white.log-underline {\n  text-decoration-color: #f2f2f2;\n}\n.line-content .log-back-white {\n  background: #cbcccd;\n}\n.line-content .log-back-bright-white {\n  background: #f2f2f2;\n}\n","<template>\n  <div class=\"line-content\">\n    <span\n      v-for=\"(item, index) in content\"\n      :key=\"index\"\n      :class=\"[\n        {\n          'log-bold': item.bold,\n          'log-underline': item.underline,\n          'log-italic': item.italic\n        },\n        item.foreground ? 'log-fore-' + item.foreground : '',\n        item.background ? 'log-back-' + item.background : ''\n      ]\"\n      >{{ item.text }}</span\n    >\n  </div>\n</template>\n<script>\nexport default {\n  name: 'LineContent',\n  props: {\n    /**\n     * log text content\n     */\n    content: Array\n  }\n}\n</script>\n\n<style lang=\"less\">\n@black: rgb(0, 0, 0);\n@red: rgb(194, 54, 33);\n@green: rgb(37, 188, 36);\n@yellow: rgb(173, 173, 39);\n@blue: rgb(73, 46, 225);\n@magenta: rgb(211, 56, 211);\n@cyan: rgb(51, 187, 200);\n@white: rgb(203, 204, 205);\n@bright-black: rgb(129, 131, 131);\n@bright-red: rgb(252, 57, 31);\n@bright-green: rgb(49, 231, 34);\n@bright-yellow: rgb(234, 236, 35);\n@bright-blue: rgb(88, 51, 255);\n@bright-magenta: rgb(180, 0, 158);\n@bright-cyan: rgb(97, 214, 214);\n@bright-white: rgb(242, 242, 242);\n.log(@color) {\n  @bright: 'bright-@{color}';\n\n  .log-fore-@{color} {\n    color: @@color;\n\n    &.log-underline {\n      text-decoration-color: @@color;\n    }\n  }\n\n  .log-fore-bright-@{color} {\n    color: @@bright;\n\n    &.log-underline {\n      text-decoration-color: @@bright;\n    }\n  }\n\n  .log-back-@{color} {\n    background: @@color;\n  }\n\n  .log-back-bright-@{color} {\n    background: @@bright;\n  }\n}\n\n.line-content {\n  .log-bold {\n    font-weight: bold;\n  }\n\n  .log-underline {\n    text-decoration: underline;\n  }\n\n  .log-italic {\n    font-style: italic;\n  }\n  .log(black);\n  .log(red);\n  .log(green);\n  .log(yellow);\n  .log(blue);\n  .log(magenta);\n  .log(cyan);\n  .log(white);\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var LineContent = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

//
//
//
var script$1 = {
  name: 'LineNumber',
  props: {
    number: Number,
    className: [String, Array, Object]
  }
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "line-number", class: _vm.className }, [
    _vm._v(_vm._s(_vm.number))
  ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var LineNumber = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

//
var script$2 = {
  name: 'LineWrapper',
  components: {
    LineContent: LineContent,
    LineNumber: LineNumber
  },
  props: {
    /**
     * line-content attrs
     */
    data: {
      type: Array,
      "default": function _default() {
        return [{
          text: ''
        }];
      }
    },

    /**
     * the line height
     */
    height: {
      type: [Number, String],
      "default": 20
    },
    comStyle: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    hasNumber: Boolean,
    numberData: Object
  },
  computed: {
    customStyle: function customStyle() {
      var height = typeof this.height === 'number' ? this.height + 'px' : this.height;
      return Object.assign({
        lineHeight: height,
        height: height
      }, this.comStyle);
    }
  }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "line-wrapper", style: _vm.customStyle },
    [
      _vm.hasNumber
        ? _c("line-number", _vm._b({}, "line-number", _vm.numberData, false))
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default", [_c("line-content", { attrs: { content: _vm.data } })])
    ],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-831b9dda_0", { source: ".line-wrapper {\n  display: flex;\n  color: #f1f1f1;\n  line-height: 20px;\n  height: 20px;\n  white-space: pre;\n  box-sizing: border-box;\n  padding-left: 16px;\n}\n.line-wrapper:hover {\n  background-color: #444;\n}\n.line-wrapper .line-number {\n  min-width: 40px;\n  text-align: right;\n  color: #666;\n  padding-right: 10px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n", map: {"version":3,"sources":["line-wrapper.vue"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB","file":"line-wrapper.vue","sourcesContent":[".line-wrapper {\n  display: flex;\n  color: #f1f1f1;\n  line-height: 20px;\n  height: 20px;\n  white-space: pre;\n  box-sizing: border-box;\n  padding-left: 16px;\n}\n.line-wrapper:hover {\n  background-color: #444;\n}\n.line-wrapper .line-number {\n  min-width: 40px;\n  text-align: right;\n  color: #666;\n  padding-right: 10px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  

  
  var LineWrapper = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
  name: 'LogLoading'
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    { staticClass: "log-loading" },
    [_vm._t("default", [_vm._m(0)])],
    2
  )
};
var __vue_staticRenderFns__$3 = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", { staticClass: "loading-dots" }, [
      _c("span", { staticClass: "dot" }, [_vm._v("•")]),
      _vm._v(" "),
      _c("span", { staticClass: "dot" }, [_vm._v("•")]),
      _vm._v(" "),
      _c("span", { staticClass: "dot" }, [_vm._v("•")])
    ])
  }
];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-67e231d4_0", { source: ".log-loading .loading-dots .dot {\n  -webkit-animation: blink 0.6s infinite both;\n          animation: blink 0.6s infinite both;\n  margin-left: -1px;\n}\n.log-loading .loading-dots .dot:first-child {\n  margin-left: 0;\n}\n.log-loading .loading-dots .dot:nth-child(2) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.log-loading .loading-dots .dot:nth-child(3) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n@-webkit-keyframes blink {\n0% {\n    opacity: 0.2;\n}\n20% {\n    opacity: 1;\n}\n100% {\n    opacity: 0.2;\n}\n}\n@keyframes blink {\n0% {\n    opacity: 0.2;\n}\n20% {\n    opacity: 1;\n}\n100% {\n    opacity: 0.2;\n}\n}\n", map: {"version":3,"sources":["loading.vue","/home/travis/build/FEMessage/log-viewer/src/components/loading.vue"],"names":[],"mappings":"AAAA;EACE,2CAAmC;UAAnC,mCAAmC;EACnC,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;EACE,6BAAqB;UAArB,qBAAqB;AACvB;AACA;EACE,6BAAqB;UAArB,qBAAqB;AACvB;AACA;AACE;IACE,YAAY;AACd;AACA;ICCF,UAAA;AACA;AACA;IACA,YAAA;AACA;ADCA;AAVA;AACE;IACE,YAAY;AACd;AACA;ICCF,UAAA;AACA;AACA;IACA,YAAA;AACA;ADCA","file":"loading.vue","sourcesContent":[".log-loading .loading-dots .dot {\n  animation: blink 0.6s infinite both;\n  margin-left: -1px;\n}\n.log-loading .loading-dots .dot:first-child {\n  margin-left: 0;\n}\n.log-loading .loading-dots .dot:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.log-loading .loading-dots .dot:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes blink {\n  0% {\n    opacity: 0.2;\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\n","<template>\n  <span class=\"log-loading\">\n    <slot>\n      <span class=\"loading-dots\">\n        <span class=\"dot\">•</span>\n        <span class=\"dot\">•</span>\n        <span class=\"dot\">•</span>\n      </span>\n    </slot>\n  </span>\n</template>\n<script>\nexport default {\n  name: 'LogLoading'\n}\n</script>\n\n<style lang=\"less\">\n.log-loading {\n  .loading-dots {\n    .dot {\n      animation: blink 0.6s infinite both;\n      margin-left: -1px;\n\n      &:first-child {\n        margin-left: 0;\n      }\n\n      &:nth-child(2) {\n        animation-delay: 0.2s;\n      }\n\n      &:nth-child(3) {\n        animation-delay: 0.4s;\n      }\n    }\n\n    @keyframes blink {\n      0% {\n        opacity: 0.2;\n      }\n\n      20% {\n        opacity: 1;\n      }\n\n      100% {\n        opacity: 0.2;\n      }\n    }\n  }\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  

  
  var LogLoading = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    browser,
    undefined
  );

/* eslint-disable no-plusplus, no-continue */
// CSI解释器，参考
// 字体颜色https://github.com/mozilla-frontend-infra/react-lazylog/blob/master/src/ansiparse.js
var foregroundColors = {
  '30': 'black',
  '31': 'red',
  '32': 'green',
  '33': 'yellow',
  '34': 'blue',
  '35': 'magenta',
  '36': 'cyan',
  '37': 'white',
  '90': 'bright-black',
  '91': 'bright-red',
  '92': 'bright-green',
  '93': 'bright-yellow',
  '94': 'bright-blue',
  '95': 'bright-magenta',
  '96': 'bright-cyan',
  '97': 'bright-white' // 字体背景

};
var backgroundColors = {
  '40': 'black',
  '41': 'red',
  '42': 'green',
  '43': 'yellow',
  '44': 'blue',
  '45': 'magenta',
  '46': 'cyan',
  '47': 'white',
  '100': 'bright-black',
  '101': 'bright-red',
  '102': 'bright-green',
  '103': 'bright-yellow',
  '104': 'bright-blue',
  '105': 'bright-magenta',
  '106': 'bright-cyan',
  '107': 'bright-white' // 文字状态（粗体，斜体，下划线）

};
var styles$1 = {
  '1': 'bold',
  '3': 'italic',
  '4': 'underline' // Select Graphic Rendition(SGR) flag

};
var SGRCode = 'm'; // 非SGR，后续可针对该控制符进行解释

var notSGRCodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'S', 'T', 'f', 's', 'u', 'h', 'l'];
/**
 * 格式化数据类型
 * interface formatter {
 *   text: string,
 *   foreground?: string,
 *   background?: string,
 *   underline?: boolean,
 *   bold?: boolean,
 *   italic?: boolean,
 * }
 **/

/**
 * Backspace操作,即删除最后一个字符
 * matchingText: string,
 * result: formatter[]
 * eraseChar: [string,formatter[]]
 * */

var eraseChar = function eraseChar(matchingText, result) {
  if (matchingText.length) {
    return [matchingText.substr(0, matchingText.length - 1), result];
  } else if (result.length) {
    var index = result.length - 1;
    var text = result[index].text;
    var newResult = text.length === 1 ? result.slice(0, result.length - 1) : result.map(function (item, i) {
      return index === i ? _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, item, {
        text: text.substr(0, text.length - 1)
      }) : item;
    });
    return [matchingText, newResult];
  }

  return [matchingText, result];
};
/**
 * str: string
 * ansiParse: formatter[]
 * This Function only translate these codes: 1,3,4,22-24,30-37,39,40-47,49,90-97,100-107.
 * It would be more and more powerful and translate more codes.
 **/


var ansiParse = function ansiParse(str) {
  var matchingControl = null;
  var matchingCode = null;
  var matchingText = '';
  var ansiState = [];
  var result = [];
  var state = {};

  for (var i = 0; i < str.length; i++) {
    if (matchingControl !== null) {
      if (matchingControl === '\x1b' && str[i] === '[') {
        if (matchingText) {
          state.text = matchingText;
          result.push(state);
          state = {};
          matchingText = '';
        }

        matchingControl = null;
        matchingCode = '';
      } else {
        matchingText += matchingControl + str[i];
        matchingControl = null;
      }

      continue;
    } else if (matchingCode !== null) {
      if (str[i] === ';') {
        ansiState.push(matchingCode);
        matchingCode = '';
      } else if (str[i] === SGRCode) {
        ansiState.push(matchingCode);
        matchingCode = null;
        matchingText = '';

        for (var a = 0; a < ansiState.length; a++) {
          var ansiCode = +ansiState[a];

          if (foregroundColors[ansiCode]) {
            state.foreground = foregroundColors[ansiCode];
          } else if (backgroundColors[ansiCode]) {
            state.background = backgroundColors[ansiCode];
          } else if (ansiCode === 39) {
            delete state.foreground;
          } else if (ansiCode === 49) {
            delete state.background;
          } else if (styles$1[ansiCode]) {
            state[styles$1[ansiCode]] = true;
          } else if (ansiCode === 22) {
            state.bold = false;
          } else if (ansiCode === 23) {
            state.italic = false;
          } else if (ansiCode === 24) {
            state.underline = false;
          }
        }

        ansiState = [];
      } else if (notSGRCodes.indexOf(str[i]) > -1) {
        // Ignore codes which is not SGR code and delete them.
        // It should be translated in some day.
        matchingCode = '';
        ansiState = [];
      } else {
        matchingCode += str[i];
      }

      continue;
    }

    if (str[i] === '\x1b') {
      // ESC Control
      matchingControl = str[i];
    } else if (str[i] === "\b") {

      var _eraseChar = eraseChar(matchingText, result);

      var _eraseChar2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_eraseChar, 2);

      matchingText = _eraseChar2[0];
      result = _eraseChar2[1];
    } else {
      matchingText += str[i];
    }
  }

  if (matchingText) {
    state.text = matchingText + (matchingControl || '');
    result.push(state);
  }

  return result;
};

var ENCODED_NEWLINE = /\r{0,1}\n(?!\u0008)/; // RegExp reference:
// http://jafrog.com/2013/11/23/colors-in-terminal.html
// https://en.wikipedia.org/wiki/ANSI_escape_code

var split2Lines = function split2Lines(str) {
  return str.split(ENCODED_NEWLINE);
};
var parse = (function (log) {
  var stringLines = split2Lines(log);
  var stringLinesText = [];
  stringLines.forEach(function (line) {
    if (!line) {
      return;
    }

    stringLinesText.push(ansiParse(line));
  });
  return stringLinesText;
});

//
var script$4 = {
  name: 'LogViewer',
  components: {
    VirtualList: vue_virtual_scroll_list__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    /**
     * VirtualList original props
     * Reference: https://github.com/tangbc/vue-virtual-scroll-list
     */
    virtualAttrs: {
      type: Object,
      "default": function _default() {}
    },

    /**
     * A fixed row height in pixels. Controls how tall a line is, as well as the lineHeight style of the line's text.
     * Defaults to 20.
     */
    rowHeight: {
      type: Number,
      "default": 20
    },

    /**
     * The log-viewer container height
     * Defaults to 0,and the component is 30 * rowHeight
     */
    height: {
      type: Number,
      "default": 0
    },

    /**
     * The orginal log text shuold be shown
     */
    log: String,

    /**
     * Loading Status flag
     */
    loading: Boolean,

    /**
     * Auto scroll to the bottom when the logs update. Defaults to be true
     */
    autoScroll: {
      type: Boolean,
      "default": true
    },

    /**
     * Has number line if hasNumber is true. Defaults to be true.
     */
    hasNumber: {
      type: Boolean,
      "default": true
    },

    /**
     * Auto scroll to bottom's time duration(ms), defaults to 0 means to no duration.
     */
    scrollDuration: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      start: 0,
      scrollStart: 0,
      animate: null,
      LineWrapper: LineWrapper
    };
  },
  computed: {
    remain: function remain() {
      if (typeof +this.height === 'number') {
        return this.height > 0 ? Math.floor(this.height / this.rowHeight) : 30;
      }

      if (this.height.indexOf('px') > 0) {
        return Math.floor(this.height.split('px')[0] / this.rowHeight);
      }

      return 30;
    },
    lines: function lines() {
      return parse(this.log);
    },
    linesCount: function linesCount() {
      return this.lines.length + (this.loading ? 1 : 0);
    }
  },
  watch: {
    lines: {
      immediate: true,
      handler: function handler(lines) {
        this.$refs.virturalList && this.$refs.virturalList.forceRender();

        if (this.autoScroll) {
          this.setScrollTop(this.linesCount);
        }
      }
    }
  },
  methods: {
    /**
     * virturalList forceRender method
     */
    forceRender: function forceRender() {
      this.$refs.virturalList.forceRender();
    },
    //
    getLineWrapperProps: function getLineWrapperProps(index) {
      var _this = this;

      var height = this.rowHeight;
      var props = {
        height: height,
        hasNumber: this.hasNumber,
        numberData: {
          number: index + 1
        }
      };
      this.lineWrapperStyle && (props.comStyle = this.lineWrapperStyle(index + 1));

      if (this.loading && index === this.linesCount - 1) {
        return {
          props: props,
          scopedSlots: {
            "default": function _default() {
              return _this.$createElement(LogLoading);
            }
          }
        };
      }

      props.data = this.lines[index];
      return {
        props: props
      };
    },
    setScrollTop: function setScrollTop(line) {
      var _this2 = this;

      if (this.scrollDuration === 0) {
        this.$nextTick(function () {
          // 在nextick外面执行会导致自动滚动到上一次的位置
          _this2.start = _this2.linesCount;
        });
        return;
      }

      if (this.animate) {
        cancelAnimationFrame(this.animate);
      }

      var i = this.scrollStart;
      var step = 0;
      step = Math.abs(line - this.scrollStart) / (this.scrollDuration * 60 / 1e3);
      step = step < 1 ? 1 : step;

      var animation = function animation() {
        _this2.animate = requestAnimationFrame(function () {
          // 从起始行开始滚动，若起始行小于目标行时，每帧逐渐增加行数（向下滚），直到目标行
          // 同理，若起始行大于目标行时，每帧减少行数（向上滚），直到目标行
          // 若当前行在目标行范围内[line-step,line+step], 直接滚到目标行
          if (i < line - step || i > line + step) {
            _this2.start = i;
            i = Math.floor(i < line - step ? i + step : i - step);
            animation();
          } else {
            _this2.start = line;
            _this2.scrollStart = _this2.start;
          }
        });
      };

      animation();
    },
    onscroll: function onscroll(event, data) {
      this.scrollStart = Math.ceil(data.offset / this.rowHeight);
    }
  }
};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "virtual-list",
    _vm._b(
      {
        ref: "virturalList",
        staticClass: "log-viewer",
        attrs: {
          size: _vm.rowHeight,
          remain: _vm.remain,
          bench: 0,
          start: _vm.start,
          item: _vm.LineWrapper,
          itemcount: _vm.linesCount,
          itemprops: _vm.getLineWrapperProps,
          onscroll: _vm.onscroll
        }
      },
      "virtual-list",
      _vm.virtualAttrs,
      false
    )
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-75033634_0", { source: ".log-viewer {\n  font-size: 12px;\n  background-color: #222;\n  overflow-x: auto;\n  padding: 20px 0;\n}\n", map: {"version":3,"sources":["log-viewer.vue"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;AACjB","file":"log-viewer.vue","sourcesContent":[".log-viewer {\n  font-size: 12px;\n  background-color: #222;\n  overflow-x: auto;\n  padding: 20px 0;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  

  
  var Component = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    browser,
    undefined
  );

// Import vue component
// the same plugin more than once,
// so calling it multiple times on the same plugin
// will install the plugin only once

Component.install = function (Vue) {
  Vue.component(Component.name, Component);
}; // To auto-install when vue is found


var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(Component);
} // To allow use as module (npm/webpack/etc.) export component
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

/* harmony default export */ __webpack_exports__["default"] = (Component);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-virtual-scroll-list/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-virtual-scroll-list/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (root, factory) {
  var namespace = 'VirtualList';
  /* istanbul ignore next */

  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') {
    module.exports = factory(namespace, __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"));
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory.bind(root, namespace)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (namespace, Vue) {
  /* istanbul ignore next */
  if (_typeof(Vue) === 'object' && typeof Vue["default"] === 'function') {
    Vue = Vue["default"];
  }
  /* istanbul ignore next */


  var _debounce = function _debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this;
      var args = arguments;

      var later = function later() {
        timeout = null;

        if (!immediate) {
          func.apply(context, args);
        }
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);

      if (callNow) {
        func.apply(context, args);
      }
    };
  };

  return Vue.component(namespace, {
    props: {
      size: {
        type: Number,
        required: true
      },
      remain: {
        type: Number,
        required: true
      },
      rtag: {
        type: String,
        "default": 'div'
      },
      wtag: {
        type: String,
        "default": 'div'
      },
      wclass: {
        type: String,
        "default": ''
      },
      wstyle: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      pagemode: {
        type: Boolean,
        "default": false
      },
      scrollelement: {
        type: typeof window === 'undefined' ? Object : HTMLElement,
        "default": null
      },
      start: {
        type: Number,
        "default": 0
      },
      offset: {
        type: Number,
        "default": 0
      },
      variable: {
        type: [Function, Boolean],
        "default": false
      },
      bench: {
        type: Number,
        "default": 0 // also equal to remain

      },
      debounce: {
        type: Number,
        "default": 0
      },
      totop: {
        type: [Function, Boolean],
        "default": false
      },
      tobottom: {
        type: [Function, Boolean],
        "default": false
      },
      onscroll: {
        type: [Function, Boolean],
        // Boolean disables default behavior
        "default": false
      },
      istable: {
        type: Boolean,
        "default": false
      },
      item: {
        type: [Function, Object],
        "default": null
      },
      itemcount: {
        type: Number,
        "default": 0
      },
      itemprops: {
        type: Function,

        /* istanbul ignore next */
        "default": function _default() {}
      }
    },
    // use changeProp to identify the prop change.
    watch: {
      size: function size() {
        this.changeProp = 'size';
      },
      remain: function remain() {
        this.changeProp = 'remain';
      },
      bench: function bench() {
        this.changeProp = 'bench';
        this.itemModeForceRender();
      },
      start: function start() {
        this.changeProp = 'start';
        this.itemModeForceRender();
      },
      offset: function offset() {
        this.changeProp = 'offset';
        this.itemModeForceRender();
      },
      itemcount: function itemcount() {
        this.changeProp = 'itemcount';
        this.itemModeForceRender();
      },
      scrollelement: function scrollelement(newScrollelement, oldScrollelement) {
        if (this.pagemode) {
          return;
        }

        if (oldScrollelement) {
          this.removeScrollListener(oldScrollelement);
        }

        if (newScrollelement) {
          this.addScrollListener(newScrollelement);
        }
      }
    },
    created: function created() {
      var start = this.start >= this.remain ? this.start : 0;
      var keeps = this.remain + (this.bench || this.remain);
      var delta = Object.create(null);
      delta.direction = ''; // current scroll direction, D: down, U: up.

      delta.scrollTop = 0; // current scroll top, use to direction.

      delta.start = start; // start index.

      delta.end = start + keeps - 1; // end index.

      delta.keeps = keeps; // nums keeping in real dom.

      delta.total = 0; // all items count, update in filter.

      delta.offsetAll = 0; // cache all the scrollable offset.

      delta.paddingTop = 0; // container wrapper real padding-top.

      delta.paddingBottom = 0; // container wrapper real padding-bottom.

      delta.varCache = {}; // object to cache variable index height and scroll offset.

      delta.varAverSize = 0; // average/estimate item height before variable be calculated.

      delta.varLastCalcIndex = 0; // last calculated variable height/offset index, always increase.

      this.delta = delta;
    },
    mounted: function mounted() {
      if (this.pagemode) {
        this.addScrollListener(window);
      } else if (this.scrollelement) {
        this.addScrollListener(this.scrollelement);
      }

      if (this.start) {
        var start = this.getZone(this.start).start;
        this.setScrollTop(this.variable ? this.getVarOffset(start) : start * this.size);
      } else if (this.offset) {
        this.setScrollTop(this.offset);
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.pagemode) {
        this.removeScrollListener(window);
      } else if (this.scrollelement) {
        this.removeScrollListener(this.scrollelement);
      }
    },
    // check if delta should update when props change.
    beforeUpdate: function beforeUpdate() {
      var delta = this.delta;
      delta.keeps = this.remain + (this.bench || this.remain);
      var calcstart = this.changeProp === 'start' ? this.start : delta.start;
      var zone = this.getZone(calcstart); // if start, size or offset change, update scroll position.

      if (this.changeProp && ['start', 'size', 'offset'].includes(this.changeProp)) {
        var scrollTop = this.changeProp === 'offset' ? this.offset : this.variable ? this.getVarOffset(zone.isLast ? delta.total : zone.start) : zone.isLast && delta.total - calcstart <= this.remain ? delta.total * this.size : calcstart * this.size;
        this.$nextTick(this.setScrollTop.bind(this, scrollTop));
      } // if points out difference, force update once again.


      if (this.changeProp || delta.end !== zone.end || calcstart !== zone.start) {
        this.changeProp = '';
        delta.end = zone.end;
        delta.start = zone.start;
        this.forceRender();
      }
    },
    methods: {
      // add pagemode/scrollelement scroll event listener
      addScrollListener: function addScrollListener(element) {
        this.scrollHandler = this.debounce ? _debounce(this.onScroll.bind(this), this.debounce) : this.onScroll;
        element.addEventListener('scroll', this.scrollHandler, false);
      },
      // remove pagemode/scrollelement scroll event listener
      removeScrollListener: function removeScrollListener(element) {
        element.removeEventListener('scroll', this.scrollHandler, false);
      },
      onScroll: function onScroll(event) {
        var delta = this.delta;
        var vsl = this.$refs.vsl;
        var offset;

        if (this.pagemode) {
          var elemRect = this.$el.getBoundingClientRect();
          offset = -elemRect.top;
        } else if (this.scrollelement) {
          var scrollelementRect = this.scrollelement.getBoundingClientRect();

          var _elemRect = this.$el.getBoundingClientRect();

          offset = scrollelementRect.top - _elemRect.top;
        } else {
          offset = vsl && (vsl.$el || vsl).scrollTop || 0;
        }

        delta.direction = offset > delta.scrollTop ? 'D' : 'U';
        delta.scrollTop = offset;

        if (delta.total > delta.keeps) {
          this.updateZone(offset);
        } else {
          delta.end = delta.total - 1;
        }

        var offsetAll = delta.offsetAll;

        if (this.onscroll) {
          var param = Object.create(null);
          param.offset = offset;
          param.offsetAll = offsetAll;
          param.start = delta.start;
          param.end = delta.end;
          this.onscroll(event, param);
        }

        if (!offset && delta.total) {
          this.fireEvent('totop');
        }

        if (offset >= offsetAll) {
          this.fireEvent('tobottom');
        }
      },
      // update render zone by scroll offset.
      updateZone: function updateZone(offset) {
        var delta = this.delta;
        var overs = this.variable ? this.getVarOvers(offset) : Math.floor(offset / this.size); // if scroll up, we'd better decrease it's numbers.

        if (delta.direction === 'U') {
          overs = overs - this.remain + 1;
        }

        var zone = this.getZone(overs);
        var bench = this.bench || this.remain; // for better performance, if scroll passes items within the bench, do not update.
        // and if it's close to the last item, render next zone immediately.

        var shouldRenderNextZone = Math.abs(overs - delta.start - bench) === 1;

        if (!shouldRenderNextZone && overs - delta.start <= bench && !zone.isLast && overs > delta.start) {
          return;
        } // make sure forceRender calls as less as possible.


        if (shouldRenderNextZone || zone.start !== delta.start || zone.end !== delta.end) {
          delta.end = zone.end;
          delta.start = zone.start;
          this.forceRender();
        }
      },
      // return the right zone info based on `start/index`.
      getZone: function getZone(index) {
        var start, end;
        var delta = this.delta;
        index = parseInt(index, 10);
        index = Math.max(0, index);
        var lastStart = delta.total - delta.keeps;
        var isLast = index <= delta.total && index >= lastStart || index > delta.total;

        if (isLast) {
          start = Math.max(0, lastStart);
        } else {
          start = index;
        }

        end = start + delta.keeps - 1;

        if (delta.total && end > delta.total) {
          end = delta.total - 1;
        }

        return {
          end: end,
          start: start,
          isLast: isLast
        };
      },
      // public method, force render ui list if needed.
      // call this before the next rerender to get better performance.
      forceRender: function forceRender() {
        var _this = this;

        window.requestAnimationFrame(function () {
          _this.$forceUpdate();
        });
      },
      // force render ui if using item-mode.
      itemModeForceRender: function itemModeForceRender() {
        if (this.item) {
          this.forceRender();
        }
      },
      // return the scroll of passed items count in variable.
      getVarOvers: function getVarOvers(offset) {
        var low = 0;
        var middle = 0;
        var middleOffset = 0;
        var delta = this.delta;
        var high = delta.total;

        while (low <= high) {
          middle = low + Math.floor((high - low) / 2);
          middleOffset = this.getVarOffset(middle); // calculate the average variable height at first binary search.

          if (!delta.varAverSize) {
            delta.varAverSize = Math.floor(middleOffset / middle);
          }

          if (middleOffset === offset) {
            return middle;
          } else if (middleOffset < offset) {
            low = middle + 1;
          } else if (middleOffset > offset) {
            high = middle - 1;
          }
        }

        return low > 0 ? --low : 0;
      },
      // return a variable scroll offset from given index.
      getVarOffset: function getVarOffset(index, nocache) {
        var delta = this.delta;
        var cache = delta.varCache[index];

        if (!nocache && cache) {
          return cache.offset;
        }

        var offset = 0;

        for (var i = 0; i < index; i++) {
          var size = this.getVarSize(i, nocache);
          delta.varCache[i] = {
            size: size,
            offset: offset
          };
          offset += size;
        }

        delta.varLastCalcIndex = Math.max(delta.varLastCalcIndex, index - 1);
        delta.varLastCalcIndex = Math.min(delta.varLastCalcIndex, delta.total - 1);
        return offset;
      },
      // return a variable size (height) from given index.
      getVarSize: function getVarSize(index, nocache) {
        var cache = this.delta.varCache[index];

        if (!nocache && cache) {
          return cache.size;
        }

        if (typeof this.variable === 'function') {
          return this.variable(index) || 0;
        } else {
          // when using item, it can only get current components height,
          // need to be enhanced, or consider using variable-function instead
          var slot = this.item ? this.$children[index] ? this.$children[index].$vnode : null : this.$slots["default"][index];
          var style = slot && slot.data && slot.data.style;

          if (style && style.height) {
            var shm = style.height.match(/^(.*)px$/);
            return shm && +shm[1] || 0;
          }
        }

        return 0;
      },
      // return the variable paddingTop based on current zone.
      // @todo: if set a large `start` before variable was calculated,
      // here will also case too much offset calculate when list is very large,
      // consider use estimate paddingTop in this case just like `getVarPaddingBottom`.
      getVarPaddingTop: function getVarPaddingTop() {
        return this.getVarOffset(this.delta.start);
      },
      // return the variable paddingBottom based on the current zone.
      getVarPaddingBottom: function getVarPaddingBottom() {
        var delta = this.delta;
        var last = delta.total - 1;

        if (delta.total - delta.end <= delta.keeps || delta.varLastCalcIndex === last) {
          return this.getVarOffset(last) - this.getVarOffset(delta.end);
        } else {
          // if unreached last zone or uncalculated real behind offset
          // return the estimate paddingBottom and avoid too much calculations.
          return (delta.total - delta.end) * (delta.varAverSize || this.size);
        }
      },
      // return the variable all heights use to judge reach bottom.
      getVarAllHeight: function getVarAllHeight() {
        var delta = this.delta;

        if (delta.total - delta.end <= delta.keeps || delta.varLastCalcIndex === delta.total - 1) {
          return this.getVarOffset(delta.total);
        } else {
          return this.getVarOffset(delta.start) + (delta.total - delta.end) * (delta.varAverSize || this.size);
        }
      },
      // public method, allow the parent update variable by index.
      updateVariable: function updateVariable(index) {
        // clear/update all the offsets and heights ahead of index.
        this.getVarOffset(index, true);
      },
      // trigger a props event on parent.
      fireEvent: function fireEvent(event) {
        if (this[event]) {
          this[event]();
        }
      },
      // set manual scroll top.
      setScrollTop: function setScrollTop(scrollTop) {
        if (this.pagemode) {
          window.scrollTo(0, scrollTop);
        } else if (this.scrollelement) {
          this.scrollelement.scrollTo(0, scrollTop);
        } else {
          var vsl = this.$refs.vsl;

          if (vsl) {
            (vsl.$el || vsl).scrollTop = scrollTop;
          }
        }
      },
      // filter the shown items based on `start` and `end`.
      filter: function filter(h) {
        var delta = this.delta;
        var slots = this.$slots["default"] || []; // item-mode should be decided from items prop.

        if (this.item || this.$scopedSlots.item) {
          delta.total = this.itemcount;

          if (delta.keeps > delta.total) {
            delta.end = delta.total - 1;
          }
        } else {
          if (!slots.length) {
            delta.start = 0;
          }

          delta.total = slots.length;
        }

        var paddingTop, paddingBottom, allHeight;
        var hasPadding = delta.total > delta.keeps;

        if (this.variable) {
          allHeight = this.getVarAllHeight();
          paddingTop = hasPadding ? this.getVarPaddingTop() : 0;
          paddingBottom = hasPadding ? this.getVarPaddingBottom() : 0;
        } else {
          allHeight = this.size * delta.total;
          paddingTop = this.size * (hasPadding ? delta.start : 0);
          paddingBottom = this.size * (hasPadding ? delta.total - delta.keeps : 0) - paddingTop;
        }

        if (paddingBottom < this.size) {
          paddingBottom = 0;
        }

        delta.paddingTop = paddingTop;
        delta.paddingBottom = paddingBottom;
        delta.offsetAll = allHeight - this.size * this.remain;
        var renders = [];

        for (var i = delta.start; i < delta.total && i <= Math.ceil(delta.end); i++) {
          var slot = null;

          if (this.$scopedSlots.item) {
            slot = this.$scopedSlots.item(i);
          } else if (this.item) {
            slot = h(this.item, this.itemprops(i));
          } else {
            slot = slots[i];
          }

          renders.push(slot);
        }

        return renders;
      }
    },
    render: function render(h) {
      var dbc = this.debounce;
      var list = this.filter(h);
      var _this$delta = this.delta,
          paddingTop = _this$delta.paddingTop,
          paddingBottom = _this$delta.paddingBottom;
      var istable = this.istable;
      var wtag = istable ? 'div' : this.wtag;
      var rtag = istable ? 'div' : this.rtag;

      if (istable) {
        list = [h('table', [h('tbody', list)])];
      }

      var renderList = h(wtag, {
        style: Object.assign({
          display: 'block',
          'padding-top': paddingTop + 'px',
          'padding-bottom': paddingBottom + 'px'
        }, this.wstyle),
        "class": this.wclass,
        attrs: {
          role: 'group'
        }
      }, list); // page mode just render list, no wrapper.

      if (this.pagemode || this.scrollelement) {
        return renderList;
      }

      return h(rtag, {
        ref: 'vsl',
        style: {
          display: 'block',
          'overflow-y': this.size >= this.remain ? 'auto' : 'initial',
          height: this.size * this.remain + 'px'
        },
        on: {
          '&scroll': dbc ? _debounce(this.onScroll.bind(this), dbc) : this.onScroll
        }
      }, [renderList]);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=18.js.map