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

/***/ "./javascripts/game/behaviors.js":
/*!***************************************!*\
  !*** ./javascripts/game/behaviors.js ***!
  \***************************************/
/*! exports provided: attraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attraction", function() { return attraction; });
var attraction = function attraction(receptorPos, instigatorPos, distanceDelta) {
  // position of receptor in relation to instigator
  var y = receptorPos[0];
  var x = receptorPos[1];
  var yRel = spaceshipOperator(y, instigatorPos[0]);
  var xRel = spaceshipOperator(x, instigatorPos[1]);

  switch (yRel) {
    case -1:
      y += distanceDelta;
      break;

    case 1:
      y -= distanceDelta;
      break;

    default:
      y = receptorPos[0];
  }

  switch (xRel) {
    case -1:
      x += distanceDelta;
      break;

    case 1:
      x -= distanceDelta;
      break;

    default:
      x = receptorPos[0];
  } // debugger


  return [y, x];
};

var spaceshipOperator = function spaceshipOperator(rec, ins) {
  if (rec < ins) {
    return -1;
  } else if (rec > ins) {
    return 1;
  } else {
    return 0;
  }
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
/* harmony import */ var _behaviors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./behaviors */ "./javascripts/game/behaviors.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/util */ "./javascripts/game/util/util.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
    this.y = canvas.height - 30; // Cursor/Instigator Position

    this.instigatorPos = [0, 0]; // Array of receptor coordinates

    this.receptors = [[canvas.width / 2, canvas.height - 30], [canvas.width / 3, canvas.height - 5]];
    this.initialState = this.initialState.bind(this);
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
    this.setInitialState = this.setInitialState();
    this.handleBehavior = this.handleBehavior.bind(this); // current behavior

    this.behavior = _behaviors__WEBPACK_IMPORTED_MODULE_2__["attraction"]; // startTime instantiation for all moving objects

    this.startTime = new Date();
    this.totalTime = 1; // time in seconds

    this.rate = 10; // px to move per totalTime 
    // Cursor Event Listener

    canvas.addEventListener('mousemove', function (event) {
      var cursorPos = _event_listeners_cursor__WEBPACK_IMPORTED_MODULE_1__["getCursorPos"](canvas, event);
      var coords = [cursorPos.x, cursorPos.y];
      _this.instigatorPos = coords;
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
    key: "setInitialState",
    value: function setInitialState() {// this.startTime = new Date();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      // const dx = 1;
      // const dy = -1;
      this.handleBehavior(this.behavior); // clear before redraw

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      _anims_ball__WEBPACK_IMPORTED_MODULE_0__["drawBall"].apply(_anims_ball__WEBPACK_IMPORTED_MODULE_0__, _toConsumableArray(this.instigatorPos));
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.receptors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var receptor = _step.value;
          // debugger
          _anims_ball__WEBPACK_IMPORTED_MODULE_0__["drawBall"].apply(_anims_ball__WEBPACK_IMPORTED_MODULE_0__, _toConsumableArray(receptor));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.startTime = new Date(); // this.x += dx;
      // this.y += dy;
    } // Takes in a behavior to apply to receptors

  }, {
    key: "handleBehavior",
    value: function handleBehavior(behaviorFunc) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.receptors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var receptor = _step2.value;
          receptor = behaviorFunc(receptor, this.instigatorPos, _util_util__WEBPACK_IMPORTED_MODULE_3__["distanceDelta"](this.startTime, this.totalTime, this.rate));
          console.log(receptor);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return Game;
}();

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
  game.tickLength = 16; // game.setInitialState(); // performs whatever tasks are leftover before the mainloop must run.

  mainLoop(performance.now());
};

/***/ }),

/***/ "./javascripts/game/util/util.js":
/*!***************************************!*\
  !*** ./javascripts/game/util/util.js ***!
  \***************************************/
/*! exports provided: distanceDelta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceDelta", function() { return distanceDelta; });
var distanceDelta = function distanceDelta(startTime, totalTime, rate) {
  var timeElapsed = (new Date() - startTime) / 1000; // time elapsed in seconds
  // debugger

  return rate * timeElapsed / totalTime;
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