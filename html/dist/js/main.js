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

/***/ "./src/blocks/modules/cookies-form/cookies-form.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/cookies-form/cookies-form.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
* ?????????????????????? ?????? ?????? ???????????????? ?????????? ???????????????????????????? ?? ?????????????????????????? cookie
@class CookiesForm
@constructor
@example
    let ??ookiesForm = new CookiesForm() {}
*/
var CookiesForm = /*#__PURE__*/function () {
  function CookiesForm() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CookiesForm);
  }
  /** 
  * ?????????????????? ???????? ?? localStorage ???????? ???????????? isCookiesFormAccepted
  * ???????? ??????, ???? ?????????????????? ?????????? isVisible ?? .cookies-form ?????????? ?????????????? ???????? ??????????
  @method setFormVisibility
  @static
  @example
      // ??????????
      app.CookiesForm.setFormVisibility();
      // ??????????????????????????????
      app.CookiesForm.setFormVisibility = () => {// ?????? ??????}
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CookiesForm, [{
    key: "setFormVisibility",
    value: function setFormVisibility() {
      if (!localStorage.isCookiesFormAccepted) {
        document.querySelector('.cookies-form').classList.add('isVisible');
      } else {
        document.querySelector('.cookies-form').classList.remove('isVisible');
      }
    }
    /** 
    * ???????????????????????????? ???????????? ???????????????? ?? ?????????? ???????????????????????????? ?? ?????????????????????????? cookie
    * ?????? ???? ?????????????????? ???????????????????? ?????????????? click ???? ???????????? '.cookies-form__button' ?????? ???????????????? ??????????
    @method init
    @static
    @example
        // ??????????
        app.CookiesForm.init();
        // ??????????????????????????????
        app.CookiesForm.init = () => {// ?????? ??????}
    */

  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!document.querySelector('.cookies-form')) return;
      this.setFormVisibility();
      document.querySelector('.cookies-form__button').addEventListener('click', function () {
        localStorage.isCookiesFormAccepted = true;

        _this.setFormVisibility();
      });
    }
  }]);

  return CookiesForm;
}();

/* harmony default export */ __webpack_exports__["default"] = (CookiesForm);

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _templates_headerMobileMenuIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/headerMobileMenuIn */ "./src/blocks/modules/header/templates/headerMobileMenuIn.js");





gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["ScrollTrigger"]);
/**
* ?????????????????????? ?????? ?????? ?????????? ??????????
@class Header
@constructor
@example
    let header = new Header() {}
*/

var Header = /*#__PURE__*/function () {
  function Header() {
    var isMainMenuOpened = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var isMobileMenuOpened = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var isLangMenuOpened = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isServicesMenuOpened = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Header);

    /**
    @property isMainMenuOpened
    @type Boolean
    @default false
    @example
        app.header.isMainMenuOpened = true;
    */
    this.isMainMenuOpened = isMainMenuOpened;
    /**
    @property isMobileMenuOpened
    @type Boolean
    @default false
    @example
        app.header.isMobileMenuOpened = true;
    */

    this.isMobileMenuOpened = isMobileMenuOpened;
    /**
    @property isLangMenuOpened
    @type Boolean
    @default false
    @example
        app.header.isLangMenuOpened = true;
    */

    this.isLangMenuOpened = isLangMenuOpened;
    /**
    @property isServicesMenuOpened
    @type Boolean
    @default false
    @example
    app.header.isServicesMenuOpened = true;
    */

    this.isServicesMenuOpened = isServicesMenuOpened;
  }
  /** 
  * ???????????????????????????? ???????????? ???????????????? ?? ??????????
  @method init
  @static
  @example
      // ??????????
      app.header.init();
      // ??????????????????????????????
      app.header.init = () => {// ?????? ??????}
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Header, [{
    key: "init",
    value: function init() {
      var _this = this;

      // this.testRenderMobileMenu();
      if (!document.querySelector('.header')) return;
      document.addEventListener('keyup', function (event) {
        if ((event.keyCode || event.which) == 27) {
          _this.closeAllMenus();
        }
      });
      document.addEventListener('click', function (event) {
        if (event.target.classList.contains('header__lang-opener')) {
          _this.toggleLangMenu();
        } else {
          _this.isLangMenuOpened = false;
          document.querySelector('html').classList.remove('overhidden');
          document.querySelector('body').classList.remove('overhidden');
        }

        if (event.target.classList.contains('header__main-menu-opener')) {
          _this.toggleMainMenu();
        } else {
          _this.isMainMenuOpened = false;
          document.querySelector('html').classList.remove('overhidden');
          document.querySelector('body').classList.remove('overhidden');
        }

        if (event.target.classList.contains('header__main-mobile-menu-opener')) {
          _this.toggleMobileMenu();
        }

        if (event.target.dataset.target) {
          console.log(event.target.dataset);
          event.preventDefault();

          _this.chooseScreen(event.target.dataset.target);
        }

        if (event.target.dataset.dropdown) {
          event.target.classList.toggle('isOpened');

          if (event.target.querySelector('.dropdown_body').clientHeight == 0) {
            event.target.querySelector('.dropdown_body').style.height = event.target.querySelector('.dropdown_body__in').clientHeight + 'px';
          } else {
            event.target.querySelector('.dropdown_body').style.height = 0;
          }
        }
      });
      this.animateOnScroll();
      this.setHeight();
      this.setWidthServicesMenuDropdown();
    }
    /** 
    * ?????????? ???????????? ?? ?????????????????? ???????? ???? ?????????????????? 
    @method chooseScreen
    @static
    @example
        // ??????????
        app.header.chooseScreen('main');
        // ??????????????????????????????
        app.header.chooseScreen = () => {// ?????? ??????}
    */

  }, {
    key: "chooseScreen",
    value: function chooseScreen(target) {
      if (!document.querySelector(".header__mobile_menu-in.isActive [data-target=\"".concat(target, "\"]")).dataset.back) {
        console.log("\u0432\u043F\u0435\u0440\u0435\u0434 \u043A ".concat(target));
        document.querySelector('.header__mobile_menu-in.isActive').classList.add('isSlided');
      } else {
        console.log("\u043D\u0430\u0437\u0430\u0434 \u043A ".concat(target));
      }

      document.querySelector('.header__mobile_menu-in.isActive').classList.remove('isActive');
      document.querySelector("[data-screen=\"".concat(target, "\"]")).classList.add('isActive');
      document.querySelector("[data-screen=\"".concat(target, "\"]")).classList.remove('isSlided');
    }
    /**
    * ?????????????????? ?????????????? ???????? ?? ??????????, ???????????????? ???????????????????? ???????????? ?????????????? ?????????????? ?? ?????????????????? data-item_id 
    @method openModalMenu
    @static
    @example
        // ??????????
        app.header.openModalMenu(1);
        // ??????????????????????????????
        app.header.openModalMenu = (index) => {// ?????? ??????}
    */

  }, {
    key: "openModalMenu",
    value: function openModalMenu(index) {
      if (!document.querySelector(".header__menu-modal[data-item_id=\"".concat(index, "\"]"))) return;
      this.closeAllMenus();

      if (document.querySelector(".header__menu-modal.isOpened")) {
        document.querySelector(".header__menu-modal.isOpened").classList.remove('isOpened');
      }

      document.querySelector(".header__menu-modal[data-item_id=\"".concat(index, "\"]")).classList.add('isOpened');
      document.querySelector(".header__in").classList.add('isHovered');
    }
    /**
    * ?????????????????? ?????????????? ???????? ?? ??????????
    @method closeModalMenu
    @static
    @example
        // ??????????
        app.header.closeModalMenu();
        // ??????????????????????????????
        app.header.closeModalMenu = () => {// ?????? ??????}
    */

  }, {
    key: "closeModalMenu",
    value: function closeModalMenu() {
      if (!document.querySelector(".header__menu-modal.isOpened")) return;
      document.querySelector(".header__menu-modal.isOpened").classList.remove('isOpened');
      document.querySelector(".header__in").classList.remove('isHovered');
    }
    /**
    * ??????????????????/?????????????????? ???????????????????????????? ???????? ?? ??????????
    @method toggleMainMenu
    @static
    @example
        // ??????????
        app.header.toggleMainMenu();
        // ??????????????????????????????
        app.header.toggleMainMenu = () => {// ?????? ??????}
    */

  }, {
    key: "toggleMainMenu",
    value: function toggleMainMenu() {
      if (document.querySelector('.header__main-menu-opener')) {
        this.isMainMenuOpened = !this.isMainMenuOpened;
        this.isLangMenuOpened = false;
        this.isMobileMenuOpened = false;
        this.isServicesMenuOpened = false;
        this.closeModalMenu();
      }
    }
    /**
    * ??????????????????/?????????????????? ?????????? ????????????
    @method toggleLangMenu
    @static
    @example
        // ??????????
        app.header.toggleLangMenu();
        // ??????????????????????????????
        app.header.toggleLangMenu = () => {// ?????? ??????}
    */

  }, {
    key: "toggleLangMenu",
    value: function toggleLangMenu() {
      if (document.querySelector('.header__lang')) {
        this.isLangMenuOpened = !this.isLangMenuOpened;
        this.isMainMenuOpened = false;
        this.isMobileMenuOpened = false;
        this.isServicesMenuOpened = false;
        this.closeModalMenu();
      }
    }
    /**
    * ??????????????????/?????????????????? ???????? ??????????
    @method toggleServicesMenu
    @static
    @example
        // ??????????
        app.header.toggleServicesMenu();
        // ??????????????????????????????
        app.header.toggleServicesMenu = () => {// ?????? ??????}
    */

  }, {
    key: "toggleServicesMenu",
    value: function toggleServicesMenu() {
      if (document.querySelector('.header__services')) {
        console.log('open services');
        this.isServicesMenuOpened = !this.isServicesMenuOpened;
        this.isMainMenuOpened = false;
        this.isMobileMenuOpened = false;
        this.isLangMenuOpened = false;
        this.closeModalMenu();
      }
    }
    /**
    * ?????????????????? ?????????? ?????? ??????????????
    @method animateOnScroll
    @static
    @example
        // ??????????
        app.header.animateOnScroll();
        // ??????????????????????????????
        app.header.animateOnScroll = () => {// ?????? ??????}
    */

  }, {
    key: "animateOnScroll",
    value: function animateOnScroll() {
      console.log(this);
      gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to('.header__in', {
        scrollTrigger: {
          trigger: '.wrapper',
          start: 'top top',
          end: 'center top',
          onUpdate: function onUpdate(item) {
            document.querySelector('.header__in').style.backdropFilter = "blur(".concat(item.progress * 100 / 2, "px)");

            if (item.progress > 0) {
              document.querySelector('.header__in').classList.add('isBlured');
              document.querySelector('.header').classList.add('isBlured');

              if (document.querySelector('.header__breadcrumbs')) {
                document.querySelector('.header__breadcrumbs').classList.add('isHidden');
              }
            } else {
              document.querySelector('.header__in').classList.remove('isBlured');
              document.querySelector('.header').classList.remove('isBlured');

              if (document.querySelector('.header__breadcrumbs')) {
                document.querySelector('.header__breadcrumbs').classList.remove('isHidden');
              }
            }
          }
        }
      });
    }
    /**
    * ??????????????????/?????????????????? ?????????????????? ????????
    @method toggleMobileMenu
    @static
    @example
        // ??????????
        app.header.toggleMobileMenu();
        // ??????????????????????????????
        app.header.toggleMobileMenu = () => {// ?????? ??????}
    */

  }, {
    key: "toggleMobileMenu",
    value: function toggleMobileMenu() {
      if (!document.querySelector('.header__mobile_menu')) return;
      this.setHeight();
      this.isMobileMenuOpened = !this.isMobileMenuOpened;
      this.isMainMenuOpened = false;
      this.isLangMenuOpened = false;
      this.isServicesMenuOpened = false;

      if (this.isMobileMenuOpened) {
        document.querySelector('html').classList.add('overhidden');
        document.querySelector('body').classList.add('overhidden');
      } else {
        document.querySelector('html').classList.remove('overhidden');
        document.querySelector('body').classList.remove('overhidden');
      }
    }
    /**
    * ?????????????????? ?????? ???????? ?? ?????????? 
    @method closeAllMenus
    @static
    @example
        // ??????????
        app.header.closeAllMenus();
        // ??????????????????????????????
        app.header.closeAllMenus = () => {// ?????? ??????}
    */

  }, {
    key: "closeAllMenus",
    value: function closeAllMenus() {
      this.isMobileMenuOpened = false;
      this.isMainMenuOpened = false;
      this.isLangMenuOpened = false;
      this.isServicesMenuOpened = false;
      document.querySelector('html').classList.remove('overhidden');
      document.querySelector('body').classList.remove('overhidden');
    }
    /**
    * ?????????????????????? ???????????? '.header__mobile_menu-bottom' ?? ?????????????????????????? ???????????? ?????? '.header__mobile_menu-in[data-screen="main"] .header__mobile_menu-top' calc( 100% - ???? ?????? ?????????????????? - 78px );
    @method setHeight
    @static
    @example
       // ??????????
       app.header.setHeight();
       // ??????????????????????????????
       app.header.setHeight = () => {// ?????? ??????}
    */

  }, {
    key: "setHeight",
    value: function setHeight() {
      if (!document.querySelector('.header__mobile_menu-in') && !document.querySelector('.header__mobile_menu-bottom')) return;
      document.querySelector('.header__mobile_menu-in[data-screen="main"] .header__mobile_menu-top').style.height = "calc(100% - ".concat(document.querySelector('.header__mobile_menu-bottom').clientHeight + 78, "px)");
    }
    /**
    * ?????????????????????? ???????????? ?????? ???????????? "????????????" ?? ??????????
    @method setWidthServicesMenuDropdown
    @static
    @example
        // ??????????
        app.header.setWidthServicesMenuDropdown();
        // ??????????????????????????????
        app.header.setWidthServicesMenuDropdown = () => {// ?????? ??????}
    */

  }, {
    key: "setWidthServicesMenuDropdown",
    value: function setWidthServicesMenuDropdown() {
      if (document.querySelector('.header__services') && document.querySelector('.header__services-dropdown') && document.querySelector('.header__contacts')) {
        var services = document.querySelector('.header__services');
        var servicesDropdown = document.querySelector('.header__services-dropdown');
        var contacts = document.querySelector('.header__contacts');
        var servicesLeft = services.offsetLeft;
        var contactsLeft = contacts.closest('.header__right').offsetLeft;
        console.log('contactsLeft', contactsLeft, servicesLeft);
        var headerRightWidth = document.querySelector('.header__right').clientWidth;
        servicesDropdown.style.width = contactsLeft - servicesLeft + headerRightWidth + 'px';
      }
    }
  }, {
    key: "testRenderMobileMenu",
    value: function testRenderMobileMenu() {
      var menuList = {
        7: {
          ID: 7,
          NAME: '????????????',
          CODE: 'sale',
          // CODE: 'kupit',
          firstSecond: {
            2: {
              ID: 2,
              CODE: 'zagorodnaya',
              NAME: '????????????????????'
            },
            1: {
              ID: 1,
              CODE: 'gorodaskaya',
              NAME: '??????????????????'
            }
          },
          sectionSecond: {
            22: {
              ID: 22,
              CODE: 'apartamenty',
              NAME: '??????????????????????',
              IBLOCK_ID: 2,
              IBLOCK_SECTION_ID: 1
            },
            29: {
              ID: 29,
              CODE: 'zemelnye-uchastki',
              NAME: '?????????????????? ??????????????',
              IBLOCK_ID: 2,
              IBLOCK_SECTION_ID: 2
            }
          }
        },
        8: {
          ID: 8,
          NAME: '????????????????????',
          CODE: 'rent'
        },
        9: {
          ID: 9,
          NAME: '??????????????????????????',
          CODE: 'investment'
        },
        10: {
          ID: 10,
          NAME: '??????????????/??????????',
          CODE: 'prodat-sdat',
          firstSecond: {
            2: {
              ID: 2,
              CODE: 'zagorodnaya',
              NAME: '????????????????????'
            }
          },
          sectionSecond: {
            26: {
              ID: 26,
              CODE: 'kottedzhi-doma',
              NAME: '???????????????? (????????)',
              IBLOCK_ID: 2,
              IBLOCK_SECTION_ID: 2
            }
          }
        }
      };
      var mobileMenu = document.querySelector('.header__mobile_menu');
      var mobileMenuMainScreen = mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.querySelector('[data-screen="main"]');
      var mobileMenuMainScreenTopIn = mobileMenuMainScreen === null || mobileMenuMainScreen === void 0 ? void 0 : mobileMenuMainScreen.querySelector('.header__mobile_menu-top-in');
      var mobileMenuMainScreenFirstNav = mobileMenuMainScreenTopIn === null || mobileMenuMainScreenTopIn === void 0 ? void 0 : mobileMenuMainScreenTopIn.querySelector('.header__mobile_menu-nav');
      var mobileMenuMainScreenUl = document.createElement('ul'); // ???????????????? ???????????? 

      for (var key in menuList) {
        if (Object.hasOwnProperty.call(menuList, key)) {
          var element = menuList[key];
          var li = document.createElement('li');
          var a = document.createElement('a');

          if (element.firstSecond) {
            a.className = "has-child";
            a.dataset.target = element.CODE + '' + element.ID;
            var renderOprtion = {
              key: element.CODE + '' + element.ID
            };
            mobileMenu.insertAdjacentHTML("beforeend", Object(_templates_headerMobileMenuIn__WEBPACK_IMPORTED_MODULE_4__["headerMobileMenuIn"])(renderOprtion));

            if (element.sectionSecond) {
              var arrayIdSecondScreeen = [];

              for (var key2 in element.sectionSecond) {
                if (Object.hasOwnProperty.call(element.sectionSecond, key2)) {
                  var element2 = element.sectionSecond[key2];
                  arrayIdSecondScreeen.push({
                    id: element2.ID,
                    parent: element2.IBLOCK_SECTION_ID
                  });
                  console.log("element2: ", element2);
                }
              }

              for (var _key in element.firstSecond) {
                if (Object.hasOwnProperty.call(element.firstSecond, _key)) {
                  (function () {
                    var element3 = element.firstSecond[_key];
                    var findIdParent = arrayIdSecondScreeen.find(function (item) {
                      return item.parent === element3.ID;
                    });

                    if (findIdParent) {
                      mobileMenu.insertAdjacentHTML("beforeend", Object(_templates_headerMobileMenuIn__WEBPACK_IMPORTED_MODULE_4__["headerMobileMenuIn"])({
                        key: element3.CODE + '' + element.ID
                      }));
                    }

                    console.log("element3: ", element3);
                  })();
                }
              }

              console.log(arrayIdSecondScreeen);
            }
          }

          a.href = element.HREF ? element.HREF : '#';
          a.innerText = element.NAME;
          li.prepend(a);
          console.log(element);
          mobileMenuMainScreenUl.append(li);
        }
      }

      mobileMenuMainScreenFirstNav.prepend(mobileMenuMainScreenUl);
    }
  }]);

  return Header;
}();

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/blocks/modules/header/templates/headerMobileMenuIn.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/modules/header/templates/headerMobileMenuIn.js ***!
  \*******************************************************************/
/*! exports provided: headerMobileMenuIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerMobileMenuIn", function() { return headerMobileMenuIn; });
var headerMobileMenuIn = function headerMobileMenuIn(data) {
  var _data$links;

  var templateTop = "\n        <div data-screen=\"".concat(data.key, "\" class=\"header__mobile_menu-in\">\n            <div class=\"header__mobile_menu-top\">\n                <div class=\"header__mobile_menu-top-in\">\n                    <nav class=\"header__mobile_menu-nav child\">\n                        <ul>");
  var templateMenu = '';
  (_data$links = data.links) === null || _data$links === void 0 ? void 0 : _data$links.forEach(function (item) {
    if (item.children) {
      templateMenu += "\n                <li>\n                    <div data-target=\"".concat(item.key, "\" data-back=\"true\" class=\"arrow\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 33 11\" fill=\"none\">\n                            <path d=\"M0.998946 5.31019L31.0001 5.31019M31.0001 5.31019L26.1005 0.818362M31.0001 5.31019L26.0628 9.90892\" stroke=\"#050505\" stroke-width=\"2\"></path>\n                        </svg>\n                    </div>\n                    <a href=\"").concat(item.href, "\">").concat(item.text, "</a>\n                </li>\n            ");
    } else {
      templateMenu += "\n                <li>\n                    <a href=\"#\" class=\"arrow\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 33 11\" fill=\"none\">\n                            <path d=\"M0.998946 5.31019L31.0001 5.31019M31.0001 5.31019L26.1005 0.818362M31.0001 5.31019L26.0628 9.90892\" stroke=\"#050505\" stroke-width=\"2\"></path>\n                        </svg>\n                    </a>\n                    <a href=\"".concat(item.href, "\">").concat(item.text, "</a>\n                </li>\n            ");
    }
  });
  var templateBottom = "</ul>\n                    </nav>\n                </div>\n            </div>\n        </div>\n    ";
  return templateTop + templateMenu + templateBottom;
};

/***/ }),

/***/ "./src/blocks/modules/inner-contacts/inner-contacts.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/inner-contacts/inner-contacts.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nativejs-select */ "./node_modules/nativejs-select/build/nativejs-select.min.js");
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativejs_select__WEBPACK_IMPORTED_MODULE_2__);



/**
* ?????????????????????? ?????? ?????? ???????????????? ??????????????????
@class InnerContacts
@constructor
@example
    let innerContacts = new InnerContacts() {}
*/

var InnerContacts = /*#__PURE__*/function () {
  function InnerContacts() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InnerContacts);
  }
  /** 
  * ???????????????????????????? nativejs-select ?????? '.inner-contacts__office select'
  @method initSelectStyler
  @static
  @example
      // ??????????
      app.innerContacts.initSelectStyler();
      // ??????????????????????????????
      app.innerContacts.initSelectStyler = () => {
          // ?????? ??????
          // ????????????????
          if (!document.querySelector('.inner-contacts__office')) return;
          new NativejsSelect({
              selector: '.inner-contacts__office select',
              disableMobile: true,
          });
      }
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InnerContacts, [{
    key: "initSelectStyler",
    value: function initSelectStyler() {
      if (!document.querySelector('.inner-contacts__office')) return;
      new nativejs_select__WEBPACK_IMPORTED_MODULE_2___default.a({
        selector: '.inner-contacts__office select',
        disableMobile: true
      });
    }
    /** 
    * ???????????????????????????? ???????????? ???????????????? ???? ???????????????? ??????????????????
    @method init
    @static
    @example
        // ??????????
        app.innerContacts.init();
        // ??????????????????????????????
        app.innerContacts.init = () => {// ?????? ??????}
    */

  }, {
    key: "init",
    value: function init() {
      this.initSelectStyler();
    }
  }]);

  return InnerContacts;
}();

/* harmony default export */ __webpack_exports__["default"] = (InnerContacts);

/***/ }),

/***/ "./src/blocks/modules/inner-first/inner-first.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/inner-first/inner-first.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




var Blog = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(function Blog(_ref) {
  var selected = _ref.selected;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Blog);

  this.selected = selected, this.isMoreShowed = false;
});

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./src/blocks/modules/investment-first/investment-first.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/investment-first/investment-first.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");



/**
* ?????????????????????? ?????? ?????? ?????????????? ?????????? ???????????????? ????????????????????????????
@class InvestmentFirstSlider
@constructor
@example
    let investmentFirstSlider = new InvestmentFirstSlider() {}
*/

var InvestmentFirstSlider = /*#__PURE__*/function () {
  function InvestmentFirstSlider() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InvestmentFirstSlider);

    /**
    @property slider
    @type Object
    @default new Glide('.glide', { type: 'carousel', startAt: 0, perView: 1, gap: 0 })
    @example
        app.investmentFirstSlider.slider = new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 1,
            gap: 0
        })
        // ???????????????????????? ?????????? ?????? https://glidejs.com/docs/options/
    */
    if (document.querySelector('.investment-first__right')) {
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        gap: 0
      });
    }
  }
  /** 
  * ???????????????????????????? ???????????????? ?? ???????????????????? ?? sliderOptions ?????????????????????? ???? ?????? ?????????????????? ???????????????? ?? ?????????????? .object-options__item-slider.glide
  @method moveSlider
  @static
  @example
      // ??????????
      app.investmentFirstSlider.moveSlider(=3);
        // ???????????????? ????????????????????
      // > - ?????????????????????? ???????????? ???? ????????
      // < - ?????????????????????? ?????????? ???? ????????
      // ={i} - ?????????????????? ?? {i} ???????????? (??????. '=1', ???????????????? ???? ?????????????? ????????????)
      // >> - ?????????????????? ?? ?????????? (?????????????????? ??????????)
      // << - ?????????????????? ?? ???????????? (???????????? ??????????)
        // ??????????????????????????????
      app.investmentFirstSlider.moveSlider = () => {// ?????? ??????}
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InvestmentFirstSlider, [{
    key: "moveSlider",
    value: function moveSlider(number) {
      if (!this.slider) return;
      this.slider.go(number);
    }
    /** 
    * ???????????????????????????? ?????????????? ???????? ???? ???????????????? ???????? '.investment-first__right'
    @method initSlider
    @static
    @example
        // ??????????
        app.investmentFirstSlider.initSlider();
        // ??????????????????????????????
        app.investmentFirstSlider.initSlider = () => {// ?????? ??????}
    */

  }, {
    key: "initSlider",
    value: function initSlider() {
      if (document.querySelector('.investment-first__right')) {
        this.slider.mount();
      }
    }
    /** 
    * ???????????????????????????? ???????????? ???????????????? ?? ???????????? ?????????? ???????????????? ????????????????????????????
    @method init
    @static
    @example
        // ??????????
        app.investmentFirstSlider.init();
        // ??????????????????????????????
        app.investmentFirstSlider.init = () => {// ?????? ??????}
    */

  }, {
    key: "init",
    value: function init() {
      this.initSlider();
    }
  }]);

  return InvestmentFirstSlider;
}();

/* harmony default export */ __webpack_exports__["default"] = (InvestmentFirstSlider);

/***/ }),

/***/ "./src/blocks/modules/investment-our-services/investment-our-services.js":
/*!*******************************************************************************!*\
  !*** ./src/blocks/modules/investment-our-services/investment-our-services.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");



gsap_all__WEBPACK_IMPORTED_MODULE_2__["gsap"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]);
/**
* ?????????????????????? ?????? ?????? ?????? ?????????? "???????? ????????????" ???? ???????????????? ????????????????????????????
@class InvestmentOurServices
@constructor
@example
    let investmentOurServices = new InvestmentOurServices() {}
*/

var InvestmentOurServices = /*#__PURE__*/function () {
  function InvestmentOurServices() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InvestmentOurServices);
  }
  /** 
  * ???????????????????????????? ???????????? ???????????????? ?? ?????????? "???????? ????????????" ???? ???????????????? ????????????????????????????
  @method init
  @static
  @example
      // ??????????
      app.investmentOurServices.init();
      // ??????????????????????????????
      app.investmentOurServices.init = () => {// ?????? ??????}
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InvestmentOurServices, [{
    key: "init",
    value: function init() {
      this.initAnimation();
    }
    /** 
    * ???????????????????????????? ???????????????? ?????? ?????????????? ?? ?????????? "???????? ????????????" ???????? ???? ???????????????? ???????? '.investment-our-services__item' ?? ???????????? ???????? ???????????? 1023px
    @method initAnimation
    @static
    @example
        // ??????????
        app.investmentOurServices.initAnimation();
        // ??????????????????????????????
        app.investmentOurServices.initAnimation = () => {// ?????? ??????}
    */

  }, {
    key: "initAnimation",
    value: function initAnimation() {
      if (!document.querySelector('.investment-our-services__item') || window.innerWidth <= 1023) return;
      gsap_all__WEBPACK_IMPORTED_MODULE_2__["gsap"].to('.investment-our-services__items', {
        scrollTrigger: {
          trigger: '.investment-our-services__items',
          start: 'top top',
          end: 'center top',
          onUpdate: function onUpdate(item) {
            document.querySelectorAll('.investment-our-services__item-left').forEach(function (element) {
              gsap_all__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(element, 2, {
                y: -item.progress * 12 + '%'
              });
            });
            document.querySelectorAll('.investment-our-services__item-right').forEach(function (element) {
              gsap_all__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(element, {
                y: item.progress * 12 + '%'
              });
            });
            console.log(item);
          }
        }
      });
    }
  }]);

  return InvestmentOurServices;
}();

/* harmony default export */ __webpack_exports__["default"] = (InvestmentOurServices);

/***/ }),

/***/ "./src/blocks/modules/landing-examples/landing-examples.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/landing-examples/landing-examples.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");




var Examples = /*#__PURE__*/function () {
  function Examples() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Examples);

    this.outerSlider = document.querySelector('.landing-examples__outer-slider');
    this.innerSlider = document.querySelector('.landing-examples__inner-slider');
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Examples, [{
    key: "init",
    value: function init() {
      this.initOuterSlider();
      this.initInnerSlider();
    }
  }, {
    key: "initOuterSlider",
    value: function initOuterSlider() {
      if (this.outerSlider) {
        new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.landing-examples-outer-slider', {
          modules: [swiper__WEBPACK_IMPORTED_MODULE_2__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_2__["EffectFade"], swiper__WEBPACK_IMPORTED_MODULE_2__["Pagination"]],
          speed: 1000,
          slidesPerView: 1,
          allowTouchMove: false,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          pagination: {
            el: '.landing-examples-outer-slider__counter',
            type: 'fraction'
          },
          navigation: {
            prevEl: '.landing-examples-outer-slider__button--prev',
            nextEl: '.landing-examples-outer-slider__button--next'
          }
        });
      }
    }
  }, {
    key: "initInnerSlider",
    value: function initInnerSlider() {
      if (this.innerSlider) {
        new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.landing-examples__inner-slider', {
          modules: [swiper__WEBPACK_IMPORTED_MODULE_2__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_2__["Autoplay"]],
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          allowTouchMove: true,
          pagination: {
            el: '.landing-examples-inner-slider__pagination',
            clickable: true,
            bulletClass: 'landing-examples-inner-slider__dot',
            bulletActiveClass: 'landing-examples-inner-slider__dot--active'
          }
        });
      }
    }
  }]);

  return Examples;
}();

/* harmony default export */ __webpack_exports__["default"] = (Examples);

/***/ }),

/***/ "./src/blocks/modules/landing-programms/landing-programms.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/modules/landing-programms/landing-programms.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");



/**
* ?????????????????????? ?????? ?????? ?????????? "?????????????????? ???????????????????? ?????? ?? ??????" ???? ???????????????? landing
@class Programms
@constructor
@example
    let landingProgramms = new Programms() {}
*/

var Programms = /*#__PURE__*/function () {
  function Programms() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Programms);
  }
  /** 
  * ???????????????????????????? ???????????? ???????????????? ?? ????????e "?????????????????? ???????????????????? ?????? ?? ??????" ???? ???????????????? landing
  * ?????????????????? ???????????????????? ?????????????? click ???? ???????????? '.landing-programms__item-trigger' ?????????????????? ?????? ???? ?????? ???????????????? ??  app.landingProgramms.toggleItem(item)
  @method init
  @static
  @example
      // ??????????
      app.landingProgramms.init();
      // ??????????????????????????????
      app.landingProgramms.init = () => {// ?????? ??????}
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Programms, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (!document.querySelector('.landing-programms__item-trigger')) return;
      document.querySelectorAll('.landing-programms__item-trigger').forEach(function (item) {
        item.addEventListener('click', function (event) {
          _this.toggleItem(item);
        });
      });
    }
    /** 
    * ??????????????????/?????????????? ???????????????????? ???????????????? ?? ?????????????? '.landing-programms__item' ?????????????????????? ???????????????? ?????????? 'isOpened' ?? ?????????????????? ????????????
    @method toggleItem
    @static
    @example
        // ??????????
        document.querySelectorAll('.landing-programms__item-trigger').forEach(item => {
            item.addEventListener('click', (event) => {
                this.toggleItem(item)
            });
        })
        // ??????????????????????????????
        app.landingProgramms.toggleItem = (item) => {// ?????? ??????}
    */

  }, {
    key: "toggleItem",
    value: function toggleItem(item) {
      console.log(item);
      item.closest('.landing-programms__item').classList.toggle('isOpened');

      if (item.closest('.landing-programms__item').classList.contains('isOpened')) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(item.nextElementSibling, {
          height: 'auto'
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(item.nextElementSibling, {
          height: 0
        });
      }
    }
  }]);

  return Programms;
}();

/* harmony default export */ __webpack_exports__["default"] = (Programms);

/***/ }),

/***/ "./src/blocks/modules/main-filter/main-filter.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/main-filter/main-filter.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nativejs-select */ "./node_modules/nativejs-select/build/nativejs-select.min.js");
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativejs_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");




/**
* ?????????????????????? ?????? ?????? ?????????????? ???? ??????????????
@class MainFilter
@constructor
@example
    let mainFilter = new MainFilter() {{
        isOpened: false
    }}
*/

var MainFilter = /*#__PURE__*/function () {
  function MainFilter(_ref) {
    var isOpened = _ref.isOpened;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MainFilter);

    /**
    * ???????????? ????????????????????/???????????????????? ?????????????? ???? ??????????????????
    @property isOpened
    @type Boolean
    @default false
    @example
        app.mainFilter.isOpened = true;
    */
    this.isOpened = isOpened;
  }
  /** 
  * ??????????????????/?????????????????? ????????????
  @method toggleFilter
  @static
  @example
      // ??????????
      app.mainFilter.toggleFilter();
      // ??????????????????????????????
      app.mainFilter.toggleFilter = () => {// ?????? ??????}
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MainFilter, [{
    key: "toggleFilter",
    value: function toggleFilter() {
      this.isOpened = !this.isOpened;
    }
    /** 
    * ???????????????????????????? 'nativejs-select' ?????? '.main-filter__field select'
    @method initSelectStyler
    @static
    @example
        // ??????????
        app.mainFilter.initSelectStyler();
        // ??????????????????????????????
        app.mainFilter.initSelectStyler = () => {
            // ?????? ??????
            // ????????????????
            if (!document.querySelector('.main-filter__field')) return;
            new NativejsSelect({
                selector: '.main-filter__field select',
                disableMobile: true,
            });
        }
    */

  }, {
    key: "initSelectStyler",
    value: function initSelectStyler() {
      if (!document.querySelector('.main-filter__field')) return;
      new nativejs_select__WEBPACK_IMPORTED_MODULE_2___default.a({
        selector: '.main-filter__field select',
        disableMobile: true
      });
    }
    /** 
    * ???????????????????????????? ?????????????? window.scrollTo ?????????? ?????????????????????????? ???????????????????? ?????????????? (???????????????? delay)
    @method dispatchScroll
    @static
    @example
        // ??????????
        app.mainFilter.dispatchScroll(1000);
        // ??????????????????????????????
        app.mainFilter.dispatchScroll = (delay) => {// ?????? ??????}
    */

  }, {
    key: "dispatchScroll",
    value: function dispatchScroll(delay) {
      setTimeout(function () {
        window.scrollTo({
          top: +window.scrollY
        });
      }, delay);
    }
    /** 
    * ????????????????????/???????????????? ?????????????? ???????? ?????????????? ('.main-filter__fields-in' c ???????????????????? hidden) ???????????????? ????????????
    @method toggleHiddenFields
    @static
    @example
        // ??????????
        app.mainFilter.toggleHiddenFields();
        // ??????????????????????????????
        app.mainFilter.toggleHiddenFields = () => {// ?????? ??????}
    */

  }, {
    key: "toggleHiddenFields",
    value: function toggleHiddenFields() {
      if (!document.querySelector('.main-filter__fields-in[hidden]')) return;

      if (document.querySelector('.main-filter__fields-in[hidden]').classList.contains('isOpened')) {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to('.main-filter__fields-in[hidden]', 0.5, {
          height: 0
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to('.main-filter__fields-in[hidden]', 0.5, {
          height: 'auto'
        });
      }

      document.querySelector('.main-filter__fields-in[hidden]').classList.toggle('isOpened');
      this.dispatchScroll(1000);
    }
    /** 
    * ?????????????????????? ?????????????????????? ???????????? ???????????????? ?????????????? ?? ?????????????? ?? ???????????? ???????????????? ?? ??????
    @method changeFilterOpenerColor
    @static
    @example
        // ??????????
        app.mainFilter.changeFilterOpenerColor();
        // ??????????????????????????????
        app.mainFilter.changeFilterOpenerColor = () => {// ?????? ??????}
    */

  }, {
    key: "changeFilterOpenerColor",
    value: function changeFilterOpenerColor() {
      if (!document.querySelector('.main-filter__opener') && window.innerWidth <= 1023 && CSS.supports("(-webkit-backdrop-filter: none) or (backdrop-filter: none)")) return;
      document.querySelectorAll('.scroll-section').forEach(function (section) {
        if (section.getBoundingClientRect().top < window.innerHeight) {
          var btnHeightDiff = 0;
          var wrapHeightDiff = window.innerHeight - section.getBoundingClientRect().top;

          if (document.querySelector('.main-filter__opener').classList.contains('isOpened')) {
            btnHeightDiff = window.innerHeight - document.querySelector('.main-filter__fields').offsetHeight - section.getBoundingClientRect().top;
          } else {
            btnHeightDiff = window.innerHeight - section.getBoundingClientRect().top;
          }

          var btnHeight = document.querySelector('.main-filter__opener').clientHeight;
          var wrapHeight = document.querySelector('.main-filter__fields').clientHeight;
          var btnGradientPercent = btnHeightDiff * 100 / btnHeight;
          var wrapGradientPercent = wrapHeightDiff * 100 / wrapHeight;

          switch (section.dataset.sectionColor) {
            case 'dark':
              gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to('.main-filter__opener', 0, {
                background: "linear-gradient(to top, #fff 0%, #fff ".concat(btnGradientPercent - 2, "%, #FFBC19 ").concat(btnGradientPercent, "%, #FFBC19)")
              });
              gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to('.main-filter__fields', 0, {
                background: "linear-gradient(to top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) ".concat(wrapGradientPercent - 5, "%, rgba(0, 0, 0, 0.7) ").concat(wrapGradientPercent, "%, rgba(0, 0, 0, 0.7))")
              });
              break;

            case 'light':
              gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to('.main-filter__opener', 0, {
                background: "linear-gradient(to top, #FFBC19 0%, #FFBC19 ".concat(btnGradientPercent - 2, "%, #fff ").concat(btnGradientPercent, "%, #fff)")
              });
              gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to('.main-filter__fields', 0, {
                background: "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) ".concat(wrapGradientPercent - 5, "%, rgba(255, 255, 255, 0.1) ").concat(wrapGradientPercent, "%, rgba(255, 255, 255, 0.1))")
              });
              break;

            default:
              console.log('some section on screen');
          }
        }
      });
    }
    /** 
    * ???????????????????????????? ???????????? ???????????????? ??????????????
    @method init
    @static
    @example
        // ??????????
        app.mainFilter.init();
        // ??????????????????????????????
        app.mainFilter.init = () => {// ?????? ??????}
    */

  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!document.querySelector('.main-filter__opener')) return;
      document.querySelector('.main-filter__opener').addEventListener('click', function () {
        return _this.toggleFilter();
      });
      this.initSelectStyler();
      this.changeFilterOpenerColor();
      window.addEventListener('scroll', function () {
        _this.changeFilterOpenerColor();
      });

      if (document.querySelector('.main-filter__more')) {
        document.querySelector('.main-filter__more').addEventListener('click', function () {
          _this.toggleHiddenFields();
        });
      }
    }
  }]);

  return MainFilter;
}();

/* harmony default export */ __webpack_exports__["default"] = (MainFilter);

/***/ }),

/***/ "./src/blocks/modules/mobile-filter/mobile-filter.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/mobile-filter/mobile-filter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");



/**
* ?????????????????????? ?????? ?????? ???????????????????? ??????????????
@class MobileFilter
@constructor
@example
    let mobileFilter = new MobileFilter() {}
*/

var mobileFilter = /*#__PURE__*/function () {
  function MobileFilter() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MobileFilter);
  }
  /** 
  * ????????????????????/???????????????? '.mobile-filter__in' ?????? ?????????? ???? '.mobile-filter__opener' ???????????????? ????????????
  @method toggleFilter
  @static
  @example
      // ??????????
      app.mobileFilter.toggleFilter();
      // ??????????????????????????????
      app.mobileFilter.toggleFilter = () => {// ?????? ??????}
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MobileFilter, [{
    key: "toggleFilter",
    value: function toggleFilter() {
      if (!document.querySelector('.mobile-filter')) return;
      document.querySelector('.mobile-filter__opener').addEventListener('click', function () {
        document.querySelector('.mobile-filter__opener').classList.toggle('isOpened');

        if (document.querySelector('.mobile-filter__opener').classList.contains('isOpened')) {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.mobile-filter__in', {
            height: 'auto'
          });
        } else {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.mobile-filter__in', {
            height: 0
          });
        }
      });
    }
    /** 
    * ????????????????????/???????????????? ?????????????? ???????? ?????????????? ('.mobile-filter__form-item' c ???????????????????? data-hidden="true") ???????????????? ????????????
    @method toggleMore
    @static
    @example
        // ??????????
        app.mobileFilter.toggleMore();
        // ??????????????????????????????
        app.mobileFilter.toggleMore = () => {// ?????? ??????}
    */

  }, {
    key: "toggleMore",
    value: function toggleMore() {
      if (!document.querySelector('.mobile-filter__form-item[data-hidden="true"]')) return;
      document.querySelector('.mobile-filter .main-filter__more').addEventListener('click', function () {
        document.querySelector('.mobile-filter .main-filter__more').classList.toggle('isOpened');

        if (document.querySelector('.mobile-filter .main-filter__more').classList.contains('isOpened')) {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.mobile-filter__form-item[data-hidden="true"]', {
            height: 'auto'
          });
        } else {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.mobile-filter__form-item[data-hidden="true"]', {
            height: 0
          });
        }
      });
    }
    /** 
    * ???????????????????????????? ???????????? ???????????????? ???????????????????? ??????????????
    @method init
    @static
    @example
        // ??????????
        app.mobileFilter.init();
        // ??????????????????????????????
        app.mobileFilter.init = () => {// ?????? ??????}
    */

  }, {
    key: "init",
    value: function init() {
      this.toggleFilter();
      this.toggleMore();
    }
  }]);

  return MobileFilter;
}();

/* harmony default export */ __webpack_exports__["default"] = (mobileFilter);

/***/ }),

/***/ "./src/blocks/modules/modal-quiz/modal-quiz.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/modal-quiz/modal-quiz.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalQuiz; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! form-serialize */ "./node_modules/form-serialize/index.js");
/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(form_serialize__WEBPACK_IMPORTED_MODULE_4__);





var nextId = null;
var prevId = null;

var setQuestionHeight = function setQuestionHeight(item) {
  console.log(item);
  document.querySelector('.modal-quiz__steps').style.height = "".concat(item.offsetHeight, "px");
};

var ModalQuiz = /*#__PURE__*/function () {
  function ModalQuiz() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ModalQuiz);

    this.isShowModal = false;
    this.questionHeight = 0;
    this.stepId = null;
    this.requestUri = document.querySelector('.modal-quiz') ? document.querySelector('.modal-quiz').dataset.requestUri : null;
    this.prevId = null;
    this.history = [];
    this.isFinish = false;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ModalQuiz, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (!document.querySelector('.modal-quiz__steps')) return;
      this.stepId = document.querySelector('.modal-quiz__step.isActive') ? document.querySelector('.modal-quiz__step.isActive').dataset.step_id : null;
      setTimeout(function () {
        document.querySelector('.modal-quiz__steps').style.height = "".concat(document.querySelector('.modal-quiz__step.isActive').offsetHeight + 5, "px");
      }, 500); // console.log('this.stepId', document.querySelector('.modal-quiz__step.isActive').offsetHeight+'px')

      document.querySelector('.quiz_final_form').addEventListener('submit', function (event) {
        event.preventDefault();
        if (!document.querySelectorAll('form.modal-quiz__step')) return; // var form_data = new FormData();

        var form_data = [];
        document.querySelectorAll('form.modal-quiz__step.isActive').forEach(function (item) {
          // console.log(serialize(item));
          form_data.push(form_serialize__WEBPACK_IMPORTED_MODULE_4___default()(item));
          console.log('form_data', form_data);
        });

        if (form_data) {
          var data = new FormData();
          data.append('data', JSON.stringify(form_data));
          axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_this.requestUri, data).then(function (response) {
            console.log('response', response, data);
            var title = document.querySelector('.modal-quiz__title');
            title.remove();
            setQuestionHeight(document.querySelector("[data-step_id=\"12341234\"]"));
            document.querySelector(".modal-quiz__step.isActive:not(.isSlided)").classList.add("isSlided");
            document.querySelector("[data-step_id=\"12341234\"]").classList.add("isActive");
          })["catch"](function (error) {
            console.log(error);

            _this.hiddenModalQuiz();
          });
        } else {
          alert('?????????????????? ????????');
        }
      });
    }
  }, {
    key: "showModalQuiz",
    value: function showModalQuiz() {
      this.isShowModal = true;
      document.querySelector('body').style.overflow = 'hidden';
    }
  }, {
    key: "hiddenModalQuiz",
    value: function hiddenModalQuiz() {
      this.isShowModal = false;
      document.querySelector('body').style.overflow = 'auto';
    }
  }, {
    key: "getStep",
    value: function getStep(button) {
      // console.log(document.querySelector(`[data-step_id="${this.stepId}"]`));
      // let data = {
      //     currentStep: this.stepId,
      //     value: document.querySelector(`[data-step_id="${this.stepId}"]`) ? serialize(document.querySelector(`[data-step_id="${this.stepId}"]`)) : null
      // }
      // var form_data = new FormData();
      // form_data.append("data", JSON.stringify(data) );
      // if (data.value) {
      //     axios.post(this.requestUri, form_data).then(response => {
      //         console.log('response', response, data, form_data);
      //         document.querySelector(`.modal-quiz__step.isActive:not(.isSlided)`).classList.add(`isSlided`);
      //         document.querySelector(`[data-step_id="${newStep.data[0].nextId}"]`).classList.add(`isActive`);
      //         this.setQuestionHeight(document.querySelector(`[data-step_id="${newStep.data[0].nextId}"]`));
      //     }).catch(error => {
      //         this.hiddenModalQuiz();
      //     });
      // } else {
      //     alert('?????????????????? ????????');
      // }
      console.log(button);

      if (button === 'next') {
        if (this.stepId !== 43214321 && document.querySelector(".modal-quiz__step.isActive:not(.isSlided) input[type=\"radio\"]")) {
          if (document.querySelector(".modal-quiz__step.isActive:not(.isSlided) input[type=\"radio\"]:checked")) {
            this.history = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.history), [this.stepId]);
            this.stepId = document.querySelector(".modal-quiz__step.isActive:not(.isSlided) input[type=\"radio\"]:checked").value; // if (!document.querySelector(`[data-step_id="${this.stepId}"]`)) {
            //     this.stepId = 43;
            // } else {
            // }

            if (!document.querySelector("[data-step_id=\"".concat(this.stepId, "\"]"))) {
              this.stepId = 43214321;
              console.log('is 43214321');
            }

            document.querySelector(".modal-quiz__step.isActive:not(.isSlided)").classList.add("isSlided");
            document.querySelector("[data-step_id=\"".concat(this.stepId, "\"]")).classList.add("isActive");
          } else {
            alert('????????????????, ???? ???? ???????????? ?????? ???? ??????????????.');
          }
        } else {
          // const title = document.querySelector('.modal-quiz__title');
          var buttons = document.querySelector('.modal-quiz__buttons');
          console.log('last screen');
          document.querySelector(".modal-quiz__step.isActive:not(.isSlided)").classList.add("isSlided");
          document.querySelector("[data-step_id=\"43214321\"]").classList.add("isActive"); // this.stepId = 12341234;
          // title.remove();

          buttons.remove();
        }
      } else {
        if (this.history.length) {
          console.log('back', this.stepId, this.history[this.history.length - 1]);
          document.querySelector("[data-step_id=\"".concat(this.stepId, "\"]")).classList.remove("isActive");
          document.querySelector("[data-step_id=\"".concat(this.history[this.history.length - 1], "\"]")).classList.remove("isSlided"); // document.querySelector(`[data-step_id="${this.history[this.history.length - 1]}"]`).classList.add('isActive');

          this.stepId = this.history[this.history.length - 1];
          this.history.pop();
        } else {
          alert('???? ?????? ???????????? ???? ??????????????');
        }
      }

      setTimeout(function () {
        console.log("height ".concat(document.querySelector('.modal-quiz__step.isActive').offsetHeight + 5, "px"), document.querySelector('.modal-quiz__step.isActive:not(.isSlided)'));
        document.querySelector('.modal-quiz__steps').style.height = "".concat(document.querySelector('.modal-quiz__step.isActive:not(.isSlided)').offsetHeight + 5, "px");
      }, 500);
    }
  }]);

  return ModalQuiz;
}();



/***/ }),

/***/ "./src/blocks/modules/modals/modals.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/modals/modals.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Modals = /*#__PURE__*/function () {
  function Modals(_ref) {
    var modalsSelector = _ref.modalsSelector,
        modalsOpenerSelector = _ref.modalsOpenerSelector,
        openedClass = _ref.openedClass;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Modals);

    this.modalsSelector = modalsSelector;
    this.modalsOpenerSelector = modalsOpenerSelector;
    this.openedClass = openedClass;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Modals, [{
    key: "openModal",
    value: function openModal(id) {
      if (!document.querySelector("[".concat(this.modalsSelector, "=\"").concat(id, "\"]"))) return;
      document.querySelector("[".concat(this.modalsSelector, "=\"").concat(id, "\"]")).classList.add(this.openedClass);
    }
  }, {
    key: "closeModal",
    value: function closeModal(id) {
      if (!document.querySelector("[".concat(this.modalsSelector, "=\"").concat(id, "\"]"))) return;
      document.querySelector("[".concat(this.modalsSelector, "=\"").concat(id, "\"]")).classList.remove(this.openedClass);
    }
  }, {
    key: "addClickListener",
    value: function addClickListener() {
      var _this = this;

      document.addEventListener('click', function (event) {
        console.log('click to open modal');

        if (event.target.dataset.modalId) {
          event.preventDefault();

          _this.openModal(event.target.dataset.modalId);
        }

        if (!event.target.dataset.modalId && event.target.dataset.modal) {
          _this.closeModal(document.querySelector("[".concat(_this.modalsSelector, "].isOpened")).dataset.modal);
        }

        if (event.target.classList.contains('modal__closer')) {
          event.target.closest('.modal').classList.remove('isOpened');
        }

        if (event.target.closest('.property-item') && document.querySelector(".propertyModal[data-modal=\"".concat(event.target.dataset.modalId, "\"] .modal__left img"))) {
          console.log('image', event.target.closest('.property-item').querySelector('.property-item__left .glide__slide--active img').src);
          document.querySelector(".propertyModal[data-modal=\"".concat(event.target.dataset.modalId, "\"] .modal__left img")).src = event.target.closest('.property-item').querySelector('.property-item__left .glide__slide--active img').src;
          console.log('image2', document.querySelector('.propertyModal .modal__left img').src);
        }
      });
    }
  }, {
    key: "addKeyupListener",
    value: function addKeyupListener() {
      var _this2 = this;

      document.addEventListener('keyup', function (event) {
        if (event.keyCode === 27 && document.querySelector("[".concat(_this2.modalsSelector, "].isOpened"))) {
          _this2.closeModal(document.querySelector("[".concat(_this2.modalsSelector, "].isOpened")).dataset.modal);
        }
      });
    }
  }, {
    key: "addOnSubmitListener",
    value: function addOnSubmitListener() {
      if (!document.querySelector('.modal__form')) return;
      document.querySelector('.modal__form').addEventListener('submit', function (event) {
        event.target.closest('.modal').classList.add('isSended');
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (!this.modalsSelector && this.modalsOpenerSelector) return;
      this.addClickListener();
      this.addKeyupListener();
    }
  }, {
    key: "fakeSend",
    value: function fakeSend(event) {
      if (event.target.closest('.modal')) {
        event.target.closest('.modal').classList.add('isSended');
      }
    }
  }]);

  return Modals;
}();

/* harmony default export */ __webpack_exports__["default"] = (Modals);

/***/ }),

/***/ "./src/blocks/modules/object-calculator/object-calculator.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/modules/object-calculator/object-calculator.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nativejs-select */ "./node_modules/nativejs-select/build/nativejs-select.min.js");
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativejs_select__WEBPACK_IMPORTED_MODULE_4__);





/**
* ?????????????????????? ?????? ?????? ???????????????????????? ??????????????
@class Calculator
@constructor
@example
    let ??alculator = new Calculator() {
        apiUrl: "https://openexchangerates.org/api/latest.json?app_id=a8a2d37a99d5493c9e51901ea87662e0&base=USD",
        oneUsdOnRub: 70,
        currency: '???',
        price: 8699900,
        firstPayment: 4950000,
        mortgageTerm: 20
    }
*/

var Calculator = /*#__PURE__*/function () {
  function Calculator() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      apiUrl: "https://openexchangerates.org/api/latest.json?app_id=a8a2d37a99d5493c9e51901ea87662e0&base=USD",
      oneUsdOnRub: 70,
      currency: '???',
      price: document.querySelector('.object-first__price-bottom .price') ? document.querySelector('.object-first__price-bottom .price').innerHTML : 0,
      firstPayment: 1000000,
      mortgageTerm: 20,
      percentage: 5.39,
      maxYears: 30
    };

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Calculator);

    /**
    * ???????????? ???? API ?????? ?????????????????? ?????????? ??????????
    @property apiUrl
    @type String
    @default 'https://openexchangerates.org/api/latest.json?app_id=a8a2d37a99d5493c9e51901ea87662e0&base=USD'
    @example
        app.objectCalculator.apiUrl = 'https://openexchangerates.org/api/latest.json?app_id=a8a2d37a99d5493c9e51901ea87662e0&base=USD';
    */
    this.apiUrl = params.apiUrl;
    /**
    * ???????? ?????????? ???? ?????????????????? ???????? API ????????????????????
    @property oneUsdOnRub
    @type Number
    @default 70
    @example
        app.objectCalculator.oneUsdOnRub = 70;
    */

    this.oneUsdOnRub = params.oneUsdOnRub;
    /**
    * ???????????? ???? ??????????????????
    @property currency
    @type String
    @default '???'
    @example
        // Js
        app.objectCalculator.currency = '$';
        // HTML
        <select v-model="objectCalculator.currency">
    */

    this.currency = params.currency;
    /**
    * ?????????????????? ???????????????????????? 
    @property price
    @type Number
    @default 8699900
    @example
        // Js
        app.objectCalculator.price = 8699900;
        // HTML
        <input v-model="objectCalculator.price">
    */

    this.price = params.price;
    /**
    * ???????????? ??????????
    @property firstPayment
    @type Number
    @default 4950000
    @example
        // Js
        app.objectCalculator.firstPayment = 4950000;
        // HTML
        <input v-model="objectCalculator.firstPayment">
    */

    this.firstPayment = params.firstPayment;
    /**
    * ???????? ??????????????
    @property mortgageTerm
    @type Number
    @default 20
    @example
        // Js
        app.objectCalculator.mortgageTerm = 20;
        // HTML
        <input v-model="objectCalculator.mortgageTerm">
    */

    this.mortgageTerm = params.mortgageTerm;
    /**
    * ???????????????????? ????????????
    @property precentage
    @type Number
    @default 20
    @example
        // Js
        app.objectCalculator.precentage = 20;
        // HTML
        <input v-model="objectCalculator.precentage">
    */

    this.percentage = params.percentage;
    this.maxYears = params.maxYears;
  }
  /** 
  * ???????????????? ???????? ?????????? ???? apiUrl ?? ???????????????????? ???????????????? ?????????????????? ?????????????? ?? ?????????? ?? oneUsdOnRub, ???????? API ????????????????????, ???? ?? oneUsdOnRub ???????????????? ????????????????????
  @method getExchangeRate
  @static
  @example
      // ??????????
      app.objectCalculator.getExchangeRate();
      // ??????????????????????????????
      app.objectCalculator.getExchangeRate = () => {// ?????? ??????}
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Calculator, [{
    key: "getExchangeRate",
    value: function () {
      var _getExchangeRate = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        var response, json;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(this.apiUrl);

              case 2:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 8;
                  break;
                }

                _context.next = 6;
                return response.json();

              case 6:
                json = _context.sent;

                if (json.rates) {
                  this.oneUsdOnRub = json.rates.RUB;
                  console.log(json.rates.RUB);
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getExchangeRate() {
        return _getExchangeRate.apply(this, arguments);
      }

      return getExchangeRate;
    }()
    /** 
    * ?????????????????????? ???? 1 mortgageTerm
    @method mortgageTermIncrease
    @static
    @example
        // ??????????
        app.objectCalculator.mortgageTermIncrease();
        // ??????????????????????????????
        app.objectCalculator.mortgageTermIncrease = () => {// ?????? ??????}
    */

  }, {
    key: "mortgageTermIncrease",
    value: function mortgageTermIncrease() {
      if (this.mortgageTerm >= this.maxYears) return;
      this.mortgageTerm = +this.mortgageTerm + 1;
    }
    /** 
    * ?????????????????? ???? 1 mortgageTerm
    @method mortgageTermDecrease
    @static
    @example
        // ??????????
        app.objectCalculator.mortgageTermDecrease();
        // ??????????????????????????????
        app.objectCalculator.mortgageTermDecrease = () => {// ?????? ??????}
    */

  }, {
    key: "mortgageTermDecrease",
    value: function mortgageTermDecrease() {
      if (this.mortgageTerm <= 5) return;
      this.mortgageTerm = +this.mortgageTerm - 1;
    }
  }, {
    key: "initSelectStyler",
    value: function initSelectStyler() {
      if (!document.querySelector('.object-calculator__currency-select')) return;
      new nativejs_select__WEBPACK_IMPORTED_MODULE_4___default.a({
        selector: '.object-calculator__currency-select',
        disableMobile: true
      });
    }
  }, {
    key: "setPercentage",
    value: function setPercentage(percent) {
      this.percentage = percent;
    }
  }, {
    key: "setYears",
    value: function setYears(years) {
      console.log(this.mortgageTerm, this.maxYears);
      this.maxYears = years;

      if (this.mortgageTerm > this.maxYears) {
        this.mortgageTerm = this.maxYears;
      }
    }
    /** 
    * ???????????????????????????? ???????????? ???????????????? ????????????????????????
    @method init
    @static
    @example
        // ??????????
        app.objectCalculator.init();
        // ??????????????????????????????
        app.objectCalculator.init = () => {// ?????? ??????}
    */

  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.getExchangeRate();
      this.initSelectStyler();

      if (document.querySelector('.object-calculator__slider-counter-button.plus')) {
        document.querySelector('.object-calculator__slider-counter-button.plus').addEventListener('click', function () {
          _this.mortgageTermIncrease();
        });
      }

      if (document.querySelector('.object-calculator__slider-counter-button.minus')) {
        document.querySelector('.object-calculator__slider-counter-button.minus').addEventListener('click', function () {
          _this.mortgageTermDecrease();
        });
      }
    }
  }]);

  return Calculator;
}();

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ }),

/***/ "./src/blocks/modules/object-first/object-first.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/object-first/object-first.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nativejs-select */ "./node_modules/nativejs-select/build/nativejs-select.min.js");
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativejs_select__WEBPACK_IMPORTED_MODULE_2__);



/**
* ?????????????????????? ?????? ?????? ?????????????? ?????????? ???????????????? ?????????????? ????????????????????????
@class ObjectFirst
@constructor
@example
    let objectFirst = new ObjectFirst() {}
*/

var ObjectFirst = /*#__PURE__*/function () {
  function ObjectFirst() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ObjectFirst);
  }
  /** 
  * ???????????????????????????? 'nativejs-select' ?????? '.object-first__price-bottom select'
  @method initSelectStyler
  @static
  @example
      // ??????????
      app.objectFirst.initSelectStyler();
      // ??????????????????????????????
      app.objectFirst.initSelectStyler = () => {
          // ?????? ??????
          // ????????????????
          if (!document.querySelector('.object-first__price-bottom')) return;
          new NativejsSelect({
              selector: '.object-first__price-bottom select',
              disableMobile: true,
          });
      }
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ObjectFirst, [{
    key: "initSelectStyler",
    value: function initSelectStyler() {
      if (!document.querySelector('.object-first__price-bottom')) return;
      new nativejs_select__WEBPACK_IMPORTED_MODULE_2___default.a({
        selector: '.object-first__price-bottom select',
        disableMobile: true
      });
    }
    /** 
    * ???????????????????????????? ???????????? ???????????????? ?????????????? ?????????? ???????????????? ?????????????? ????????????????????????
    @method init
    @static
    @example
        // ??????????
        app.objectFirst.init();
        // ??????????????????????????????
        app.objectFirst.init = () => {// ?????? ??????}
    */

  }, {
    key: "init",
    value: function init() {
      this.initSelectStyler();
    }
  }]);

  return ObjectFirst;
}();

/* harmony default export */ __webpack_exports__["default"] = (ObjectFirst);

/***/ }),

/***/ "./src/blocks/modules/object-nearby/object-nearby.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/object-nearby/object-nearby.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");




/**
* ?????????????????????? ?????? ?????? ?????????? "?????????????? ??????????"
@class ObjectNearby
@constructor
@example
    let objectNearby = new ObjectNearby() {}
*/

var ObjectNearby = /*#__PURE__*/function () {
  function ObjectNearby() {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ObjectNearby);

    /**
    @property slider
    @type Object
    @default new Glide('.object-nearby__middle.glide', { perView: 2, type: 'slider', gap: 20, startAt: 1, breakpoints: { 600: { perView: 1, gap: 0, startAt: 0, } } })
    @example
        app.investmentFirstSlider.slider = new Glide('.object-nearby__middle.glide', {
            perView: 2,
            type: 'slider',
            gap: 20,
            startAt: 1,
            breakpoints: {
                600: {
                    perView: 1,
                    gap: 0,
                    startAt: 0,
                }
            }
        })
        // ???????????????????????? ?????????? ?????? https://glidejs.com/docs/options/
    */
    if (document.querySelector('.object-nearby__middle.glide')) {
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.object-nearby__middle.glide', {
        perView: 2,
        type: 'slider',
        gap: 20,
        startAt: 1,
        breakpoints: {
          600: {
            perView: 1,
            gap: 0,
            startAt: 0
          }
        }
      });
    } else {
      this.slider = "";
    }

    setTimeout(function () {
      _this.toggleSliderOnWindowResize();
    }, 500);
  }
  /** 
  * ?????????????????? ??????????????
  @method mountSlider
  @static
  @example
      // ??????????
      app.objectNearby.mountSlider();
      // ??????????????????????????????
      app.objectNearby.mountSlider = () => {// ?????? ??????}
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ObjectNearby, [{
    key: "mountSlider",
    value: function mountSlider() {
      console.log(this.slider);

      if (this.slider != "") {
        this.slider.mount();
      }
    }
    /** 
    * ???????????????????????? ??????????????
    @method unmountSlider
    @static
    @example
        // ??????????
        app.objectNearby.unmountSlider();
        // ??????????????????????????????
        app.objectNearby.unmountSlider = () => {// ?????? ??????}
    */

  }, {
    key: "unmountSlider",
    value: function unmountSlider() {
      if (this.slider != "") {
        this.slider.destroy();
      }
    }
    /** 
    * ?????? window.innerWidth > 1023 ???????????????????????? ?????????????? ( app.objectNearby.unmountSlider(); ) ?????????? ?????????????????? ?????????????? ( app.objectNearby.mountSlider(); )
    @method toggleSliderOnWindowResize
    @static
    @example
        // ??????????
        app.objectNearby.toggleSliderOnWindowResize();
        // ??????????????????????????????
        app.objectNearby.toggleSliderOnWindowResize = () => {// ?????? ??????}
    */

  }, {
    key: "toggleSliderOnWindowResize",
    value: function toggleSliderOnWindowResize() {
      var _this2 = this;

      if (window.innerWidth > 1023 && this.slider.index) {
        this.unmountSlider();
      } else {
        this.mountSlider();
      }

      window.addEventListener('resize', function () {
        if (window.innerWidth > 1023 && _this2.slider.index) {
          _this2.unmountSlider();
        } else {
          _this2.mountSlider();
        }
      });

      if (window.innerWidth > 1023 && document.querySelector('.object-nearby__slides') && document.querySelector('.object-nearby__bottom .button')) {
        var startHeight = document.querySelector('.object-nearby__slides').offsetHeight;
        console.log(startHeight);
        document.querySelector('.object-nearby__slides').style.height = document.querySelector('.object-nearby__slides .unique-offers__item').offsetHeight + 'px';
        console.log('height', document.querySelector('.object-nearby__slides .unique-offers__item').offsetHeight + 'px');
        document.querySelector('.object-nearby__bottom .button').addEventListener('click', function (event) {
          event.preventDefault();
          gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to('.object-nearby__slides', {
            height: startHeight
          });
          document.querySelector('.object-nearby__bottom').style.display = 'none';
        });
      }
    }
  }]);

  return ObjectNearby;
}();

/* harmony default export */ __webpack_exports__["default"] = (ObjectNearby);

/***/ }),

/***/ "./src/blocks/modules/object-options/object-options.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/object-options/object-options.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var _check_light_or_dark_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @check-light-or-dark/image */ "./node_modules/@check-light-or-dark/image/dist/index.js");
/* harmony import */ var _check_light_or_dark_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_check_light_or_dark_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");





gsap_all__WEBPACK_IMPORTED_MODULE_4__["gsap"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_4__["ScrollTrigger"]);
/**
* ?????????????????????? ?????? ?????? ???????????????? ???????????????? ??????????????
@class ObjectOptions
@constructor
@example
    let objectOptions = new ObjectOptions() {}
*/

var ObjectOptions = /*#__PURE__*/function () {
  function ObjectOptions() {
    var sliderOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      perView: 1,
      gap: 0,
      type: 'carousel'
    };

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ObjectOptions);

    /**
    @property sliderOptions
    @type Object
    @default {perView: 1, gap: 0}
    @example
        app.objectOptions.sliderOptions = {
            perView: 1,
            autoplay: 2000,
        };
        // ???????????????????????? ?????????? ?????? https://glidejs.com/docs/options/
    */
    this.sliderOptions = sliderOptions;

    if (document.querySelector('.object-options__item-slider_first')) {
      this.firstSlider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.object-options__item-slider_first', this.sliderOptions);
    }

    if (document.querySelector('.object-options__item-slider_second')) {
      this.secondSlider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.object-options__item-slider_second', this.sliderOptions);
    }

    if (document.querySelector('.object-options__item-slider_third')) {
      this.thirdSlider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.object-options__item-slider_third', this.sliderOptions);
    }
  }
  /** 
  * ???????????????????????????? ???????????? ???????????????? ?? ???????????????? ??????????????
  @method init
  @static
  @example
      // ??????????
      app.objectOptions.init();
      // ??????????????????????????????
      app.objectOptions.init = () => {// ?????? ??????}
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ObjectOptions, [{
    key: "init",
    value: function init() {
      console.log('tratata');
      this.initSliders();
      this.initAnimation();
    }
    /** 
    * ???????????????????????????? ????????????????
    @method initAnimation
    @static
    @example
        // ??????????
        app.objectOptions.initAnimation();
        // ??????????????????????????????
        app.objectOptions.initAnimation = () => {// ?????? ??????}
    */

  }, {
    key: "initAnimation",
    value: function initAnimation() {
      if (!document.querySelector('.object-options__item') || window.innerWidth <= 1023) return;
      gsap_all__WEBPACK_IMPORTED_MODULE_4__["gsap"].utils.toArray(".object-options__item").forEach(function (section, i) {
        gsap_all__WEBPACK_IMPORTED_MODULE_4__["ScrollTrigger"].create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false // markers: true

        });
      });
    }
    /** 
    * ???????????????????????????? ????????????????
    @method initSliders
    @static
    @example
        // ??????????
        app.objectOptions.initSliders();
        // ??????????????????????????????
        app.objectOptions.initSliders = () => {// ?????? ??????}
    */

  }, {
    key: "initSliders",
    value: function initSliders() {
      if (this.firstSlider) {
        this.firstSlider.mount();
      }

      if (this.secondSlider) {
        this.secondSlider.mount();
      }

      if (this.thirdSlider) {
        this.thirdSlider.mount();
      }
    }
  }]);

  return ObjectOptions;
}();

/* harmony default export */ __webpack_exports__["default"] = (ObjectOptions);

/***/ }),

/***/ "./src/blocks/modules/our-services/our-services.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/our-services/our-services.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");



/**
* ?????????????????????? ?????? ?????? ?????????? "???????? ????????????"
@class OurServices
@constructor
@example
    let ourServices = new OurServices() {}
*/

var OurServices = /*#__PURE__*/function () {
  function OurServices() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, OurServices);

    /**
    * ???????????????????? ?????????? ????????????????????
    @property gap
    @type Number
    @default ( 20 / 1920  * window.innerWidth )
    @example
        app.ourServices.gap = 40 / 1920  * window.innerWidth;
    */
    this.gap = 20 / 1920 * window.innerWidth,
    /**
    * ?????????????? '.our-services__blocks'
    @property parent
    @type Object
    @default { width: 0, height: 0 }
    @example
        app.ourServices.parent = {
            width: 0,
            height: 0
        };
    */
    this.parent = {
      width: 0,
      height: 0
    };
    /**
    * ?????????????? ?????????????? '.our-services__block-in'
    @property block
    @type Object
    @default { width: 0, height: 0 }
    @example
        app.ourServices.block = {
            width: 0,
            height: 0
        };
    */

    this.block = {
      width: 0,
      height: 0
    };
    console.log(this.gap);
  }
  /** 
  * ?????????????? ???????????????? '.our-services__blocks' ?? ???????????? ?????????????????????? ?? app.ourServices.parent
  @method calculateParentHeight
  @static
  @example
      // ??????????
      app.ourServices.calculateParentHeight();
      // ??????????????????????????????
      app.ourServices.calculateParentHeight = () => {// ?????? ??????}
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(OurServices, [{
    key: "calculateParentHeight",
    value: function calculateParentHeight() {
      if (!document.querySelector('.our-services__blocks')) return;
      this.parent.height = document.querySelector('.our-services__blocks').offsetHeight;
      this.parent.width = document.querySelector('.our-services__blocks').offsetWidth;
      console.log(document.querySelector('.our-services__blocks'), "$width: ".concat(this.parent.height, "px; height: ").concat(this.parent.width, "px;"));
    } // calculateBlocksGaps() {
    //     if (!document.querySelector('.our-services__blocks')) return;
    //     this.gap = parseInt(window.getComputedStyle(document.querySelector('.our-services__blocks'), 'grid').getPropertyValue('grid-gap').split(' ')[0], 10);
    // }

    /** 
    * ?????????????? ???????????????? ?????????????????????? ???????????????? ?? ???????????? ?????????????????????? ?? app.ourServices.block
    @method calculateBlockSize
    @static
    @example
        // ??????????
        document.querySelectorAll('.our-services__block-in').forEach((item, i) => {
            app.ourServices.calculateBlockSize(item).then( result => { console.log(result) } );
        });
        // ??????????????????????????????
        app.ourServices.calculateParentHeight = () => {// ?????? ??????}
    */

  }, {
    key: "calculateBlockSize",
    value: function calculateBlockSize(target) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.block.height = target.clientHeight;
        _this.block.width = target.clientWidth;
        resolve(_this.block);
      });
    }
    /** 
    * ???????????????????????? ????????????
    @method animateBlock
    @static
    @example
        // ??????????
        app.ourServices.animateBlock( document.querySelectorAll('.our-services__block-in')[0], 0 );
        // ??????????????????????????????
        app.ourServices.animateBlock = () => {// ?????? ??????};
    */

  }, {
    key: "animateBlock",
    value: function animateBlock(target, i) {
      if (window.innerWidth > 1023) {
        if (i % 2 == 0 && i != 0 && i != 3 && i != 4 && target.classList.contains('isHovered')) {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, 0.3, {
            width: +this.parent.width + 3,
            height: +this.parent.height,
            right: 0 - +this.block.width - +this.gap - 2
          });
        } else if (i % 2 == 1 && i != 0 && i != 3 && i != 4 && target.classList.contains('isHovered')) {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, 0.3, {
            // width: +this.parent.width - +this.block.width - +this.gap,
            width: +this.parent.width + 3,
            height: +this.parent.height,
            left: 0 - +this.block.width - +this.gap - 2
          });
        } else {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, 0.3, {
            // width: +this.parent.width - +this.block.width - +this.gap,
            width: +this.parent.width + 3,
            height: +this.parent.height
          });
        }

        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target.querySelector('.our-services__block-text'), 0.3, {
          y: '0'
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target.querySelector('.our-services__block-button'), 0.3, {
          x: '0'
        });
      } else {
        target.closest('.our-services__block').classList.add('isOpened');

        if (i == 2 || i == 3) {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, 0.3, {
            top: 0 - +this.block.height - +this.gap * 3,
            width: +this.parent.width,
            height: +this.parent.height
          });
        } else if (i == 4 || i == 5) {
          console.log('to top');
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, 0.3, {
            top: 0 - +this.block.height * 2 - +this.gap * 6,
            width: +this.parent.width,
            height: +this.parent.height
          });
        } else if (i == 6 || i == 7) {
          console.log('to top');
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, 0.3, {
            top: 0 - +this.block.height * 3 - +this.gap * 9,
            width: +this.parent.width,
            height: +this.parent.height
          });
        } else {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, 0.3, {
            width: +this.parent.width,
            height: +this.parent.height
          });
        }

        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target.querySelector('.our-services__block-text'), 0.3, {
          y: 0,
          onComplete: function onComplete() {
            gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target.querySelector('.our-services__block-button'), 0.3, {
              x: 0
            });
          }
        });
      }
    }
    /** 
    * ???????????????????????? ???????????? ?? ???????????????? ??????????????
    @method animateBlockBack
    @static
    @example
        // ??????????
        app.ourServices.animateBlockBack( document.querySelectorAll('.our-services__block-in')[0], 0 );
        // ??????????????????????????????
        app.ourServices.animateBlockBack = (target, i) => {// ?????? ??????};
    */

  }, {
    key: "animateBlockBack",
    value: function animateBlockBack(target, i) {
      if (window.innerWidth <= 1023) {
        target.closest('.our-services__block').classList.remove('isOpened');
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, 0.3, {
          top: 0,
          width: '100%',
          height: '100%'
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target.querySelector('.our-services__block-text'), 0.3, {
          y: '100%'
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target.querySelector('.our-services__block-button'), 0.3, {
          x: '-100%'
        });
      } else {
        if (i % 2 == 1 && i != 0 && i != 3 && i != 4) {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, 0.3, {
            left: 0,
            width: '100%',
            height: '100%'
          });
        } else if (i % 2 == 0 && i != 0 && i != 3 && i != 4) {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, 0.3, {
            right: 0,
            width: '100%',
            height: '100%'
          });
        } else {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, 0.3, {
            width: '100%',
            height: '100%'
          });
        }

        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target.querySelector('.our-services__block-text'), 0.3, {
          y: '100%'
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target.querySelector('.our-services__block-button'), 0.3, {
          x: '-100%'
        });
      }
    }
    /** 
    * ???????????????????????????? ???????????? ???????????????? ?????????? "???????? ????????????"
    @method init
    @static
    @example
        // ??????????
        app.ourServices.init();
        // ??????????????????????????????
        app.ourServices.init = () => {// ?????? ??????}
    */

  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.calculateParentHeight(); // this.calculateBlocksGaps();

      if (document.querySelector('.our-services__block-in')) {
        document.querySelectorAll('.our-services__block-in').forEach(function (item, i) {
          if (window.innerWidth > 1023) {
            item.addEventListener('mouseenter', function (event) {
              item.classList.add('isHovered'); // setTimeout(() => {

              console.log(123123123);

              if (item.classList.contains('isHovered')) {
                _this2.calculateBlockSize(event.target).then(function (result) {
                  _this2.animateBlock(event.target, i);
                });
              } // }, 1000)

            });
            item.addEventListener('mouseleave', function (event) {
              item.classList.remove('isHovered');

              _this2.animateBlockBack(event.target, i);
            });
          } else {
            item.addEventListener('click', function (event) {
              document.querySelectorAll('.our-services__block-in:not(.isOpened)').forEach(function (element) {
                if (!item.closest('.our-services__block').classList.contains('isOpened')) {
                  _this2.animateBlockBack(element, i);
                }
              }); // if (item.closest('.our-services__block').classList.contains('isOpened')) {
              // }

              _this2.calculateBlockSize(item).then(function (result) {
                _this2.animateBlock(item, i);
              });
            });
            item.querySelector('.our-services__block-closer').addEventListener('click', function (event) {
              event.stopPropagation();

              _this2.animateBlockBack(item, i);
            });
          }
        });
      }
    }
  }]);

  return OurServices;
}();

/* harmony default export */ __webpack_exports__["default"] = (OurServices);

/***/ }),

/***/ "./src/blocks/modules/property-item/property-item.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/property-item/property-item.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nativejs-select */ "./node_modules/nativejs-select/build/nativejs-select.min.js");
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativejs_select__WEBPACK_IMPORTED_MODULE_5__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  options = _objectSpread({
    path: '/'
  }, options);

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  var updatedCookie = name + "=" + value;

  for (var optionKey in options) {
    updatedCookie += "; " + optionKey;
    var optionValue = options[optionKey];

    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

var itemsArray = getCookie('osm') ? _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(JSON.parse(getCookie('osm'))) : []; // console.log(JSON.parse(getCookie('osm')), document.cookie);

console.log(itemsArray);
/**
* ?????????????????????? ?????? ?????? ?????????????????? ????????????????
@class PropertyItem
@constructor
@example
    let propertyItem = new PropertyItem() {}
*/

var PropertyItem = /*#__PURE__*/function () {
  function PropertyItem() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PropertyItem);
  }
  /** 
  * ???????????????????????????? 'nativejs-select' ?????? '.property-item__price-in select'
  @method initSelectStyler
  @static
  @example
      // ??????????
      app.propertyItem.initSelectStyler();
      // ??????????????????????????????
      app.propertyItem.initSelectStyler = () => {
          // ?????? ??????
          // ????????????????
          if (!document.querySelector('.property-item__price-in')) return;
          new NativejsSelect({
              selector: '.property-item__price-in select',
              disableMobile: true,
          });
      }
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PropertyItem, [{
    key: "initSelectStyler",
    value: function initSelectStyler() {
      if (!document.querySelector('.property-item__price-in')) return;
      new nativejs_select__WEBPACK_IMPORTED_MODULE_5___default.a({
        selector: '.property-item__price-in select',
        disableMobile: true
      });
    }
    /** 
    * ???????????????????????????? ?????????????? ?????? '.property-item__slider-glide'
    @method initSlider
    @static
    @example
        // ??????????
        app.propertyItem.initSlider();
        // ??????????????????????????????
        app.propertyItem.initSlider = () => {
            // ?????? ??????
            // ????????????????
            if (document.querySelector('.property-item__slider-glide')) {
                document.querySelectorAll('.property-item__slider-glide').forEach(item => {
                    new Glide(item, {
                        perView: 1,
                        type: 'slider',
                        gap: 0,
                        startAt: 0
                    }).mount();
                })
            }
        }
    */

  }, {
    key: "initSlider",
    value: function initSlider() {
      if (document.querySelector('.property-item__slider-glide')) {
        document.querySelectorAll('.property-item__slider-glide').forEach(function (item) {
          new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__["default"](item, {
            perView: 1,
            type: 'slider',
            gap: 0,
            startAt: 0
          }).mount();
        });
      }
    }
  }, {
    key: "toggleToFavorites",
    value: function toggleToFavorites(event) {
      if (!event.target.dataset.property_id) return;
      event.preventDefault();

      if (itemsArray.indexOf(event.target.dataset.property_id) === -1) {
        itemsArray.push(event.target.dataset.property_id);
        console.log(itemsArray);
        event.target.classList.add('isActive');
        document.querySelector('.header__favorites').classList.add('hasItems');
        document.querySelector('.header__favorites .value').innerHTML = +document.querySelector('.header__favorites .value').innerHTML + 1;
      } else {
        event.target.classList.remove('isActive');
        itemsArray = itemsArray.filter(function (item) {
          return item !== event.target.dataset.property_id;
        });
        console.log(itemsArray);

        if (itemsArray.length > 0) {
          document.querySelector('.header__favorites .value').innerHTML = +document.querySelector('.header__favorites .value').innerHTML - 1;
        } else {
          document.querySelector('.header__favorites').classList.remove('hasItems');
          document.querySelector('.header__favorites .value').innerHTML = 0;
        }
      }

      console.log(itemsArray);
      setCookie('osm', JSON.stringify(itemsArray));
    }
    /** 
    * ???????????????????????????? ???????????? ?????????????????? ????????????????
    @method init
    @static
    @example
        // ??????????
        app.propertyItem.init();
        // ??????????????????????????????
        app.propertyItem.init = () => {// ?????? ??????}
    */

  }, {
    key: "init",
    value: function init() {
      this.initSelectStyler();
      this.initSlider();

      if (document.querySelector('.property-item__price-in select') && document.querySelector('.property-item__price-in .from span')) {
        document.querySelectorAll('.property-item__price-in select').forEach(function (item) {
          item.addEventListener('change', function () {
            item.closest('.property-item__price').querySelector('.property-item__price-in .from span').innerHTML = item.value;
          });
        });
      }

      if (document.querySelector('.object-first__price-bottom .currency') && document.querySelector('.object-first__price-bottom .price')) {
        document.querySelector('.object-first__price-bottom .currency').addEventListener('change', function () {
          document.querySelector('.object-first__price-bottom .price').innerHTML = document.querySelector('.object-first__price-bottom .currency').value;
        });
      }
    }
  }]);

  return PropertyItem;
}();

/* harmony default export */ __webpack_exports__["default"] = (PropertyItem);

/***/ }),

/***/ "./src/blocks/modules/property-map-content/property-map-content.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/modules/property-map-content/property-map-content.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mapbox/mapbox-gl-draw */ "./node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js");
/* harmony import */ var _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");




 // import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';

mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.accessToken = 'pk.eyJ1IjoicnVzbGFuZ2FyYXBvdiIsImEiOiJja3d2NDNreTAxd2pyMndwbXgzZngwaXVrIn0.8J-2MovZrq77dZCecY-CRQ'; // mapboxgl.workerClass = MapboxWorker;

var PropertyMapContent = /*#__PURE__*/function () {
  function PropertyMapContent() {
    var sliderOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      type: 'carousel',
      startAt: 0,
      gap: 0,
      perView: 1
    };

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PropertyMapContent);

    console.log(sliderOptions);
    this.map;
    this.drawer;
    this.sliderOptions = sliderOptions;
    this.isDrawerCrated = false;
    this.isLoading = false;
    this.isMapOpened = false;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PropertyMapContent, [{
    key: "createMap",
    value: function createMap() {
      var _this = this;

      if (document.querySelector('#map_container')) {
        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.Map({
          container: 'map_container',
          // container ID
          style: 'mapbox://styles/mapbox/streets-v11',
          // style URL
          center: [-74.5, 40],
          // starting position [lng, lat]
          zoom: 9 // starting zoom

        });
        this.map.on('draw.create', function () {
          _this.updateList();
        });
        this.map.on('draw.delete', function () {
          _this.updateList();
        });
        this.map.on('draw.update', function () {
          _this.updateList();
        });
        this.createMarker({
          position: [-74.4, 40]
        });
        this.createMarker({
          position: [-74.5, 40]
        });
        console.log(this.map);
      }
    }
  }, {
    key: "createMarker",
    value: function createMarker(_ref) {
      var position = _ref.position;
      new mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.Marker().setLngLat(position).addTo(this.map);
    }
  }, {
    key: "updateList",
    value: function updateList() {
      var _this2 = this;

      this.isLoading = true;

      if (window.innerWidth <= 1023) {
        this.isMapOpened = false;
        this.toggleDrawerToMap();

        if (document.querySelector('.property-map-content__items')) {
          document.querySelector('.property-map-content__items').scrollIntoView({
            behavior: "smooth"
          });
        }
      }

      setTimeout(function () {
        _this2.isLoading = false;
      }, 1000);
    }
  }, {
    key: "createDrawer",
    value: function createDrawer() {
      this.drawer = new _mapbox_mapbox_gl_draw__WEBPACK_IMPORTED_MODULE_3___default.a({
        displayControlsDefault: false,
        defaultMode: 'draw_polygon'
      });
    }
  }, {
    key: "toggleDrawerToMap",
    value: function toggleDrawerToMap() {
      console.log(this.isDrawerCrated);

      if (!this.isDrawerCrated) {
        this.map.addControl(this.drawer);
      } else {
        this.map.removeControl(this.drawer);
      }

      this.isDrawerCrated = !this.isDrawerCrated;
    }
  }, {
    key: "setBlockHeight",
    value: function setBlockHeight() {
      if (!document.querySelector('.property-map-content__in') || !document.querySelector('.header') || window.innerWidth <= 1023) return;
      document.querySelector('.property-map-content__in').setAttribute('style', "height: calc(100vh - ".concat(document.querySelector('.header').offsetHeight, "px)"));
      if (!document.querySelector('.property-map-content__items-title') && !document.querySelector('property-map-content__items-in') || window.innerWidth <= 1023) return;
      console.log(123321123321123321);
      document.querySelector('.property-map-content__items-in').setAttribute('style', "height: calc(100% - ".concat(document.querySelector('.property-map-content__items-title').offsetHeight, "px)"));
    }
  }, {
    key: "initSlider",
    value: function initSlider(item) {
      new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__["default"](item, this.sliderOptions).mount();
    }
  }, {
    key: "toggleMobileMap",
    value: function toggleMobileMap() {
      this.isMapOpened = !this.isMapOpened;
      console.log(this.isMapOpened);
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      this.createMap();
      this.createDrawer();
      this.setBlockHeight();

      if (document.querySelector('.property-map-content__map-drawer')) {
        document.querySelector('.property-map-content__map-drawer').addEventListener('click', function () {
          _this3.toggleDrawerToMap();
        });
      }

      if (document.querySelector('.property-map-content__item-images')) {
        document.querySelectorAll('.property-map-content__item-images').forEach(function (item) {
          _this3.initSlider(item);
        });
      }

      if (document.querySelector('.property-map-first + .mobile-filter .main-filter__map')) {
        document.querySelector('.property-map-first + .mobile-filter .main-filter__map').addEventListener('click', function (event) {
          event.preventDefault();

          _this3.toggleMobileMap();
        });
      }
    }
  }]);

  return PropertyMapContent;
}();

/* harmony default export */ __webpack_exports__["default"] = (PropertyMapContent); // const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });

/***/ }),

/***/ "./src/blocks/modules/property-sorting/property-sorting.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/property-sorting/property-sorting.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nativejs-select */ "./node_modules/nativejs-select/build/nativejs-select.min.js");
/* harmony import */ var nativejs_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativejs_select__WEBPACK_IMPORTED_MODULE_2__);



/**
* ?????????????????????? ?????? ?????? ???????????????????? ????????????????
@class PropertySort
@constructor
@example
    let propertySort = new PropertySort() {}
*/

var PropertySort = /*#__PURE__*/function () {
  function PropertySort() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PropertySort);
  }
  /** 
  * ???????????????????????????? 'nativejs-select' ?????? '.property-sorting__right select'
  @method initSelectStyler
  @static
  @example
      // ??????????
      app.propertySort.initSelectStyler();
      // ??????????????????????????????
      app.propertySort.initSelectStyler = () => {
          // ?????? ??????
          // ????????????????
          if (!document.querySelector('.property-sorting__right')) return;
          new NativejsSelect({
              selector: '.property-sorting__right select',
              disableMobile: true,
          });
      }
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PropertySort, [{
    key: "initSelectStyler",
    value: function initSelectStyler() {
      if (!document.querySelector('.property-sorting__right')) return;
      new nativejs_select__WEBPACK_IMPORTED_MODULE_2___default.a({
        selector: '.property-sorting__right select',
        disableMobile: true
      });
    }
    /** 
    * ???????????????????????????? ???????????? ???????????????????? ????????????????
    @method init
    @static
    @example
        // ??????????
        app.propertySort.init();
        // ??????????????????????????????
        app.propertySort.init = () => {// ?????? ??????}
    */

  }, {
    key: "init",
    value: function init() {
      this.initSelectStyler();
    }
  }]);

  return PropertySort;
}();

/* harmony default export */ __webpack_exports__["default"] = (PropertySort);

/***/ }),

/***/ "./src/blocks/modules/property-type/property-type.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/property-type/property-type.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");





var PropertyType = /*#__PURE__*/function () {
  function PropertyType() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PropertyType);

    if (document.querySelector('.property-type__items-glide.glide')) {
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.property-type__items-glide.glide', {
        perView: 3,
        type: 'slider',
        gap: "".concat(window.innerWidth * (20 / 1920)),
        startAt: 1,
        // autoplay: 2000,
        hoverpause: false,
        animationDuration: 500,
        breakpoints: {
          800: {
            perView: 2
          },
          540: {
            perView: 1
          }
        }
      });
    }

    this.slidedRange = 0;
    this.slidedRangeNew = 0;
    this.svgItems = [];
    this.isAnimationStarted = false;
    this.frame = 1000 / 60;
    this.curve = 22;
    this.curveMax = 40;
    this.curveMin = this.curveMax / 2;
    this.isBack = false;
    this.interval;
    this.fireInterval;
    this.diff = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PropertyType, [{
    key: "getSlidedRange",
    value: function getSlidedRange(element) {
      var values = element.style.transform.split(/\w+\(|\);?/);
      var transform = values[1].split(/,\s?/g).map(parseInt);
      this.slidedRange = transform[0];
    }
  }, {
    key: "moveSlider",
    value: function moveSlider(number) {
      if (!this.slider) return;
      this.slider.go(number);
    }
  }, {
    key: "createSVG",
    value: function createSVG() {
      var _this = this;

      if (!document.querySelector('.property-type__item-bg')) return;
      document.querySelectorAll('.property-type__item-bg').forEach(function (item) {
        var svg = Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_3__["SVG"])().addTo(item).size('100%', '100%');
        setTimeout(function () {
          // console.log(svg.node.width.animVal.value)
          var path = svg.path().plot("\n                    M ".concat(_this.curveMax / 2, ", ").concat(_this.curveMax / 2, "\n                    L ").concat(svg.node.width.animVal.value - _this.curveMax / 2, ", ").concat(_this.curveMax / 2, "\n                    Q ").concat(svg.node.width.animVal.value - _this.curveMax / 2, ", ").concat(svg.node.height.animVal.value / 2, " ").concat(svg.node.width.animVal.value - _this.curveMax / 2, ", ").concat(svg.node.height.animVal.value - _this.curveMax / 2, "\n                    L ").concat(svg.node.width.animVal.value - _this.curveMax / 2, ", ").concat(svg.node.height.animVal.value - _this.curveMax / 2, "\n                    L ").concat(_this.curveMax / 2, ", ").concat(svg.node.height.animVal.value - _this.curveMax / 2, "\n                    Q ").concat(_this.curveMax / 2, ", ").concat(svg.node.height.animVal.value / 2, " ").concat(_this.curveMax / 2, ", ").concat(_this.curveMax / 2, "\n                ")).attr({
            fill: '#fff'
          });
          var itemObj = {
            svg: svg,
            path: path
          };

          _this.svgItems.push(itemObj);
        }, 300);
      });
    }
  }, {
    key: "setPlot",
    value: function setPlot(curve, direction) {
      var _this2 = this;

      console.log("curve is ".concat(curve));
      this.svgItems.forEach(function (item) {
        if (direction == '<') {
          item.path.plot("\n                    M ".concat(_this2.curveMax / 2, ", ").concat(_this2.curveMax / 2, "\n                    L ").concat(item.svg.node.width.animVal.value - _this2.curveMax / 2, ", ").concat(_this2.curveMax / 2, "\n                    Q ").concat(item.svg.node.width.animVal.value - curve, ", ").concat(item.svg.node.height.animVal.value / 2, " ").concat(item.svg.node.width.animVal.value - _this2.curveMax / 2, ", ").concat(item.svg.node.height.animVal.value - _this2.curveMax / 2, "\n                    L ").concat(item.svg.node.width.animVal.value - _this2.curveMax / 2, ", ").concat(item.svg.node.height.animVal.value - _this2.curveMax / 2, "\n                    L ").concat(_this2.curveMax / 2, ", ").concat(item.svg.node.height.animVal.value - _this2.curveMax / 2, "\n                    Q ").concat(_this2.curveMax - curve, ", ").concat(item.svg.node.height.animVal.value / 2, " ").concat(_this2.curveMax / 2, ", ").concat(_this2.curveMax / 2, "\n                "));
        } else {
          item.path.plot("\n                    M ".concat(_this2.curveMax / 2, ", ").concat(_this2.curveMax / 2, "\n                    L ").concat(item.svg.node.width.animVal.value - _this2.curveMax / 2, ", ").concat(_this2.curveMax / 2, "\n                    Q ").concat(item.svg.node.width.animVal.value - (_this2.curveMax - curve), ", ").concat(item.svg.node.height.animVal.value / 2, " ").concat(item.svg.node.width.animVal.value - _this2.curveMax / 2, ", ").concat(item.svg.node.height.animVal.value - _this2.curveMax / 2, "\n                    L ").concat(item.svg.node.width.animVal.value - _this2.curveMax / 2, ", ").concat(item.svg.node.height.animVal.value - _this2.curveMax / 2, "\n                    L ").concat(_this2.curveMax / 2, ", ").concat(item.svg.node.height.animVal.value - _this2.curveMax / 2, "\n                    Q ").concat(curve, ", ").concat(item.svg.node.height.animVal.value / 2, " ").concat(_this2.curveMax / 2, ", ").concat(_this2.curveMax / 2, "\n                "));
        }
      });
    }
  }, {
    key: "animateItemsForward",
    value: function animateItemsForward() {
      if (this.diff < 300 && this.diff > -300) {
        this.setPlot(this.diff / 10 + this.curveMin, '<');
      }
    } // animateItemsBack() {
    //     if (this.diff < 300 && this.diff > -300) {
    //         this.setPlot(this.diff / 10 + this.curveMin, '<')
    //         // console.log(this.diff / 10)
    //     }
    // }

  }, {
    key: "animateItems",
    value: function animateItems(direction) {
      var _this3 = this;

      this.curve = this.curveMin;
      this.isAnimationStarted = true;
      this.interval = setInterval(function () {
        if (_this3.curve < _this3.curveMin) {
          _this3.isBack = false;
          _this3.isAnimationStarted = false;
          clearInterval(_this3.interval);
        }

        if (_this3.curve < _this3.curveMax && !_this3.isBack) {
          _this3.curve++;
        } else {
          _this3.isBack = true;
          _this3.curve--;
        }

        _this3.setPlot(_this3.curve, direction);
      }, this.frame);
    } // checkDiff() {
    //     // console.log(this.slidedRange - )
    // }
    // setInterval() {
    //     this.clearInterval();
    //     this.fireInterval = setInterval(() => {
    //         this.slidedRangeNew = this.slidedRange;
    //         // console.log('fire');
    //     }, 50, () => {
    //         this.clearInterval();            
    //     })
    // }
    // clearInterval() {
    //     clearInterval(this.fireInterval);
    //     // this.animateItems();
    //     console.log(`interval ${this.fireInterval} was cleared;`)
    // }

  }, {
    key: "init",
    value: function init() {
      var _this4 = this;

      this.createSVG();
      if (!this.slider) return;
      this.slider.mount();
      this.slider.on(['run.before'], function (item) {
        _this4.getSlidedRange(document.querySelector('.property-type__items.glide__slides'));

        if (!_this4.isAnimationStarted) {
          _this4.animateItems(item.direction);
        }
      });
      this.slider.on(['swipe.start'], function (item) {
        _this4.getSlidedRange(document.querySelector('.property-type__items.glide__slides'));

        _this4.slidedRangeNew = _this4.slidedRange; // console.log('slided range ' + this.slidedRange)
      });
      this.slider.on(['swipe.move'], function (item) {
        // this.setInterval();
        // this.setInterval();
        _this4.getSlidedRange(document.querySelector('.property-type__items.glide__slides'));

        _this4.diff = _this4.slidedRange - _this4.slidedRangeNew; // console.log(this.diff);

        _this4.animateItemsForward();
      });
      this.slider.on(['swipe.end'], function (item) {
        // this.clearInterval();
        _this4.getSlidedRange(document.querySelector('.property-type__items.glide__slides'));

        _this4.slidedRangeNew = _this4.slidedRange; // console.log('slided range ' + this.slidedRange)
      });
    }
  }]);

  return PropertyType;
}();

/* harmony default export */ __webpack_exports__["default"] = (PropertyType);

/***/ }),

/***/ "./src/blocks/modules/share/share.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/share/share.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Share; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Share = /*#__PURE__*/function () {
  function Share() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Share);

    this.isShowDropdown = false;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Share, [{
    key: "init",
    value: function init() {
      var _this = this;

      document.addEventListener('click', function (e) {
        if (!e.composedPath().find(function (item) {
          var _item$classList;

          return (_item$classList = item.classList) === null || _item$classList === void 0 ? void 0 : _item$classList.contains('share');
        })) {
          _this.hiddenDropdown();
        }
      });
    }
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown() {
      this.isShowDropdown = !this.isShowDropdown;
    }
  }, {
    key: "showDropdown",
    value: function showDropdown() {
      this.isShowDropdown = true;
    }
  }, {
    key: "hiddenDropdown",
    value: function hiddenDropdown() {
      this.isShowDropdown = false;
    }
  }, {
    key: "copyUrl",
    value: function copyUrl() {
      window.navigator.clipboard.writeText(document.location.href);
      this.isShowDropdown = false;
    }
  }]);

  return Share;
}();



/***/ }),

/***/ "./src/blocks/modules/unique-offers/unique-offers.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/unique-offers/unique-offers.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");





var UniqueOffers = /*#__PURE__*/function () {
  function UniqueOffers() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UniqueOffers);

    if (document.querySelector('.unique-offers__items-glide.unique-offers__items-glide--main')) {
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.unique-offers__items-glide.unique-offers__items-glide--main', {
        perView: 3,
        perTouch: 3,
        type: 'slider',
        autoplay: 5000,
        touchRatio: 1,
        gap: 20,
        startAt: 1,
        animationDuration: 500,
        breakpoints: {
          800: {
            perView: 2,
            perTouch: 2,
            animationDuration: 500
          },
          520: {
            perView: 1,
            perTouch: 1,
            animationDuration: 500
          }
        }
      });
    }

    if (document.querySelector('.unique-offers__items-glide.unique-offers__items-glide--object')) {
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.unique-offers__items-glide.unique-offers__items-glide--object', {
        perView: 3,
        perTouch: 3,
        type: 'slider',
        autoplay: 5000,
        touchRatio: 1,
        gap: 20,
        startAt: 0,
        animationDuration: 500,
        breakpoints: {
          800: {
            perView: 2,
            perTouch: 2,
            animationDuration: 500
          },
          520: {
            perView: 1,
            perTouch: 1,
            animationDuration: 500
          }
        }
      });
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UniqueOffers, [{
    key: "moveSlider",
    value: function moveSlider(number) {
      if (!this.slider) return;
      this.slider.go(number);
    }
  }, {
    key: "refreshSVGFilter",
    value: function refreshSVGFilter() {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to("feDisplacementMap", {
        duration: 1,
        attr: {
          scale: 30
        },
        onComplete: function onComplete() {
          gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to("feDisplacementMap", {
            duration: 1,
            attr: {
              scale: 0
            }
          });
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to("feColorMatrix", {
        duration: 2,
        attr: {
          values: 1080
        },
        onComplete: function onComplete() {
          gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to("feColorMatrix", {
            duration: 0,
            attr: {
              values: 0
            },
            onUpdate: function onUpdate() {
              console.log(123);
            }
          });
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!this.slider) return;
      this.slider.mount();
      this.slider.on(['move'], function () {
        _this.refreshSVGFilter();
      });
      this.slider.on(['run.before'], function (item) {
        console.log(item);

        if (item.direction == ">") {
          document.querySelector('.unique-offers__items').classList.remove('moveLeft');
          document.querySelector('.unique-offers__items').classList.add('moveRight');
        } else {
          document.querySelector('.unique-offers__items').classList.add('moveLeft');
          document.querySelector('.unique-offers__items').classList.remove('moveRight');
          document.querySelector('.unique-offers__item.glide__slide--active').previousElementSibling.classList.add('isNotFiltered');
        } // document.querySelector('.unique-offers__items').classList.remove('animatingItems')

      });
      this.slider.on(['run.after'], function () {
        if (document.querySelector('.unique-offers__item.isNotFiltered')) {
          document.querySelector('.unique-offers__item.isNotFiltered').classList.remove('isNotFiltered');
        }
      });
    }
  }]);

  return UniqueOffers;
}();

/* harmony default export */ __webpack_exports__["default"] = (UniqueOffers);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_main_filter_main_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/main-filter/main-filter */ "./src/blocks/modules/main-filter/main-filter.js");
/* harmony import */ var _modules_property_type_property_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/property-type/property-type */ "./src/blocks/modules/property-type/property-type.js");
/* harmony import */ var _modules_unique_offers_unique_offers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/unique-offers/unique-offers */ "./src/blocks/modules/unique-offers/unique-offers.js");
/* harmony import */ var _modules_our_services_our_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/our-services/our-services */ "./src/blocks/modules/our-services/our-services.js");
/* harmony import */ var _modules_property_item_property_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/property-item/property-item */ "./src/blocks/modules/property-item/property-item.js");
/* harmony import */ var _modules_object_options_object_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/object-options/object-options */ "./src/blocks/modules/object-options/object-options.js");
/* harmony import */ var _modules_object_calculator_object_calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/object-calculator/object-calculator */ "./src/blocks/modules/object-calculator/object-calculator.js");
/* harmony import */ var _modules_landing_examples_landing_examples__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/landing-examples/landing-examples */ "./src/blocks/modules/landing-examples/landing-examples.js");
/* harmony import */ var _modules_object_nearby_object_nearby__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/object-nearby/object-nearby */ "./src/blocks/modules/object-nearby/object-nearby.js");
/* harmony import */ var _modules_investment_our_services_investment_our_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/investment-our-services/investment-our-services */ "./src/blocks/modules/investment-our-services/investment-our-services.js");
/* harmony import */ var _modules_landing_programms_landing_programms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/landing-programms/landing-programms */ "./src/blocks/modules/landing-programms/landing-programms.js");
/* harmony import */ var _modules_cookies_form_cookies_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/cookies-form/cookies-form */ "./src/blocks/modules/cookies-form/cookies-form.js");
/* harmony import */ var _modules_investment_first_investment_first__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/investment-first/investment-first */ "./src/blocks/modules/investment-first/investment-first.js");
/* harmony import */ var _modules_property_map_content_property_map_content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/property-map-content/property-map-content */ "./src/blocks/modules/property-map-content/property-map-content.js");
/* harmony import */ var _modules_property_sorting_property_sorting__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/property-sorting/property-sorting */ "./src/blocks/modules/property-sorting/property-sorting.js");
/* harmony import */ var _modules_inner_contacts_inner_contacts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/inner-contacts/inner-contacts */ "./src/blocks/modules/inner-contacts/inner-contacts.js");
/* harmony import */ var _modules_object_first_object_first__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/object-first/object-first */ "./src/blocks/modules/object-first/object-first.js");
/* harmony import */ var _modules_mobile_filter_mobile_filter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/mobile-filter/mobile-filter */ "./src/blocks/modules/mobile-filter/mobile-filter.js");
/* harmony import */ var _modules_modals_modals__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/modals/modals */ "./src/blocks/modules/modals/modals.js");
/* harmony import */ var _modules_modal_quiz_modal_quiz__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/modal-quiz/modal-quiz */ "./src/blocks/modules/modal-quiz/modal-quiz.js");
/* harmony import */ var _modules_inner_first_inner_first__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/inner-first/inner-first */ "./src/blocks/modules/inner-first/inner-first.js");
/* harmony import */ var _modules_share_share__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! %modules%/share/share */ "./src/blocks/modules/share/share.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_24__);

























aos__WEBPACK_IMPORTED_MODULE_24___default.a.init({
  disable: 'mobile'
});
window.app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app',
  data: function data() {
    return {
      message: 'message',
      header: new _modules_header_header__WEBPACK_IMPORTED_MODULE_1__["default"](),
      mainFilter: new _modules_main_filter_main_filter__WEBPACK_IMPORTED_MODULE_2__["default"]({
        isOpened: false
      }),
      propertyType: new _modules_property_type_property_type__WEBPACK_IMPORTED_MODULE_3__["default"](),
      ourServices: new _modules_our_services_our_services__WEBPACK_IMPORTED_MODULE_5__["default"](),
      uniqueOffers: new _modules_unique_offers_unique_offers__WEBPACK_IMPORTED_MODULE_4__["default"](),
      propertyItem: new _modules_property_item_property_item__WEBPACK_IMPORTED_MODULE_6__["default"](),
      objectOptions: new _modules_object_options_object_options__WEBPACK_IMPORTED_MODULE_7__["default"](),
      objectCalculator: new _modules_object_calculator_object_calculator__WEBPACK_IMPORTED_MODULE_8__["default"](),
      landingExamples: new _modules_landing_examples_landing_examples__WEBPACK_IMPORTED_MODULE_9__["default"](),
      objectNearby: new _modules_object_nearby_object_nearby__WEBPACK_IMPORTED_MODULE_10__["default"](),
      investmentOurServices: new _modules_investment_our_services_investment_our_services__WEBPACK_IMPORTED_MODULE_11__["default"](),
      landingProgramms: new _modules_landing_programms_landing_programms__WEBPACK_IMPORTED_MODULE_12__["default"](),
      cookiesForm: new _modules_cookies_form_cookies_form__WEBPACK_IMPORTED_MODULE_13__["default"](),
      investmentFirstSlider: new _modules_investment_first_investment_first__WEBPACK_IMPORTED_MODULE_14__["default"](),
      propertyMapContent: new _modules_property_map_content_property_map_content__WEBPACK_IMPORTED_MODULE_15__["default"](),
      propertySort: new _modules_property_sorting_property_sorting__WEBPACK_IMPORTED_MODULE_16__["default"](),
      innerContacts: new _modules_inner_contacts_inner_contacts__WEBPACK_IMPORTED_MODULE_17__["default"](),
      objectFirst: new _modules_object_first_object_first__WEBPACK_IMPORTED_MODULE_18__["default"](),
      mobileFilter: new _modules_mobile_filter_mobile_filter__WEBPACK_IMPORTED_MODULE_19__["default"](),
      blog: new _modules_inner_first_inner_first__WEBPACK_IMPORTED_MODULE_22__["default"]({
        selected: []
      }),
      modals: new _modules_modals_modals__WEBPACK_IMPORTED_MODULE_20__["default"]({
        modalsSelector: "data-modal",
        modalsOpenerSelector: "data-modal-id",
        openedClass: "isOpened"
      }),
      share: new _modules_share_share__WEBPACK_IMPORTED_MODULE_23__["default"](),
      sizes: {
        window: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      },
      modalQuiz: new _modules_modal_quiz_modal_quiz__WEBPACK_IMPORTED_MODULE_21__["default"]()
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.header.init();
    this.mainFilter.init();
    this.propertyType.init();
    this.ourServices.init();
    this.uniqueOffers.init();
    this.propertyItem.init();
    this.objectOptions.init();
    this.objectCalculator.init();
    this.landingExamples.init();
    this.investmentOurServices.init();
    this.landingProgramms.init();
    this.cookiesForm.init();
    this.investmentFirstSlider.init();
    this.propertyMapContent.init();
    this.propertySort.init();
    this.innerContacts.init();
    this.objectFirst.init();
    this.mobileFilter.init();
    this.modals.init();
    this.modalQuiz.init();
    this.share.init();
    window.addEventListener('resize', function () {
      _this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    });
    document.querySelector('body').classList.add('isMounted');
  },
  computed: {
    window: {
      get: function get() {
        console.log('sizes', this.sizes);
        return {
          width: this.sizes.window.width,
          height: this.sizes.window.height
        };
      },
      set: function set(newValue) {
        this.sizes.window = newValue;
      }
    },
    calculatorMortgageTerm: {
      get: function get() {
        return this.objectCalculator.mortgageTerm;
      },
      set: function set(newValue) {
        console.log(newValue);
        this.objectCalculator.mortgageTerm = newValue < this.calculatorMaxYears ? newValue : this.calculatorMaxYears;
      }
    },
    calculatorOneUsdOnRub: {
      get: function get() {
        return this.objectCalculator.oneUsdOnRub;
      },
      set: function set(newValue) {
        this.objectCalculator.oneUsdOnRub = newValue;
      }
    },
    calculatorMaxYears: {
      get: function get() {
        return this.objectCalculator.maxYears;
      },
      set: function set(newValue) {
        this.objectCalculator.maxYears = newValue;
      }
    },
    calculatorCurrency: {
      get: function get() {
        return this.objectCalculator.currency;
      },
      set: function set(newValue) {
        this.objectCalculator.currency = newValue;
      }
    },
    calculatorFirstPayment: {
      get: function get() {
        var payment = 0;

        if (this.objectCalculator.currency === '$') {
          payment = this.objectCalculator.firstPayment / this.objectCalculator.oneUsdOnRub;
        } else {
          payment = this.objectCalculator.firstPayment;
        }

        return Math.round(payment);
      },
      set: function set(newValue) {
        var payment = 0;

        if (this.objectCalculator.currency === '$') {
          payment = newValue * this.objectCalculator.oneUsdOnRub;
        } else {
          payment = newValue;
        }

        if (newValue > this.calculatorPrice) {
          payment = this.calculatorPrice;
        }

        this.objectCalculator.firstPayment = Math.round(payment);
      }
    },
    calculatorPrice: {
      get: function get() {
        var price = 0;

        if (this.objectCalculator.currency === '$') {
          price = this.objectCalculator.price.split(' ').join('') / this.objectCalculator.oneUsdOnRub;
        } else {
          price = this.objectCalculator.price.split(' ').join('');
        }

        return Math.round(price);
      },
      set: function set(newValue) {
        this.objectCalculator.price = newValue.toLocaleString();
      }
    },
    calculatorPercentage: {
      get: function get() {
        return this.objectCalculator.percentage;
      },
      set: function set(newValue) {
        this.objectCalculator.percentage = newValue;
      }
    },
    calculatorResult: {
      get: function get() {
        // let result = Math.round((this.objectCalculator.price.split(' ').join('') - this.objectCalculator.firstPayment)*(this.objectCalculator.precentage / 12)/(1-(1/(1+(this.objectCalculator.precentage / 12)))*(this.objectCalculator.mortgageTerm * 12))).toLocaleString().replace('-', '');
        // console.clear();
        var S = this.calculatorPrice - this.calculatorFirstPayment;
        var r = this.calculatorPercentage / 100 / 12;
        var n = this.objectCalculator.mortgageTerm * 12;
        var result = S * r / (1 - 1 / Math.pow(1 + r, n)); // console.log(`
        //     ????????????: S*r/(1-(1/(1+r))*n)
        //     S = ${this.calculatorPrice - this.calculatorFirstPayment} (???????? (${this.calculatorPrice}) - ???????????? ?????????? (${this.calculatorFirstPayment}) )
        //     r = ${this.calculatorPercentage / 100 / 12} (???????????????????? ???????????? (${this.calculatorPercentage} / 12))
        //     n = ${this.objectCalculator.mortgageTerm * 12} (???????? ?????????????? (${this.objectCalculator.mortgageTerm}) * 12)
        //     ?????????????????? = ${result.toFixed(0)}
        // `)

        return result.toFixed(0);
      },
      set: function set(newValue) {// console.log(newValue);
      }
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map