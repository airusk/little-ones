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

/***/ "./javascripts/game/anims/receptor_animations.js":
/*!*******************************************************!*\
  !*** ./javascripts/game/anims/receptor_animations.js ***!
  \*******************************************************/
/*! exports provided: drawConnection, drawActiveConnection, drawOutline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawConnection", function() { return drawConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawActiveConnection", function() { return drawActiveConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawOutline", function() { return drawOutline; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var drawConnection = function drawConnection(pos1, pos2) {
  var _game$ctx, _game$ctx2;

  game.ctx.beginPath();

  (_game$ctx = game.ctx).moveTo.apply(_game$ctx, _toConsumableArray(pos1));

  (_game$ctx2 = game.ctx).lineTo.apply(_game$ctx2, _toConsumableArray(pos2));

  game.ctx.lineWidth = 5;
  game.ctx.strokeStyle = "gray";
  game.ctx.stroke();
  game.ctx.closePath();
};
var drawActiveConnection = function drawActiveConnection(pos1, pos2) {
  var _game$ctx3, _game$ctx4;

  game.ctx.beginPath();

  (_game$ctx3 = game.ctx).moveTo.apply(_game$ctx3, _toConsumableArray(pos1));

  (_game$ctx4 = game.ctx).lineTo.apply(_game$ctx4, _toConsumableArray(pos2));

  game.ctx.lineWidth = 5;
  game.ctx.strokeStyle = "black";
  game.ctx.stroke();
  game.ctx.closePath();
};
var drawOutline = function drawOutline(x, y) {
  game.overlayCtx.beginPath();
  game.overlayCtx.strokeStyle = "#5f68fb";
  game.overlayCtx.lineWidth = 5;
  game.overlayCtx.arc(x, y, 20, 0, Math.PI * 2);
  game.overlayCtx.stroke();
  game.overlayCtx.closePath();
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

/***/ "./javascripts/game/event_listeners/game_ui.js":
/*!*****************************************************!*\
  !*** ./javascripts/game/event_listeners/game_ui.js ***!
  \*****************************************************/
/*! exports provided: setupGameUI, trackSwitches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupGameUI", function() { return setupGameUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackSwitches", function() { return trackSwitches; });
var setupGameUI = function setupGameUI(game) {
  var playButton = document.getElementById("play-button");
  playButton.addEventListener('click', function (event) {
    if (game.solo === true) {
      game.playAll(game.receptors[game.trackValue]);
    } else {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = game.receptors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var arr = _step.value;
          game.playAll(arr);
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
    }
  });
  var undoButton = document.getElementById("undo-button");
  undoButton.addEventListener('click', function (event) {
    game.receptors[game.trackValue].pop();
  });
  var clearButton = document.getElementById("clear-button");
  clearButton.addEventListener('click', function (event) {
    game.receptors[game.trackValue] = [];
  });
  var clearAllButton = document.getElementById("clear-all-button");
  clearAllButton.addEventListener('click', function (event) {
    game.receptors = [[], [], [], [], [], [], [], []];
  });
  var soloBox = document.getElementById("solo-box");
  soloBox.addEventListener('change', function (event) {
    game.solo = event.target.checked ? true : false;
  });
  var muteBox = document.getElementById("mute-box");
  muteBox.addEventListener('change', function (event) {
    game.mute = event.target.checked ? true : false;
  });
};
var trackSwitches = function trackSwitches(game) {
  var _loop = function _loop(i) {
    var track = document.getElementById("track-".concat(i));
    track.addEventListener('click', function (event) {
      game.trackValue = i;

      for (var j = 0; j < 8; j++) {
        document.getElementById("track-".concat(j)).disabled = false;
      }

      document.getElementById("track-".concat(game.trackValue)).disabled = true;
    });
  };

  for (var i = 0; i < 8; i++) {
    _loop(i);
  }
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
/* harmony import */ var _anims_receptor_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anims/receptor_animations */ "./javascripts/game/anims/receptor_animations.js");
/* harmony import */ var _event_listeners_cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event_listeners/cursor */ "./javascripts/game/event_listeners/cursor.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/util */ "./javascripts/game/util/util.js");
/* harmony import */ var _event_listeners_game_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event_listeners/game_ui */ "./javascripts/game/event_listeners/game_ui.js");
/* harmony import */ var _receptor_bark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./receptor/bark */ "./javascripts/game/receptor/bark.js");
/* harmony import */ var _receptor_meow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receptor/meow */ "./javascripts/game/receptor/meow.js");
/* harmony import */ var _receptor_receptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receptor/receptor */ "./javascripts/game/receptor/receptor.js");
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
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
    this.overlayCanvas = document.getElementById("overlay-canvas");
    this.overlayCtx = this.overlayCanvas.getContext("2d");
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.sortReceptors = this.sortReceptors.bind(this); // this.startTime = new Date();
    // this.totalTime = 0; // time in seconds
    // this.rate = 100; // px to move per totalTime 
    // startTime instantiation for all objects

    this.panelWidth = this.canvas.width;
    this.panelHeight = this.canvas.height;
    this.cursorPos;
    this.receptors = [[], [], [], [], [], [], [], []];
    this.trackValue = 0;
    this.solo = false;
    this.mute = false;
    this.outlinePositions = [];
    this.setInitialState();
  }

  _createClass(Game, [{
    key: "setInitialState",
    value: function setInitialState() {
      this.setupEventListeners();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      this.drawBoard(this.panelWidth, this.panelHeight);

      if (this.receptors) {
        for (var i = 0; i < this.receptors.length; i++) {
          for (var j = 0; j < this.receptors[i].length - 1; j++) {
            var arr = this.receptors[i];
            _anims_receptor_animations__WEBPACK_IMPORTED_MODULE_0__["drawConnection"](arr[j].position, arr[j + 1].position);
          }

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.receptors[i][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var receptor = _step.value;
              receptor.drawSelf.apply(receptor, _toConsumableArray(receptor.position));
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
        }

        for (var _i = 0; _i < this.receptors[this.trackValue].length - 1; _i++) {
          _anims_receptor_animations__WEBPACK_IMPORTED_MODULE_0__["drawActiveConnection"](this.receptors[this.trackValue][_i].position, this.receptors[this.trackValue][_i + 1].position);
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.receptors[this.trackValue][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _receptor = _step2.value;

            _receptor.drawSelf.apply(_receptor, _toConsumableArray(_receptor.position));
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

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.outlinePositions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var outlinePos = _step3.value;
            _anims_receptor_animations__WEBPACK_IMPORTED_MODULE_0__["drawOutline"].apply(_anims_receptor_animations__WEBPACK_IMPORTED_MODULE_0__, _toConsumableArray(outlinePos));
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      this.startTime = new Date();
    }
  }, {
    key: "sortReceptors",
    value: function sortReceptors() {
      this.receptors[this.trackValue].sort(function (a, b) {
        if (a.position[0] == b.position[0]) return a.position[1] - b.position[1];
        return a.position[0] - b.position[0];
      });
    }
  }, {
    key: "drawBoard",
    value: function drawBoard(panelWidth, panelHeight) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      var noteSlice = panelWidth / 8;
      this.ctx.fillStyle = "#3373b3";
      this.ctx.fillRect(0, 0, noteSlice, panelHeight);
      this.ctx.fillStyle = "#5fb2ef";
      this.ctx.fillRect(noteSlice * 1, 0, noteSlice, panelHeight);
      this.ctx.fillStyle = "#cc7aa8";
      this.ctx.fillRect(noteSlice * 2, 0, noteSlice, panelHeight);
      this.ctx.fillStyle = "#32a073";
      this.ctx.fillRect(noteSlice * 3, 0, noteSlice, panelHeight);
      this.ctx.fillStyle = "#d36027";
      this.ctx.fillRect(noteSlice * 4, 0, noteSlice, panelHeight);
      this.ctx.fillStyle = "#e79f27";
      this.ctx.fillRect(noteSlice * 5, 0, noteSlice, panelHeight);
      this.ctx.fillStyle = "#f2e647";
      this.ctx.fillRect(noteSlice * 6, 0, noteSlice, panelHeight);
      this.ctx.fillStyle = "#3373b3";
      this.ctx.fillRect(noteSlice * 7, 0, noteSlice, panelHeight);
    }
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this = this;

      // Cursor event listeners
      // overlay canvas event listeners
      this.overlayCanvas.addEventListener('mousemove', function (event) {
        var cursorPos = _event_listeners_cursor__WEBPACK_IMPORTED_MODULE_1__["getCursorPos"](_this.overlayCanvas, event);
        var coords = [cursorPos.x, cursorPos.y];
        _this.cursorPos = coords;
      });
      this.overlayCanvas.addEventListener('click', function (event) {
        var note = _util_util__WEBPACK_IMPORTED_MODULE_2__["divineNote"](_this.cursorPos, _this.panelWidth, _this.panelHeight, 8);

        if (note) {
          var receptor = new _receptor_bark__WEBPACK_IMPORTED_MODULE_4__["default"](_this.cursorPos, note);
          _util_util__WEBPACK_IMPORTED_MODULE_2__["playAudio"](receptor.soundFile, _this.mute);

          _this.receptors[_this.trackValue].push(receptor);
        }
      });
      this.overlayCanvas.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        var note = _util_util__WEBPACK_IMPORTED_MODULE_2__["divineNote"](_this.cursorPos, _this.panelWidth, _this.panelHeight, 8);

        if (note) {
          var receptor = new _receptor_meow__WEBPACK_IMPORTED_MODULE_5__["default"](_this.cursorPos, note);
          _util_util__WEBPACK_IMPORTED_MODULE_2__["playAudio"](receptor.soundFile, _this.mute);

          _this.receptors[_this.trackValue].push(receptor);
        }
      });
      _event_listeners_game_ui__WEBPACK_IMPORTED_MODULE_3__["setupGameUI"](this);
      _event_listeners_game_ui__WEBPACK_IMPORTED_MODULE_3__["trackSwitches"](this);
    }
  }, {
    key: "playAll",
    value: function playAll(audioArray) {
      var _this2 = this;

      var index = 0;

      var playAudio = function playAudio(index) {
        if (index > audioArray.length - 1) return;
        var receptor = audioArray[index];

        _this2.outlinePositions.push(receptor.position);

        if (!_this2.mute) {
          var currentAudio = new Audio("./assets/sounds/".concat(receptor.soundFile));
          currentAudio.play();
        }

        setTimeout(function () {
          _this2.outlinePositions.shift();

          _this2.overlayCtx.clearRect(0, 0, _this2.canvas.width, _this2.canvas.height);

          ++index;
          playAudio(index);
        }, 500);
      };

      playAudio(index);
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

/***/ "./javascripts/game/receptor/bark.js":
/*!*******************************************!*\
  !*** ./javascripts/game/receptor/bark.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _receptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receptor */ "./javascripts/game/receptor/receptor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Bark =
/*#__PURE__*/
function (_Receptor) {
  _inherits(Bark, _Receptor);

  function Bark(position, note) {
    var _this;

    _classCallCheck(this, Bark);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bark).call(this, position, note));
    _this.soundFile = "dog_bark_".concat(note, ".ogg");
    _this.imgFile = "dog.svg";
    return _this;
  }

  return Bark;
}(_receptor__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Bark);

/***/ }),

/***/ "./javascripts/game/receptor/meow.js":
/*!*******************************************!*\
  !*** ./javascripts/game/receptor/meow.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _receptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receptor */ "./javascripts/game/receptor/receptor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Meow =
/*#__PURE__*/
function (_Receptor) {
  _inherits(Meow, _Receptor);

  function Meow(position, note) {
    var _this;

    _classCallCheck(this, Meow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Meow).call(this, position, note));
    _this.soundFile = "cat_meow_".concat(note, ".ogg");
    _this.imgFile = "cat.svg";
    return _this;
  }

  return Meow;
}(_receptor__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Meow);

/***/ }),

/***/ "./javascripts/game/receptor/receptor.js":
/*!***********************************************!*\
  !*** ./javascripts/game/receptor/receptor.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Receptor =
/*#__PURE__*/
function () {
  function Receptor(position, note) {
    _classCallCheck(this, Receptor);

    this.position = position;
    this.note = note;
    this.drawSelf = this.drawSelf.bind(this);
  }

  _createClass(Receptor, [{
    key: "drawSelf",
    value: function drawSelf(x, y) {
      var img = new Image(38, 38);
      img.src = "./assets/img/".concat(this.imgFile);
      game.ctx.drawImage(img, x - 19, y - 19, img.width, img.height);
    }
  }]);

  return Receptor;
}();

/* harmony default export */ __webpack_exports__["default"] = (Receptor); // COLOR SCHEMA
// HEX	RGB	CMYK		HEX: #cf5034	R: 207	G: 80	B: 52	C: 0	M: 61	Y: 75	K: 19		HEX: #35d6ab	R: 53	G: 214	B: 171	C: 75	M: 0	Y: 20	K: 16		HEX: #6d34cf	R: 109	G: 52	B: 207	C: 47	M: 75	Y: 0	K: 19		HEX: #cf9b34	R: 207	G: 155	B: 52	C: 0	M: 25	Y: 75	K: 19

/***/ }),

/***/ "./javascripts/game/util/util.js":
/*!***************************************!*\
  !*** ./javascripts/game/util/util.js ***!
  \***************************************/
/*! exports provided: distanceDelta, receptorGenerator, divineNote, playAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceDelta", function() { return distanceDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receptorGenerator", function() { return receptorGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divineNote", function() { return divineNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playAudio", function() { return playAudio; });
/* harmony import */ var _receptor_receptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../receptor/receptor */ "./javascripts/game/receptor/receptor.js");

var distanceDelta = function distanceDelta(startTime, totalTime, rate) {
  var timeElapsed = (new Date() - startTime) / 1000; // time elapsed in seconds

  var distance = rate * timeElapsed / totalTime; // console.log("time elapsed: "+ timeElapsed);
  // debugger

  return rate * timeElapsed / totalTime;
};
var receptorGenerator = function receptorGenerator(total, maxWidth, maxHeight) {
  var receptors = [];

  for (var i = 0; i < total; i++) {
    var receptor = new _receptor_receptor__WEBPACK_IMPORTED_MODULE_0__["default"](randomPos(maxWidth, maxHeight), Behavior.repulsion);
    receptors.push(receptor);
  }

  return receptors;
};
var divineNote = function divineNote(position, maxLength, maxHeight, numSlices) {
  var note;
  if (position[1] > maxHeight || position[0] > maxLength) return note;
  var notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2'];
  var sliceLength = maxLength / numSlices;

  for (var i = 0; i < numSlices + 1; i++) {
    if (i * sliceLength > position[0]) {
      note = notes[i - 1];
      break;
    }
  }

  console.log(note);
  return note;
};
var playAudio = function playAudio(filename, mute) {
  if (!mute) {
    var audio = new Audio("./assets/sounds/".concat(filename));
    audio.play();
  }
};

var randomPos = function randomPos(maxHeight, maxWidth) {
  return [Math.random() * maxHeight, Math.random() * maxWidth];
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
  var canvas = document.getElementById("main-canvas");
  var ctx = canvas.getContext("2d");
  var game = new _game_game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx);
  window.game = game;
  Object(_game_loop__WEBPACK_IMPORTED_MODULE_1__["loop"])(game);
  console.log("Credit: icons from 'https://www.flaticon.com/authors/freepik'");
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map