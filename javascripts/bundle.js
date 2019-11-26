/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascripts/game/anims/ball.js":
/*!****************************************!*\
  !*** ./javascripts/game/anims/ball.js ***!
  \****************************************/
/*! exports provided: drawBall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawBall", function() { return drawBall; });
var drawBall = function drawBall(x, y) {
  game.ctx.beginPath();
  game.ctx.arc(x, y, 10, 0, Math.PI * 2);
  game.ctx.fillStyle = "#0095DD";
  game.ctx.fill();
  game.ctx.closePath();
};

/***/ }),

/***/ "./javascripts/game/event_listeners/cursor.js":
/*!****************************************************!*\
  !*** ./javascripts/game/event_listeners/cursor.js ***!
  \****************************************************/
/*! exports provided: getCursorPos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCursorPos", function() { return getCursorPos; });
var getCursorPos = function getCursorPos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
};

/***/ }),

/***/ "./javascripts/game/game.js":
/*!**********************************!*\
  !*** ./javascripts/game/game.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anims_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anims/ball */ "./javascripts/game/anims/ball.js");
/* harmony import */ var _event_listeners_cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event_listeners/cursor */ "./javascripts/game/event_listeners/cursor.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game =
/*#__PURE__*/
function () {
  function Game(canvas, ctx) {
    var _this = this;

    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx; // VARS for ball, initialized at x & y

    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.initialState = this.initialState.bind(this);
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
    this.instigatorPos = []; // Cursor Event Listener

    canvas.addEventListener('mousemove', function (event) {
      var cursorPos = _event_listeners_cursor__WEBPACK_IMPORTED_MODULE_1__["getCursorPos"](canvas, event);
      var coords = [cursorPos.x, cursorPos.y];
      _this.instigatorPos = coords;
      console.log(_this.instigatorPos);
    });
  }

  _createClass(Game, [{
    key: "initialState",
    value: function initialState() {
      // Rectangle
      this.ctx.beginPath();
      this.ctx.rect(250, 150, 50, 50);
      this.ctx.fillStyle = "#9A0055";
      this.ctx.fill();
      this.ctx.closePath(); // Rectangle

      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      var dx = 1;
      var dy = -1; // clear before redraw

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      _anims_ball__WEBPACK_IMPORTED_MODULE_0__["drawBall"](this.x, this.y);
      this.x += dx;
      this.y += dy;
    }
  }]);

  return Game;
}(); // Main Game Loop


/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./javascripts/game/loop.js":
/*!**********************************!*\
  !*** ./javascripts/game/loop.js ***!
  \**********************************/
/*! exports provided: loop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
var loop = function loop(game) {
  var mainLoop = function mainLoop(tFrame) {
    game.stopMainLoop = window.requestAnimationFrame(mainLoop); // window.cancelAnimationFrame(game.stopMainLoop); // Function to reset game without refresh

    var nextTick = game.lastTick + game.tickLength;
    var numTicks = 0;

    if (tFrame > nextTick) {
      var timeSinceTick = tFrame - game.lastTick;
      numTicks = Math.floor(timeSinceTick / game.tickLength);
    }

    queueUpdates(numTicks); // render( tFrame );
  };

  var queueUpdates = function queueUpdates(numTicks) {
    for (var i = 0; i < numTicks; i++) {
      game.lastTick = game.lastTick + game.tickLength;
      game.update(game.lastTick);
    }
  };

  game.lastTick = performance.now();
  game.lastRender = game.lastTick;
  game.tickLength = 25; // setInitialState(); // performs whatever tasks are leftover before the mainloop must run.

  mainLoop(performance.now());
};

/***/ }),

/***/ "./javascripts/main.js":
/*!*****************************!*\
  !*** ./javascripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game */ "./javascripts/game/game.js");
/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/loop */ "./javascripts/game/loop.js");


window.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById("mainCanvas");
  var ctx = canvas.getContext("2d");
  var game = new _game_game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx);
  window.game = game;
  Object(_game_loop__WEBPACK_IMPORTED_MODULE_1__["loop"])(game);
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map