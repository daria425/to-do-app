/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/events.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/events.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.visible {\n  display: block;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-app/./src/events.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/events.css":
/*!************************!*\
  !*** ./src/events.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./events.css */ \"./node_modules/css-loader/dist/cjs.js!./src/events.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_events_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-app/./src/events.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOMmanipulation.js":
/*!********************************!*\
  !*** ./src/DOMmanipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMcontroller: () => (/* binding */ DOMcontroller)\n/* harmony export */ });\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n// //display the last item of the toDo array on form submission\n// import { projectsArray } from \"./createToDo\";\n// import { home } from \"./createToDo\";\n\n// class activeProject {\n//   visibleElements = [];\n//   constructor(currentlyActive) {\n//     this.currentlyActive = currentlyActive;\n//   }\n// }\n\n\nclass domControllerCl extends _createToDo__WEBPACK_IMPORTED_MODULE_0__.logicControllerCl {\n  arrayPusher(item) {\n    this.allProjects.push(item);\n  }\n  removeFromDom(button) {\n    const selectedTask = button.parentElement;\n    selectedTask.parentElement.removeChild(selectedTask);\n  }\n  displayToDo() {\n    const itemContainer = document.querySelector(\".tasks\");\n    const item = document.createElement(\"div\");\n    item.classList.add(\"item\");\n    const itemTitle = document.createElement(\"div\");\n    itemTitle.classList.add(\"item-title\");\n\n    const itemDesc = document.createElement(\"div\");\n    itemDesc.classList.add(\"item-description\");\n\n    const itemDate = document.createElement(\"div\");\n    itemDate.classList.add(\"item-due-date\");\n\n    const itemPriority = document.createElement(\"div\");\n    itemPriority.classList.add(\"item-priority\");\n    for (let i = 0; i < this.activeProject[\"toDoItemsArray\"].length; i++) {\n      item.dataset.index = i;\n      itemTitle.textContent = this.activeProject[\"toDoItemsArray\"][i][\"title\"];\n      itemDesc.textContent =\n        this.activeProject[\"toDoItemsArray\"][i][\"description\"];\n      itemDate.textContent = this.activeProject[\"toDoItemsArray\"][i][\"dueDate\"];\n      itemPriority.textContent =\n        this.activeProject[\"toDoItemsArray\"][i][\"priority\"];\n    }\n    const deleteToDobtn = document.createElement(\"button\");\n    deleteToDobtn.classList.add(\"delete-todo-btn\");\n    deleteToDobtn.textContent = \"delete\";\n    deleteToDobtn.addEventListener(\"click\", function (e) {\n      const arrayIndex = e.target.parentElement.dataset.index;\n      removeElement(arrayIndex);\n      DOMcontroller.removeFromDom(e.target);\n      reassignIndex();\n    });\n    const editToDobtn = document.createElement(\"button\");\n    editToDobtn.classList.add(\"edit-todo-btn\");\n    editToDobtn.textContent = \"edit\";\n    editToDobtn.addEventListener(\"click\", function (e) {\n      const arrayPosition = e.target.parentElement.dataset.index;\n      DOMcontroller.activeProject.saveToDoAsActive(\n        DOMcontroller.activeProject[\"toDoItemsArray\"][arrayPosition]\n      );\n      fillForm();\n      document.querySelector(\".edit-to-do-form\").classList.toggle(\"visible\");\n    });\n    item.append(\n      itemTitle,\n      itemDesc,\n      itemDate,\n      itemPriority,\n      deleteToDobtn,\n      editToDobtn\n    );\n    itemContainer.appendChild(item);\n  }\n  updateTextContent() {\n    const tasks = document.querySelectorAll(\".item\");\n    const selectedTask =\n      tasks[\n        this.activeProject.toDoItemsArray.indexOf(this.activeProject.activeToDo)\n      ];\n    const [title, description, dueDate, priority, ...buttons] =\n      selectedTask.children;\n    title.textContent = this.activeProject.activeToDo[\"title\"];\n    description.textContent = this.activeProject.activeToDo[\"description\"];\n    dueDate.textContent = this.activeProject.activeToDo[\"dueDate\"];\n    priority.textContent = this.activeProject.activeToDo[\"priority\"];\n  }\n}\nconst DOMcontroller = new domControllerCl();\n\nDOMcontroller.displayProject = function () {\n  const projectContainer = document.querySelector(\".projects\");\n  const newProject = document.createElement(\"div\");\n  newProject.classList.add(\"new-project\");\n\n  for (let i = 0; i < this.allProjects.length; i++) {\n    newProject.dataset.index = i;\n    newProject.textContent = this.allProjects[i][\"name\"];\n  }\n  newProject.addEventListener(\"click\", function (e) {\n    const arrayPosition = e.target.dataset.index;\n    DOMcontroller.saveAsActive(DOMcontroller.allProjects[arrayPosition]);\n    _createToDo__WEBPACK_IMPORTED_MODULE_0__.logicController.saveAsActive(_createToDo__WEBPACK_IMPORTED_MODULE_0__.logicController.allProjects[arrayPosition]);\n    removeTasksFromDOM();\n    DOMcontroller.displayAll();\n  });\n  projectContainer.appendChild(newProject);\n};\n\nDOMcontroller.displayAll = function () {\n  const itemContainer = document.querySelector(\".tasks\");\n\n  for (let i = 0; i < this.activeProject[\"toDoItemsArray\"].length; i++) {\n    const item = document.createElement(\"div\");\n    item.classList.add(\"item\");\n    const itemTitle = document.createElement(\"div\");\n    itemTitle.classList.add(\"item-title\");\n\n    const itemDesc = document.createElement(\"div\");\n    itemDesc.classList.add(\"item-description\");\n\n    const itemDate = document.createElement(\"div\");\n    itemDate.classList.add(\"item-due-date\");\n\n    const itemPriority = document.createElement(\"div\");\n    itemPriority.classList.add(\"item-priority\");\n    item.dataset.index = i;\n    itemTitle.textContent = this.activeProject[\"toDoItemsArray\"][i][\"title\"];\n    itemDesc.textContent =\n      this.activeProject[\"toDoItemsArray\"][i][\"description\"];\n    itemDate.textContent = this.activeProject[\"toDoItemsArray\"][i][\"dueDate\"];\n    itemPriority.textContent =\n      this.activeProject[\"toDoItemsArray\"][i][\"priority\"];\n    const deleteToDobtn = document.createElement(\"button\");\n    deleteToDobtn.classList.add(\"delete-todo-btn\");\n    deleteToDobtn.textContent = \"delete\";\n    deleteToDobtn.addEventListener(\"click\", function (e) {\n      const arrayIndex = e.target.parentElement.dataset.index;\n      removeElement(arrayIndex);\n      DOMcontroller.removeFromDom(e.target);\n      reassignIndex();\n    });\n    const editToDobtn = document.createElement(\"button\");\n    editToDobtn.classList.add(\"edit-todo-btn\");\n    editToDobtn.textContent = \"edit\";\n    editToDobtn.addEventListener(\"click\", function (e) {\n      const arrayIndex = e.target.parentElement.dataset.index;\n      DOMcontroller.activeProject.saveToDoAsActive(\n        DOMcontroller.activeProject[\"toDoItemsArray\"][arrayIndex]\n      );\n      fillForm();\n      document.querySelector(\".edit-to-do-form\").classList.toggle(\"visible\");\n    });\n    item.append(\n      itemTitle,\n      itemDesc,\n      itemDate,\n      itemPriority,\n      deleteToDobtn,\n      editToDobtn\n    );\n    itemContainer.appendChild(item);\n  }\n};\n\nfunction fillForm() {\n  const titleInput = document.querySelector(\"input[name=edit-title]\");\n  const descInput = document.querySelector(\"input[name=edit-description]\");\n  const dateInput = document.querySelector(\"input[name=edit-due-date]\");\n  const priorityInput = document.querySelector(\"select[name=edit-priority]\");\n  titleInput.value = DOMcontroller.activeProject.activeToDo[\"title\"];\n  descInput.value = DOMcontroller.activeProject.activeToDo[\"description\"];\n  dateInput.value = DOMcontroller.activeProject.activeToDo[\"dueDate\"];\n  priorityInput.value = DOMcontroller.activeProject.activeToDo[\"priority\"];\n}\n\n// function updateTextContent() {\n//   const tasks = document.querySelectorAll(\".item\");\n//   const selectedTask =\n//     tasks[\n//       DOMcontroller.activeProject.toDoItemsArray.indexOf(\n//         DOMcontroller.activeProject.activeToDo\n//       )\n//     ];\n//   const [title, description, dueDate, priority, ...buttons] =\n//     selectedTask.children;\n//   title.textContent = DOMcontroller.activeProject.activeToDo[\"title\"];\n//   description.textContent =\n//     DOMcontroller.activeProject.activeToDo[\"description\"];\n//   dueDate.textContent = DOMcontroller.activeProject.activeToDo[\"dueDate\"];\n//   priority.textContent = DOMcontroller.activeProject.activeToDo[\"priority\"];\n// }\n// function displayHomePage(projectArray) {\n//   const projectContainer = document.querySelector(\".projects\");\n//   const homePage = document.createElement(\"div\");\n//   homePage.classList.add(\"default-project\");\n//   const homePageTitle = document.createElement(\"div\");\n//   homePageTitle.classList.add(\"default-project-title\");\n//   homePageTitle.textContent = projectArray[0][\"name\"];\n//   homePage.addEventListener(\"click\", function () {\n//     removeTasksFromDOM();\n//     displayToDo(projectArray);\n//   });\n//   homePage.appendChild(homePageTitle);\n//   projectContainer.appendChild(homePage);\n// }\n\n//edit form:\n//.[]\n\nfunction removeElement(arrayIndex) {\n  _createToDo__WEBPACK_IMPORTED_MODULE_0__.logicController.activeProject.deleteToDo(arrayIndex);\n}\nfunction reassignIndex() {\n  //makes an array of all the tasks on screen and reassigns them a data index value-links DOM elements back to their position within the activeProject's todoitems array\n  let tasks = document.querySelectorAll(\".item\");\n  for (let i = 0; i < tasks.length; i++) {\n    tasks[i].dataset.index = i;\n  }\n}\nfunction removeTasksFromDOM() {\n  const tasks = document.querySelector(\".tasks\");\n  while (tasks.firstChild) {\n    tasks.removeChild(tasks.lastChild);\n  }\n}\n\n// export { displayToDo };\n\n\n//# sourceURL=webpack://to-do-app/./src/DOMmanipulation.js?");

/***/ }),

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   logicController: () => (/* binding */ logicController),\n/* harmony export */   logicControllerCl: () => (/* binding */ logicControllerCl),\n/* harmony export */   project: () => (/* binding */ project),\n/* harmony export */   toDo: () => (/* binding */ toDo)\n/* harmony export */ });\nclass logicControllerCl {\n  allProjects = [];\n  activeProject;\n  createProject(name) {\n    const newProject = new project(name);\n    this.allProjects.push(newProject);\n    console.log(this.allProjects);\n    console.log(newProject);\n    return newProject;\n  }\n  saveAsActive(project) {\n    this.activeProject = project;\n    console.log(this.activeProject);\n    if (!this.allProjects.includes(project)) {\n      this.allProjects.push(project);\n    }\n  }\n  // deleteToDo(arrayPosition) {\n  //   this.activeProject[\"toDoItemsArray\"].splice(arrayPosition, 1);\n  // }\n}\nclass project {\n  toDoItemsArray = [];\n  activeToDo;\n  constructor(name) {\n    this.name = name;\n  }\n  createToDo(title, description, dueDate, priority) {\n    const newItem = new toDo(title, description, dueDate, priority);\n    this.toDoItemsArray.push(newItem);\n    console.log(this.toDoItemsArray);\n    console.log(newItem);\n    console.log(logicController);\n    return newItem;\n  }\n  deleteToDo(arrayIndex) {\n    this.toDoItemsArray.splice(arrayIndex, 1);\n    console.log(this.toDoItemsArray);\n  }\n  editToDo(title, description, dueDate, priority) {\n    this.activeToDo[\"title\"] = title;\n\n    this.activeToDo[\"description\"] = description;\n\n    this.activeToDo[\"dueDate\"] = dueDate;\n\n    this.activeToDo[\"priority\"] = priority;\n    return this.activeToDo;\n  }\n  saveToDoAsActive(toDo) {\n    this.activeToDo = toDo;\n    console.log(this.toDoItemsArray.indexOf(this.activeToDo)); //reference to array position!!\n  }\n}\nclass toDo {\n  completed = false;\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\nconst logicController = new logicControllerCl();\n\n//when form submits:\n//toDo item is created when form submits\n//the project that creates the toDo is dependent on the project that is currently active\n//currently active project stored in a class Controller\n//on click event, switch the active project\n// //storage of all project objects\n// const projectsArray = [];\n\n// //default project for storing toDos\n// const home = new project(\"Home\");\n// projectsArray.push(home);\n\n// function createToDo() {\n//  const titleInput = document.querySelector(\"input[name=title]\");\n//  const descInput = document.querySelector(\"input[name=description]\");\n//  const dateInput = document.querySelector(\"input[name=due-date]\");\n//  const priorityInput = document.querySelector(\"select\");\n\n//   const newItem = new toDo(\n//     titleInput.value,\n//     descInput.value,\n//     dateInput.value,\n//     priorityInput.value\n//   );\n//   console.log(newItem);\n//   return newItem;\n// }\n\n// function createProject() {\n//   const projectTitleInput = document.querySelector(\"input[name=project-title]\");\n\n//   const newProject = new project(projectTitleInput.value);\n//   console.log(newProject);\n//   return newProject;\n// }\n\n// //event listeners\n// // function submitToDo() {\n// //   const toDoForm = document.querySelector(\".to-do-form\");\n// //   toDoForm.addEventListener(\"submit\", addToProject);\n// // }\n\n// // function submitProject() {\n// //   const projectForm = document.querySelector(\".project-form\");\n// //   projectForm.addEventListener(\"submit\", addNewProject);\n// // }\n\n// //on to-do form submit, create a toDo and push it to the project\n// function addToProject() {\n//   const item = createToDo();\n//   home.toDoItemsArray.push(item);\n//   console.log(defaultProject);\n//   return item;\n// }\n\n// //on project form submit, make a new project objecg and push to the array of projects\n// function addNewProject() {\n//   const userProject = createProject();\n//   projectsArray.push(userProject);\n//   console.log(projectsArray);\n// }\n\n// function deleteToDo() {}\n// export { projectsArray, home, createToDo, addToProject, addNewProject };\n\n\n//# sourceURL=webpack://to-do-app/./src/createToDo.js?");

/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newProjectBtn: () => (/* binding */ newProjectBtn),\n/* harmony export */   newTaskBtn: () => (/* binding */ newTaskBtn)\n/* harmony export */ });\n/* harmony import */ var _events_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.css */ \"./src/events.css\");\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n/* harmony import */ var _DOMmanipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMmanipulation */ \"./src/DOMmanipulation.js\");\n// import { displayToDo } from \"./DOMmanipulation\";\n// import { displayNewProject } from \"./DOMmanipulation\";\n// import { addToProject, addNewProject, projectsArray } from \"./createToDo\";\n\n\n\n\nconst toDoForm = document.querySelector(\".to-do-form\");\ntoDoForm.addEventListener(\"submit\", function (e) {\n  e.preventDefault();\n  const titleInput = document.querySelector(\"input[name=title]\");\n  const descInput = document.querySelector(\"input[name=description]\");\n  const dateInput = document.querySelector(\"input[name=due-date]\");\n  const priorityInput = document.querySelector(\"select\");\n  _createToDo__WEBPACK_IMPORTED_MODULE_1__.logicController.activeProject.createToDo(\n    titleInput.value,\n    descInput.value,\n    dateInput.value,\n    priorityInput.value\n  );\n  _DOMmanipulation__WEBPACK_IMPORTED_MODULE_2__.DOMcontroller.displayToDo();\n  toDoForm.classList.toggle(\"visible\");\n});\n\nconst projectForm = document.querySelector(\".project-form\");\nprojectForm.addEventListener(\"submit\", function (e) {\n  e.preventDefault();\n  _DOMmanipulation__WEBPACK_IMPORTED_MODULE_2__.DOMcontroller.arrayPusher(\n    _createToDo__WEBPACK_IMPORTED_MODULE_1__.logicController.createProject(\n      document.querySelector(\"input[name=project-title]\").value\n    )\n  );\n  _DOMmanipulation__WEBPACK_IMPORTED_MODULE_2__.DOMcontroller.displayProject();\n  projectForm.classList.toggle(\"visible\");\n});\n\n//when edit form submits:\n//\nconst editForm = document.querySelector(\".edit-to-do-form\");\neditForm.addEventListener(\"submit\", function (e) {\n  e.preventDefault();\n  const titleInput = document.querySelector(\"input[name=edit-title]\");\n  const descInput = document.querySelector(\"input[name=edit-description]\");\n  const dateInput = document.querySelector(\"input[name=edit-due-date]\");\n  const priorityInput = document.querySelector(\"select[name=edit-priority]\");\n  _createToDo__WEBPACK_IMPORTED_MODULE_1__.logicController.activeProject.editToDo(\n    titleInput.value,\n    descInput.value,\n    dateInput.value,\n    priorityInput.value\n  );\n  _DOMmanipulation__WEBPACK_IMPORTED_MODULE_2__.DOMcontroller.updateTextContent();\n  editForm.classList.toggle(\"visible\");\n});\n\nconst newTaskBtn = document.querySelector(\".add-new-task-btn\");\nnewTaskBtn.addEventListener(\"click\", function () {\n  document.querySelector(\".to-do-form\").classList.toggle(\"visible\");\n});\n\nconst newProjectBtn = document.querySelector(\".add-new-project-btn\");\nnewProjectBtn.addEventListener(\"click\", function () {\n  document.querySelector(\".project-form\").classList.toggle(\"visible\");\n});\n\n\n// export { submitToDo, submitProject };\n\n\n//# sourceURL=webpack://to-do-app/./src/eventListeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n/* harmony import */ var _DOMmanipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMmanipulation */ \"./src/DOMmanipulation.js\");\n// import { submitProject, submitToDo } from \"./eventListeners\";\n// import { defaultProject } from \"./createToDo\";\n// import { displayHomePage } from \"./DOMmanipulation\";\n// import { projectsArray } from \"./createToDo\";\n\n// console.log(projectsArray);\n// submitToDo();\n// displayHomePage(projectsArray);\n// submitProject();\n\n\n\nconst Home = _createToDo__WEBPACK_IMPORTED_MODULE_0__.logicController.createProject(\"Home\");\n_createToDo__WEBPACK_IMPORTED_MODULE_0__.logicController.saveAsActive(Home);\n_DOMmanipulation__WEBPACK_IMPORTED_MODULE_2__.DOMcontroller.saveAsActive(Home);\n_DOMmanipulation__WEBPACK_IMPORTED_MODULE_2__.DOMcontroller.displayProject();\n_createToDo__WEBPACK_IMPORTED_MODULE_0__.logicController.activeProject.createToDo(\n  \"Random Task\",\n  \"Do something\",\n  \"22/06/2004\",\n  \"low\"\n);\n_DOMmanipulation__WEBPACK_IMPORTED_MODULE_2__.DOMcontroller.displayToDo();\nconsole.log(_createToDo__WEBPACK_IMPORTED_MODULE_0__.logicController);\nconsole.log(_DOMmanipulation__WEBPACK_IMPORTED_MODULE_2__.DOMcontroller);\n\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;