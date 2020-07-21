/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/hamburger/hamburger.js":
/*!******************************************************!*\
  !*** ./src/blocks/components/hamburger/hamburger.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var hamburger = function hamburger() {
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav');
  hamburger.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.remove('hide');
    this.classList.toggle('hamburger--open');
    document.body.classList.toggle('menu-open');
    nav.classList.toggle('menu-open');
  });
  nav.addEventListener('click', function (e) {
    if (e.target == nav) {
      closeMobileMenu(this, hamburger);
      this.classList.add('hide');
    }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 992) {
      closeMobileMenu(nav, hamburger);
    }
  });
};

function closeMobileMenu(nav, hamburger) {
  hamburger.classList.remove('hamburger--open');
  document.body.classList.remove('menu-open');
  nav.classList.remove('menu-open');
}

/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/import/dragstart.js":
/*!************************************!*\
  !*** ./src/js/import/dragstart.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);


document.querySelectorAll('img, a').forEach(function (element) {
  element.addEventListener('dragstart', function (event) {
    event.preventDefault();
  });
});

/***/ }),

/***/ "./src/js/import/lazyLoad.js":
/*!***********************************!*\
  !*** ./src/js/import/lazyLoad.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__);
 // eslint-disable-next-line no-unused-vars

var myLazyLoad = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default.a({
  elements_selector: '.lazy'
});

/***/ }),

/***/ "./src/js/import/objectFitImages.js":
/*!******************************************!*\
  !*** ./src/js/import/objectFitImages.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_0__);

var someImages = document.querySelectorAll('img.img--poly');
object_fit_images__WEBPACK_IMPORTED_MODULE_0___default()(someImages);

/***/ }),

/***/ "./src/js/import/polyfill.js":
/*!***********************************!*\
  !*** ./src/js/import/polyfill.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);







/* eslint-disable no-extra-semi */
if (typeof Object.assign != 'function') {
  Object.assign = function (target) {
    'use strict';

    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];

      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }

    return target;
  };
} // closest IE 11


;

(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        node = node.parentElement;
      }

      return null;
    };
  }
})() // matches IE 11
;

(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); // Array.form IE 11


if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
} // forEach IE 11


if ('HTMLCollection' in window && !HTMLCollection.prototype.forEach) {
  HTMLCollection.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i += 1) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
} // remove IE 11


Element.prototype.remove = function () {
  this.parentElement.removeChild(this);
};

NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (var i = this.length - 1; i >= 0; i -= 1) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

/***/ }),

/***/ "./src/js/import/svg4everybody.js":
/*!****************************************!*\
  !*** ./src/js/import/svg4everybody.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_0__);

svg4everybody__WEBPACK_IMPORTED_MODULE_0___default()();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/polyfill */ "./src/js/import/polyfill.js");
/* harmony import */ var _import_svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/svg4everybody */ "./src/js/import/svg4everybody.js");
/* harmony import */ var _import_lazyLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/lazyLoad */ "./src/js/import/lazyLoad.js");
/* harmony import */ var _import_objectFitImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/objectFitImages */ "./src/js/import/objectFitImages.js");
/* harmony import */ var _import_dragstart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import/dragstart */ "./src/js/import/dragstart.js");
/* harmony import */ var _modules_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/select */ "./src/js/modules/select.js");
/* harmony import */ var _modules_scroll_anchors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scroll-anchors */ "./src/js/modules/scroll-anchors.js");
/* harmony import */ var _modules_IMask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/IMask */ "./src/js/modules/IMask.js");
/* harmony import */ var _modules_parallax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/parallax */ "./src/js/modules/parallax.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_random_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/random-element */ "./src/js/modules/random-element.js");
/* harmony import */ var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! css-vars-ponyfill */ "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js");
/* harmony import */ var _blocks_components_hamburger_hamburger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../blocks/components/hamburger/hamburger */ "./src/blocks/components/hamburger/hamburger.js");
/* harmony import */ var _modules_stickySidebarEI11__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/stickySidebarEI11 */ "./src/js/modules/stickySidebarEI11.js");
/* harmony import */ var _modules_sliderSwiper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/sliderSwiper */ "./src/js/modules/sliderSwiper.js");
/* harmony import */ var _modules_yandexMap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/yandexMap */ "./src/js/modules/yandexMap.js");
/* harmony import */ var _modules_stuckyHeader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/stuckyHeader */ "./src/js/modules/stuckyHeader.js");
/* harmony import */ var _modules_formMainValid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/formMainValid */ "./src/js/modules/formMainValid.js");
// import 'core-js/fn/object/assign'


















window.addEventListener('DOMContentLoaded', function () {
  // eslint-disable-next-line no-extra-semi
  Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_11__["default"])({// Options...
  });
  Object(_modules_stuckyHeader__WEBPACK_IMPORTED_MODULE_16__["default"])();
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(_blocks_components_hamburger_hamburger__WEBPACK_IMPORTED_MODULE_12__["default"])();
  Object(_modules_parallax__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_modules_random_element__WEBPACK_IMPORTED_MODULE_10__["default"])();
  Object(_modules_stickySidebarEI11__WEBPACK_IMPORTED_MODULE_13__["default"])();
  Object(_modules_sliderSwiper__WEBPACK_IMPORTED_MODULE_14__["default"])();
  Object(_modules_IMask__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_formMainValid__WEBPACK_IMPORTED_MODULE_17__["default"])();
});

window.onload = function () {
  Object(_modules_yandexMap__WEBPACK_IMPORTED_MODULE_15__["default"])();
};

/***/ }),

/***/ "./src/js/modules/IMask.js":
/*!*********************************!*\
  !*** ./src/js/modules/IMask.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");


var iMask = function iMask() {
  var elements = document.querySelectorAll('.imask');
  var maskOptions = {
    mask: '+{7}{  }(000){  }000{-}00{-}00'
  };

  for (var i = 0; i < elements.length; i++) {
    Object(imask__WEBPACK_IMPORTED_MODULE_0__["default"])(elements[i], maskOptions);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (iMask);

/***/ }),

/***/ "./src/js/modules/formMainValid.js":
/*!*****************************************!*\
  !*** ./src/js/modules/formMainValid.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__);




var validateForm = function validateForm() {
  function validateForm() {
    var formContact = document.querySelector('#contact');
    var phone = document.querySelector('#phone');
    var email = document.querySelector('#email');
    var messenger = document.querySelector('.messenger-input-placeholder');
    var modal = document.querySelector('.popup');
    var windows = document.querySelector('[data-modal]');
    var scroll = calc_scroll();
    var header = document.querySelectorAll('.header');
    formContact.addEventListener('input', function () {
      if (phone.classList.contains('invalid')) {
        if (validateTel(phone)) {
          removeClass(email);
          removeClass(phone);
          removeClass(messenger);
        }
      }

      if (validateEmail('contact', 'email')) {
        removeClass(email);
        removeClass(phone);
        removeClass(messenger);
      }

      if (messenger.value !== '' && messenger.value.length >= 3) {
        removeClass(email);
        removeClass(phone);
        removeClass(messenger);
      }
    });
    formContact.addEventListener('submit', function (e) {
      e.preventDefault();

      if (email.value === '' && phone.value === '' && messenger.value === '') {
        addClass(email);
        addClass(phone);
        addClass(messenger);
      } else {
        document.body.style.marginRight = "".concat(scroll, "px");
        header.forEach(function (item) {
          item.style.paddingRight = "".concat(scroll, "px");
        });
        document.body.classList.add('modal-open');
        windows.classList.add('modal-open');
        windows.classList.add('is-passed');
        modal.style.display = 'block'; // alert('Отправка')
        // =================
        // Сюда добавить скритп для отправки на сервер
        // =================

        setTimeout(function () {
          windows.classList.remove('modal-open');
          windows.classList.remove('is-passed');
          document.body.classList.remove('modal-open');
          document.body.style.marginRight = '';
          headerRemoveStyle(header);
        }, 2000);
        formContact.reset();
      }
    });
  }

  validateForm();
};

function removeClass(clName) {
  clName.classList.remove('invalid');
}

function addClass(clName) {
  clName.classList.add('invalid');
}

function validateTel(input) {
  if (input.value.length < 20) {
    return false;
  }

  return true;
}

function validateEmail(form_id, email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.forms[form_id].elements[email].value;

  if (reg.test(address) == false) {
    return false;
  } else {
    return true;
  }
}

function calc_scroll() {
  var div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth; // сама прокрутка

  div.remove();
  return scrollWidth;
}

function headerRemoveStyle(el) {
  el.forEach(function (item) {
    item.style.paddingRight = '';
  });
}

/* harmony default export */ __webpack_exports__["default"] = (validateForm);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__);




var modals = function modals() {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    var clickCloseOverlay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelectorAll(closeSelector),
        windows = document.querySelectorAll('[data-modal]'),
        forms = modal.querySelectorAll('form'),
        scroll = calc_scroll(),
        header = document.querySelectorAll('.header');
    trigger.forEach(function (i) {
      i.addEventListener('click', function (e) {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(function (item) {
          item.classList.remove('modal-open');
        });
        document.body.classList.add('modal-open');
        modal.classList.add('modal-open');
        modal.querySelector('[data-call]').style.display = 'none';
        modal.querySelector('[data-request]').style.display = 'none';

        if (i.classList.contains('btn-popup-call')) {
          modal.querySelector('[data-call]').style.display = 'block';
        }

        if (i.classList.contains('btn-popup-request')) {
          modal.querySelector('[data-request]').style.display = 'block';
        }

        document.body.style.marginRight = "".concat(scroll, "px");
        header.forEach(function (item) {
          item.style.paddingRight = "".concat(scroll, "px");
        });
      });
    });
    close.forEach(function (c) {
      c.addEventListener('click', function () {
        windows.forEach(function (item) {
          item.classList.remove('modal-open');
        });
        modal.classList.remove('modal-open');
        document.body.classList.remove('modal-open');
        document.body.style.marginRight = '';
        headerRemoveStyle(header);
        forms.forEach(function (f) {
          f.querySelector('input[type=tel]').classList.remove('invalid');
        });
      });
    });
    modal.addEventListener('click', function (e) {
      if (e.target == modal && clickCloseOverlay) {
        windows.forEach(function (item) {
          item.classList.remove('modal-open');
        });
        modal.classList.remove('modal-open');
        document.body.classList.remove('modal-open');
        document.body.style.marginRight = '';
        headerRemoveStyle(header);
        forms.forEach(function (f) {
          f.querySelector('input[type=tel]').classList.remove('invalid');
        });
      }
    });
    forms.forEach(function (f) {
      var input = f.querySelector('input[type=tel]');
      input.addEventListener('input', function () {
        if (input.classList.contains('invalid')) {
          if (validateForm(input)) {
            input.classList.remove('invalid');
          }
        }
      });
    });

    if (forms) {
      forms.forEach(function (f) {
        var input = f.querySelector('input[type=tel]');
        f.addEventListener('submit', function (e) {
          e.preventDefault();

          if (validateForm(input)) {
            modal.classList.add('is-passed'); // alert('Отправка')
            // =================
            // Сюда добавить скритп для отправки на сервер
            // =================

            setTimeout(function () {
              modal.classList.remove('modal-open');
              document.body.classList.remove('modal-open');
              modal.classList.remove('is-passed');
              document.body.style.marginRight = '';
              headerRemoveStyle(header);
              f.reset();
            }, 2000);
          } else {
            input.classList.add('invalid');
          }
        });
      });
    }
  }

  function headerRemoveStyle(el) {
    el.forEach(function (item) {
      item.style.paddingRight = '';
    });
  }

  function calc_scroll() {
    var div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth; // сама прокрутка

    div.remove();
    return scrollWidth;
  }

  function validateForm(input) {
    if (input.value === '' || input.value == null) {
      return false;
    }

    if (input.value.length < 20) {
      return false;
    }

    return true;
  }

  bindModal('.btn-popup-call', '.popup-wrapper', '.popup-wrapper .popup__close');
  bindModal('.btn-popup-request', '.popup-wrapper', '.popup-wrapper .popup__close');
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/parallax.js":
/*!************************************!*\
  !*** ./src/js/modules/parallax.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);


var parallax = function parallax() {
  var scene = document.getElementById('scene');

  if (scene) {
    var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_0___default.a(scene, {
      relativeInput: true
    });
    parallaxInstance.friction(0.2, 0.2);
    window.addEventListener('resize', function () {
      if (window.innerWidth <= 768) {
        parallaxInstance.disable();
      } else {
        parallaxInstance.enable();
      }
    });

    if (window.innerWidth <= 768) {
      parallaxInstance.disable();
    } else {
      parallaxInstance.enable();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (parallax);

/***/ }),

/***/ "./src/js/modules/random-element.js":
/*!******************************************!*\
  !*** ./src/js/modules/random-element.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__);




var radnomElement = function radnomElement() {
  var linux = document.querySelector('.linux-hero');
  var android = document.querySelector('.android-hero');
  var windows = document.querySelector('.windows-hero');
  var unreal = document.querySelector('.unreal-hero');
  var ios = document.querySelector('.ios-hero');
  var html = document.querySelector('.html-hero');
  var unity = document.querySelector('.unity-hero');
  var randomArray = [linux, android, windows, unreal, ios, html, unity];

  if (linux && html && windows) {
    updateRandomElement(randomArray);
  }
};

function updateRandomElement(randomArray) {
  randomArray.forEach(function (item) {
    if (item) {
      item.classList.remove('active');
    }
  });
  var random = randomArray[Math.floor(Math.random() * randomArray.length)];
  var random2 = randomArray[Math.floor(Math.random() * randomArray.length)];
  var random3 = randomArray[Math.floor(Math.random() * randomArray.length)];
  random.classList.add('active');
  random2.classList.add('active');
  random3.classList.add('active');
  setTimeout(function () {
    updateRandomElement(randomArray);
  }, 3500);
}

/* harmony default export */ __webpack_exports__["default"] = (radnomElement);

/***/ }),

/***/ "./src/js/modules/scroll-anchors.js":
/*!******************************************!*\
  !*** ./src/js/modules/scroll-anchors.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);



var smoothScroll = function smoothScroll(targetEl, duration) {
  var headerElHeight = document.querySelector('.header').clientHeight;
  var target = document.querySelector(targetEl);
  var targetPosition = target.getBoundingClientRect().top - headerElHeight;
  var startPosition = window.pageYOffset;
  var startTime = null;

  var ease = function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  var animation = function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

var scrollTo = function scrollTo() {
  var links = document.querySelectorAll('.js-scroll');
  links.forEach(function (each) {
    each.addEventListener('click', function () {
      var currentTarget = this.getAttribute('href');
      smoothScroll(currentTarget, 1000);
    });
  });
};

scrollTo();

/***/ }),

/***/ "./src/js/modules/select.js":
/*!**********************************!*\
  !*** ./src/js/modules/select.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);












function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _iterator = _createForOfIteratorHelper(document.querySelectorAll('.custom-select-wrapper')),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var dropdown = _step.value;
    dropdown.addEventListener('click', function () {
      this.querySelector('.custom-select').classList.toggle('open');
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll('.custom-option')),
    _step2;

try {
  var _loop = function _loop() {
    var option = _step2.value;
    option.addEventListener('click', function () {
      var messenger = document.querySelector('.messenger-text');
      var input = document.querySelector('.messenger-input-placeholder');
      var dataMassage = option.dataset.massage;
      var dataPlaceholder = option.dataset.inputPlaceholder; // const dataTel = option.dataset.tel

      if (!this.classList.contains('selected')) {
        this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
        this.classList.add('selected');
        this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        messenger.textContent = dataMassage;
        input.placeholder = dataPlaceholder;
        input.value = '';
      }
    });
  };

  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

window.addEventListener('click', function (e) {
  var _iterator3 = _createForOfIteratorHelper(document.querySelectorAll('.custom-select')),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var select = _step3.value;

      if (!select.contains(e.target)) {
        select.classList.remove('open');
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
});

/***/ }),

/***/ "./src/js/modules/sliderSwiper.js":
/*!****************************************!*\
  !*** ./src/js/modules/sliderSwiper.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]); // init Swiper:

var swiperSlider = function swiperSlider() {
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (swiperSlider);

/***/ }),

/***/ "./src/js/modules/stickySidebarEI11.js":
/*!*********************************************!*\
  !*** ./src/js/modules/stickySidebarEI11.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);


var stickSidebarEI11 = function stickSidebarEI11() {
  if (document.getElementById('sticky')) {
    var wrapper = document.getElementById('wrapper-sticky'),
        main = document.getElementById('article'),
        sidebar = document.getElementById('sticky'),
        headerHeight = document.querySelector('.header');

    window.onscroll = function () {
      document.getElementById('sticky').setAttribute('style', 'display:block;width:' + document.getElementById('sidebar').offsetWidth + 'px');
      document.getElementById('sticky').style.width = document.getElementById('sidebar').offsetWidth; //if sidebar smaller than main

      if (sidebar.offsetHeight < main.offsetHeight) {
        //if sidebar smaller than screen - stick to top rather than bottom
        if (sidebar.offsetHeight < window.innerHeight) {
          if (wrapper.getBoundingClientRect().bottom - headerHeight.offsetHeight < window.innerHeight && wrapper.getBoundingClientRect().bottom - headerHeight.offsetHeight < sidebar.offsetHeight) {
            wrapper.classList.remove('fix-top-VP');
            wrapper.classList.add('flex-bottom');
          } else if (wrapper.getBoundingClientRect().top < headerHeight.offsetHeight) {
            wrapper.classList.add('fix-top-VP');
            wrapper.classList.remove('flex-bottom');
          } else {
            wrapper.classList.remove('fix-top-VP');
            wrapper.classList.remove('flex-bottom');
          }
        } //if wrapper taller than sidebar - stick to bottom
        else if (sidebar.offsetHeight < wrapper.offsetHeight) {
            if (wrapper.getBoundingClientRect().bottom < window.innerHeight) {
              wrapper.classList.remove('fix-bottom-VP');
              wrapper.classList.add('flex-bottom');
            } else if (wrapper.getBoundingClientRect().bottom > sidebar.offsetHeight + window.innerHeight) {
              wrapper.classList.remove('fix-bottom-VP');
              wrapper.classList.remove('flex-bottom');
            } else {
              wrapper.classList.add('fix-bottom-VP');
              wrapper.classList.remove('flex-bottom');
            }
          }
      }
    };
  }
};

if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1) {
  stickSidebarEI11();
  window.addEventListener('resize', function () {
    stickSidebarEI11();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (stickSidebarEI11);

/***/ }),

/***/ "./src/js/modules/stuckyHeader.js":
/*!****************************************!*\
  !*** ./src/js/modules/stuckyHeader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var stuckyHeader = function stuckyHeader() {
  var header = document.querySelector('.header');
  document.addEventListener('scroll', function (e) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  });
};

stuckyHeader();
/* harmony default export */ __webpack_exports__["default"] = (stuckyHeader);

/***/ }),

/***/ "./src/js/modules/yandexMap.js":
/*!*************************************!*\
  !*** ./src/js/modules/yandexMap.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var yMap = function yMap() {
  if (document.querySelector('#map')) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
        center: [55.643414, 37.674508],
        zoom: 17,
        controls: [// 'zoomControl',
        // 'searchControl',
        'typeSelector', 'fullscreenControl' // 'routeButtonControl',
        ]
      }, {
        searchControlProvider: 'yandex#search'
      }),
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: '<strong>Москва, ш. Каширское, д. 66, корп. 2</strong>',
        balloonContent: '<strong>Москва, ш. Каширское, д. 66, корп. 2</strong>'
      }, {
        preset: 'islands#redHomeIcon'
      });
      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable('scrollZoom'); // if (window.innerHeight <= 668) {
      //   myMap.behaviors.disable('drag')
      // }
      // myMap.behaviors.disable('multiTouch')
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (yMap);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map