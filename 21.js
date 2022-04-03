(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resource/tree.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resource/tree.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var vue_jstree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-jstree */ "./node_modules/vue-jstree/dist/vue-jstree.js");
/* harmony import */ var vue_jstree__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_jstree__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_json_pretty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-json-pretty */ "./node_modules/vue-json-pretty/lib/vue-json-pretty.js");
/* harmony import */ var vue_json_pretty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_json_pretty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_resources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/resources */ "./src/api/resources.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ResourceTree',
  components: {
    VJstree: vue_jstree__WEBPACK_IMPORTED_MODULE_4___default.a,
    VueJsonPretty: vue_json_pretty__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  data: function data() {
    return {
      schema: {},
      form: {},
      show: false,
      enableEdit: false,
      newResource: {
        name: '',
        type: 'computer'
      },
      editingItem: {},
      editingNode: null,
      row: {},
      enableDraggable: false,
      treeData: [],
      loadData: this._.debounce(this._loadData, 250)
    };
  },
  created: function () {
    var _created = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api_resources__WEBPACK_IMPORTED_MODULE_6__["getSchema"])(this._);

            case 2:
              this.schema = _context.sent;

            case 3:
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
    mapItem: function mapItem(resource) {
      var icon;

      if (['maintenance', 'broken'].indexOf(this._.get(resource, 'status.value')) >= 0) {
        icon = 'el-icon-warning';
      } else {
        switch (resource.type) {
          case 'system':
            icon = 'el-icon-diagram3';
            break;

          case 'instrument':
            icon = 'el-icon-compass';
            break;

          case 'room':
            icon = 'el-icon-s-home';
            break;

          case 'computer':
            icon = 'el-icon-s-platform';
            break;

          case 'dut':
            icon = 'el-icon-mobile-phone';
            break;

          case 'accessories':
            icon = 'el-icon-cpu';
            break;

          default:
            break;
        }
      }

      this._.defaults(resource, {
        childs: []
      });

      var out = {
        text: resource.name,
        id: resource._id,
        icon: icon,
        isLeaf: this._.get(resource, 'childs', []).length === 0,
        resource: resource
      };
      return out;
    },
    mapItems: function () {
      var _mapItems = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(list) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", list.map(this.mapItem));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function mapItems(_x) {
        return _mapItems.apply(this, arguments);
      }

      return mapItems;
    }(),
    _loadData: function () {
      var _loadData2 = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(node, resolve) {
        var _node$data, _node$data$id, id, _node$data$resource, resource, root, query, list;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _node$data = node.data, _node$data$id = _node$data.id, id = _node$data$id === void 0 ? 0 : _node$data$id, _node$data$resource = _node$data.resource, resource = _node$data$resource === void 0 ? {} : _node$data$resource;
                console.log('_loadData:', id, resource);

                if (!(id === 0)) {
                  _context3.next = 7;
                  break;
                }

                root = {
                  text: 'root',
                  id: 1,
                  isLeaf: false
                };
                resolve([root]);
                _context3.next = 16;
                break;

              case 7:
                if (!(id === 1)) {
                  _context3.next = 11;
                  break;
                }

                this.getRoot().then(resolve);
                _context3.next = 16;
                break;

              case 11:
                query = {
                  parent: resource._id
                };
                _context3.next = 14;
                return this.findResources(query);

              case 14:
                list = _context3.sent;
                this.mapItems(list).then(resolve);

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _loadData(_x2, _x3) {
        return _loadData2.apply(this, arguments);
      }

      return _loadData;
    }(),
    findResources: function () {
      var _findResources = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(query) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query.s = {
                  name: 1
                };
                return _context4.abrupt("return", Object(_api_resources__WEBPACK_IMPORTED_MODULE_6__["resourceList"])(query).then(function (_ref) {
                  var data = _ref.data;
                  return data;
                }));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function findResources(_x4) {
        return _findResources.apply(this, arguments);
      }

      return findResources;
    }(),
    onSearch: function () {
      var _onSearch = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(input) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log("onTreeFilter(".concat(input, ")"));
                _context5.next = 3;
                return this.highlightTree(input);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onSearch(_x5) {
        return _onSearch.apply(this, arguments);
      }

      return onSearch;
    }(),
    highlightTree: function () {
      var _highlightTree = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(text) {
        var patt;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log('highlightTree', this.$refs);
                patt = new RegExp(text);
                this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, function (node) {
                  if (text !== '' && node.model !== undefined) {
                    var str = node.model.text;

                    if (patt.test(str)) {
                      node.$el.querySelector('.tree-anchor').style.color = 'red';
                    } else {
                      node.$el.querySelector('.tree-anchor').style.color = '#000';
                    } // or other operations

                  } else {
                    node.$el.querySelector('.tree-anchor').style.color = '#000';
                  }
                });

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function highlightTree(_x6) {
        return _highlightTree.apply(this, arguments);
      }

      return highlightTree;
    }(),
    getRoot: function () {
      var _getRoot = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var query, resources;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                query = {
                  q: {
                    $or: [{
                      parent: {
                        $exists: false
                      }
                    }, {
                      parent: null
                    }]
                  }
                };
                _context7.next = 3;
                return this.findResources(query);

              case 3:
                resources = _context7.sent;
                return _context7.abrupt("return", this.mapItems(resources));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getRoot() {
        return _getRoot.apply(this, arguments);
      }

      return getRoot;
    }(),
    itemDrop: function () {
      var _itemDrop = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(node, item, draggedItem, e) {
        var newParent, child, oldParent;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                console.log('itemDrop', node, item, draggedItem);
                newParent = node.model.resource;
                child = draggedItem.resource;

                if (!child.parent) {
                  _context8.next = 7;
                  break;
                }

                _context8.next = 6;
                return Object(_api_resources__WEBPACK_IMPORTED_MODULE_6__["searchResource"])(child.parent).then(function (_ref2) {
                  var data = _ref2.data;
                  return data;
                });

              case 6:
                oldParent = _context8.sent;

              case 7:
                _context8.prev = 7;
                console.log("dragged: ".concat(child.name, " new parent: ").concat(newParent ? newParent.name : 'root', ", old parent: ").concat(oldParent ? oldParent.name : ''));

                if (!(newParent && newParent.type === 'dut')) {
                  _context8.next = 11;
                  break;
                }

                throw new Error('cannot set to dut parent');

              case 11:
                if (!oldParent) {
                  _context8.next = 18;
                  break;
                }

                // update only when there was old parent...
                oldParent = this._.pick(oldParent, ['_id', 'childs']);

                this._.remove(oldParent.childs, function (item) {
                  return item === child._id;
                });

                oldParent.childs = this._.uniq(oldParent.childs);
                console.log('oldParent:after', oldParent);
                _context8.next = 18;
                return Object(_api_resources__WEBPACK_IMPORTED_MODULE_6__["updateResource"])(oldParent);

              case 18:
                if (!newParent) {
                  _context8.next = 25;
                  break;
                }

                // if new parent was root level
                newParent = this._.pick(newParent, ['_id', 'childs']);
                newParent.childs.push(child._id);
                newParent.childs = this._.uniq(newParent.childs);
                console.log('newParent:after', newParent);
                _context8.next = 25;
                return Object(_api_resources__WEBPACK_IMPORTED_MODULE_6__["updateResource"])(newParent);

              case 25:
                child = this._.pick(child, ['_id', 'parent']);
                child.parent = newParent ? newParent._id : undefined;
                console.log('child:after', child);
                _context8.next = 30;
                return Object(_api_resources__WEBPACK_IMPORTED_MODULE_6__["updateResource"])(child);

              case 30:
                this.$notify({
                  title: "resource saved",
                  message: "resource ".concat(child.name, " moved under new parent ").concat(newParent ? newParent.name : 'root'),
                  type: 'success',
                  duration: 2000
                });
                _context8.next = 36;
                break;

              case 33:
                _context8.prev = 33;
                _context8.t0 = _context8["catch"](7);
                this.$notify({
                  title: "dragndrop failed",
                  message: "cannot dragndrop resource ".concat(child.name, ": \n").concat(_context8.t0),
                  type: 'warning',
                  duration: 2000
                });

              case 36:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[7, 33]]);
      }));

      function itemDrop(_x7, _x8, _x9, _x10) {
        return _itemDrop.apply(this, arguments);
      }

      return itemDrop;
    }(),
    itemClick: function () {
      var _itemClick = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(node, item, e) {
        var resource, _id, _ref3, data;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                resource = this._.cloneDeep(node.model.resource);
                this.enableEdit = false; // by default cannot edit

                this.editingNode = node;
                this.editingItem = node.model;

                if (!node.model.isLeaf) {
                  _context9.next = 16;
                  break;
                }

                _id = resource._id;
                console.log('Get result: ', _id);
                _context9.next = 9;
                return Object(_api_resources__WEBPACK_IMPORTED_MODULE_6__["searchResource"])(_id);

              case 9:
                _ref3 = _context9.sent;
                data = _ref3.data;
                // eslint-disable-next-line no-console
                console.log("searchResult(".concat(_id, "): ").concat(JSON.stringify(data)));

                this._.unset(data, '__v');

                this.row = data;
                _context9.next = 17;
                break;

              case 16:
                this.row = resource;

              case 17:
                this.show = this._.has(resource, '_id');

                if (this.show) {
                  this.onReset();
                }

              case 19:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function itemClick(_x11, _x12, _x13) {
        return _itemClick.apply(this, arguments);
      }

      return itemClick;
    }(),
    openCreateModal: function openCreateModal() {
      this.$root.$emit('bv::show::modal', "modal-create-resource", '#btnShow');
    },
    onCreate: function () {
      var _onCreate = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var resource, item;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                console.log('create new resource...', this.newResource);
                _context10.next = 3;
                return Object(_api_resources__WEBPACK_IMPORTED_MODULE_6__["createResource"])(this.newResource);

              case 3:
                resource = _context10.sent;
                console.log('resource: ', resource);
                item = this.mapItem(resource);
                console.log('mapItem: ', item);
                console.log('treeData: ', this.treeData);
                this.treeData.push(item);
                this.newResource = {};

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function onCreate() {
        return _onCreate.apply(this, arguments);
      }

      return onCreate;
    }(),
    onSubmit: function () {
      var _onSubmit = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var item;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                console.log('onSubmit', this.form);

                if (!(this.form._id !== this.row._id)) {
                  _context11.next = 3;
                  break;
                }

                throw new Error('id mismatch');

              case 3:
                _context11.next = 5;
                return Object(_api_resources__WEBPACK_IMPORTED_MODULE_6__["updateResource"])(this.form);

              case 5:
                this._.merge(this.row, this.form);

                item = this.mapItem(this.row);

                this._.merge(this.editingItem, item);

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function onSubmit() {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }(),
    onReset: function onReset(event) {
      var _this = this;

      console.log('onReset', event);
      this.form = this._.pick(this.row, ['_id', 'name', 'type', 'usage.group']); // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    },
    onRemove: function () {
      var _onRemove = Object(_home_runner_work_opentmi_default_gui_opentmi_default_gui_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(event) {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                console.log('onRemove', event);
                this.$confirm('Confirm to remove the resource', 'Warning', {
                  confirmButtonText: 'Confirm',
                  cancelButtonText: 'Cancel',
                  type: 'warning'
                }).then(function () {
                  return Object(_api_resources__WEBPACK_IMPORTED_MODULE_6__["deleteResource"])(_this2.form._id);
                }).then(function () {
                  return _this2.$message({
                    type: 'success',
                    message: 'Delete succeed!'
                  });
                }).then(function () {
                  if (_this2.editingItem.id !== undefined) {
                    var index = _this2.editingNode.parentItem.indexOf(_this2.editingItem);

                    _this2.editingNode.parentItem.splice(index, 1);
                  }

                  _this2.row = {};
                });

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function onRemove(_x14) {
        return _onRemove.apply(this, arguments);
      }

      return onRemove;
    }()
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
            { attrs: { span: 8 } },
            [
              _c(
                "b-checkbox",
                {
                  attrs: { switch: "" },
                  model: {
                    value: _vm.enableDraggable,
                    callback: function($$v) {
                      _vm.enableDraggable = $$v
                    },
                    expression: "enableDraggable"
                  }
                },
                [
                  _vm._v(
                    "\n        Allow to reorder parents by drag'n'drop\n      "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button-toolbar",
                {
                  attrs: {
                    "aria-label": "Toolbar with button groups and input groups"
                  }
                },
                [
                  _c(
                    "b-button-group",
                    { staticClass: "mr-1", attrs: { size: "sm" } },
                    [
                      _c("b-button", { on: { click: _vm.openCreateModal } }, [
                        _vm._v("Create")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { attrs: { size: "sm", prepend: "search" } },
                    [
                      _c("b-form-input", {
                        staticClass: "text-right",
                        on: { input: _vm.onSearch }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-modal",
                {
                  attrs: {
                    id: "modal-create-resource",
                    "hide-backdrop": "",
                    "content-class": "shadow"
                  },
                  on: { ok: _vm.onCreate }
                },
                [
                  _vm._v("\n        Name:\n        "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newResource.name,
                        expression: "newResource.name"
                      }
                    ],
                    attrs: { type: "text", title: "Name" },
                    domProps: { value: _vm.newResource.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.newResource, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v("\n        Type:\n        "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newResource.type,
                          expression: "newResource.type"
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
                            _vm.newResource,
                            "type",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "dut", default: "" } }, [
                        _vm._v("DUT")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "computer" } }, [
                        _vm._v("Computer")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "accessories" } }, [
                        _vm._v("Accessories")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "room" } }, [
                        _vm._v("Room")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "other" } }, [
                        _vm._v("Other")
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-jstree", {
                ref: "tree",
                attrs: {
                  data: _vm.treeData,
                  async: _vm.loadData,
                  draggable: _vm.enableDraggable,
                  "allow-batch": _vm.enableDraggable
                },
                on: { "item-click": _vm.itemClick, "item-drop": _vm.itemDrop }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 16 } },
            [
              _c(
                "b-tabs",
                { attrs: { "content-class": "mt-3" } },
                [
                  _c(
                    "b-tab",
                    { attrs: { title: "Details", active: "" } },
                    [
                      _c(
                        "b-form-checkbox",
                        {
                          attrs: { name: "check-button", switch: "" },
                          model: {
                            value: _vm.enableEdit,
                            callback: function($$v) {
                              _vm.enableEdit = $$v
                            },
                            expression: "enableEdit"
                          }
                        },
                        [_vm._v("\n            Allow editing\n          ")]
                      ),
                      _vm._v(" "),
                      _vm.show
                        ? _c(
                            "b-form",
                            {
                              on: { submit: _vm.onSubmit, reset: _vm.onReset }
                            },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    id: "input-group-1",
                                    label: "Name:",
                                    "label-for": "form-name"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "form-name",
                                      readonly: !_vm.enableEdit,
                                      type: "string",
                                      placeholder: "Enter Name",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.form.name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "name", $$v)
                                      },
                                      expression: "form.name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    id: "input-group-2",
                                    label: "Type:",
                                    "label-for": "input-type"
                                  }
                                },
                                [
                                  _c("b-form-select", {
                                    attrs: {
                                      id: "input-type",
                                      disabled: !_vm.enableEdit,
                                      options: _vm.schema.properties.type.enum,
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.form.type,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "type", $$v)
                                      },
                                      expression: "form.type"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    id: "input-group-3",
                                    label: "User group:",
                                    "label-for": "form-usage-group"
                                  }
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "form-usage-group",
                                      readonly: !_vm.enableEdit,
                                      type: "string",
                                      placeholder: "usage group",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.form.usage.group,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form.usage, "group", $$v)
                                      },
                                      expression: "form.usage.group"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    type: "submit",
                                    disabled: !_vm.enableEdit,
                                    variant: "primary"
                                  }
                                },
                                [_vm._v("Submit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    type: "reset",
                                    disabled: !_vm.enableEdit,
                                    variant: "danger"
                                  }
                                },
                                [_vm._v("Reset")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-tooltip",
                                      rawName: "v-b-tooltip.hover",
                                      modifiers: { hover: true }
                                    }
                                  ],
                                  attrs: {
                                    disabled: !(
                                      _vm.enableEdit &&
                                      _vm.row.childs.length === 0
                                    ),
                                    variant: "danger",
                                    title:
                                      "Removing allowed only when it does not contains childs"
                                  },
                                  on: { click: _vm.onRemove }
                                },
                                [_vm._v("Remove")]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tab",
                    { attrs: { title: "raw" } },
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