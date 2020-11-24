module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\rozem\\DeveloperPortfolio\\DeveloperPortfolio\\components\\Header.js";





var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2236072256",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2236072256",
    css: "p.jsx-2236072256{color:blue;}div.jsx-2236072256{background:lightgrey;}profile.jsx-2236072256{width:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccm96ZW1cXERldmVsb3BlclBvcnRmb2xpb1xcRGV2ZWxvcGVyUG9ydGZvbGlvXFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV29CLEFBR1ksQUFHVSxBQUdWLFdBTFgsQUFLWSxVQUZaIiwiZmlsZSI6IkM6XFxVc2Vyc1xccm96ZW1cXERldmVsb3BlclBvcnRmb2xpb1xcRGV2ZWxvcGVyUG9ydGZvbGlvXFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9JbWFnZSc7XHJcbmltcG9ydCB7TmF2YmFyLCBOYXYsIE5hdkRyb3Bkb3duLH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuICBtYXJnaW5SaWdodDogMTUsXHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDwgc3R5bGUganN4PiB7YFxyXG5wIHtcclxuY29sb3I6IGJsdWU7XHJcbn1cclxuZGl2IHtcclxuYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG59XHJcbnByb2ZpbGUge1xyXG53aWR0aDogMjBweFxyXG59XHJcblxyXG5cclxuXHJcbmB9IDwvIHN0eWxlID5cclxuPE5hdmJhciBjb2xsYXBzZU9uU2VsZWN0IGV4cGFuZD1cImxnXCIgYmc9XCJMaWdodFwiIHZhcmlhbnQ9XCJsaWdodFwiPlxyXG4gIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5Qb3J0Zm9saW8gc2l0ZTwvTmF2YmFyLkJyYW5kPlxyXG4gIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIiAvPlxyXG4gIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIj5cclxuICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiL1wiPkhvbWU8L05hdkRyb3Bkb3duLkl0ZW0+IFxyXG4gICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIvcHJvamVjdHNcIj5Qcm9qZWN0czwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvTmF2RHJvcGRvd24uSXRlbT4gXHJcbiAgICAgIFxyXG4gICAgPC9OYXY+XHJcbiAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbjwvTmF2YmFyPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=C:\\Users\\rozem\\DeveloperPortfolio\\DeveloperPortfolio\\components\\Header.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    collapseOnSelect: true,
    expand: "lg",
    bg: "Light",
    variant: "light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Brand, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Portfolio site"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Collapse, {
    id: "responsive-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavDropdown"].Item, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavDropdown"].Item, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavDropdown"].Item, {
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Projects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavDropdown"].Item, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Contact")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "C:\\Users\\rozem\\DeveloperPortfolio\\DeveloperPortfolio\\components\\MyLayout.js";




var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\rozem\\DeveloperPortfolio\\DeveloperPortfolio\\pages\\projects.js";






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-487650486",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", {
    className: "jsx-487650486",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-0MPQP7QWV3",
    className: "jsx-487650486",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'G-0MPQP7QWV3');\n        "
    },
    className: "jsx-487650486",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "487650486",
    css: "#Maincard.jsx-487650486{text-align:center;margin:30px;width:70%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}#Code.jsx-487650486,#Demo.jsx-487650486{margin:10px;}#btn-container.jsx-487650486{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccm96ZW1cXERldmVsb3BlclBvcnRmb2xpb1xcRGV2ZWxvcGVyUG9ydGZvbGlvXFxwYWdlc1xccHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNlLEFBR3FCLEFBUU4sQUFHUSxZQUZ0QixNQVJjLFlBQ0YsVUFDVSw4REFTdEIsd0NBUkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxyb3plbVxcRGV2ZWxvcGVyUG9ydGZvbGlvXFxEZXZlbG9wZXJQb3J0Zm9saW9cXHBhZ2VzXFxwcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG5cclxuPGRpdj5cclxuXHJcbjxoZWFkPlxyXG4gIDxzY3JpcHRcclxuICAgIGFzeW5jXHJcbiAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctME1QUVA3UVdWM1wiXHJcbiAgLz5cclxuXHJcbiAgPHNjcmlwdFxyXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICdHLTBNUFFQN1FXVjMnKTtcclxuICAgICAgICBgLFxyXG4gICAgfX1cclxuICAvPlxyXG48L2hlYWQ+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgPHN0eWxlIGpzeD4ge2AgXHJcbiNNYWluY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMzBweDtcclxuICB3aWR0aDogNzAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG5cclxuI0NvZGUsICNEZW1vIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuI2J0bi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgYH0gPC8gc3R5bGUgPlxyXG5cclxuXHJcbiAgPExheW91dD5cclxuICAgIDxkaXYgaWQ9XCJNYWluY2FyZFwiPlxyXG4gICAgPENhcmQgaWQ9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6ICc0MHJlbScgfX0+XHJcbiA8Q2FyZC5Cb2R5PlxyXG4gICA8Q2FyZC5JbWcgaWQ9XCJJdHVuZXNQaWNcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9JdHVuZXNfQVBJX0FwcC5wbmcvXCI+PC9DYXJkLkltZz5cclxuICAgXHJcbiAgIDxDYXJkLlRpdGxlPkl0dW5lcyBBUEkgUHJvamVjdDwvQ2FyZC5UaXRsZT5cclxuICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+VGhpcyBwcm9qZWN0IHdhcyBidWlsdCB1c2luZyB0aGUgTUVSTiBzdGFjay4gVGhlIEl0dW5lcyBBUEkgY29ubmVjdHMgdG8gZXhwcmVzcyBpbiB0aGUgYmFja2VuZCBhbmQgUmVhY3QgaXMgdXNlZCBmb3IgdGhlIGZyb250ZW5kIG9mIHRoZSBBcHAuPC9DYXJkLlN1YnRpdGxlPlxyXG48ZGl2IGlkPVwiYnRuLWNvbnRhaW5lclwiPlxyXG4gICA8ZGl2IGlkPVwiRGVtb1wiPlxyXG4gIDxCdXR0b24gaHJlZj1cImh0dHBzOi8vY3J5cHRpYy1tZWFkb3ctMDY5MDUuaGVyb2t1YXBwLmNvbS9cIj5WaWV3IERlbW88L0J1dHRvbj5cclxuICAgPC9kaXY+XHJcbiAgIDxkaXYgaWQ9XCJDb2RlXCI+XHJcbiAgIDxCdXR0b24gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Ucm96ZW1hL0lULVN0b3JlLVByb2plY3QuZ2l0XCI+VmlldyBDb2RlPC9CdXR0b24+XHJcbiAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuIDwvQ2FyZC5Cb2R5PlxyXG48L0NhcmQ+XHJcbjwvZGl2PlxyXG48ZGl2IGlkPVwiTWFpbmNhcmRcIj5cclxuICAgIDxDYXJkIGlkPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiAnNDByZW0nIH19PlxyXG4gPENhcmQuQm9keT5cclxuICAgPENhcmQuSW1nIGlkPVwiSW52ZW50b3J5UGljXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvSW52ZW50b3J5X0ltYWdlLnBuZy9cIj48L0NhcmQuSW1nPlxyXG4gICBcclxuICAgPENhcmQuVGl0bGU+SW52ZW50b3J5IE1hbmFnZW1lbnQgQXBwPC9DYXJkLlRpdGxlPlxyXG4gICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5UaGlzIHByb2plY3Qgd2FzIGJ1aWx0IHVzaW5nIHRoZSBNRVJOIHN0YWNrLiBUaGUgQXBwIHVzZXMgTW9uZ29EQiB0byByZXRyaWV2ZSBkYXRhLiBUaGlzIGRhdGEgaXMgbW9kaWZpZWQgYW5kIHZpZXdlZCBpbiBSZWFjdCBhbmQgRXhwcmVzcy48L0NhcmQuU3VidGl0bGU+XHJcbjxkaXYgaWQ9XCJidG4tY29udGFpbmVyXCI+XHJcbiAgIDxkaXYgaWQ9XCJEZW1vXCI+XHJcbiAgPEJ1dHRvbiBocmVmPVwiaHR0cHM6Ly9pbnZlbnRvcnltYW5hZ2VtZW50YXBwMS5oZXJva3VhcHAuY29tL1wiPlZpZXcgRGVtbzwvQnV0dG9uPlxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBpZD1cIkNvZGVcIj5cclxuICAgPEJ1dHRvbiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1Ryb3plbWEvSW52ZW50b3J5LU1hbmFnZW1lbnQtQXBwLmdpdFwiPlZpZXcgQ29kZTwvQnV0dG9uPlxyXG4gICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiA8L0NhcmQuQm9keT5cclxuPC9DYXJkPlxyXG48L2Rpdj5cclxuICA8L0xheW91dD5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4pIl19 */\n/*@ sourceURL=C:\\Users\\rozem\\DeveloperPortfolio\\DeveloperPortfolio\\pages\\projects.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "Maincard",
    className: "jsx-487650486",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "card",
    style: {
      width: '40rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a.Img, {
    id: "ItunesPic",
    src: "/static/images/Itunes_API_App.png/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a.Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Itunes API Project"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a.Subtitle, {
    className: "mb-2 text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "This project was built using the MERN stack. The Itunes API connects to express in the backend and React is used for the frontend of the App."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "btn-container",
    className: "jsx-487650486",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "Demo",
    className: "jsx-487650486",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "https://cryptic-meadow-06905.herokuapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "View Demo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "Code",
    className: "jsx-487650486",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "https://github.com/Trozema/IT-Store-Project.git",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "View Code")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "Maincard",
    className: "jsx-487650486",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "card",
    style: {
      width: '40rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a.Img, {
    id: "InventoryPic",
    src: "/static/images/Inventory_Image.png/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a.Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Inventory Management App"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a.Subtitle, {
    className: "mb-2 text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "This project was built using the MERN stack. The App uses MongoDB to retrieve data. This data is modified and viewed in React and Express."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "btn-container",
    className: "jsx-487650486",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "Demo",
    className: "jsx-487650486",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "https://inventorymanagementapp1.herokuapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "View Demo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "Code",
    className: "jsx-487650486",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "https://github.com/Trozema/Inventory-Management-App.git",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "View Code"))))))));
});

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/projects.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/projects.js */"./pages/projects.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Card":
/*!***************************************!*\
  !*** external "react-bootstrap/Card" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ "react-bootstrap/Image":
/*!****************************************!*\
  !*** external "react-bootstrap/Image" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Image");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=projects.js.map