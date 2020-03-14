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
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/Game.ts":
/*!*************************!*\
  !*** ./example/Game.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
var src_1 = __webpack_require__(/*! ../src */ "./src/index.ts");
var MyConfig_1 = __webpack_require__(/*! ./config/MyConfig */ "./example/config/MyConfig.ts");
var RobotlegsView_1 = __webpack_require__(/*! ./view/RobotlegsView */ "./example/view/RobotlegsView.ts");
var Game = /** @class */ (function () {
    function Game() {
        this.init();
    }
    Game.prototype.init = function () {
        this._canvas = document.getElementById("canvas");
        this._stage = new createjs.Stage(this._canvas);
        this._context = new core_1.Context();
        this._context
            .install(core_1.MVCSBundle, src_1.CreateJSBundle)
            .configure(new src_1.ContextView(this._stage))
            .configure(MyConfig_1.MyConfig)
            .initialize();
        // enable touch interactions if supported on the current device:
        createjs.Touch.enable(this._stage);
        // enabled mouse over / out events
        this._stage.enableMouseOver(10);
        this._stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
        var robotlegs = new RobotlegsView_1.RobotlegsView();
        robotlegs.x = this._canvas.width / 2;
        robotlegs.y = this._canvas.height / 2;
        this._stage.addChild(robotlegs);
        window.addEventListener("resize", this.handleResize.bind(this));
        createjs.Ticker.addEventListener("tick", this.tick.bind(this));
    };
    Game.prototype.handleResize = function () {
        this._stage.update();
    };
    Game.prototype.tick = function (event) {
        this._stage.update(event);
    };
    return Game;
}());
exports.Game = Game;


/***/ }),

/***/ "./example/config/MyConfig.ts":
/*!************************************!*\
  !*** ./example/config/MyConfig.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
var index_1 = __webpack_require__(/*! ../../src/index */ "./src/index.ts");
var RobotlegsMediator_1 = __webpack_require__(/*! ../mediator/RobotlegsMediator */ "./example/mediator/RobotlegsMediator.ts");
var SmileyMediator_1 = __webpack_require__(/*! ../mediator/SmileyMediator */ "./example/mediator/SmileyMediator.ts");
var RobotlegsView_1 = __webpack_require__(/*! ../view/RobotlegsView */ "./example/view/RobotlegsView.ts");
var SmileyView_1 = __webpack_require__(/*! ../view/SmileyView */ "./example/view/SmileyView.ts");
var MyConfig = /** @class */ (function () {
    function MyConfig() {
    }
    MyConfig.prototype.configure = function () {
        this._mediatorMap.map(RobotlegsView_1.RobotlegsView).toMediator(RobotlegsMediator_1.RobotlegsMediator);
        this._mediatorMap.map(SmileyView_1.SmileyView).toMediator(SmileyMediator_1.SmileyMediator);
    };
    __decorate([
        core_1.inject(index_1.IMediatorMap),
        __metadata("design:type", Object)
    ], MyConfig.prototype, "_mediatorMap", void 0);
    MyConfig = __decorate([
        core_1.injectable()
    ], MyConfig);
    return MyConfig;
}());
exports.MyConfig = MyConfig;


/***/ }),

/***/ "./example/index.ts":
/*!**************************!*\
  !*** ./example/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
var Game_1 = __webpack_require__(/*! ./Game */ "./example/Game.ts");
window.initGame = function () {
    var game = new Game_1.Game();
    window.game = game;
};


/***/ }),

/***/ "./example/mediator/RobotlegsMediator.ts":
/*!***********************************************!*\
  !*** ./example/mediator/RobotlegsMediator.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ../../src/index */ "./src/index.ts");
var SmileyView_1 = __webpack_require__(/*! ../view/SmileyView */ "./example/view/SmileyView.ts");
var RobotlegsMediator = /** @class */ (function (_super) {
    __extends(RobotlegsMediator, _super);
    function RobotlegsMediator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RobotlegsMediator.prototype.initialize = function () {
        console.log("RobotlegsMediator initialized!");
        this.view.on("click", this.onClick, this);
    };
    RobotlegsMediator.prototype.onClick = function (event) {
        var radius = 50 + Math.random() * 50;
        this.view.stage.addChild(new SmileyView_1.SmileyView(radius));
    };
    RobotlegsMediator.prototype.destroy = function () {
        console.log("RobotlegsMediator destroyed!");
    };
    return RobotlegsMediator;
}(index_1.Mediator));
exports.RobotlegsMediator = RobotlegsMediator;


/***/ }),

/***/ "./example/mediator/SmileyMediator.ts":
/*!********************************************!*\
  !*** ./example/mediator/SmileyMediator.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ../../src/index */ "./src/index.ts");
var SmileyMediator = /** @class */ (function (_super) {
    __extends(SmileyMediator, _super);
    function SmileyMediator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmileyMediator.prototype.initialize = function () {
        console.log("SmileyMediator initialized!");
        this.view.on("click", this.onClick, this);
    };
    SmileyMediator.prototype.onClick = function (event) {
        this.view.parent.removeChild(this.view);
    };
    SmileyMediator.prototype.destroy = function () {
        console.log("SmileyMediator destroyed!");
    };
    return SmileyMediator;
}(index_1.Mediator));
exports.SmileyMediator = SmileyMediator;


/***/ }),

/***/ "./example/view/RobotlegsView.ts":
/*!***************************************!*\
  !*** ./example/view/RobotlegsView.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RobotlegsView = /** @class */ (function (_super) {
    __extends(RobotlegsView, _super);
    function RobotlegsView() {
        var _this = _super.call(this) || this;
        _this.loadLogo();
        return _this;
    }
    RobotlegsView.prototype.loadLogo = function () {
        var logo = new Image();
        logo.onload = this.logoLoaded.bind(this);
        logo.crossOrigin = "anonymous";
        logo.src = "images/robotlegs.png";
    };
    RobotlegsView.prototype.logoLoaded = function (event) {
        var logo = event.target;
        var bitmap = new createjs.Bitmap(event.target);
        bitmap.x = -(logo.width / 2);
        bitmap.y = -(logo.height / 2);
        this.addChild(bitmap);
        var area = new createjs.Shape();
        var graphics = area.graphics;
        graphics.beginFill("#f00");
        graphics.drawRect(bitmap.x, bitmap.y, logo.width, logo.height);
        this.hitArea = area;
        this.mouseEnabled = true;
        this.mouseChildren = false;
    };
    return RobotlegsView;
}(createjs.Container));
exports.RobotlegsView = RobotlegsView;


/***/ }),

/***/ "./example/view/SmileyView.ts":
/*!************************************!*\
  !*** ./example/view/SmileyView.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SmileyView = /** @class */ (function (_super) {
    __extends(SmileyView, _super);
    function SmileyView(radius) {
        var _this = _super.call(this) || this;
        _this._radius = Math.max(radius, 50);
        _this.drawSmiley();
        _this.move();
        return _this;
    }
    SmileyView.prototype.drawSmiley = function () {
        var shape = new createjs.Shape();
        var graphics = shape.graphics;
        // Head
        graphics.setStrokeStyle(10, "round", "round");
        graphics.beginStroke("#000");
        graphics.beginFill("#FC0");
        graphics.drawCircle(0, 0, this._radius);
        // Mouth
        graphics.beginFill("FC0");
        graphics.arc(0, 0, this._radius * 0.65, 0, Math.PI, false);
        // Right eye
        graphics.beginStroke("FC0");
        graphics.beginFill("#000");
        graphics.drawCircle(-(this._radius / 3), -(this._radius / 4), this._radius / 8);
        // Left eye
        graphics.beginStroke("FC0");
        graphics.beginFill("#000");
        graphics.drawCircle(this._radius / 3, -(this._radius / 4), this._radius / 8);
        this.addChild(shape);
    };
    SmileyView.prototype.move = function () {
        this.x = Math.random() * 960;
        this.y = Math.random() * 400;
        this.x = Math.max(this.x, this._radius);
        this.x = Math.min(this.x, 960 - this._radius);
        this.y = Math.max(this.y, this._radius);
        this.y = Math.min(this.y, 400 - this._radius);
    };
    return SmileyView;
}(createjs.Container));
exports.SmileyView = SmileyView;


/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Dependency injection
 */
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
exports.ContainerModule = inversify_1.ContainerModule;
exports.decorate = inversify_1.decorate;
exports.inject = inversify_1.inject;
exports.injectable = inversify_1.injectable;
exports.multiInject = inversify_1.multiInject;
exports.named = inversify_1.named;
exports.optional = inversify_1.optional;
exports.postConstruct = inversify_1.postConstruct;
exports.tagged = inversify_1.tagged;
exports.targetName = inversify_1.targetName;
exports.unmanaged = inversify_1.unmanaged;
var IContext_1 = __webpack_require__(/*! ./robotlegs/bender/framework/api/IContext */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/IContext.js");
exports.IContext = IContext_1.IContext;
var IInjector_1 = __webpack_require__(/*! ./robotlegs/bender/framework/api/IInjector */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/IInjector.js");
exports.IInjector = IInjector_1.IInjector;
var ILogger_1 = __webpack_require__(/*! ./robotlegs/bender/framework/api/ILogger */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/ILogger.js");
exports.ILogger = ILogger_1.ILogger;
var LifecycleError_1 = __webpack_require__(/*! ./robotlegs/bender/framework/api/LifecycleError */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleError.js");
exports.LifecycleError = LifecycleError_1.LifecycleError;
var LifecycleEvent_1 = __webpack_require__(/*! ./robotlegs/bender/framework/api/LifecycleEvent */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleEvent.js");
exports.LifecycleEvent = LifecycleEvent_1.LifecycleEvent;
var LifecycleState_1 = __webpack_require__(/*! ./robotlegs/bender/framework/api/LifecycleState */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleState.js");
exports.LifecycleState = LifecycleState_1.LifecycleState;
var LogLevel_1 = __webpack_require__(/*! ./robotlegs/bender/framework/api/LogLevel */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LogLevel.js");
exports.LogLevel = LogLevel_1.LogLevel;
var PinEvent_1 = __webpack_require__(/*! ./robotlegs/bender/framework/api/PinEvent */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/PinEvent.js");
exports.PinEvent = PinEvent_1.PinEvent;
/**
 * Framework Implementation
 */
var ConfigManager_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/ConfigManager */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ConfigManager.js");
exports.ConfigManager = ConfigManager_1.ConfigManager;
var Context_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/Context */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Context.js");
exports.Context = Context_1.Context;
var ExtensionInstaller_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/ExtensionInstaller */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ExtensionInstaller.js");
exports.ExtensionInstaller = ExtensionInstaller_1.ExtensionInstaller;
var Lifecycle_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/Lifecycle */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Lifecycle.js");
exports.Lifecycle = Lifecycle_1.Lifecycle;
var LifecycleTransition_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/LifecycleTransition */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/LifecycleTransition.js");
exports.LifecycleTransition = LifecycleTransition_1.LifecycleTransition;
var Logger_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/Logger */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Logger.js");
exports.Logger = Logger_1.Logger;
var LogManager_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/LogManager */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/LogManager.js");
exports.LogManager = LogManager_1.LogManager;
var MessageDispatcher_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/MessageDispatcher */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/MessageDispatcher.js");
exports.MessageDispatcher = MessageDispatcher_1.MessageDispatcher;
var MessageRunner_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/MessageRunner */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/MessageRunner.js");
exports.MessageRunner = MessageRunner_1.MessageRunner;
var ObjectProcessor_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/ObjectProcessor */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ObjectProcessor.js");
exports.ObjectProcessor = ObjectProcessor_1.ObjectProcessor;
var Pin_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/Pin */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Pin.js");
exports.Pin = Pin_1.Pin;
var RobotlegsInjector_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/RobotlegsInjector */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/RobotlegsInjector.js");
exports.RobotlegsInjector = RobotlegsInjector_1.RobotlegsInjector;
var UID_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/UID */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/UID.js");
exports.UID = UID_1.UID;
/**
 * Framework Functions
 */
var applyHooks_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/applyHooks */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/applyHooks.js");
exports.applyHooks = applyHooks_1.applyHooks;
var getQualifiedClassName_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/getQualifiedClassName */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/getQualifiedClassName.js");
exports.getQualifiedClassName = getQualifiedClassName_1.getQualifiedClassName;
var guardsApprove_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/guardsApprove */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/guardsApprove.js");
exports.guardsApprove = guardsApprove_1.guardsApprove;
var instantiateUnmapped_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/instantiateUnmapped */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/instantiateUnmapped.js");
exports.instantiateUnmapped = instantiateUnmapped_1.instantiateUnmapped;
var safelyCallBack_1 = __webpack_require__(/*! ./robotlegs/bender/framework/impl/safelyCallBack */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/safelyCallBack.js");
exports.safelyCallBack = safelyCallBack_1.safelyCallBack;
var IEventDispatcher_1 = __webpack_require__(/*! ./robotlegs/bender/events/api/IEventDispatcher */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/api/IEventDispatcher.js");
exports.IEventDispatcher = IEventDispatcher_1.IEventDispatcher;
var Event_1 = __webpack_require__(/*! ./robotlegs/bender/events/impl/Event */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/impl/Event.js");
exports.Event = Event_1.Event;
var EventDispatcher_1 = __webpack_require__(/*! ./robotlegs/bender/events/impl/EventDispatcher */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/impl/EventDispatcher.js");
exports.EventDispatcher = EventDispatcher_1.EventDispatcher;
/**
 * Extensions
 */
// CommandCenter
var CommandPayload_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/commandCenter/api/CommandPayload */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/api/CommandPayload.js");
exports.CommandPayload = CommandPayload_1.CommandPayload;
var ICommand_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/commandCenter/api/ICommand */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/api/ICommand.js");
exports.ICommand = ICommand_1.ICommand;
var Command_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/commandCenter/impl/Command */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/Command.js");
exports.Command = Command_1.Command;
var CommandExecutor_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/commandCenter/impl/CommandExecutor */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandExecutor.js");
exports.CommandExecutor = CommandExecutor_1.CommandExecutor;
var CommandMapper_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/commandCenter/impl/CommandMapper */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMapper.js");
exports.CommandMapper = CommandMapper_1.CommandMapper;
var CommandMapping_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/commandCenter/impl/CommandMapping */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMapping.js");
exports.CommandMapping = CommandMapping_1.CommandMapping;
var CommandMappingList_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/commandCenter/impl/CommandMappingList */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMappingList.js");
exports.CommandMappingList = CommandMappingList_1.CommandMappingList;
var CommandTriggerMap_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/commandCenter/impl/CommandTriggerMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandTriggerMap.js");
exports.CommandTriggerMap = CommandTriggerMap_1.CommandTriggerMap;
var NullCommandTrigger_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/commandCenter/impl/NullCommandTrigger */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/NullCommandTrigger.js");
exports.NullCommandTrigger = NullCommandTrigger_1.NullCommandTrigger;
// DirectCommandMap
var IDirectCommandMap_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/directCommandMap/api/IDirectCommandMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/api/IDirectCommandMap.js");
exports.IDirectCommandMap = IDirectCommandMap_1.IDirectCommandMap;
var DirectCommandMap_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/directCommandMap/impl/DirectCommandMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/impl/DirectCommandMap.js");
exports.DirectCommandMap = DirectCommandMap_1.DirectCommandMap;
var DirectCommandMapper_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/directCommandMap/impl/DirectCommandMapper */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/impl/DirectCommandMapper.js");
exports.DirectCommandMapper = DirectCommandMapper_1.DirectCommandMapper;
var DirectCommandMapExtension_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/directCommandMap/DirectCommandMapExtension */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/DirectCommandMapExtension.js");
exports.DirectCommandMapExtension = DirectCommandMapExtension_1.DirectCommandMapExtension;
// EnhancedLogging
var ConsoleLogTarget_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/enhancedLogging/impl/ConsoleLogTarget */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/impl/ConsoleLogTarget.js");
exports.ConsoleLogTarget = ConsoleLogTarget_1.ConsoleLogTarget;
var LogMessageParser_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/enhancedLogging/impl/LogMessageParser */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/impl/LogMessageParser.js");
exports.LogMessageParser = LogMessageParser_1.LogMessageParser;
var ConsoleLoggingExtension_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/enhancedLogging/ConsoleLoggingExtension */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/ConsoleLoggingExtension.js");
exports.ConsoleLoggingExtension = ConsoleLoggingExtension_1.ConsoleLoggingExtension;
var InjectableLoggerExtension_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/enhancedLogging/InjectableLoggerExtension */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/InjectableLoggerExtension.js");
exports.InjectableLoggerExtension = InjectableLoggerExtension_1.InjectableLoggerExtension;
// EventCommandMap
var IEventCommandMap_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/eventCommandMap/api/IEventCommandMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/api/IEventCommandMap.js");
exports.IEventCommandMap = IEventCommandMap_1.IEventCommandMap;
var EventCommandMap_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/eventCommandMap/impl/EventCommandMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/impl/EventCommandMap.js");
exports.EventCommandMap = EventCommandMap_1.EventCommandMap;
var EventCommandTrigger_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/eventCommandMap/impl/EventCommandTrigger */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/impl/EventCommandTrigger.js");
exports.EventCommandTrigger = EventCommandTrigger_1.EventCommandTrigger;
var EventCommandMapExtension_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/eventCommandMap/EventCommandMapExtension */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/EventCommandMapExtension.js");
exports.EventCommandMapExtension = EventCommandMapExtension_1.EventCommandMapExtension;
// EventDispatcher
var EventRelay_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/eventDispatcher/impl/EventRelay */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventDispatcher/impl/EventRelay.js");
exports.EventRelay = EventRelay_1.EventRelay;
var LifecycleEventRelay_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/eventDispatcher/impl/LifecycleEventRelay */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventDispatcher/impl/LifecycleEventRelay.js");
exports.LifecycleEventRelay = LifecycleEventRelay_1.LifecycleEventRelay;
var EventDispatcherExtension_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/eventDispatcher/EventDispatcherExtension */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventDispatcher/EventDispatcherExtension.js");
exports.EventDispatcherExtension = EventDispatcherExtension_1.EventDispatcherExtension;
// LocalEventMap
var IEventMap_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/localEventMap/api/IEventMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/api/IEventMap.js");
exports.IEventMap = IEventMap_1.IEventMap;
var DomEventMapConfig_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/localEventMap/impl/DomEventMapConfig */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/impl/DomEventMapConfig.js");
exports.DomEventMapConfig = DomEventMapConfig_1.DomEventMapConfig;
var EventMap_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/localEventMap/impl/EventMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/impl/EventMap.js");
exports.EventMap = EventMap_1.EventMap;
var EventMapConfig_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/localEventMap/impl/EventMapConfig */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/impl/EventMapConfig.js");
exports.EventMapConfig = EventMapConfig_1.EventMapConfig;
var LocalEventMapExtension_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/localEventMap/LocalEventMapExtension */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/LocalEventMapExtension.js");
exports.LocalEventMapExtension = LocalEventMapExtension_1.LocalEventMapExtension;
var TypeFilter_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/matching/TypeFilter */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/TypeFilter.js");
exports.TypeFilter = TypeFilter_1.TypeFilter;
var TypeMatcher_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/matching/TypeMatcher */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/TypeMatcher.js");
exports.TypeMatcher = TypeMatcher_1.TypeMatcher;
var TypeMatcherError_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/matching/TypeMatcherError */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/TypeMatcherError.js");
exports.TypeMatcherError = TypeMatcherError_1.TypeMatcherError;
// Matching helpers
var instanceOfType_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/matching/instanceOfType */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/instanceOfType.js");
exports.instanceOfType = instanceOfType_1.instanceOfType;
var isInstanceOfType_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/matching/isInstanceOfType */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/isInstanceOfType.js");
exports.isInstanceOfType = isInstanceOfType_1.isInstanceOfType;
/**
 * Bundles
 */
var MVCSBundle_1 = __webpack_require__(/*! ./robotlegs/bender/bundles/mvcs/MVCSBundle */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/bundles/mvcs/MVCSBundle.js");
exports.MVCSBundle = MVCSBundle_1.MVCSBundle;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/bundles/mvcs/MVCSBundle.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/bundles/mvcs/MVCSBundle.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var DirectCommandMapExtension_1 = __webpack_require__(/*! ../../extensions/directCommandMap/DirectCommandMapExtension */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/DirectCommandMapExtension.js");
var InjectableLoggerExtension_1 = __webpack_require__(/*! ../../extensions/enhancedLogging/InjectableLoggerExtension */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/InjectableLoggerExtension.js");
var ConsoleLoggingExtension_1 = __webpack_require__(/*! ../../extensions/enhancedLogging/ConsoleLoggingExtension */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/ConsoleLoggingExtension.js");
var EventCommandMapExtension_1 = __webpack_require__(/*! ../../extensions/eventCommandMap/EventCommandMapExtension */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/EventCommandMapExtension.js");
var EventDispatcherExtension_1 = __webpack_require__(/*! ../../extensions/eventDispatcher/EventDispatcherExtension */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventDispatcher/EventDispatcherExtension.js");
var LocalEventMapExtension_1 = __webpack_require__(/*! ../../extensions/localEventMap/LocalEventMapExtension */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/LocalEventMapExtension.js");
/**
 * For that Classic Robotlegs flavour
 *
 * <p>This bundle installs a number of extensions commonly used
 * in typical Robotlegs applications and modules.</p>
 */
var MVCSBundle = /** @class */ (function () {
    function MVCSBundle() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    MVCSBundle.prototype.extend = function (context) {
        context.install(ConsoleLoggingExtension_1.ConsoleLoggingExtension, InjectableLoggerExtension_1.InjectableLoggerExtension, EventDispatcherExtension_1.EventDispatcherExtension, DirectCommandMapExtension_1.DirectCommandMapExtension, EventCommandMapExtension_1.EventCommandMapExtension, LocalEventMapExtension_1.LocalEventMapExtension);
    };
    return MVCSBundle;
}());
exports.MVCSBundle = MVCSBundle;
//# sourceMappingURL=MVCSBundle.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/api/IEventDispatcher.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/api/IEventDispatcher.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEventDispatcher = Symbol("IEventDispatcher");
//# sourceMappingURL=IEventDispatcher.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/impl/Event.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/impl/Event.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Event class is used as the base class for the creation of Event objects, which are passed as parameters to event
 * listeners when an event occurs.The properties of the Event class carry basic information about an event, such as
 * the event's type or whether the event's default behavior can be canceled. For many events, such as the events represented
 * by the Event class constants, this basic information is sufficient. Other events, however, may require more detailed
 * information. Events associated with a touch tap, for example, need to include additional information about the
 * location of the touch event. You can pass such additional information to event listeners by extending the Event class,
 * which is what the TouchEvent class does. Egret API defines several Event subclasses for common events that require
 * additional information. Events associated with each of the Event subclasses are described in the documentation for
 * each class.The methods of the Event class can be used in event listener functions to affect the behavior of the event
 * object. Some events have an associated default behavior. Your event listener can cancel this behavior by calling the
 * preventDefault() method. You can also make the current event listener the last one to process an event by calling
 * the stopPropagation() or stopImmediatePropagation() method.
 * @see egret.EventDispatcher
 * @version Egret 2.4
 * @platform Web,Native
 * @includeExample egret/events/Event.ts
 * @see http://edn.egret.com/cn/docs/page/798 取消触摸事件
 * @language en_US
 */
var Event = /** @class */ (function () {
    /**
     * Creates an Event object to pass as a parameter to event listeners.
     * @param type  The type of the event, accessible as Event.type.
     * @param bubbles  Determines whether the Event object participates in the bubbling stage of the event flow. The default value is false.
     * @param cancelable Determines whether the Event object can be canceled. The default values is false.
     * @param data the optional data associated with this event
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    function Event(type, bubbles, cancelable, data) {
        /**
         * @private
         */
        this._isDefaultPrevented = false;
        /**
         * @private
         */
        this._isPropagationStopped = false;
        /**
         * @private
         */
        this._isPropagationImmediateStopped = false;
        this._type = type;
        this._bubbles = !!bubbles;
        this._cancelable = !!cancelable;
        this._data = data;
    }
    /**
     * Cancels an event's default behavior if that behavior can be canceled.Many events have associated behaviors that
     * are carried out by default. For example, if a user types a character into a text input, the default behavior
     * is that the character is displayed in the text input. Because the TextEvent.TEXT_INPUT event's default behavior
     * can be canceled, you can use the preventDefault() method to prevent the character from appearing.
     * You can use the Event.cancelable property to check whether you can prevent the default behavior associated with
     * a particular event. If the value of Event.cancelable is true, then preventDefault() can be used to cancel the event;
     * otherwise, preventDefault() has no effect.
     * @see #cancelable
     * @see #isDefaultPrevented
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    Event.prototype.preventDefault = function () {
        if (this._cancelable) {
            this._isDefaultPrevented = true;
        }
    };
    /**
     * Prevents processing of any event listeners in nodes subsequent to the current node in the event flow. This method
     * does not affect any event listeners in the current node (currentTarget). In contrast, the stopImmediatePropagation()
     * method prevents processing of event listeners in both the current node and subsequent nodes. Additional calls to this
     * method have no effect. This method can be called in any phase of the event flow.<br/>
     * Note: This method does not cancel the behavior associated with this event; see preventDefault() for that functionality.
     * @see #stopImmediatePropagation()
     * @see #preventDefault()
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    Event.prototype.stopPropagation = function () {
        if (this._bubbles) {
            this._isPropagationStopped = true;
        }
    };
    /**
     * Prevents processing of any event listeners in the current node and any subsequent nodes in the event flow.
     * This method takes effect immediately, and it affects event listeners in the current node. In contrast, the
     * stopPropagation() method doesn't take effect until all the event listeners in the current node finish processing.<br/>
     * Note: This method does not cancel the behavior associated with this event; see preventDefault() for that functionality.
     * @see #stopPropagation()
     * @see #preventDefault()
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    Event.prototype.stopImmediatePropagation = function () {
        if (this._bubbles) {
            this._isPropagationImmediateStopped = true;
        }
    };
    Object.defineProperty(Event.prototype, "type", {
        /**
         * The type of event. The type is case-sensitive.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "bubbles", {
        /**
         * Indicates whether an event is a bubbling event.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        get: function () {
            return this._bubbles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "cancelable", {
        /**
         * Indicates whether the behavior associated with the event can be prevented. If the behavior can be
         * canceled, this value is true; otherwise it is false.
         * @see #preventDefault()
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        get: function () {
            return this._cancelable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "isDefaultPrevented", {
        /**
         * Checks whether the preventDefault() method has been called on the event. If the preventDefault() method has been
         * called, returns true; otherwise, returns false.
         * @returns If preventDefault() has been called, returns true; otherwise, returns false.
         * @see #preventDefault()
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        get: function () {
            return this._isDefaultPrevented;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "isPropagationStopped", {
        get: function () {
            return this._isPropagationStopped;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "isPropagationImmediateStopped", {
        get: function () {
            return this._isPropagationImmediateStopped;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "currentTarget", {
        /**
         * The object that is actively processing the Event object with an event listener. For example, if a
         * user clicks an OK button, the current target could be the node containing that button or one of its ancestors
         * that has registered an event listener for that event.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        get: function () {
            return this._currentTarget;
        },
        set: function (value) {
            this._currentTarget = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "target", {
        /**
         * The event target. This property contains the target node. For example, if a user clicks an OK button,
         * the target node is the display list node containing that button.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        get: function () {
            return this._target;
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "data", {
        /**
         * the optional data associated with this event
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=Event.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/impl/EventDispatcher.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/impl/EventDispatcher.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var IEventDispatcher_1 = __webpack_require__(/*! ../api/IEventDispatcher */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/api/IEventDispatcher.js");
var Event_1 = __webpack_require__(/*! ../impl/Event */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/impl/Event.js");
var ONCE_EVENT_LIST = [];
/**
 * The EventDispatcher class is the base class for all classes that dispatchEvent events. The EventDispatcher class implements
 * the IEventDispatcher interface and is the base class for the DisplayObject class. The EventDispatcher class allows
 * any object on the display list to be an event target and as such, to use the methods of the IEventDispatcher interface.
 * Event targets are an important part of the Egret event model. The event target serves as the focal point for how events
 * flow through the display list hierarchy. When an event such as a touch tap, Egret dispatches an event object into the
 * event flow from the root of the display list. The event object then makes its way through the display list until it
 * reaches the event target, at which point it begins its return trip through the display list. This round-trip journey
 * to the event target is conceptually divided into three phases: <br/>
 * the capture phase comprises the journey from the root to the last node before the event target's node, the target
 * phase comprises only the event target node, and the bubbling phase comprises any subsequent nodes encountered on
 * the return trip to the root of the display list. In general, the easiest way for a user-defined class to gain event
 * dispatching capabilities is to extend EventDispatcher. If this is impossible (that is, if the class is already extending
 * another class), you can instead implement the IEventDispatcher interface, create an EventDispatcher member, and write simple
 * hooks to route calls into the aggregated EventDispatcher.
 * @see egret.IEventDispatcher
 * @version Egret 2.4
 * @platform Web,Native
 * @includeExample egret/events/EventDispatcher.ts
 * @language en_US
 */
var EventDispatcher = /** @class */ (function () {
    /**
     * create an instance of the EventDispatcher class.
     * @param target The target object for events dispatched to the EventDispatcher object. This parameter is used when
     * the EventDispatcher instance is aggregated by a class that implements IEventDispatcher; it is necessary so that the
     * containing object can be the target for events. Do not use this parameter in simple cases in which a class extends EventDispatcher.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    function EventDispatcher(target) {
        if (target === void 0) { target = null; }
        this._eventDispatcher = {
            0: target ? target : this,
            1: {},
            2: {},
            3: 0
        };
    }
    /**
     * @inheritDoc
     * @version Egret 2.4
     * @platform Web,Native
     */
    EventDispatcher.prototype.addEventListener = function (type, listener, thisObject, useCapture, priority) {
        this._addListener(type, listener, thisObject, useCapture, priority);
    };
    /**
     * @inheritDoc
     * @version Egret 2.4
     * @platform Web,Native
     */
    EventDispatcher.prototype.once = function (type, listener, thisObject, useCapture, priority) {
        this._addListener(type, listener, thisObject, useCapture, priority, true);
    };
    /**
     * @inheritDoc
     * @version Egret 2.4
     * @platform Web,Native
     */
    EventDispatcher.prototype.removeEventListener = function (type, listener, thisObject, useCapture) {
        var values = this._eventDispatcher;
        var eventMap = this._getEventMap(useCapture);
        var list = eventMap[type];
        if (!list) {
            return;
        }
        if (values[3 /* notifyLevel */] !== 0) {
            eventMap[type] = list = list.concat();
        }
        this._removeEventBin(list, listener, thisObject);
        if (list.length === 0) {
            eventMap[type] = null;
        }
    };
    /**
     * @inheritDoc
     * @version Egret 2.4
     * @platform Web,Native
     */
    EventDispatcher.prototype.hasEventListener = function (type) {
        var values = this._eventDispatcher;
        return !!(values[1 /* eventsMap */][type] || values[2 /* captureEventsMap */][type]);
    };
    /**
     * @inheritDoc
     * @version Egret 2.4
     * @platform Web,Native
     */
    EventDispatcher.prototype.willTrigger = function (type) {
        return this.hasEventListener(type);
    };
    /**
     * @inheritDoc
     * @version Egret 2.4
     * @platform Web,Native
     */
    EventDispatcher.prototype.dispatchEvent = function (event) {
        event.currentTarget = this._eventDispatcher[0 /* eventTarget */];
        event.target = event.currentTarget;
        return this._notifyListener(event, false);
    };
    /**
     * Distribute a specified event parameters.
     * @param type The type of the event. Event listeners can access this information through the inherited type property.
     * @param bubbles Determines whether the Event object bubbles. Event listeners can access this information through
     * the inherited bubbles property.
     * @param data {any} data
     * @param cancelable Determines whether the Event object can be canceled. The default values is false.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    EventDispatcher.prototype.dispatchEventWith = function (type, bubbles, data, cancelable) {
        if (bubbles || this.hasEventListener(type)) {
            var event_1 = new Event_1.Event(type, bubbles, cancelable, data);
            var result = this.dispatchEvent(event_1);
            return result;
        }
        return true;
    };
    /**
     * @private
     *
     * @param useCapture
     */
    EventDispatcher.prototype._getEventMap = function (useCapture) {
        var values = this._eventDispatcher;
        var eventMap = useCapture ? values[2 /* captureEventsMap */] : values[1 /* eventsMap */];
        return eventMap;
    };
    /**
     * @private
     */
    EventDispatcher.prototype._addListener = function (type, listener, thisObject, useCapture, priority, dispatchOnce) {
        var values = this._eventDispatcher;
        var eventMap = this._getEventMap(useCapture);
        var list = eventMap[type];
        if (!list) {
            list = eventMap[type] = [];
        }
        else if (values[3 /* notifyLevel */] !== 0) {
            eventMap[type] = list = list.concat();
        }
        this._insertEventBin(list, type, listener, thisObject, useCapture, priority, dispatchOnce);
    };
    /**
     * @private
     */
    EventDispatcher.prototype._insertEventBin = function (list, type, listener, thisObject, useCapture, priority, dispatchOnce) {
        priority = priority || 0;
        var insertIndex = -1;
        var length = list.length;
        for (var i = 0; i < length; i++) {
            var bin = list[i];
            if (bin.listener === listener && bin.thisObject === thisObject && bin.target === this) {
                return false;
            }
            if (insertIndex === -1 && bin.priority < priority) {
                insertIndex = i;
            }
        }
        var eventBin = {
            type: type,
            listener: listener,
            thisObject: thisObject,
            priority: priority,
            target: this,
            useCapture: useCapture,
            dispatchOnce: !!dispatchOnce
        };
        if (insertIndex !== -1) {
            list.splice(insertIndex, 0, eventBin);
        }
        else {
            list.push(eventBin);
        }
        return true;
    };
    /**
     * @private
     */
    EventDispatcher.prototype._removeEventBin = function (list, listener, thisObject) {
        var length = list.length;
        for (var i = 0; i < length; i++) {
            var bin = list[i];
            if (bin.listener === listener && bin.thisObject === thisObject && bin.target === this) {
                list.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    /**
     * @private
     */
    EventDispatcher.prototype._notifyListener = function (event, capturePhase) {
        var values = this._eventDispatcher;
        var eventMap = this._getEventMap(capturePhase);
        var list = eventMap[event.type];
        if (!list) {
            return true;
        }
        var length = list.length;
        if (length === 0) {
            return true;
        }
        var onceList = ONCE_EVENT_LIST;
        values[3 /* notifyLevel */]++;
        for (var i = 0; i < length; i++) {
            var eventBin = list[i];
            eventBin.listener.call(eventBin.thisObject, event);
            if (eventBin.dispatchOnce) {
                onceList.push(eventBin);
            }
            if (event.isPropagationImmediateStopped) {
                break;
            }
        }
        values[3 /* notifyLevel */]--;
        while (onceList.length) {
            var eventBin = onceList.pop();
            eventBin.target.removeEventListener(eventBin.type, eventBin.listener, eventBin.thisObject, eventBin.useCapture);
        }
        return !event.isDefaultPrevented;
    };
    EventDispatcher = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], EventDispatcher);
    return EventDispatcher;
}());
exports.EventDispatcher = EventDispatcher;
//# sourceMappingURL=EventDispatcher.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/api/CommandPayload.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/api/CommandPayload.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var CommandPayload = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a command payload
     * @param values Optional values
     * @param classes Optional classes
     */
    function CommandPayload(values, classes) {
        this._values = values;
        this._classes = classes;
    }
    Object.defineProperty(CommandPayload.prototype, "values", {
        /*============================================================================*/
        /* Public Properties                                                          */
        /*============================================================================*/
        /**
         * Ordered list of values
         */
        get: function () {
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandPayload.prototype, "classes", {
        /**
         * Ordered list of value classes
         */
        get: function () {
            return this._classes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandPayload.prototype, "length", {
        /**
         * The number of payload items
         */
        get: function () {
            return this._classes ? this._classes.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * Adds an item to this payload
     * @param payloadValue The value
     * @param payloadClass The class of the value
     * @return Self
     */
    CommandPayload.prototype.addPayload = function (payloadValue, payloadClass) {
        if (this._values) {
            this._values.push(payloadValue);
        }
        else {
            this._values = [payloadValue];
        }
        if (this._classes) {
            this._classes.push(payloadClass);
        }
        else {
            this._classes = [payloadClass];
        }
        return this;
    };
    /**
     * Does this payload have any items?
     * @return boolean
     */
    CommandPayload.prototype.hasPayload = function () {
        var payload = false;
        if (this._values && this._classes) {
            payload = this._values.length > 0 && this._classes.length > 0 && this._values.length === this._classes.length;
        }
        return payload;
    };
    return CommandPayload;
}());
exports.CommandPayload = CommandPayload;
//# sourceMappingURL=CommandPayload.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/api/ICommand.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/api/ICommand.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Mandatory Command interface.
 *
 * <p>Note, you do not need to implement this interface,
 * any class with an execute method can be used.</p>
 */
exports.ICommand = Symbol("ICommand");
//# sourceMappingURL=ICommand.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/Command.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/Command.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Abstract command implementation
 *
 * <p>Please note: you do not have to extend this class.
 * Any class with an execute method can be used.</p>
 */
var Command = /** @class */ (function () {
    function Command() {
    }
    return Command;
}());
exports.Command = Command;
//# sourceMappingURL=Command.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandExecutor.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandExecutor.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var applyHooks_1 = __webpack_require__(/*! ../../../framework/impl/applyHooks */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/applyHooks.js");
var guardsApprove_1 = __webpack_require__(/*! ../../../framework/impl/guardsApprove */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/guardsApprove.js");
var instantiateUnmapped_1 = __webpack_require__(/*! ../../../framework/impl/instantiateUnmapped */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/instantiateUnmapped.js");
/**
 * @private
 */
var CommandExecutor = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a Command Executor
     * @param injector The Injector to use. A child injector will be created from it.
     * @param removeMapping Remove mapping handler (optional)
     * @param handleResult Result handler (optional)
     */
    function CommandExecutor(injector, removeMapping, handleResult) {
        this._injector = injector.createChild();
        this._removeMapping = removeMapping;
        this._handleResult = handleResult;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    CommandExecutor.prototype.executeCommands = function (mappings, payload) {
        var length = mappings.length;
        for (var i = 0; i < length; i++) {
            this.executeCommand(mappings[i], payload);
        }
    };
    /**
     * @inheritDoc
     */
    CommandExecutor.prototype.executeCommand = function (mapping, payload) {
        var hasPayload = payload && payload.hasPayload();
        var injectionEnabled = hasPayload && mapping.payloadInjectionEnabled;
        var command = null;
        if (injectionEnabled) {
            this.mapPayload(payload);
        }
        if (mapping.guards.length === 0 || guardsApprove_1.guardsApprove(mapping.guards, this._injector)) {
            var commandClass = mapping.commandClass;
            if (mapping.fireOnce && this._removeMapping) {
                this._removeMapping(mapping);
            }
            command = instantiateUnmapped_1.instantiateUnmapped(this._injector, commandClass);
            if (mapping.hooks.length > 0) {
                this._injector.bind(commandClass).toConstantValue(command);
                applyHooks_1.applyHooks(mapping.hooks, this._injector);
                this._injector.unbind(commandClass);
            }
        }
        if (injectionEnabled) {
            this.unmapPayload(payload);
        }
        if (command) {
            var executeMethod = command.execute.bind(command);
            var result = hasPayload && executeMethod.length > 0 ? executeMethod.apply(command, payload.values) : executeMethod();
            if (this._handleResult) {
                this._handleResult(result, command, mapping);
            }
        }
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    CommandExecutor.prototype.mapPayload = function (payload) {
        var i = payload.length;
        while (i--) {
            this._injector.bind(payload.classes[i]).toConstantValue(payload.values[i]);
        }
    };
    CommandExecutor.prototype.unmapPayload = function (payload) {
        var i = payload.length;
        while (i--) {
            this._injector.unbind(payload.classes[i]);
        }
    };
    return CommandExecutor;
}());
exports.CommandExecutor = CommandExecutor;
//# sourceMappingURL=CommandExecutor.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMapper.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMapper.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var CommandMapping_1 = __webpack_require__(/*! ./CommandMapping */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMapping.js");
/**
 * @private
 */
var CommandMapper = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a Command Mapper
     * @param mappings The command mapping list to add mappings to
     */
    function CommandMapper(mappings) {
        this._mappings = mappings;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    CommandMapper.prototype.toCommand = function (commandClass) {
        this._mapping = new CommandMapping_1.CommandMapping(commandClass);
        this._mappings.addMapping(this._mapping);
        return this;
    };
    /**
     * @inheritDoc
     */
    CommandMapper.prototype.fromCommand = function (commandClass) {
        this._mappings.removeMappingFor(commandClass);
    };
    /**
     * @inheritDoc
     */
    CommandMapper.prototype.fromAll = function () {
        this._mappings.removeAllMappings();
    };
    /**
     * @inheritDoc
     */
    CommandMapper.prototype.once = function (value) {
        if (value === void 0) { value = true; }
        this._mapping.setFireOnce(value);
        return this;
    };
    /**
     * @inheritDoc
     */
    CommandMapper.prototype.withGuards = function () {
        var _a;
        var guards = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            guards[_i] = arguments[_i];
        }
        (_a = this._mapping).addGuards.apply(_a, guards);
        return this;
    };
    /**
     * @inheritDoc
     */
    CommandMapper.prototype.withHooks = function () {
        var _a;
        var hooks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            hooks[_i] = arguments[_i];
        }
        (_a = this._mapping).addHooks.apply(_a, hooks);
        return this;
    };
    /**
     * @inheritDoc
     */
    CommandMapper.prototype.withPayloadInjection = function (value) {
        if (value === void 0) { value = true; }
        this._mapping.setPayloadInjectionEnabled(value);
        return this;
    };
    return CommandMapper;
}());
exports.CommandMapper = CommandMapper;
//# sourceMappingURL=CommandMapper.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMapping.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMapping.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var getQualifiedClassName_1 = __webpack_require__(/*! ../../../framework/impl/getQualifiedClassName */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/getQualifiedClassName.js");
/**
 * @private
 */
var CommandMapping = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a Command Mapping
     * @param commandClass The concrete Command class
     */
    function CommandMapping(commandClass) {
        this._guards = [];
        this._hooks = [];
        this._fireOnce = false;
        this._payloadInjectionEnabled = true;
        this._commandClass = commandClass;
    }
    Object.defineProperty(CommandMapping.prototype, "commandClass", {
        /*============================================================================*/
        /* Public Properties                                                          */
        /*============================================================================*/
        /**
         * @inheritDoc
         */
        get: function () {
            return this._commandClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandMapping.prototype, "guards", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._guards;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandMapping.prototype, "hooks", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._hooks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandMapping.prototype, "fireOnce", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._fireOnce;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandMapping.prototype, "payloadInjectionEnabled", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._payloadInjectionEnabled;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    CommandMapping.prototype.addGuards = function () {
        var guards = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            guards[_i] = arguments[_i];
        }
        this._guards = this._guards.concat.apply(this._guards, guards);
        return this;
    };
    /**
     * @inheritDoc
     */
    CommandMapping.prototype.addHooks = function () {
        var hooks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            hooks[_i] = arguments[_i];
        }
        this._hooks = this._hooks.concat.apply(this._hooks, hooks);
        return this;
    };
    /**
     * @inheritDoc
     */
    CommandMapping.prototype.setFireOnce = function (value) {
        this._fireOnce = value;
        return this;
    };
    /**
     * @inheritDoc
     */
    CommandMapping.prototype.setPayloadInjectionEnabled = function (value) {
        this._payloadInjectionEnabled = value;
        return this;
    };
    /**
     *
     */
    CommandMapping.prototype.toString = function () {
        return "Command " + getQualifiedClassName_1.getQualifiedClassName(this._commandClass);
    };
    return CommandMapping;
}());
exports.CommandMapping = CommandMapping;
//# sourceMappingURL=CommandMapping.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMappingList.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMappingList.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var CommandMappingList = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Create a command mapping list
     * @param trigger The trigger that owns this list
     * @param processors A reference to the mapping processors for this command map
     * @param logger Optional logger
     */
    function CommandMappingList(trigger, processors, logger) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._mappingsByCommand = new Map();
        this._mappings = [];
        this._trigger = trigger;
        this._processors = processors;
        this._logger = logger;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    CommandMappingList.prototype.getList = function () {
        if (!this._sorted) {
            this.sortMappings();
        }
        return this._mappings.concat();
    };
    /**
     * @inheritDoc
     */
    CommandMappingList.prototype.withSortFunction = function (sorter) {
        this._sorted = false;
        this._compareFunction = sorter;
        return this;
    };
    /**
     * @inheritDoc
     */
    CommandMappingList.prototype.addMapping = function (mapping) {
        this._sorted = false;
        this.applyProcessors(mapping);
        var oldMapping = this._mappingsByCommand.get(mapping.commandClass);
        if (oldMapping) {
            this.overwriteMapping(oldMapping, mapping);
        }
        else {
            this.storeMapping(mapping);
            if (this._mappings.length === 1) {
                this._trigger.activate();
            }
        }
    };
    /**
     * @inheritDoc
     */
    CommandMappingList.prototype.removeMapping = function (mapping) {
        if (this._mappingsByCommand.has(mapping.commandClass)) {
            this.deleteMapping(mapping);
            if (this._mappings.length === 0) {
                this._trigger.deactivate();
            }
        }
    };
    /**
     * @inheritDoc
     */
    CommandMappingList.prototype.removeMappingFor = function (commandClass) {
        var mapping = this._mappingsByCommand.get(commandClass);
        if (mapping) {
            this.removeMapping(mapping);
        }
    };
    /**
     * @inheritDoc
     */
    CommandMappingList.prototype.removeAllMappings = function () {
        if (this._mappings.length > 0) {
            var list = this._mappings.concat();
            var length_1 = list.length;
            while (length_1--) {
                this.deleteMapping(list[length_1]);
            }
            this._trigger.deactivate();
        }
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    CommandMappingList.prototype.storeMapping = function (mapping) {
        this._mappingsByCommand.set(mapping.commandClass, mapping);
        this._mappings.push(mapping);
        if (this._logger) {
            this._logger.debug("{0} mapped to {1}", [this._trigger, mapping]);
        }
    };
    CommandMappingList.prototype.deleteMapping = function (mapping) {
        this._mappingsByCommand.delete(mapping.commandClass);
        this._mappings.splice(this._mappings.indexOf(mapping), 1);
        if (this._logger) {
            this._logger.debug("{0} unmapped from {1}", [this._trigger, mapping]);
        }
    };
    CommandMappingList.prototype.overwriteMapping = function (oldMapping, newMapping) {
        if (this._logger) {
            this._logger.warn("{0} already mapped to {1}\n" +
                "If you have overridden this mapping intentionally you can use 'unmap()' " +
                "prior to your replacement mapping in order to avoid seeing this message.\n", [this._trigger, oldMapping]);
        }
        this.deleteMapping(oldMapping);
        this.storeMapping(newMapping);
    };
    CommandMappingList.prototype.sortMappings = function () {
        if (this._compareFunction != null) {
            this._mappings = this._mappings.sort(this._compareFunction);
        }
        this._sorted = true;
    };
    CommandMappingList.prototype.applyProcessors = function (mapping) {
        this._processors.forEach(function (processor) {
            processor(mapping);
        });
    };
    return CommandMappingList;
}());
exports.CommandMappingList = CommandMappingList;
//# sourceMappingURL=CommandMappingList.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandTriggerMap.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandTriggerMap.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var CommandTriggerMap = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a command trigger map
     * @param keyFactory Factory function to creates keys
     * @param triggerFactory Factory function to create triggers
     */
    function CommandTriggerMap(keyFactory, triggerFactory) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._triggers = new Map();
        this._keyFactory = keyFactory;
        this._triggerFactory = triggerFactory;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    CommandTriggerMap.prototype.getTrigger = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var key = this.getKey(params);
        var trigger = this._triggers.get(key);
        if (!trigger) {
            trigger = this.createTrigger(params);
            this._triggers.set(key, trigger);
        }
        return trigger;
    };
    /**
     * @private
     */
    CommandTriggerMap.prototype.removeTrigger = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return this.destroyTrigger(this.getKey(params));
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    CommandTriggerMap.prototype.getKey = function (mapperArgs) {
        return this._keyFactory.apply(null, mapperArgs);
    };
    CommandTriggerMap.prototype.createTrigger = function (mapperArgs) {
        return this._triggerFactory.apply(null, mapperArgs);
    };
    CommandTriggerMap.prototype.destroyTrigger = function (key) {
        var trigger = this._triggers.get(key);
        if (trigger) {
            trigger.deactivate();
            this._triggers.delete(key);
        }
        return trigger;
    };
    return CommandTriggerMap;
}());
exports.CommandTriggerMap = CommandTriggerMap;
//# sourceMappingURL=CommandTriggerMap.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/NullCommandTrigger.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/NullCommandTrigger.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var NullCommandTrigger = /** @class */ (function () {
    function NullCommandTrigger() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    NullCommandTrigger.prototype.activate = function () { };
    /**
     * @private
     */
    NullCommandTrigger.prototype.deactivate = function () { };
    return NullCommandTrigger;
}());
exports.NullCommandTrigger = NullCommandTrigger;
//# sourceMappingURL=NullCommandTrigger.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/DirectCommandMapExtension.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/DirectCommandMapExtension.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var IDirectCommandMap_1 = __webpack_require__(/*! ./api/IDirectCommandMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/api/IDirectCommandMap.js");
var DirectCommandMap_1 = __webpack_require__(/*! ./impl/DirectCommandMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/impl/DirectCommandMap.js");
/**
 * Maps commands for direct (manual) execution
 */
var DirectCommandMapExtension = /** @class */ (function () {
    function DirectCommandMapExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    DirectCommandMapExtension.prototype.extend = function (context) {
        context.injector.bind(IDirectCommandMap_1.IDirectCommandMap).to(DirectCommandMap_1.DirectCommandMap);
    };
    return DirectCommandMapExtension;
}());
exports.DirectCommandMapExtension = DirectCommandMapExtension;
//# sourceMappingURL=DirectCommandMapExtension.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/api/IDirectCommandMap.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/api/IDirectCommandMap.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Maps commands for direct (manual) execution
 */
exports.IDirectCommandMap = Symbol("IDirectCommandMap");
//# sourceMappingURL=IDirectCommandMap.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/impl/DirectCommandMap.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/impl/DirectCommandMap.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var IContext_1 = __webpack_require__(/*! ../../../framework/api/IContext */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/IContext.js");
var CommandExecutor_1 = __webpack_require__(/*! ../../commandCenter/impl/CommandExecutor */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandExecutor.js");
var CommandMappingList_1 = __webpack_require__(/*! ../../commandCenter/impl/CommandMappingList */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMappingList.js");
var NullCommandTrigger_1 = __webpack_require__(/*! ../../commandCenter/impl/NullCommandTrigger */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/NullCommandTrigger.js");
var IDirectCommandMap_1 = __webpack_require__(/*! ../api/IDirectCommandMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/api/IDirectCommandMap.js");
var DirectCommandMapper_1 = __webpack_require__(/*! ./DirectCommandMapper */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/impl/DirectCommandMapper.js");
/**
 * Maps commands for direct (manual) execution
 */
var DirectCommandMap = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a Direct Command Map
     * @param context The context that owns this map
     */
    function DirectCommandMap(context) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._mappingProcessors = [];
        this._context = context;
        // Create a child injector
        var sandboxedInjector = context.injector.createChild();
        // allow access to this specific instance in the commands
        sandboxedInjector.bind(IDirectCommandMap_1.IDirectCommandMap).toConstantValue(this);
        this._mappings = new CommandMappingList_1.CommandMappingList(new NullCommandTrigger_1.NullCommandTrigger(), this._mappingProcessors, context.getLogger(this));
        this._executor = new CommandExecutor_1.CommandExecutor(sandboxedInjector, this._mappings.removeMapping.bind(this._mappings));
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    DirectCommandMap.prototype.map = function (commandClass) {
        return new DirectCommandMapper_1.DirectCommandMapper(this._executor, this._mappings, commandClass);
    };
    /**
     * @inheritDoc
     */
    DirectCommandMap.prototype.detain = function (command) {
        this._context.detain(command);
    };
    /**
     * @inheritDoc
     */
    DirectCommandMap.prototype.release = function (command) {
        this._context.release(command);
    };
    /**
     * @inheritDoc
     */
    DirectCommandMap.prototype.execute = function (payload) {
        this._executor.executeCommands(this._mappings.getList(), payload);
    };
    /**
     * @inheritDoc
     */
    DirectCommandMap.prototype.addMappingProcessor = function (handler) {
        if (this._mappingProcessors.indexOf(handler) === -1) {
            this._mappingProcessors.push(handler);
        }
        return this;
    };
    DirectCommandMap = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(IContext_1.IContext)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DirectCommandMap);
    return DirectCommandMap;
}());
exports.DirectCommandMap = DirectCommandMap;
//# sourceMappingURL=DirectCommandMap.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/impl/DirectCommandMapper.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/directCommandMap/impl/DirectCommandMapper.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var CommandMapping_1 = __webpack_require__(/*! ../../commandCenter/impl/CommandMapping */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMapping.js");
/**
 * @private
 */
var DirectCommandMapper = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function DirectCommandMapper(executor, mappings, commandClass) {
        this._executor = executor;
        this._mappings = mappings;
        this._mapping = new CommandMapping_1.CommandMapping(commandClass);
        this._mapping.setFireOnce(true);
        this._mappings.addMapping(this._mapping);
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    DirectCommandMapper.prototype.withGuards = function () {
        var _a;
        var guards = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            guards[_i] = arguments[_i];
        }
        (_a = this._mapping).addGuards.apply(_a, guards);
        return this;
    };
    /**
     * @inheritDoc
     */
    DirectCommandMapper.prototype.withHooks = function () {
        var _a;
        var hooks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            hooks[_i] = arguments[_i];
        }
        (_a = this._mapping).addHooks.apply(_a, hooks);
        return this;
    };
    /**
     * @inheritDoc
     */
    DirectCommandMapper.prototype.withPayloadInjection = function (value) {
        if (value === void 0) { value = true; }
        this._mapping.setPayloadInjectionEnabled(value);
        return this;
    };
    /**
     * @inheritDoc
     */
    DirectCommandMapper.prototype.execute = function (payload) {
        this._executor.executeCommands(this._mappings.getList(), payload);
    };
    /**
     * @inheritDoc
     */
    DirectCommandMapper.prototype.map = function (commandClass) {
        return new DirectCommandMapper(this._executor, this._mappings, commandClass);
    };
    return DirectCommandMapper;
}());
exports.DirectCommandMapper = DirectCommandMapper;
//# sourceMappingURL=DirectCommandMapper.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/ConsoleLoggingExtension.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/ConsoleLoggingExtension.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleLogTarget_1 = __webpack_require__(/*! ./impl/ConsoleLogTarget */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/impl/ConsoleLogTarget.js");
/**
 * Adds a TraceLogTarget to the context
 */
var ConsoleLoggingExtension = /** @class */ (function () {
    function ConsoleLoggingExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ConsoleLoggingExtension.prototype.extend = function (context) {
        context.addLogTarget(new ConsoleLogTarget_1.ConsoleLogTarget(context));
    };
    return ConsoleLoggingExtension;
}());
exports.ConsoleLoggingExtension = ConsoleLoggingExtension;
//# sourceMappingURL=ConsoleLoggingExtension.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/InjectableLoggerExtension.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/InjectableLoggerExtension.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var ILogger_1 = __webpack_require__(/*! ../../framework/api/ILogger */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/ILogger.js");
/**
 * Allows you to @inject unique loggers into your objects.
 *
 * There are two ways to inject the logger on the constructor of your class:
 *
 * * Using the literal string "ILogger":
 *
 * <code>
 *     constructor( @inject("ILogger") logger: ILogger ) { ... }
 * </code>
 *
 * * Using the ILogger Symbol:
 *
 * <code>
 *     constructor( @inject(ILogger) logger: ILogger ) { ... }
 * </code>
 */
var InjectableLoggerExtension = /** @class */ (function () {
    function InjectableLoggerExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    InjectableLoggerExtension.prototype.extend = function (context) {
        // Map the literal string "ILogger"
        context.injector
            .bind("ILogger")
            .toDynamicValue(function () {
            return context.getLogger(null);
        })
            .onActivation(function (ctx, logger) {
            logger.source = ctx.plan.rootRequest.serviceIdentifier;
            return logger;
        });
        // Map the Symbol ILogger
        context.injector
            .bind(ILogger_1.ILogger)
            .toDynamicValue(function () {
            return context.getLogger(null);
        })
            .onActivation(function (ctx, logger) {
            logger.source = ctx.plan.rootRequest.serviceIdentifier;
            return logger;
        });
    };
    return InjectableLoggerExtension;
}());
exports.InjectableLoggerExtension = InjectableLoggerExtension;
//# sourceMappingURL=InjectableLoggerExtension.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/impl/ConsoleLogTarget.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/impl/ConsoleLogTarget.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel_1 = __webpack_require__(/*! ../../../framework/api/LogLevel */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LogLevel.js");
var LogMessageParser_1 = __webpack_require__(/*! ./LogMessageParser */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/impl/LogMessageParser.js");
/**
 * A simple trace logger
 * @private
 */
var ConsoleLogTarget = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a Trace Log Target
     * @param context Context
     */
    function ConsoleLogTarget(context) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._messageParser = new LogMessageParser_1.LogMessageParser();
        this._context = context;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ConsoleLogTarget.prototype.log = function (source, level, timestamp, message, params) {
        if (this._context.logLevel < level) {
            return;
        }
        switch (level) {
            case LogLevel_1.LogLevel.DEBUG:
                console.log(timestamp, this._context, source, this._messageParser.parseMessage(message, params));
                break;
            case LogLevel_1.LogLevel.INFO:
                console.info(timestamp, this._context, source, this._messageParser.parseMessage(message, params));
                break;
            case LogLevel_1.LogLevel.WARN:
                console.warn(timestamp, this._context, source, this._messageParser.parseMessage(message, params));
                break;
            case LogLevel_1.LogLevel.ERROR:
                console.error(timestamp, this._context, source, this._messageParser.parseMessage(message, params));
                break;
            case LogLevel_1.LogLevel.FATAL:
                console.error(timestamp, this._context, source, this._messageParser.parseMessage(message, params));
                break;
        }
    };
    return ConsoleLogTarget;
}());
exports.ConsoleLogTarget = ConsoleLogTarget;
//# sourceMappingURL=ConsoleLogTarget.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/impl/LogMessageParser.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/enhancedLogging/impl/LogMessageParser.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var LogMessageParser = /** @class */ (function () {
    function LogMessageParser() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * Parse a parametrized message
     *
     * @param message The message string
     * @param params The parameter values
     * @return The parsed message
     */
    LogMessageParser.prototype.parseMessage = function (message, params) {
        if (params && params.length) {
            params.forEach(function (value, index) {
                message = message.replace("{" + index + "}", value);
            });
        }
        return message;
    };
    return LogMessageParser;
}());
exports.LogMessageParser = LogMessageParser;
//# sourceMappingURL=LogMessageParser.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/EventCommandMapExtension.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/EventCommandMapExtension.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var IEventCommandMap_1 = __webpack_require__(/*! ./api/IEventCommandMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/api/IEventCommandMap.js");
var EventCommandMap_1 = __webpack_require__(/*! ./impl/EventCommandMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/impl/EventCommandMap.js");
/**
 * The Event Command Map allows you to bind Events to Commands
 */
var EventCommandMapExtension = /** @class */ (function () {
    function EventCommandMapExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    EventCommandMapExtension.prototype.extend = function (context) {
        context.injector
            .bind(IEventCommandMap_1.IEventCommandMap)
            .to(EventCommandMap_1.EventCommandMap)
            .inSingletonScope();
    };
    return EventCommandMapExtension;
}());
exports.EventCommandMapExtension = EventCommandMapExtension;
//# sourceMappingURL=EventCommandMapExtension.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/api/IEventCommandMap.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/api/IEventCommandMap.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Event Command Map allows you to bind Events to Commands
 */
exports.IEventCommandMap = Symbol("IEventCommandMap");
//# sourceMappingURL=IEventCommandMap.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/impl/EventCommandMap.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/impl/EventCommandMap.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var IContext_1 = __webpack_require__(/*! ../../../framework/api/IContext */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/IContext.js");
var IEventDispatcher_1 = __webpack_require__(/*! ../../../events/api/IEventDispatcher */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/api/IEventDispatcher.js");
var CommandTriggerMap_1 = __webpack_require__(/*! ../../commandCenter/impl/CommandTriggerMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandTriggerMap.js");
var EventCommandTrigger_1 = __webpack_require__(/*! ./EventCommandTrigger */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/impl/EventCommandTrigger.js");
/**
 * @private
 */
var EventCommandMap = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function EventCommandMap(context, dispatcher) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._mappingProcessors = [];
        this._injector = context.injector;
        this._logger = context.getLogger(this);
        this._dispatcher = dispatcher;
        this._triggerMap = new CommandTriggerMap_1.CommandTriggerMap(this.getKey, this.createTrigger.bind(this));
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    EventCommandMap.prototype.map = function (type, eventClass) {
        return this.getTrigger(type, eventClass).createMapper();
    };
    /**
     * @inheritDoc
     */
    EventCommandMap.prototype.unmap = function (type, eventClass) {
        return this.getTrigger(type, eventClass).createMapper();
    };
    /**
     * @inheritDoc
     */
    EventCommandMap.prototype.addMappingProcessor = function (handler) {
        if (this._mappingProcessors.indexOf(handler) === -1) {
            this._mappingProcessors.push(handler);
        }
        return this;
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    EventCommandMap.prototype.getKey = function (type, eventClass) {
        return type + eventClass;
    };
    EventCommandMap.prototype.getTrigger = function (type, eventClass) {
        return this._triggerMap.getTrigger(type, eventClass);
    };
    EventCommandMap.prototype.createTrigger = function (type, eventClass) {
        return new EventCommandTrigger_1.EventCommandTrigger(this._injector, this._dispatcher, type, eventClass, this._mappingProcessors, this._logger);
    };
    EventCommandMap = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(IContext_1.IContext)), tslib_1.__param(1, inversify_1.inject(IEventDispatcher_1.IEventDispatcher)),
        tslib_1.__metadata("design:paramtypes", [Object, Object])
    ], EventCommandMap);
    return EventCommandMap;
}());
exports.EventCommandMap = EventCommandMap;
//# sourceMappingURL=EventCommandMap.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/impl/EventCommandTrigger.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventCommandMap/impl/EventCommandTrigger.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var getQualifiedClassName_1 = __webpack_require__(/*! ../../../framework/impl/getQualifiedClassName */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/getQualifiedClassName.js");
var isInstanceOfType_1 = __webpack_require__(/*! ../../matching/isInstanceOfType */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/isInstanceOfType.js");
var CommandPayload_1 = __webpack_require__(/*! ../../commandCenter/api/CommandPayload */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/api/CommandPayload.js");
var CommandExecutor_1 = __webpack_require__(/*! ../../commandCenter/impl/CommandExecutor */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandExecutor.js");
var CommandMapper_1 = __webpack_require__(/*! ../../commandCenter/impl/CommandMapper */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMapper.js");
var CommandMappingList_1 = __webpack_require__(/*! ../../commandCenter/impl/CommandMappingList */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/commandCenter/impl/CommandMappingList.js");
/**
 * @private
 */
var EventCommandTrigger = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function EventCommandTrigger(injector, dispatcher, type, eventClass, processors, logger) {
        this._dispatcher = dispatcher;
        this._type = type;
        this._eventClass = eventClass;
        this._mappings = new CommandMappingList_1.CommandMappingList(this, processors ? processors : [], logger);
        this._executor = new CommandExecutor_1.CommandExecutor(injector, this._mappings.removeMapping.bind(this._mappings));
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    EventCommandTrigger.prototype.createMapper = function () {
        return new CommandMapper_1.CommandMapper(this._mappings);
    };
    /**
     * @inheritDoc
     */
    EventCommandTrigger.prototype.activate = function () {
        this._dispatcher.addEventListener(this._type, this.eventHandler, this);
    };
    /**
     * @inheritDoc
     */
    EventCommandTrigger.prototype.deactivate = function () {
        this._dispatcher.removeEventListener(this._type, this.eventHandler, this);
    };
    EventCommandTrigger.prototype.toString = function () {
        var eventDescription = "";
        eventDescription = !this._eventClass ? "Event" : getQualifiedClassName_1.getQualifiedClassName(this._eventClass);
        return eventDescription + " with selector '" + this._type + "'";
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    EventCommandTrigger.prototype.eventHandler = function (event) {
        var eventConstructor = event.constructor;
        var payloadEventClass;
        // not pretty, but optimized to avoid duplicate checks and shortest paths
        if (!this._eventClass) {
            payloadEventClass = eventConstructor;
        }
        else if (isInstanceOfType_1.isInstanceOfType(event, this._eventClass)) {
            payloadEventClass = this._eventClass;
        }
        else {
            return;
        }
        this._executor.executeCommands(this._mappings.getList(), new CommandPayload_1.CommandPayload([event], [payloadEventClass]));
    };
    return EventCommandTrigger;
}());
exports.EventCommandTrigger = EventCommandTrigger;
//# sourceMappingURL=EventCommandTrigger.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventDispatcher/EventDispatcherExtension.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventDispatcher/EventDispatcherExtension.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var IEventDispatcher_1 = __webpack_require__(/*! ../../events/api/IEventDispatcher */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/api/IEventDispatcher.js");
var EventDispatcher_1 = __webpack_require__(/*! ../../events/impl/EventDispatcher */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/impl/EventDispatcher.js");
var LifecycleEventRelay_1 = __webpack_require__(/*! ./impl/LifecycleEventRelay */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventDispatcher/impl/LifecycleEventRelay.js");
/**
 * This extension maps an IEventDispatcher into a context's injector.
 */
var EventDispatcherExtension = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates an Event Dispatcher Extension
     * @param eventDispatcher Optional IEventDispatcher instance to share
     */
    function EventDispatcherExtension(eventDispatcher) {
        if (eventDispatcher === void 0) { eventDispatcher = null; }
        this._eventDispatcher = eventDispatcher || new EventDispatcher_1.EventDispatcher();
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    EventDispatcherExtension.prototype.extend = function (context) {
        this._context = context;
        this._context.injector.bind(IEventDispatcher_1.IEventDispatcher).toConstantValue(this._eventDispatcher);
        this._context.beforeInitializing(this.configureLifecycleEventRelay.bind(this));
        this._context.afterDestroying(this.destroyLifecycleEventRelay.bind(this));
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    EventDispatcherExtension.prototype.configureLifecycleEventRelay = function () {
        this._lifecycleRelay = new LifecycleEventRelay_1.LifecycleEventRelay(this._context, this._eventDispatcher);
    };
    EventDispatcherExtension.prototype.destroyLifecycleEventRelay = function () {
        this._lifecycleRelay.destroy();
    };
    return EventDispatcherExtension;
}());
exports.EventDispatcherExtension = EventDispatcherExtension;
//# sourceMappingURL=EventDispatcherExtension.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventDispatcher/impl/EventRelay.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventDispatcher/impl/EventRelay.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Relays events from a source to a destination
 */
var EventRelay = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Relays events from the source to the destination
     * @param source Event Dispatcher
     * @param destination Event Dispatcher
     * @param types The list of event types to relay
     */
    function EventRelay(source, destination, types) {
        this._source = source;
        this._destination = destination;
        this._types = types || [];
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * Start relaying events
     * @return Self
     */
    EventRelay.prototype.start = function () {
        if (!this._active) {
            this._active = true;
            this.addListeners();
        }
        return this;
    };
    /**
     * Stop relaying events
     * @return Self
     */
    EventRelay.prototype.stop = function () {
        if (this._active) {
            this._active = false;
            this.removeListeners();
        }
        return this;
    };
    /**
     * Add a new event type to relay
     * @param eventType
     */
    EventRelay.prototype.addType = function (eventType) {
        this._types.push(eventType);
        if (this._active) {
            this.addListener(eventType);
        }
    };
    /**
     * Remove a relay event type
     * @param eventType
     */
    EventRelay.prototype.removeType = function (eventType) {
        var index = this._types.indexOf(eventType);
        if (index > -1) {
            this._types.splice(index, 1);
            this.removeListener(eventType);
        }
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    EventRelay.prototype.addListener = function (type) {
        this._source.addEventListener(type, this._destination.dispatchEvent, this._destination);
    };
    EventRelay.prototype.removeListener = function (type) {
        this._source.removeEventListener(type, this._destination.dispatchEvent, this._destination);
    };
    EventRelay.prototype.addListeners = function () {
        var _this = this;
        this._types.forEach(function (type) {
            _this.addListener(type);
        });
    };
    EventRelay.prototype.removeListeners = function () {
        var _this = this;
        this._types.forEach(function (type) {
            _this.removeListener(type);
        });
    };
    return EventRelay;
}());
exports.EventRelay = EventRelay;
//# sourceMappingURL=EventRelay.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventDispatcher/impl/LifecycleEventRelay.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventDispatcher/impl/LifecycleEventRelay.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var LifecycleEvent_1 = __webpack_require__(/*! ../../../framework/api/LifecycleEvent */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleEvent.js");
var EventRelay_1 = __webpack_require__(/*! ./EventRelay */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/eventDispatcher/impl/EventRelay.js");
/**
 * @private
 */
var LifecycleEventRelay = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function LifecycleEventRelay(source, destination) {
        this._relay = new EventRelay_1.EventRelay(source, destination, LifecycleEventRelay.TYPES).start();
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    LifecycleEventRelay.prototype.destroy = function () {
        this._relay.stop();
        this._relay = null;
    };
    /*============================================================================*/
    /* Private Static Properties                                                  */
    /*============================================================================*/
    LifecycleEventRelay.TYPES = [
        LifecycleEvent_1.LifecycleEvent.STATE_CHANGE,
        LifecycleEvent_1.LifecycleEvent.PRE_INITIALIZE,
        LifecycleEvent_1.LifecycleEvent.INITIALIZE,
        LifecycleEvent_1.LifecycleEvent.POST_INITIALIZE,
        LifecycleEvent_1.LifecycleEvent.PRE_SUSPEND,
        LifecycleEvent_1.LifecycleEvent.SUSPEND,
        LifecycleEvent_1.LifecycleEvent.POST_SUSPEND,
        LifecycleEvent_1.LifecycleEvent.PRE_RESUME,
        LifecycleEvent_1.LifecycleEvent.RESUME,
        LifecycleEvent_1.LifecycleEvent.POST_RESUME,
        LifecycleEvent_1.LifecycleEvent.PRE_DESTROY,
        LifecycleEvent_1.LifecycleEvent.DESTROY,
        LifecycleEvent_1.LifecycleEvent.POST_DESTROY
    ];
    return LifecycleEventRelay;
}());
exports.LifecycleEventRelay = LifecycleEventRelay;
//# sourceMappingURL=LifecycleEventRelay.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/LocalEventMapExtension.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/LocalEventMapExtension.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var IEventMap_1 = __webpack_require__(/*! ./api/IEventMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/api/IEventMap.js");
var EventMap_1 = __webpack_require__(/*! ./impl/EventMap */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/impl/EventMap.js");
/**
 * An Event Map keeps track of listeners and provides the ability
 * to unregister all listeners with a single method call.
 */
var LocalEventMapExtension = /** @class */ (function () {
    function LocalEventMapExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    LocalEventMapExtension.prototype.extend = function (context) {
        context.injector.bind(IEventMap_1.IEventMap).to(EventMap_1.EventMap);
    };
    return LocalEventMapExtension;
}());
exports.LocalEventMapExtension = LocalEventMapExtension;
//# sourceMappingURL=LocalEventMapExtension.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/api/IEventMap.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/api/IEventMap.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Event Map keeps track of listeners and provides the ability
 * to unregister all listeners with a single method call.
 */
exports.IEventMap = Symbol("IEventMap");
//# sourceMappingURL=IEventMap.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/impl/DomEventMapConfig.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/impl/DomEventMapConfig.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var DomEventMapConfig = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function DomEventMapConfig(dispatcher, eventString, listener, options) {
        this._dispatcher = dispatcher;
        this._eventString = eventString;
        this._listener = listener;
        this._options = options;
    }
    Object.defineProperty(DomEventMapConfig.prototype, "dispatcher", {
        /**
         * @private
         */
        get: function () {
            return this._dispatcher;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomEventMapConfig.prototype, "eventString", {
        /**
         * @private
         */
        get: function () {
            return this._eventString;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomEventMapConfig.prototype, "listener", {
        /**
         * @private
         */
        get: function () {
            return this._listener;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomEventMapConfig.prototype, "options", {
        /**
         * @private
         */
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    DomEventMapConfig.prototype.equalTo = function (dispatcher, eventString, listener, options) {
        return (this._dispatcher === dispatcher && this._eventString === eventString && this._listener === listener && this._options === options);
    };
    return DomEventMapConfig;
}());
exports.DomEventMapConfig = DomEventMapConfig;
//# sourceMappingURL=DomEventMapConfig.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/impl/EventMap.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/impl/EventMap.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var Event_1 = __webpack_require__(/*! ../../../events/impl/Event */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/impl/Event.js");
var isInstanceOfType_1 = __webpack_require__(/*! ../../../extensions/matching/isInstanceOfType */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/isInstanceOfType.js");
var DomEventMapConfig_1 = __webpack_require__(/*! ./DomEventMapConfig */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/impl/DomEventMapConfig.js");
var EventMapConfig_1 = __webpack_require__(/*! ./EventMapConfig */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/impl/EventMapConfig.js");
/**
 * @private
 */
var EventMap = /** @class */ (function () {
    function EventMap() {
        /*============================================================================*/
        /* Protected Properties                                                       */
        /*============================================================================*/
        this._listeners = [];
        this._suspendedListeners = [];
        this._domListeners = [];
        this._suspendedDomListeners = [];
        this._suspended = false;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    EventMap.prototype.mapListener = function (dispatcher, eventString, listener, thisObject, eventClass, useCapture, // Not used in browser environment
    priority) {
        var _this = this;
        if (useCapture === void 0) { useCapture = false; }
        if (priority === void 0) { priority = 0; }
        eventClass = eventClass === undefined ? Event_1.Event : eventClass;
        var currentListeners = this._suspended ? this._suspendedListeners : this._listeners;
        var config;
        var i = currentListeners.length;
        while (i--) {
            config = currentListeners[i];
            if (config.equalTo(dispatcher, eventString, listener, thisObject, eventClass, useCapture)) {
                return;
            }
        }
        var callback = eventClass === Event_1.Event
            ? listener
            : function (event) {
                _this.routeEventToListener(event, listener, eventClass);
            };
        config = new EventMapConfig_1.EventMapConfig(dispatcher, eventString, listener, thisObject, eventClass, callback, useCapture, priority);
        currentListeners.push(config);
        if (!this._suspended) {
            dispatcher.addEventListener(eventString, callback, thisObject, useCapture, priority);
        }
    };
    /**
     * @inheritDoc
     */
    EventMap.prototype.unmapListener = function (dispatcher, eventString, listener, thisObject, eventClass, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        eventClass = eventClass !== undefined ? eventClass : Event_1.Event;
        var currentListeners = this._suspended ? this._suspendedListeners : this._listeners;
        var i = currentListeners.length;
        while (i--) {
            var config = currentListeners[i];
            if (config.equalTo(dispatcher, eventString, listener, thisObject, eventClass, useCapture)) {
                if (!this._suspended) {
                    dispatcher.removeEventListener(eventString, config.callback, thisObject, useCapture);
                }
                currentListeners.splice(i, 1);
                return;
            }
        }
    };
    /**
     * @inheritDoc
     */
    EventMap.prototype.unmapListeners = function () {
        var currentListeners = this._suspended ? this._suspendedListeners : this._listeners;
        var eventConfig;
        var dispatcher;
        while (currentListeners.length) {
            eventConfig = currentListeners.pop();
            if (!this._suspended) {
                dispatcher = eventConfig.dispatcher;
                dispatcher.removeEventListener(eventConfig.eventString, eventConfig.callback, eventConfig.thisObject, eventConfig.useCapture);
            }
        }
    };
    /**
     * @inheritDoc
     */
    EventMap.prototype.mapDomListener = function (dispatcher, eventString, listener, options) {
        var currentDomListeners = this._suspended ? this._suspendedDomListeners : this._domListeners;
        var domConfig;
        var i = currentDomListeners.length;
        while (i--) {
            domConfig = currentDomListeners[i];
            if (domConfig.equalTo(dispatcher, eventString, listener, options)) {
                return;
            }
        }
        domConfig = new DomEventMapConfig_1.DomEventMapConfig(dispatcher, eventString, listener, options);
        currentDomListeners.push(domConfig);
        if (!this._suspended) {
            dispatcher.addEventListener(eventString, listener, options);
        }
    };
    /**
     * @inheritDoc
     */
    EventMap.prototype.unmapDomListener = function (dispatcher, eventString, listener, options) {
        var currentDomListeners = this._suspended ? this._suspendedDomListeners : this._domListeners;
        var i = currentDomListeners.length;
        while (i--) {
            var config = currentDomListeners[i];
            if (config.equalTo(dispatcher, eventString, listener, options)) {
                if (!this._suspended) {
                    dispatcher.removeEventListener(eventString, listener, options);
                }
                currentDomListeners.splice(i, 1);
                return;
            }
        }
    };
    /**
     * @inheritDoc
     */
    EventMap.prototype.unmapDomListeners = function () {
        var currentDomListeners = this._suspended ? this._suspendedDomListeners : this._domListeners;
        var domEventConfig;
        var dispatcher;
        while (currentDomListeners.length) {
            domEventConfig = currentDomListeners.pop();
            if (!this._suspended) {
                dispatcher = domEventConfig.dispatcher;
                dispatcher.removeEventListener(domEventConfig.eventString, domEventConfig.listener, domEventConfig.options);
            }
        }
    };
    /**
     * @inheritDoc
     */
    EventMap.prototype.unmapAllListeners = function () {
        this.unmapListeners();
        this.unmapDomListeners();
    };
    /**
     * @inheritDoc
     */
    EventMap.prototype.suspend = function () {
        var _this = this;
        if (this._suspended) {
            return;
        }
        this._suspended = true;
        // Handle EventDispatcher's
        var dispatcher;
        this._listeners.forEach(function (eventConfig) {
            dispatcher = eventConfig.dispatcher;
            dispatcher.removeEventListener(eventConfig.eventString, eventConfig.callback, eventConfig.thisObject, eventConfig.useCapture);
            _this._suspendedListeners.push(eventConfig);
        });
        this._listeners = [];
        // Handle EventTarget's (DOM)
        var domDispatcher;
        this._domListeners.forEach(function (domEventConfig) {
            domDispatcher = domEventConfig.dispatcher;
            domDispatcher.removeEventListener(domEventConfig.eventString, domEventConfig.listener, domEventConfig.options);
            _this._suspendedDomListeners.push(domEventConfig);
        });
        this._domListeners = [];
    };
    /**
     * @inheritDoc
     */
    EventMap.prototype.resume = function () {
        var _this = this;
        if (!this._suspended) {
            return;
        }
        this._suspended = false;
        // Handle EventDispatcher's
        var dispatcher;
        this._suspendedListeners.forEach(function (eventConfig) {
            dispatcher = eventConfig.dispatcher;
            dispatcher.addEventListener(eventConfig.eventString, eventConfig.callback, eventConfig.thisObject, eventConfig.useCapture, eventConfig.priority);
            _this._listeners.push(eventConfig);
        });
        this._suspendedListeners = [];
        // Handle EventTarget's (DOM)
        var domDispatcher;
        this._suspendedDomListeners.forEach(function (domEventConfig) {
            domDispatcher = domEventConfig.dispatcher;
            domDispatcher.addEventListener(domEventConfig.eventString, domEventConfig.listener, domEventConfig.options);
            _this._domListeners.push(domEventConfig);
        });
        this._suspendedDomListeners = [];
    };
    /*============================================================================*/
    /* Protected Functions                                                        */
    /*============================================================================*/
    /**
     * Event Handler
     *
     * @param event The <code>Event</code>
     * @param listener
     * @param originalEventClass
     */
    EventMap.prototype.routeEventToListener = function (event, listener, originalEventClass) {
        if (isInstanceOfType_1.isInstanceOfType(event, originalEventClass)) {
            listener(event);
        }
    };
    EventMap = tslib_1.__decorate([
        inversify_1.injectable()
    ], EventMap);
    return EventMap;
}());
exports.EventMap = EventMap;
//# sourceMappingURL=EventMap.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/impl/EventMapConfig.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/localEventMap/impl/EventMapConfig.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var EventMapConfig = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function EventMapConfig(dispatcher, eventString, listener, thisObject, eventClass, callback, useCapture, priority) {
        this._dispatcher = dispatcher;
        this._eventString = eventString;
        this._listener = listener;
        this._thisObject = thisObject;
        this._eventClass = eventClass;
        this._callback = callback;
        this._useCapture = useCapture;
        this._priority = priority;
    }
    Object.defineProperty(EventMapConfig.prototype, "dispatcher", {
        /**
         * @private
         */
        get: function () {
            return this._dispatcher;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMapConfig.prototype, "eventString", {
        /**
         * @private
         */
        get: function () {
            return this._eventString;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMapConfig.prototype, "listener", {
        /**
         * @private
         */
        get: function () {
            return this._listener;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMapConfig.prototype, "thisObject", {
        /**
         * @private
         */
        get: function () {
            return this._thisObject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMapConfig.prototype, "eventClass", {
        /**
         * @private
         */
        get: function () {
            return this._eventClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMapConfig.prototype, "callback", {
        /**
         * @private
         */
        get: function () {
            return this._callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMapConfig.prototype, "useCapture", {
        /**
         * @private
         */
        get: function () {
            return this._useCapture;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventMapConfig.prototype, "priority", {
        /**
         * @private
         */
        get: function () {
            return this._priority;
        },
        enumerable: true,
        configurable: true
    });
    EventMapConfig.prototype.equalTo = function (dispatcher, eventString, listener, thisObject, eventClass, useCapture) {
        return (this._eventString === eventString &&
            this._eventClass === eventClass &&
            this._thisObject === thisObject &&
            this._dispatcher === dispatcher &&
            this._listener === listener &&
            this._useCapture === useCapture);
    };
    return EventMapConfig;
}());
exports.EventMapConfig = EventMapConfig;
//# sourceMappingURL=EventMapConfig.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/TypeFilter.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/TypeFilter.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var getQualifiedClassName_1 = __webpack_require__(/*! ../../framework/impl/getQualifiedClassName */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/getQualifiedClassName.js");
var isInstanceOfType_1 = __webpack_require__(/*! ./isInstanceOfType */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/isInstanceOfType.js");
/**
 * @private
 */
var TypeFilter = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function TypeFilter(allOf, anyOf, noneOf) {
        if (!allOf || !anyOf || !noneOf) {
            throw Error("TypeFilter parameters can not be null");
        }
        this._allOfTypes = allOf;
        this._anyOfTypes = anyOf;
        this._noneOfTypes = noneOf;
    }
    Object.defineProperty(TypeFilter.prototype, "allOfTypes", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._allOfTypes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeFilter.prototype, "anyOfTypes", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._anyOfTypes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeFilter.prototype, "noneOfTypes", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._noneOfTypes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeFilter.prototype, "descriptor", {
        /**
         * @inheritDoc
         */
        get: function () {
            return (this._descriptor = this._descriptor || this.createDescriptor());
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    TypeFilter.prototype.matches = function (item) {
        var i = this._allOfTypes.length;
        while (i--) {
            if (!isInstanceOfType_1.isInstanceOfType(item, this._allOfTypes[i])) {
                return false;
            }
        }
        i = this._noneOfTypes.length;
        while (i--) {
            if (isInstanceOfType_1.isInstanceOfType(item, this._noneOfTypes[i])) {
                return false;
            }
        }
        if (this._anyOfTypes.length === 0 && (this._allOfTypes.length > 0 || this._noneOfTypes.length > 0)) {
            return true;
        }
        i = this._anyOfTypes.length;
        while (i--) {
            if (isInstanceOfType_1.isInstanceOfType(item, this._anyOfTypes[i])) {
                return true;
            }
        }
        return false;
    };
    /*============================================================================*/
    /* Protected Functions                                                        */
    /*============================================================================*/
    TypeFilter.prototype.alphabetiseCaseInsensitiveFCQNs = function (classes) {
        var fqcn;
        var allFCQNs = [];
        var iLength = classes.length;
        for (var i = 0; i < iLength; i++) {
            fqcn = getQualifiedClassName_1.getQualifiedClassName(classes[i]);
            allFCQNs[allFCQNs.length] = fqcn;
        }
        return allFCQNs.sort(this.stringSort);
    };
    TypeFilter.prototype.createDescriptor = function () {
        var allOf_FCQNs = this.alphabetiseCaseInsensitiveFCQNs(this.allOfTypes);
        var anyOf_FCQNs = this.alphabetiseCaseInsensitiveFCQNs(this.anyOfTypes);
        var noneOf_FQCNs = this.alphabetiseCaseInsensitiveFCQNs(this.noneOfTypes);
        var description = [];
        if (allOf_FCQNs.length) {
            description.push("all of: " + allOf_FCQNs.toString());
        }
        if (anyOf_FCQNs.length) {
            description.push("any of: " + anyOf_FCQNs.toString());
        }
        if (noneOf_FQCNs.length) {
            description.push("none of: " + noneOf_FQCNs.toString());
        }
        return description.join("; ");
    };
    TypeFilter.prototype.stringSort = function (item1, item2) {
        var result = 0;
        // ignore upper and lowercase
        item1 = item1.toUpperCase();
        item2 = item2.toUpperCase();
        if (item1 < item2) {
            result = -1;
        }
        else if (item1 > item2) {
            result = 1;
        }
        return result;
    };
    return TypeFilter;
}());
exports.TypeFilter = TypeFilter;
//# sourceMappingURL=TypeFilter.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/TypeMatcher.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/TypeMatcher.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var TypeFilter_1 = __webpack_require__(/*! ./TypeFilter */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/TypeFilter.js");
var TypeMatcherError_1 = __webpack_require__(/*! ./TypeMatcherError */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/TypeMatcherError.js");
/**
 * A Type Matcher matches objects that satisfy type matching rules
 */
var TypeMatcher = /** @class */ (function () {
    function TypeMatcher() {
        /*============================================================================*/
        /* Protected Properties                                                       */
        /*============================================================================*/
        this._allOfTypes = [];
        this._anyOfTypes = [];
        this._noneOfTypes = [];
        this._typeFilter = null;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * All types that an item must extend or implement
     */
    TypeMatcher.prototype.allOf = function (type) {
        var types = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            types[_i - 1] = arguments[_i];
        }
        if (type instanceof Array) {
            this.pushAddedTypesTo(type.concat(types), this._allOfTypes);
        }
        else {
            this.pushAddedTypesTo([type].concat(types), this._allOfTypes);
        }
        return this;
    };
    /**
     * Any types that an item must extend or implement
     */
    TypeMatcher.prototype.anyOf = function (type) {
        var types = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            types[_i - 1] = arguments[_i];
        }
        if (type instanceof Array) {
            this.pushAddedTypesTo(type.concat(types), this._anyOfTypes);
        }
        else {
            this.pushAddedTypesTo([type].concat(types), this._anyOfTypes);
        }
        return this;
    };
    /**
     * Types that an item must not extend or implement
     */
    TypeMatcher.prototype.noneOf = function (type) {
        var types = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            types[_i - 1] = arguments[_i];
        }
        if (type instanceof Array) {
            this.pushAddedTypesTo(type.concat(types), this._noneOfTypes);
        }
        else {
            this.pushAddedTypesTo([type].concat(types), this._noneOfTypes);
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    TypeMatcher.prototype.createTypeFilter = function () {
        // calling this seals the matcher
        return (this._typeFilter = this._typeFilter || this.buildTypeFilter());
    };
    /**
     * Locks this type matcher
     * @return
     */
    TypeMatcher.prototype.lock = function () {
        this.createTypeFilter();
        return this;
    };
    /**
     * @inheritDoc
     */
    TypeMatcher.prototype.clone = function () {
        return new TypeMatcher()
            .allOf(this._allOfTypes)
            .anyOf(this._anyOfTypes)
            .noneOf(this._noneOfTypes);
    };
    /*============================================================================*/
    /* Protected Functions                                                        */
    /*============================================================================*/
    TypeMatcher.prototype.buildTypeFilter = function () {
        if (this._allOfTypes.length === 0 && this._anyOfTypes.length === 0 && this._noneOfTypes.length === 0) {
            throw new TypeMatcherError_1.TypeMatcherError(TypeMatcherError_1.TypeMatcherError.EMPTY_MATCHER);
        }
        return new TypeFilter_1.TypeFilter(this._allOfTypes, this._anyOfTypes, this._noneOfTypes);
    };
    TypeMatcher.prototype.pushAddedTypesTo = function (types, targetSet) {
        if (this._typeFilter) {
            this.throwSealedMatcherError();
        }
        this.pushValuesToTargetSet(types, targetSet);
    };
    TypeMatcher.prototype.throwSealedMatcherError = function () {
        throw new TypeMatcherError_1.TypeMatcherError(TypeMatcherError_1.TypeMatcherError.SEALED_MATCHER);
    };
    TypeMatcher.prototype.pushValuesToTargetSet = function (values, targetSet) {
        values.forEach(function (type) {
            targetSet.push(type);
        });
    };
    return TypeMatcher;
}());
exports.TypeMatcher = TypeMatcher;
//# sourceMappingURL=TypeMatcher.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/TypeMatcherError.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/TypeMatcherError.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * Type Matcher Error
 */
var TypeMatcherError = /** @class */ (function (_super) {
    tslib_1.__extends(TypeMatcherError, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a Type Matcher Error
     * @param message The error message
     */
    function TypeMatcherError(message) {
        return _super.call(this, message) || this;
    }
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    TypeMatcherError.EMPTY_MATCHER = "An empty matcher will create a filter which matches nothing. " + "You should specify at least one condition for the filter.";
    TypeMatcherError.SEALED_MATCHER = "This matcher has been sealed and can no longer be configured.";
    return TypeMatcherError;
}(Error));
exports.TypeMatcherError = TypeMatcherError;
//# sourceMappingURL=TypeMatcherError.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/instanceOfType.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/instanceOfType.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var isInstanceOfType_1 = __webpack_require__(/*! ./isInstanceOfType */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/isInstanceOfType.js");
/*============================================================================*/
/* Public Functions                                                           */
/*============================================================================*/
/**
 * @private
 */
var InstanceOfTypeMatcher = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function InstanceOfTypeMatcher(type) {
        this._type = type;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * Verify if the given item is a instance of this type.
     *
     * @param { any } item The item to test
     * @return { boolean } <code>true</code> if the item is a instance of the type,
     * <code>false</code> otherwise.
     */
    InstanceOfTypeMatcher.prototype.matches = function (item) {
        return isInstanceOfType_1.isInstanceOfType(item, this._type);
    };
    return InstanceOfTypeMatcher;
}());
/**
 * Creates a matcher that matches objects of the given type
 * @param type The type to match
 * @return A matcher
 */
function instanceOfType(type) {
    return new InstanceOfTypeMatcher(type);
}
exports.instanceOfType = instanceOfType;
//# sourceMappingURL=instanceOfType.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/isInstanceOfType.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/extensions/matching/isInstanceOfType.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/*============================================================================*/
/* Public Functions                                                           */
/*============================================================================*/
/**
 * Verify if a given item is a instance of a given type.
 *
 * Matches primitive types using constructor.
 * Matches all other types using instanceof operator.
 *
 * According to TypeScript specification:
 *
 * 4.19.4 The instanceof operator
 *
 * The instanceof operator requires the left operand to be of type Any,
 * an object type, or a type parameter type, and the right operand
 * to be of type Any or a subtype of the 'Function' interface type.
 *
 * The result is always of the boolean primitive type.
 *
 * @param { any } item The item to test
 * @param { IType<T> } type The type to match to
 * @return { boolean } <code>true</code> if the item is a instance of the type,
 * <code>false</code> otherwise.
 *
 * @see {@link https://github.com/Microsoft/TypeScript/blob/v2.6.1/doc/spec.md#4.19.4}
 */
function isInstanceOfType(item, type) {
    return item instanceof type || item.constructor === type;
}
exports.isInstanceOfType = isInstanceOfType;
//# sourceMappingURL=isInstanceOfType.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/IContext.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/IContext.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/*[Event(name="destroy", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="detain", type="robotlegs.bender.framework.api.PinEvent")]*/
/*[Event(name="initialize", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="postDestroy", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="postInitialize", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="postResume", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="postSuspend", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="preDestroy", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="preInitialize", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="preResume", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="preSuspend", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="release", type="robotlegs.bender.framework.api.PinEvent")]*/
/*[Event(name="resume", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="stateChange", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="suspend", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/**
 * The Robotlegs context contract
 */
exports.IContext = Symbol("IContext");
//# sourceMappingURL=IContext.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/IInjector.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/IInjector.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The <code>Injector</code> manages the mappings and acts as the central hub from which all
 * injections are started.
 */
exports.IInjector = Symbol("IInjector");
//# sourceMappingURL=IInjector.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/ILogger.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/ILogger.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Robotlegs logger contract
 */
exports.ILogger = Symbol("ILogger");
//# sourceMappingURL=ILogger.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleError.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleError.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * Lifecycle Error
 */
var LifecycleError = /** @class */ (function (_super) {
    tslib_1.__extends(LifecycleError, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a Lifecycle Error
     * @param message The error message
     */
    function LifecycleError(message) {
        var _this = _super.call(this) || this;
        _this.name = "LifecycleError";
        _this.message = message;
        return _this;
    }
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    LifecycleError.SYNC_HANDLER_ARG_MISMATCH = "When and After handlers must accept 0 or 1 arguments";
    LifecycleError.LATE_HANDLER_ERROR_MESSAGE = "Handler added late and will never fire";
    return LifecycleError;
}(Error));
exports.LifecycleError = LifecycleError;
//# sourceMappingURL=LifecycleError.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleEvent.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleEvent.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Robotlegs object lifecycle event
 */
var LifecycleEvent = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a Lifecycle Event
     * @param type The event type
     * @param error Optional error
     */
    function LifecycleEvent(type, error) {
        this._type = type;
        this._error = error;
    }
    Object.defineProperty(LifecycleEvent.prototype, "error", {
        /**
         * Associated lifecycle error
         */
        get: function () {
            return this._error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LifecycleEvent.prototype, "type", {
        /**
         * The type of event
         */
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LifecycleEvent.prototype, "target", {
        /**
         * The target of event
         */
        get: function () {
            return this._target;
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    LifecycleEvent.prototype.clone = function () {
        return new LifecycleEvent(this.type, this.error);
    };
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    LifecycleEvent.ERROR = "_error";
    LifecycleEvent.STATE_CHANGE = "stateChange";
    LifecycleEvent.PRE_INITIALIZE = "preInitialize";
    LifecycleEvent.INITIALIZE = "initialize";
    LifecycleEvent.POST_INITIALIZE = "postInitialize";
    LifecycleEvent.PRE_SUSPEND = "preSuspend";
    LifecycleEvent.SUSPEND = "suspend";
    LifecycleEvent.POST_SUSPEND = "postSuspend";
    LifecycleEvent.PRE_RESUME = "preResume";
    LifecycleEvent.RESUME = "resume";
    LifecycleEvent.POST_RESUME = "postResume";
    LifecycleEvent.PRE_DESTROY = "preDestroy";
    LifecycleEvent.DESTROY = "destroy";
    LifecycleEvent.POST_DESTROY = "postDestroy";
    return LifecycleEvent;
}());
exports.LifecycleEvent = LifecycleEvent;
//# sourceMappingURL=LifecycleEvent.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleState.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleState.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Robotlegs object lifecycle state
 */
var LifecycleState = /** @class */ (function () {
    function LifecycleState() {
    }
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    LifecycleState.UNINITIALIZED = "uninitialized";
    LifecycleState.INITIALIZING = "initializing";
    LifecycleState.ACTIVE = "active";
    LifecycleState.SUSPENDING = "suspending";
    LifecycleState.SUSPENDED = "suspended";
    LifecycleState.RESUMING = "resuming";
    LifecycleState.DESTROYING = "destroying";
    LifecycleState.DESTROYED = "destroyed";
    return LifecycleState;
}());
exports.LifecycleState = LifecycleState;
//# sourceMappingURL=LifecycleState.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LogLevel.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LogLevel.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Robotlegs log level
 */
var LogLevel = /** @class */ (function () {
    function LogLevel() {
    }
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    LogLevel.FATAL = 2;
    LogLevel.ERROR = 4;
    LogLevel.WARN = 8;
    LogLevel.INFO = 16;
    LogLevel.DEBUG = 32;
    LogLevel.NAME = [
        0,
        0,
        "FATAL",
        0,
        "ERROR",
        0,
        0,
        0,
        "WARN",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "INFO",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        "DEBUG"
    ]; // 32
    return LogLevel;
}());
exports.LogLevel = LogLevel;
//# sourceMappingURL=LogLevel.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/PinEvent.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/PinEvent.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Event_1 = __webpack_require__(/*! ../../events/impl/Event */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/impl/Event.js");
/**
 * Detain/release pin Event
 */
var PinEvent = /** @class */ (function (_super) {
    tslib_1.__extends(PinEvent, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Create a Pin Event
     * @param type The event type
     * @param instance The associated instance
     */
    function PinEvent(type, instance) {
        var _this = _super.call(this, type) || this;
        _this._instance = instance;
        return _this;
    }
    Object.defineProperty(PinEvent.prototype, "instance", {
        /**
         * The instance being detained or released
         */
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    PinEvent.prototype.clone = function () {
        return new PinEvent(this.type, this._instance);
    };
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    PinEvent.DETAIN = "detain";
    PinEvent.RELEASE = "release";
    return PinEvent;
}(Event_1.Event));
exports.PinEvent = PinEvent;
//# sourceMappingURL=PinEvent.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ClassMatcher.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ClassMatcher.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var ClassMatcher = /** @class */ (function () {
    function ClassMatcher() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    ClassMatcher.prototype.matches = function (item) {
        return typeof item === "function";
    };
    return ClassMatcher;
}());
exports.ClassMatcher = ClassMatcher;
//# sourceMappingURL=ClassMatcher.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ConfigManager.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ConfigManager.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var LifecycleEvent_1 = __webpack_require__(/*! ../api/LifecycleEvent */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleEvent.js");
var ClassMatcher_1 = __webpack_require__(/*! ./ClassMatcher */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ClassMatcher.js");
var ObjectMatcher_1 = __webpack_require__(/*! ./ObjectMatcher */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ObjectMatcher.js");
var ObjectProcessor_1 = __webpack_require__(/*! ./ObjectProcessor */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ObjectProcessor.js");
var instantiateUnmapped_1 = __webpack_require__(/*! ./instantiateUnmapped */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/instantiateUnmapped.js");
/**
 * The config manager handles configuration files and
 * allows the installation of custom configuration handlers.
 *
 * <p>It is pre-configured to handle plain objects and classes</p>
 *
 * @private
 */
var ConfigManager = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function ConfigManager(context) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._objectProcessor = new ObjectProcessor_1.ObjectProcessor();
        this._configs = new Map();
        this._queue = [];
        this._initialized = false;
        this._context = context;
        this._injector = context.injector;
        this._logger = context.getLogger(this);
        this.addConfigHandler(new ClassMatcher_1.ClassMatcher(), this.handleClass.bind(this));
        this.addConfigHandler(new ObjectMatcher_1.ObjectMatcher(), this.handleObject.bind(this));
        // The ConfigManager should process the config queue
        // at the end of the INITIALIZE phase,
        // but *before* POST_INITIALIZE, so use low event priority
        context.addEventListener(LifecycleEvent_1.LifecycleEvent.INITIALIZE, this.initialize, this, false, -100);
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * Process a given configuration object by running it through registered handlers.
     * <p>If the manager is not initialized the configuration will be queued.</p>
     * @param config The configuration object or class
     */
    ConfigManager.prototype.addConfig = function (config) {
        if (!this._configs.get(config)) {
            this._configs.set(config, true);
            this._objectProcessor.processObject(config);
        }
    };
    /**
     * Adds a custom configuration handlers
     * @param matcher Pattern to match configuration objects
     * @param handler Handler to process matching configurations
     */
    ConfigManager.prototype.addConfigHandler = function (matcher, handler) {
        this._objectProcessor.addObjectHandler(matcher, handler);
    };
    /**
     * Destroy
     */
    ConfigManager.prototype.destroy = function () {
        this._context.removeEventListener(LifecycleEvent_1.LifecycleEvent.INITIALIZE, this.initialize);
        this._objectProcessor.removeAllHandlers();
        this._queue.length = 0;
        this._configs.clear();
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    ConfigManager.prototype.initialize = function (event) {
        if (!this._initialized) {
            this._initialized = true;
            this.processQueue();
        }
    };
    ConfigManager.prototype.handleClass = function (type) {
        if (this._initialized) {
            this._logger.debug("Already initialized. Instantiating config class {0}", [type]);
            this.processClass(type);
        }
        else {
            this._logger.debug("Not yet initialized. Queuing config class {0}", [type]);
            this._queue.push(type);
        }
    };
    ConfigManager.prototype.handleObject = function (object) {
        if (this._initialized) {
            this._logger.debug("Already initialized. Injecting into config object {0}", [object]);
            this.processObject(object);
        }
        else {
            this._logger.debug("Not yet initialized. Queuing config object {0}", [object]);
            this._queue.push(object);
        }
    };
    ConfigManager.prototype.processQueue = function () {
        for (var i in this._queue) {
            if (this._queue.hasOwnProperty(i)) {
                var config = this._queue[i];
                if (typeof config === "function") {
                    // instanceof Class
                    this._logger.debug("Now initializing. Instantiating config class {0}", [config]);
                    this.processClass(config);
                }
                else {
                    this._logger.debug("Now initializing. Injecting into config object {0}", [config]);
                    this.processObject(config);
                }
            }
        }
        this._queue.length = 0;
    };
    ConfigManager.prototype.processClass = function (type) {
        var config = instantiateUnmapped_1.instantiateUnmapped(this._injector, type);
        if (config) {
            config.configure();
        }
    };
    ConfigManager.prototype.processObject = function (object) {
        var config = object;
        if (config && config.configure) {
            config.configure();
        }
    };
    return ConfigManager;
}());
exports.ConfigManager = ConfigManager;
//# sourceMappingURL=ConfigManager.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Context.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Context.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var IContext_1 = __webpack_require__(/*! ../api/IContext */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/IContext.js");
var IInjector_1 = __webpack_require__(/*! ../api/IInjector */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/IInjector.js");
var LifecycleEvent_1 = __webpack_require__(/*! ../api/LifecycleEvent */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleEvent.js");
var ConfigManager_1 = __webpack_require__(/*! ./ConfigManager */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ConfigManager.js");
var ExtensionInstaller_1 = __webpack_require__(/*! ./ExtensionInstaller */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ExtensionInstaller.js");
var Lifecycle_1 = __webpack_require__(/*! ./Lifecycle */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Lifecycle.js");
var LogManager_1 = __webpack_require__(/*! ./LogManager */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/LogManager.js");
var Pin_1 = __webpack_require__(/*! ./Pin */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Pin.js");
var RobotlegsInjector_1 = __webpack_require__(/*! ./RobotlegsInjector */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/RobotlegsInjector.js");
var UID_1 = __webpack_require__(/*! ./UID */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/UID.js");
var EventDispatcher_1 = __webpack_require__(/*! ../../events/impl/EventDispatcher */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/events/impl/EventDispatcher.js");
/*[Event(name="destroy", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="detain", type="robotlegs.bender.framework.api.PinEvent")]*/
/*[Event(name="initialize", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="postDestroy", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="postInitialize", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="postResume", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="postSuspend", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="preDestroy", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="preInitialize", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="preResume", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="preSuspend", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="release", type="robotlegs.bender.framework.api.PinEvent")]*/
/*[Event(name="resume", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="stateChange", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="suspend", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/**
 * The core Robotlegs Context implementation
 */
var Context = /** @class */ (function (_super) {
    tslib_1.__extends(Context, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a new Context
     */
    function Context() {
        var _this = _super.call(this) || this;
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        _this._uid = UID_1.UID.create(Context_1);
        _this._children = [];
        _this.setup();
        return _this;
    }
    Context_1 = Context;
    Object.defineProperty(Context.prototype, "injector", {
        /*============================================================================*/
        /* Public Properties                                                          */
        /*============================================================================*/
        /**
         * @inheritDoc
         */
        get: function () {
            return this._injector;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "logLevel", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._logManager.logLevel;
        },
        /**
         * @inheritDoc
         */
        set: function (value) {
            this._logManager.logLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "state", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._lifecycle.state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "uninitialized", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._lifecycle.uninitialized;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "initialized", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._lifecycle.initialized;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "active", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._lifecycle.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "suspended", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._lifecycle.suspended;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "destroyed", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._lifecycle.destroyed;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    Context.prototype.initialize = function (callback) {
        this._lifecycle.initialize(callback);
    };
    /**
     * @inheritDoc
     */
    Context.prototype.suspend = function (callback) {
        this._lifecycle.suspend(callback);
    };
    /**
     * @inheritDoc
     */
    Context.prototype.resume = function (callback) {
        this._lifecycle.resume(callback);
    };
    /**
     * @inheritDoc
     */
    Context.prototype.destroy = function (callback) {
        this._lifecycle.destroy(callback);
    };
    /**
     * @inheritDoc
     */
    Context.prototype.beforeInitializing = function (handler) {
        this._lifecycle.beforeInitializing(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.whenInitializing = function (handler) {
        this._lifecycle.whenInitializing(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.afterInitializing = function (handler) {
        this._lifecycle.afterInitializing(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.beforeSuspending = function (handler) {
        this._lifecycle.beforeSuspending(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.whenSuspending = function (handler) {
        this._lifecycle.whenSuspending(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.afterSuspending = function (handler) {
        this._lifecycle.afterSuspending(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.beforeResuming = function (handler) {
        this._lifecycle.beforeResuming(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.whenResuming = function (handler) {
        this._lifecycle.whenResuming(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.afterResuming = function (handler) {
        this._lifecycle.afterResuming(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.beforeDestroying = function (handler) {
        this._lifecycle.beforeDestroying(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.whenDestroying = function (handler) {
        this._lifecycle.whenDestroying(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.afterDestroying = function (handler) {
        this._lifecycle.afterDestroying(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.install = function () {
        var _this = this;
        var extensions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            extensions[_i] = arguments[_i];
        }
        extensions.forEach(function (extension) {
            _this._extensionInstaller.install(extension);
        });
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.configure = function () {
        var _this = this;
        var configs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            configs[_i] = arguments[_i];
        }
        configs.forEach(function (config) {
            _this._configManager.addConfig(config);
        });
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.addChild = function (child) {
        if (this._children.indexOf(child) === -1) {
            this._logger.debug("Adding child context {0}", [child]);
            if (!child.uninitialized) {
                this._logger.warn("Child context {0} must be uninitialized", [child]);
            }
            if (child.injector.parent) {
                this._logger.warn("Child context {0} must not have a parent Injector", [child]);
            }
            this._children.push(child);
            child.injector.parent = this.injector;
            child.addEventListener(LifecycleEvent_1.LifecycleEvent.POST_DESTROY, this.onChildDestroy, this);
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.removeChild = function (child) {
        var childIndex = this._children.indexOf(child);
        if (childIndex > -1) {
            this._logger.debug("Removing child context {0}", [child]);
            this._children.splice(childIndex, 1);
            child.injector.parent = null;
            child.removeEventListener(LifecycleEvent_1.LifecycleEvent.POST_DESTROY, this.onChildDestroy, this);
        }
        else {
            this._logger.warn("Child context {0} must be a child of {1}", [child, this]);
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.addConfigHandler = function (matcher, handler) {
        this._configManager.addConfigHandler(matcher, handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.getLogger = function (source) {
        return this._logManager.getLogger(source);
    };
    /**
     * @inheritDoc
     */
    Context.prototype.addLogTarget = function (target) {
        this._logManager.addLogTarget(target);
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.detain = function () {
        var _this = this;
        var instances = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            instances[_i] = arguments[_i];
        }
        instances.forEach(function (instance) {
            _this._pin.detain(instance);
        });
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.release = function () {
        var _this = this;
        var instances = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            instances[_i] = arguments[_i];
        }
        instances.forEach(function (instance) {
            _this._pin.release(instance);
        });
        return this;
    };
    /**
     * @inheritDoc
     */
    Context.prototype.toString = function () {
        return this._uid;
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    /**
     * Configures mandatory context dependencies
     */
    Context.prototype.setup = function () {
        this._logManager = new LogManager_1.LogManager();
        this._injector = new RobotlegsInjector_1.RobotlegsInjector();
        this._injector.bind(IInjector_1.IInjector).toConstantValue(this._injector);
        this._injector.bind(IContext_1.IContext).toConstantValue(this);
        this._logger = this._logManager.getLogger(this);
        this._pin = new Pin_1.Pin(this);
        this._lifecycle = new Lifecycle_1.Lifecycle(this);
        this._configManager = new ConfigManager_1.ConfigManager(this);
        this._extensionInstaller = new ExtensionInstaller_1.ExtensionInstaller(this);
        this.beforeInitializing(this.beforeInitializingCallback.bind(this));
        this.afterInitializing(this.afterInitializingCallback.bind(this));
        this.beforeDestroying(this.beforeDestroyingCallback.bind(this));
        this.afterDestroying(this.afterDestroyingCallback.bind(this));
    };
    Context.prototype.beforeInitializingCallback = function () {
        this._logger.debug("Initializing...");
    };
    Context.prototype.afterInitializingCallback = function () {
        this._logger.debug("Initialize complete");
    };
    Context.prototype.beforeDestroyingCallback = function () {
        this._logger.debug("Destroying...");
    };
    Context.prototype.afterDestroyingCallback = function () {
        this._extensionInstaller.destroy();
        this._configManager.destroy();
        this._pin.releaseAll();
        this._injector.unbindAll();
        this.removeChildren();
        this._logger.debug("Destroy complete");
        this._logManager.removeAllTargets();
    };
    Context.prototype.onChildDestroy = function (event) {
        this.removeChild(event.target);
    };
    Context.prototype.removeChildren = function () {
        while (this._children.length > 0) {
            this.removeChild(this._children[this._children.length - 1]);
        }
    };
    var Context_1;
    Context = Context_1 = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], Context);
    return Context;
}(EventDispatcher_1.EventDispatcher));
exports.Context = Context;
//# sourceMappingURL=Context.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ExtensionInstaller.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ExtensionInstaller.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Installs custom extensions into a given context
 *
 * @private
 */
var ExtensionInstaller = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function ExtensionInstaller(context) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._classes = new Map();
        this._context = context;
        this._logger = this._context.getLogger(this);
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * Installs the supplied extension
     * @param extension An object or class implementing IExtension
     */
    ExtensionInstaller.prototype.install = function (extension) {
        if (typeof extension === "function" && extension.prototype.extend !== undefined) {
            if (!this._classes.get(extension)) {
                this.install(new extension());
            }
        }
        else {
            var extensionClass = extension.constructor;
            if (!this._classes.get(extensionClass)) {
                this._logger.debug("Installing extension {0}", [extension]);
                this._classes.set(extensionClass, true);
                extension.extend(this._context);
            }
        }
    };
    /**
     * Destroy
     */
    ExtensionInstaller.prototype.destroy = function () {
        this._classes.clear();
    };
    return ExtensionInstaller;
}());
exports.ExtensionInstaller = ExtensionInstaller;
//# sourceMappingURL=ExtensionInstaller.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Lifecycle.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Lifecycle.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var LifecycleError_1 = __webpack_require__(/*! ../api/LifecycleError */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleError.js");
var LifecycleEvent_1 = __webpack_require__(/*! ../api/LifecycleEvent */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleEvent.js");
var LifecycleState_1 = __webpack_require__(/*! ../api/LifecycleState */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleState.js");
var LifecycleTransition_1 = __webpack_require__(/*! ./LifecycleTransition */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/LifecycleTransition.js");
/*[Event(name="destroy", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="error", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="initialize", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="postDestroy", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="postInitialize", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="postResume", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="postSuspend", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="preDestroy", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="preInitialize", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="preResume", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="preSuspend", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="resume", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="stateChange", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/*[Event(name="suspend", type="robotlegs.bender.framework.api.LifecycleEvent")]*/
/**
 * Default object lifecycle
 *
 * @private
 */
var Lifecycle = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a lifecycle for a given target object
     * @param target The target object
     */
    function Lifecycle(target) {
        /*============================================================================*/
        /* Public Properties                                                          */
        /*============================================================================*/
        this._state = LifecycleState_1.LifecycleState.UNINITIALIZED;
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._reversedEventTypes = new Map();
        this._reversePriority = 0;
        this._target = target;
        this._dispatcher = target; // || new EventDispatcher(this);
        this.configureTransitions();
    }
    Object.defineProperty(Lifecycle.prototype, "state", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lifecycle.prototype, "target", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lifecycle.prototype, "uninitialized", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._state === LifecycleState_1.LifecycleState.UNINITIALIZED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lifecycle.prototype, "initialized", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._state !== LifecycleState_1.LifecycleState.UNINITIALIZED && this._state !== LifecycleState_1.LifecycleState.INITIALIZING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lifecycle.prototype, "active", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._state === LifecycleState_1.LifecycleState.ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lifecycle.prototype, "suspended", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._state === LifecycleState_1.LifecycleState.SUSPENDED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lifecycle.prototype, "destroyed", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._state === LifecycleState_1.LifecycleState.DESTROYED;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.initialize = function (callback) {
        this._initialize.enter(callback);
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.suspend = function (callback) {
        this._suspend.enter(callback);
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.resume = function (callback) {
        this._resume.enter(callback);
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.destroy = function (callback) {
        this._destroy.enter(callback);
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.beforeInitializing = function (handler) {
        if (!this.uninitialized) {
            this.reportError(LifecycleError_1.LifecycleError.LATE_HANDLER_ERROR_MESSAGE);
        }
        this._initialize.addBeforeHandler(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.whenInitializing = function (handler) {
        if (this.initialized) {
            this.reportError(LifecycleError_1.LifecycleError.LATE_HANDLER_ERROR_MESSAGE);
        }
        this.addEventListener(LifecycleEvent_1.LifecycleEvent.INITIALIZE, this.createSyncLifecycleListener(handler, true));
        return this;
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.afterInitializing = function (handler) {
        if (this.initialized) {
            this.reportError(LifecycleError_1.LifecycleError.LATE_HANDLER_ERROR_MESSAGE);
        }
        this.addEventListener(LifecycleEvent_1.LifecycleEvent.POST_INITIALIZE, this.createSyncLifecycleListener(handler, true));
        return this;
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.beforeSuspending = function (handler) {
        this._suspend.addBeforeHandler(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.whenSuspending = function (handler) {
        this.addEventListener(LifecycleEvent_1.LifecycleEvent.SUSPEND, this.createSyncLifecycleListener(handler));
        return this;
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.afterSuspending = function (handler) {
        this.addEventListener(LifecycleEvent_1.LifecycleEvent.POST_SUSPEND, this.createSyncLifecycleListener(handler));
        return this;
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.beforeResuming = function (handler) {
        this._resume.addBeforeHandler(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.whenResuming = function (handler) {
        this.addEventListener(LifecycleEvent_1.LifecycleEvent.RESUME, this.createSyncLifecycleListener(handler));
        return this;
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.afterResuming = function (handler) {
        this.addEventListener(LifecycleEvent_1.LifecycleEvent.POST_RESUME, this.createSyncLifecycleListener(handler));
        return this;
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.beforeDestroying = function (handler) {
        this._destroy.addBeforeHandler(handler);
        return this;
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.whenDestroying = function (handler) {
        this.addEventListener(LifecycleEvent_1.LifecycleEvent.DESTROY, this.createSyncLifecycleListener(handler, true));
        return this;
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.afterDestroying = function (handler) {
        this.addEventListener(LifecycleEvent_1.LifecycleEvent.POST_DESTROY, this.createSyncLifecycleListener(handler, true));
        return this;
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.addEventListener = function (type, listener, useCapture, priority, useWeakReference) {
        if (useCapture === void 0) { useCapture = false; }
        if (priority === void 0) { priority = 0; }
        if (useWeakReference === void 0) { useWeakReference = false; }
        priority = this.flipPriority(type, priority);
        // this._dispatcher.addEventListener(type, listener, useCapture, priority, useWeakReference);
        this._dispatcher.addEventListener(type, listener, undefined, useCapture, priority);
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.removeEventListener = function (type, listener, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        this._dispatcher.removeEventListener(type, listener);
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.dispatchEvent = function (event) {
        return this._dispatcher.dispatchEvent(event);
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.hasEventListener = function (type) {
        return this._dispatcher.hasEventListener(type);
    };
    /**
     * @inheritDoc
     */
    Lifecycle.prototype.willTrigger = function (type) {
        return this._dispatcher.willTrigger(type);
    };
    /*============================================================================*/
    /* Internal Functions                                                         */
    /*============================================================================*/
    Lifecycle.prototype.setCurrentState = function (state) {
        if (this._state !== state) {
            this._state = state;
            this.dispatchEvent(new LifecycleEvent_1.LifecycleEvent(LifecycleEvent_1.LifecycleEvent.STATE_CHANGE));
        }
    };
    Lifecycle.prototype.addReversedEventTypes = function () {
        var _this = this;
        var types = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            types[_i] = arguments[_i];
        }
        types.forEach(function (type) {
            _this._reversedEventTypes.set(type, true);
        });
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    Lifecycle.prototype.configureTransitions = function () {
        this._initialize = new LifecycleTransition_1.LifecycleTransition(LifecycleEvent_1.LifecycleEvent.PRE_INITIALIZE, this)
            .fromStates(LifecycleState_1.LifecycleState.UNINITIALIZED)
            .toStates(LifecycleState_1.LifecycleState.INITIALIZING, LifecycleState_1.LifecycleState.ACTIVE)
            .withEvents(LifecycleEvent_1.LifecycleEvent.PRE_INITIALIZE, LifecycleEvent_1.LifecycleEvent.INITIALIZE, LifecycleEvent_1.LifecycleEvent.POST_INITIALIZE);
        this._suspend = new LifecycleTransition_1.LifecycleTransition(LifecycleEvent_1.LifecycleEvent.PRE_SUSPEND, this)
            .fromStates(LifecycleState_1.LifecycleState.ACTIVE)
            .toStates(LifecycleState_1.LifecycleState.SUSPENDING, LifecycleState_1.LifecycleState.SUSPENDED)
            .withEvents(LifecycleEvent_1.LifecycleEvent.PRE_SUSPEND, LifecycleEvent_1.LifecycleEvent.SUSPEND, LifecycleEvent_1.LifecycleEvent.POST_SUSPEND)
            .inReverse();
        this._resume = new LifecycleTransition_1.LifecycleTransition(LifecycleEvent_1.LifecycleEvent.PRE_RESUME, this)
            .fromStates(LifecycleState_1.LifecycleState.SUSPENDED)
            .toStates(LifecycleState_1.LifecycleState.RESUMING, LifecycleState_1.LifecycleState.ACTIVE)
            .withEvents(LifecycleEvent_1.LifecycleEvent.PRE_RESUME, LifecycleEvent_1.LifecycleEvent.RESUME, LifecycleEvent_1.LifecycleEvent.POST_RESUME);
        this._destroy = new LifecycleTransition_1.LifecycleTransition(LifecycleEvent_1.LifecycleEvent.PRE_DESTROY, this)
            .fromStates(LifecycleState_1.LifecycleState.SUSPENDED, LifecycleState_1.LifecycleState.ACTIVE)
            .toStates(LifecycleState_1.LifecycleState.DESTROYING, LifecycleState_1.LifecycleState.DESTROYED)
            .withEvents(LifecycleEvent_1.LifecycleEvent.PRE_DESTROY, LifecycleEvent_1.LifecycleEvent.DESTROY, LifecycleEvent_1.LifecycleEvent.POST_DESTROY)
            .inReverse();
    };
    Lifecycle.prototype.flipPriority = function (type, priority) {
        return priority === 0 && this._reversedEventTypes.get(type) ? this._reversePriority++ : priority;
    };
    Lifecycle.prototype.createSyncLifecycleListener = function (handler, once) {
        if (once === void 0) { once = false; }
        // When and After handlers can not be asynchronous
        if (handler.length > 1) {
            throw new LifecycleError_1.LifecycleError(LifecycleError_1.LifecycleError.SYNC_HANDLER_ARG_MISMATCH);
        }
        // A handler that accepts 1 argument is provided with the event type
        if (handler.length === 1) {
            return function (event) {
                if (once) {
                    // (<IEventDispatcher>event.target).removeEventListener(event.type, arguments.callee);
                    event.target.removeEventListener(event.type, handler);
                }
                handler(event.type);
            };
        }
        // Or, just call the handler
        return function (event) {
            if (once) {
                // (<IEventDispatcher>event.target).removeEventListener(event.type, arguments.callee);
                event.target.removeEventListener(event.type, handler);
            }
            handler();
        };
    };
    Lifecycle.prototype.reportError = function (message) {
        var error = new LifecycleError_1.LifecycleError(message);
        if (this.hasEventListener(LifecycleEvent_1.LifecycleEvent.ERROR)) {
            var event_1 = new LifecycleEvent_1.LifecycleEvent(LifecycleEvent_1.LifecycleEvent.ERROR, error);
            this.dispatchEvent(event_1);
        }
        else {
            throw error;
        }
    };
    return Lifecycle;
}());
exports.Lifecycle = Lifecycle;
//# sourceMappingURL=Lifecycle.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/LifecycleTransition.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/LifecycleTransition.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var LifecycleEvent_1 = __webpack_require__(/*! ../api/LifecycleEvent */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LifecycleEvent.js");
var MessageDispatcher_1 = __webpack_require__(/*! ./MessageDispatcher */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/MessageDispatcher.js");
var safelyCallBack_1 = __webpack_require__(/*! ./safelyCallBack */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/safelyCallBack.js");
/**
 * Handles a lifecycle transition
 *
 * @private
 */
var LifecycleTransition = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a lifecycle transition
     * @param name The name of the transition
     * @param lifecycle The associated lifecycle instance
     */
    function LifecycleTransition(name, lifecycle) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._fromStates = [];
        this._dispatcher = new MessageDispatcher_1.MessageDispatcher();
        this._callbacks = [];
        this._reverse = false;
        this._name = name;
        this._lifecycle = lifecycle;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * States that this transition is allowed to enter from
     * @param states Allowed states
     * @return Self
     */
    LifecycleTransition.prototype.fromStates = function () {
        var _this = this;
        var states = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            states[_i] = arguments[_i];
        }
        states.forEach(function (state) {
            _this._fromStates.push(state);
        });
        return this;
    };
    /**
     * The states that this transition applies
     * @param transitionState The state that the target is put into during the transition
     * @param finalState The state that the target is put into after the transition
     * @return
     */
    LifecycleTransition.prototype.toStates = function (transitionState, finalState) {
        this._transitionState = transitionState;
        this._finalState = finalState;
        return this;
    };
    /**
     * The events that the lifecycle will dispatch
     * @param preTransitionEvent
     * @param transitionEvent
     * @param postTransitionEvent
     * @return Self
     */
    LifecycleTransition.prototype.withEvents = function (preTransitionEvent, transitionEvent, postTransitionEvent) {
        this._preTransitionEvent = preTransitionEvent;
        this._transitionEvent = transitionEvent;
        this._postTransitionEvent = postTransitionEvent;
        if (this._reverse) {
            this._lifecycle.addReversedEventTypes(preTransitionEvent, transitionEvent, postTransitionEvent);
        }
        return this;
    };
    /**
     * Reverse the dispatch order of this transition
     * @return Self
     */
    LifecycleTransition.prototype.inReverse = function () {
        this._reverse = true;
        this._lifecycle.addReversedEventTypes(this._preTransitionEvent, this._transitionEvent, this._postTransitionEvent);
        return this;
    };
    /**
     * A handler to run before the transition runs
     * @param handler Possibly asynchronous before handler
     * @return Self
     */
    LifecycleTransition.prototype.addBeforeHandler = function (handler) {
        this._dispatcher.addMessageHandler(this._name, handler);
        return this;
    };
    /**
     * Attempts to enter the transition
     * @param callback Completion callback
     */
    LifecycleTransition.prototype.enter = function (callback) {
        var _this = this;
        // immediately call back if we have already transitioned, and exit
        if (this._lifecycle.state === this._finalState) {
            if (callback) {
                safelyCallBack_1.safelyCallBack(callback, null, this._name);
            }
            return;
        }
        // queue this callback if we are mid transition, and exit
        if (this._lifecycle.state === this._transitionState) {
            if (callback) {
                this._callbacks.push(callback);
            }
            return;
        }
        // report invalid transition, and exit
        if (this.invalidTransition()) {
            this.reportError("Invalid transition", [callback]);
            return;
        }
        // store the initial lifecycle state in case we need to roll back
        var initialState = this._lifecycle.state;
        // queue the first callback
        if (callback) {
            this._callbacks.push(callback);
        }
        // put lifecycle into transition state
        this.setState(this._transitionState);
        // run before handlers
        this._dispatcher.dispatchMessage(this._name, function (error) {
            // revert state, report error, and exit
            if (error) {
                _this.setState(initialState);
                _this.reportError(error, _this._callbacks);
                return;
            }
            // dispatch pre transition and transition events
            _this.dispatch(_this._preTransitionEvent);
            _this.dispatch(_this._transitionEvent);
            // put lifecycle into final state
            _this.setState(_this._finalState);
            // process callback queue (dup and trash for safety)
            var callbacks = _this._callbacks.concat();
            _this._callbacks.length = 0;
            callbacks.forEach(function (callbackChild) {
                safelyCallBack_1.safelyCallBack(callbackChild, null, _this._name);
            });
            // dispatch post transition event
            _this.dispatch(_this._postTransitionEvent);
        }, this._reverse);
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    LifecycleTransition.prototype.invalidTransition = function () {
        return this._fromStates.length > 0 && this._fromStates.indexOf(this._lifecycle.state) === -1;
    };
    LifecycleTransition.prototype.setState = function (state) {
        if (state) {
            this._lifecycle.setCurrentState(state);
        }
    };
    LifecycleTransition.prototype.dispatch = function (type) {
        if (type && this._lifecycle.hasEventListener(type)) {
            this._lifecycle.dispatchEvent(new LifecycleEvent_1.LifecycleEvent(type));
        }
    };
    LifecycleTransition.prototype.reportError = function (message, callbacks) {
        var _this = this;
        // turn message into Error
        var error = message instanceof Error ? message : new Error(message);
        // dispatch error event if a listener exists, or throw
        if (this._lifecycle.hasEventListener(LifecycleEvent_1.LifecycleEvent.ERROR)) {
            var event_1 = new LifecycleEvent_1.LifecycleEvent(LifecycleEvent_1.LifecycleEvent.ERROR, error);
            this._lifecycle.dispatchEvent(event_1);
            // process callback queue
            if (callbacks) {
                callbacks.forEach(function (callback) {
                    if (callback) {
                        safelyCallBack_1.safelyCallBack(callback, error, _this._name);
                    }
                });
                callbacks.length = 0;
            }
        }
        else {
            // explode!
            throw error;
        }
    };
    return LifecycleTransition;
}());
exports.LifecycleTransition = LifecycleTransition;
//# sourceMappingURL=LifecycleTransition.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/LogManager.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/LogManager.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel_1 = __webpack_require__(/*! ../api/LogLevel */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LogLevel.js");
var Logger_1 = __webpack_require__(/*! ../impl/Logger */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Logger.js");
/**
 * The log manager creates loggers and is itself a log target
 *
 * @private
 */
var LogManager = /** @class */ (function () {
    function LogManager() {
        /*============================================================================*/
        /* Public Properties                                                          */
        /*============================================================================*/
        this._logLevel = LogLevel_1.LogLevel.INFO;
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._targets = [];
    }
    Object.defineProperty(LogManager.prototype, "logLevel", {
        /**
         * The current log level
         */
        get: function () {
            return this._logLevel;
        },
        /**
         * Sets the current log level
         */
        set: function (value) {
            this._logLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * Retrieves a logger for a given source
     * @param source Logging source
     * @return Logger
     */
    LogManager.prototype.getLogger = function (source) {
        return new Logger_1.Logger(source, this);
    };
    /**
     * Adds a custom log target
     * @param target Log target
     * @return this
     */
    LogManager.prototype.addLogTarget = function (target) {
        this._targets.push(target);
    };
    /**
     * @inheritDoc
     */
    LogManager.prototype.log = function (source, level, timestamp, message, params) {
        if (level > this._logLevel) {
            return;
        }
        this._targets.forEach(function (target) {
            target.log(source, level, timestamp, message, params);
        });
    };
    LogManager.prototype.removeAllTargets = function () {
        this._targets = [];
    };
    return LogManager;
}());
exports.LogManager = LogManager;
//# sourceMappingURL=LogManager.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Logger.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Logger.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel_1 = __webpack_require__(/*! ../api/LogLevel */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/LogLevel.js");
/**
 * Default Robotlegs logger
 *
 * @private
 */
var Logger = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a new logger
     * @param source The log source object
     * @param target The log target
     */
    function Logger(source, target) {
        this._source = source;
        this._target = target;
    }
    Object.defineProperty(Logger.prototype, "source", {
        /*============================================================================*/
        /* Public Properties                                                          */
        /*============================================================================*/
        /**
         * @inheritDoc
         */
        set: function (source) {
            this._source = source;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    Logger.prototype.debug = function (message, params) {
        this._target.log(this._source, LogLevel_1.LogLevel.DEBUG, this.getTimer(), message, params);
    };
    /**
     * @inheritDoc
     */
    Logger.prototype.info = function (message, params) {
        this._target.log(this._source, LogLevel_1.LogLevel.INFO, this.getTimer(), message, params);
    };
    /**
     * @inheritDoc
     */
    Logger.prototype.warn = function (message, params) {
        this._target.log(this._source, LogLevel_1.LogLevel.WARN, this.getTimer(), message, params);
    };
    /**
     * @inheritDoc
     */
    Logger.prototype.error = function (message, params) {
        this._target.log(this._source, LogLevel_1.LogLevel.ERROR, this.getTimer(), message, params);
    };
    /**
     * @inheritDoc
     */
    Logger.prototype.fatal = function (message, params) {
        this._target.log(this._source, LogLevel_1.LogLevel.FATAL, this.getTimer(), message, params);
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    Logger.prototype.getTimer = function () {
        return Date.now();
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/MessageDispatcher.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/MessageDispatcher.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var MessageRunner_1 = __webpack_require__(/*! ./MessageRunner */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/MessageRunner.js");
var safelyCallBack_1 = __webpack_require__(/*! ./safelyCallBack */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/safelyCallBack.js");
/**
 * Message Dispatcher implementation.
 */
var MessageDispatcher = /** @class */ (function () {
    function MessageDispatcher() {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._handlers = new Map();
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * Registers a message handler with a MessageDispatcher.
     * @param message The interesting message
     * @param handler The handler function
     */
    MessageDispatcher.prototype.addMessageHandler = function (message, handler) {
        var messageHandlers = this._handlers.get(message);
        if (messageHandlers) {
            if (messageHandlers.indexOf(handler) === -1) {
                messageHandlers.push(handler);
            }
        }
        else {
            this._handlers.set(message, [handler]);
        }
    };
    /**
     * Checks whether the MessageDispatcher has any handlers registered for a specific message.
     * @param message The interesting message
     * @return A value of true if a handler of the specified message is registered; false otherwise.
     */
    MessageDispatcher.prototype.hasMessageHandler = function (message) {
        return this._handlers.has(message);
    };
    /**
     * Removes a message handler from a MessageDispatcher
     * @param message The interesting message
     * @param handler The handler function
     */
    MessageDispatcher.prototype.removeMessageHandler = function (message, handler) {
        var messageHandlers = this._handlers.get(message);
        var index = messageHandlers ? messageHandlers.indexOf(handler) : -1;
        if (index !== -1) {
            messageHandlers.splice(index, 1);
            if (messageHandlers.length === 0) {
                this._handlers.delete(message);
            }
        }
    };
    /**
     * Dispatches a message into the message flow.
     * @param message The interesting message
     * @param callback The completion callback function
     * @param reverse Should handlers be called in reverse order
     */
    MessageDispatcher.prototype.dispatchMessage = function (message, callback, reverse) {
        if (callback === void 0) { callback = null; }
        if (reverse === void 0) { reverse = false; }
        var handlers = this._handlers.get(message);
        if (handlers) {
            handlers = handlers.concat();
            if (!reverse) {
                handlers.reverse();
            }
            new MessageRunner_1.MessageRunner(message, handlers, callback).run();
        }
        else {
            if (callback) {
                safelyCallBack_1.safelyCallBack(callback);
            }
        }
    };
    return MessageDispatcher;
}());
exports.MessageDispatcher = MessageDispatcher;
//# sourceMappingURL=MessageDispatcher.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/MessageRunner.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/MessageRunner.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var safelyCallBack_1 = __webpack_require__(/*! ./safelyCallBack */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/safelyCallBack.js");
var MessageRunner = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function MessageRunner(message, handlers, callback) {
        this._message = message;
        this._handlers = handlers;
        this._callback = callback;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    MessageRunner.prototype.run = function () {
        this.next();
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    MessageRunner.prototype.next = function () {
        var _this = this;
        // Try to keep things synchronous with a simple loop,
        // forcefully breaking out for async handlers and recursing.
        // We do this to avoid increasing the stack depth unnecessarily.
        var handler;
        var _loop_1 = function () {
            handler = this_1._handlers.pop();
            if (handler.length === 0) {
                // sync handler: ()
                handler();
            }
            else if (handler.length === 1) {
                // sync handler: (message)
                handler(this_1._message);
            }
            else if (handler.length === 2) {
                // sync or async handler: (message, callback)
                var handled_1 = false;
                handler(this_1._message, function (error, msg) {
                    if (error === void 0) { error = null; }
                    if (msg === void 0) { msg = null; }
                    // handler must not invoke the callback more than once
                    if (handled_1) {
                        return;
                    }
                    handled_1 = true;
                    if (error || _this._handlers.length === 0) {
                        if (_this._callback) {
                            safelyCallBack_1.safelyCallBack(_this._callback, error, _this._message);
                        }
                    }
                    else {
                        _this.next();
                    }
                });
                return { value: void 0 };
            }
            else {
                // ERROR: this should NEVER happen
                throw new Error("Bad handler signature");
            }
        };
        var this_1 = this;
        while (this._handlers.length > 0) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
        }
        // If we got here then this loop finished synchronously.
        // Nobody broke out, so we are done.
        // This relies on the various return statements above. Be careful.
        if (this._callback) {
            safelyCallBack_1.safelyCallBack(this._callback, null, this._message);
        }
    };
    return MessageRunner;
}());
exports.MessageRunner = MessageRunner;
//# sourceMappingURL=MessageRunner.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ObjectHandler.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ObjectHandler.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectHandler = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function ObjectHandler(matcher, handler) {
        this._matcher = matcher;
        this._handler = handler;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    ObjectHandler.prototype.handle = function (object) {
        if (this._matcher.matches(object)) {
            this._handler(object);
        }
    };
    return ObjectHandler;
}());
exports.ObjectHandler = ObjectHandler;
//# sourceMappingURL=ObjectHandler.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ObjectMatcher.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ObjectMatcher.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var ObjectMatcher = /** @class */ (function () {
    function ObjectMatcher() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    ObjectMatcher.prototype.matches = function (item) {
        return typeof item === "object";
    };
    return ObjectMatcher;
}());
exports.ObjectMatcher = ObjectMatcher;
//# sourceMappingURL=ObjectMatcher.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ObjectProcessor.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ObjectProcessor.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectHandler_1 = __webpack_require__(/*! ./ObjectHandler */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/ObjectHandler.js");
/**
 * Robotlegs object processor
 *
 * @private
 */
var ObjectProcessor = /** @class */ (function () {
    function ObjectProcessor() {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._handlers = [];
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * Add a handler to process objects that match a given matcher.
     * @param matcher The matcher
     * @param handler The handler function
     */
    ObjectProcessor.prototype.addObjectHandler = function (matcher, handler) {
        this._handlers.push(new ObjectHandler_1.ObjectHandler(matcher, handler));
    };
    /**
     * Process an object by running it through all registered handlers
     * @param object The object instance to process.
     */
    ObjectProcessor.prototype.processObject = function (object) {
        this._handlers.forEach(function (handler) {
            handler.handle(object);
        });
    };
    /**
     * Removes all handlers
     */
    ObjectProcessor.prototype.removeAllHandlers = function () {
        this._handlers = [];
    };
    return ObjectProcessor;
}());
exports.ObjectProcessor = ObjectProcessor;
//# sourceMappingURL=ObjectProcessor.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Pin.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/Pin.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var PinEvent_1 = __webpack_require__(/*! ../api/PinEvent */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/api/PinEvent.js");
/**
 * Pins objects in memory
 *
 * @private
 */
var Pin = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function Pin(dispatcher) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._instances = new Map();
        this._dispatcher = dispatcher;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * Pin an object in memory
     * @param instance Instance to pin
     */
    Pin.prototype.detain = function (instance) {
        if (!this._instances.get(instance)) {
            this._instances.set(instance, true);
            this._dispatcher.dispatchEvent(new PinEvent_1.PinEvent(PinEvent_1.PinEvent.DETAIN, instance));
        }
    };
    /**
     * Unpins an object
     * @param instance Instance to unpin
     */
    Pin.prototype.release = function (instance) {
        if (this._instances.get(instance)) {
            this._instances.delete(instance);
            this._dispatcher.dispatchEvent(new PinEvent_1.PinEvent(PinEvent_1.PinEvent.RELEASE, instance));
        }
    };
    /**
     * Removes all pins
     */
    Pin.prototype.releaseAll = function () {
        var _this = this;
        this._instances.forEach(function (value, key) { return _this.release(key); });
    };
    return Pin;
}());
exports.Pin = Pin;
//# sourceMappingURL=Pin.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/RobotlegsInjector.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/RobotlegsInjector.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
/**
 * Robotlegs IInjector Adapter
 */
var RobotlegsInjector = /** @class */ (function (_super) {
    tslib_1.__extends(RobotlegsInjector, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a new Injector
     */
    function RobotlegsInjector() {
        return _super.call(this) || this;
    }
    RobotlegsInjector = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], RobotlegsInjector);
    return RobotlegsInjector;
}(inversify_1.Container));
exports.RobotlegsInjector = RobotlegsInjector;
//# sourceMappingURL=RobotlegsInjector.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/UID.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/UID.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
/**
 * Utility for generating unique object IDs
 */
var UID = /** @class */ (function () {
    function UID() {
    }
    /**
     * Generates a UID for a given source object or class
     * @param source The source object or class
     * @return Generated UID
     */
    UID.create = function (source) {
        return inversify_1.id().toString();
    };
    return UID;
}());
exports.UID = UID;
//# sourceMappingURL=UID.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/applyHooks.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/applyHooks.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var instantiateUnmapped_1 = __webpack_require__(/*! ./instantiateUnmapped */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/instantiateUnmapped.js");
/*============================================================================*/
/* Public Functions                                                           */
/*============================================================================*/
/**
 * <p>A hook can be a function, object or class.</p>
 *
 * <p>When an object is passed it is expected to expose a "hook" method.</p>
 *
 * <p>When a class is passed, an instance of that class will be instantiated and called.
 * If an injector is provided the instance will be created using that injector,
 * otherwise the instance will be created manually.</p>
 *
 * @param hooks An array of hooks
 * @param injector An optional Injector
 */
function applyHooks(hooks, injector) {
    for (var _i = 0, hooks_1 = hooks; _i < hooks_1.length; _i++) {
        var hook = hooks_1[_i];
        if (typeof hook === "function" && hook.prototype.hook === undefined) {
            hook();
            continue;
        }
        if (typeof hook === "function" && hook.prototype.hook !== undefined) {
            hook = injector ? instantiateUnmapped_1.instantiateUnmapped(injector, hook) : new hook();
        }
        hook.hook();
    }
}
exports.applyHooks = applyHooks;
//# sourceMappingURL=applyHooks.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/getQualifiedClassName.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/getQualifiedClassName.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/*============================================================================*/
/* Public Functions                                                           */
/*============================================================================*/
/**
 * Returns the fully qualified class name of an object. Support EcmaScript from v3 upto v6.
 *
 * @param {any} value The object for which a fully qualified class name is desired.
 * @return {string} A string containing the fully qualified class name.
 */
function getQualifiedClassName(value) {
    // es pattern
    var v3 = /function\ ([^\(]+)/;
    var v6 = /class\ ([^\ ]+)/;
    var classDescriptor = value.toString();
    var result = classDescriptor.match(v3) || classDescriptor.match(v6);
    return result[1];
}
exports.getQualifiedClassName = getQualifiedClassName;
//# sourceMappingURL=getQualifiedClassName.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/guardsApprove.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/guardsApprove.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var instantiateUnmapped_1 = __webpack_require__(/*! ./instantiateUnmapped */ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/instantiateUnmapped.js");
/*============================================================================*/
/* Public Functions                                                           */
/*============================================================================*/
/**
 * <p>A guard can be a function, object or class.</p>
 *
 * <p>When a function is provided it is expected to return a boolean when called.</p>
 *
 * <p>When an object is provided it is expected to expose an "approve" method
 * that returns a boolean.</p>
 *
 * <p>When a class is provided, an instance of that class will be instantiated and tested.
 * If an injector is provided the instance will be created using that injector,
 * otherwise the instance will be created manually.</p>
 *
 * @param guards An array of guards
 * @param injector An optional Injector
 *
 * @return A boolean value of false if any guard returns false
 */
function guardsApprove(guards, injector) {
    for (var _i = 0, guards_1 = guards; _i < guards_1.length; _i++) {
        var guard = guards_1[_i];
        if (typeof guard === "function" && guard.prototype.approve === undefined) {
            if (guard()) {
                continue;
            }
            return false;
        }
        if (typeof guard === "function" && guard.prototype.approve !== undefined) {
            guard = injector ? instantiateUnmapped_1.instantiateUnmapped(injector, guard) : new guard();
        }
        if (!guard.approve()) {
            return false;
        }
    }
    return true;
}
exports.guardsApprove = guardsApprove;
//# sourceMappingURL=guardsApprove.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/instantiateUnmapped.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/instantiateUnmapped.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/*============================================================================*/
/* Public Functions                                                           */
/*============================================================================*/
/**
 * Instantiate a object inside the context of the injector without keeping it for future requests.
 * All injections of the object will be provided by the injector, but the injector will not keep
 * a reference of the object for future requests.
 *
 * @param injector An injector
 * @param type A object that must be instantiated
 */
function instantiateUnmapped(injector, type) {
    injector.bind(type).to(type);
    var instance = injector.get(type);
    injector.unbind(type);
    return instance;
}
exports.instantiateUnmapped = instantiateUnmapped;
//# sourceMappingURL=instantiateUnmapped.js.map

/***/ }),

/***/ "./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/safelyCallBack.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@robotlegsjs/core/lib/robotlegs/bender/framework/impl/safelyCallBack.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/*============================================================================*/
/* Public Functions                                                           */
/*============================================================================*/
/**
 * <p>Helper function to call any of the 3 forms of eventual callback: </p>
 *
 * <code>(), (error) and (error, message)</code>
 *
 * <p>NOTE: This helper will not handle null callbacks. You should check
 * if the callback is null from the calling location: </p>
 *
 * <code>callback &amp;&amp; safelyCallBack(callback, error, message);</code>
 *
 * <p>This prevents the overhead of calling safelyCallBack()
 * when there is no callback to call. Likewise it reduces the overhead
 * of a null check in safelyCallBack().</p>
 *
 * <p>QUESTION: Is this too harsh? Should we protect from null?</p>
 *
 * @param callback The actual callback
 * @param error An optional error
 * @param message An optional message
 */
function safelyCallBack(callback, error, message) {
    if (callback.length === 0) {
        callback();
    }
    else if (callback.length === 1) {
        callback(error);
    }
    else if (callback.length === 2) {
        callback(error, message);
    }
    else {
        throw new TypeError("Callback function accepts more than two parameters.");
    }
}
exports.safelyCallBack = safelyCallBack;
//# sourceMappingURL=safelyCallBack.js.map

/***/ }),

/***/ "./node_modules/inversify/lib/annotation/decorator_utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/inversify/lib/annotation/decorator_utils.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/lib/constants/error_msgs.js");
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
function tagParameter(annotationTarget, propertyName, parameterIndex, metadata) {
    var metadataKey = METADATA_KEY.TAGGED;
    _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex);
}
exports.tagParameter = tagParameter;
function tagProperty(annotationTarget, propertyName, metadata) {
    var metadataKey = METADATA_KEY.TAGGED_PROP;
    _tagParameterOrProperty(metadataKey, annotationTarget.constructor, propertyName, metadata);
}
exports.tagProperty = tagProperty;
function _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex) {
    var paramsOrPropertiesMetadata = {};
    var isParameterDecorator = (typeof parameterIndex === "number");
    var key = (parameterIndex !== undefined && isParameterDecorator) ? parameterIndex.toString() : propertyName;
    if (isParameterDecorator && propertyName !== undefined) {
        throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
    }
    if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
        paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
    }
    var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
    if (!Array.isArray(paramOrPropertyMetadata)) {
        paramOrPropertyMetadata = [];
    }
    else {
        for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
            var m = paramOrPropertyMetadata_1[_i];
            if (m.key === metadata.key) {
                throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + m.key.toString());
            }
        }
    }
    paramOrPropertyMetadata.push(metadata);
    paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
    Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
}
function _decorate(decorators, target) {
    Reflect.decorate(decorators, target);
}
function _param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
function decorate(decorator, target, parameterIndex) {
    if (typeof parameterIndex === "number") {
        _decorate([_param(parameterIndex, decorator)], target);
    }
    else if (typeof parameterIndex === "string") {
        Reflect.decorate([decorator], target, parameterIndex);
    }
    else {
        _decorate([decorator], target);
    }
}
exports.decorate = decorate;


/***/ }),

/***/ "./node_modules/inversify/lib/annotation/inject.js":
/*!*********************************************************!*\
  !*** ./node_modules/inversify/lib/annotation/inject.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_msgs_1 = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/lib/constants/error_msgs.js");
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/lib/planning/metadata.js");
var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/lib/annotation/decorator_utils.js");
var LazyServiceIdentifer = (function () {
    function LazyServiceIdentifer(cb) {
        this._cb = cb;
    }
    LazyServiceIdentifer.prototype.unwrap = function () {
        return this._cb();
    };
    return LazyServiceIdentifer;
}());
exports.LazyServiceIdentifer = LazyServiceIdentifer;
function inject(serviceIdentifier) {
    return function (target, targetKey, index) {
        if (serviceIdentifier === undefined) {
            throw new Error(error_msgs_1.UNDEFINED_INJECT_ANNOTATION(target.name));
        }
        var metadata = new metadata_1.Metadata(METADATA_KEY.INJECT_TAG, serviceIdentifier);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.inject = inject;


/***/ }),

/***/ "./node_modules/inversify/lib/annotation/injectable.js":
/*!*************************************************************!*\
  !*** ./node_modules/inversify/lib/annotation/injectable.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERRORS_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/lib/constants/error_msgs.js");
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
function injectable() {
    return function (target) {
        if (Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target)) {
            throw new Error(ERRORS_MSGS.DUPLICATED_INJECTABLE_DECORATOR);
        }
        var types = Reflect.getMetadata(METADATA_KEY.DESIGN_PARAM_TYPES, target) || [];
        Reflect.defineMetadata(METADATA_KEY.PARAM_TYPES, types, target);
        return target;
    };
}
exports.injectable = injectable;


/***/ }),

/***/ "./node_modules/inversify/lib/annotation/multi_inject.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/lib/annotation/multi_inject.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/lib/planning/metadata.js");
var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/lib/annotation/decorator_utils.js");
function multiInject(serviceIdentifier) {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.MULTI_INJECT_TAG, serviceIdentifier);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.multiInject = multiInject;


/***/ }),

/***/ "./node_modules/inversify/lib/annotation/named.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/lib/annotation/named.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/lib/planning/metadata.js");
var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/lib/annotation/decorator_utils.js");
function named(name) {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, name);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.named = named;


/***/ }),

/***/ "./node_modules/inversify/lib/annotation/optional.js":
/*!***********************************************************!*\
  !*** ./node_modules/inversify/lib/annotation/optional.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/lib/planning/metadata.js");
var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/lib/annotation/decorator_utils.js");
function optional() {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.OPTIONAL_TAG, true);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.optional = optional;


/***/ }),

/***/ "./node_modules/inversify/lib/annotation/post_construct.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inversify/lib/annotation/post_construct.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERRORS_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/lib/constants/error_msgs.js");
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/lib/planning/metadata.js");
function postConstruct() {
    return function (target, propertyKey, descriptor) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.POST_CONSTRUCT, propertyKey);
        if (Reflect.hasOwnMetadata(METADATA_KEY.POST_CONSTRUCT, target.constructor)) {
            throw new Error(ERRORS_MSGS.MULTIPLE_POST_CONSTRUCT_METHODS);
        }
        Reflect.defineMetadata(METADATA_KEY.POST_CONSTRUCT, metadata, target.constructor);
    };
}
exports.postConstruct = postConstruct;


/***/ }),

/***/ "./node_modules/inversify/lib/annotation/tagged.js":
/*!*********************************************************!*\
  !*** ./node_modules/inversify/lib/annotation/tagged.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/lib/planning/metadata.js");
var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/lib/annotation/decorator_utils.js");
function tagged(metadataKey, metadataValue) {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(metadataKey, metadataValue);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.tagged = tagged;


/***/ }),

/***/ "./node_modules/inversify/lib/annotation/target_name.js":
/*!**************************************************************!*\
  !*** ./node_modules/inversify/lib/annotation/target_name.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/lib/planning/metadata.js");
var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/lib/annotation/decorator_utils.js");
function targetName(name) {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.NAME_TAG, name);
        decorator_utils_1.tagParameter(target, targetKey, index, metadata);
    };
}
exports.targetName = targetName;


/***/ }),

/***/ "./node_modules/inversify/lib/annotation/unmanaged.js":
/*!************************************************************!*\
  !*** ./node_modules/inversify/lib/annotation/unmanaged.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/lib/planning/metadata.js");
var decorator_utils_1 = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/lib/annotation/decorator_utils.js");
function unmanaged() {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.UNMANAGED_TAG, true);
        decorator_utils_1.tagParameter(target, targetKey, index, metadata);
    };
}
exports.unmanaged = unmanaged;


/***/ }),

/***/ "./node_modules/inversify/lib/bindings/binding.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/lib/bindings/binding.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var literal_types_1 = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/lib/constants/literal_types.js");
var id_1 = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/lib/utils/id.js");
var Binding = (function () {
    function Binding(serviceIdentifier, scope) {
        this.id = id_1.id();
        this.activated = false;
        this.serviceIdentifier = serviceIdentifier;
        this.scope = scope;
        this.type = literal_types_1.BindingTypeEnum.Invalid;
        this.constraint = function (request) { return true; };
        this.implementationType = null;
        this.cache = null;
        this.factory = null;
        this.provider = null;
        this.onActivation = null;
        this.dynamicValue = null;
    }
    Binding.prototype.clone = function () {
        var clone = new Binding(this.serviceIdentifier, this.scope);
        clone.activated = false;
        clone.implementationType = this.implementationType;
        clone.dynamicValue = this.dynamicValue;
        clone.scope = this.scope;
        clone.type = this.type;
        clone.factory = this.factory;
        clone.provider = this.provider;
        clone.constraint = this.constraint;
        clone.onActivation = this.onActivation;
        clone.cache = this.cache;
        return clone;
    };
    return Binding;
}());
exports.Binding = Binding;


/***/ }),

/***/ "./node_modules/inversify/lib/bindings/binding_count.js":
/*!**************************************************************!*\
  !*** ./node_modules/inversify/lib/bindings/binding_count.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BindingCount = {
    MultipleBindingsAvailable: 2,
    NoBindingsAvailable: 0,
    OnlyOneBindingAvailable: 1
};
exports.BindingCount = BindingCount;


/***/ }),

/***/ "./node_modules/inversify/lib/constants/error_msgs.js":
/*!************************************************************!*\
  !*** ./node_modules/inversify/lib/constants/error_msgs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
exports.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
exports.NULL_ARGUMENT = "NULL argument";
exports.KEY_NOT_FOUND = "Key Not Found";
exports.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
exports.CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
exports.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
exports.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
exports.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
exports.UNDEFINED_INJECT_ANNOTATION = function (name) {
    return "@inject called with undefined this could mean that the class " + name + " has " +
        "a circular dependency problem. You can use a LazyServiceIdentifer to  " +
        "overcome this limitation.";
};
exports.CIRCULAR_DEPENDENCY = "Circular dependency found:";
exports.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
exports.INVALID_BINDING_TYPE = "Invalid binding type:";
exports.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
exports.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
exports.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
exports.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is " +
    "used as service identifier";
exports.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators " +
    "must be applied to the parameters of a class constructor or a class property.";
exports.ARGUMENTS_LENGTH_MISMATCH = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return "The number of constructor arguments in the derived class " +
        (values[0] + " must be >= than the number of constructor arguments of its base class.");
};
exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options " +
    "must be an object.";
exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must " +
    "be a string ('singleton' or 'transient').";
exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must " +
    "be a boolean";
exports.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must " +
    "be a boolean";
exports.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
exports.POST_CONSTRUCT_ERROR = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return "@postConstruct error in class " + values[0] + ": " + values[1];
};
exports.CIRCULAR_DEPENDENCY_IN_FACTORY = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return "It looks like there is a circular dependency " +
        ("in one of the '" + values[0] + "' bindings. Please investigate bindings with") +
        ("service identifier '" + values[1] + "'.");
};
exports.STACK_OVERFLOW = "Maximum call stack size exceeded";


/***/ }),

/***/ "./node_modules/inversify/lib/constants/literal_types.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/lib/constants/literal_types.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BindingScopeEnum = {
    Request: "Request",
    Singleton: "Singleton",
    Transient: "Transient"
};
exports.BindingScopeEnum = BindingScopeEnum;
var BindingTypeEnum = {
    ConstantValue: "ConstantValue",
    Constructor: "Constructor",
    DynamicValue: "DynamicValue",
    Factory: "Factory",
    Function: "Function",
    Instance: "Instance",
    Invalid: "Invalid",
    Provider: "Provider"
};
exports.BindingTypeEnum = BindingTypeEnum;
var TargetTypeEnum = {
    ClassProperty: "ClassProperty",
    ConstructorArgument: "ConstructorArgument",
    Variable: "Variable"
};
exports.TargetTypeEnum = TargetTypeEnum;


/***/ }),

/***/ "./node_modules/inversify/lib/constants/metadata_keys.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/lib/constants/metadata_keys.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NAMED_TAG = "named";
exports.NAME_TAG = "name";
exports.UNMANAGED_TAG = "unmanaged";
exports.OPTIONAL_TAG = "optional";
exports.INJECT_TAG = "inject";
exports.MULTI_INJECT_TAG = "multi_inject";
exports.TAGGED = "inversify:tagged";
exports.TAGGED_PROP = "inversify:tagged_props";
exports.PARAM_TYPES = "inversify:paramtypes";
exports.DESIGN_PARAM_TYPES = "design:paramtypes";
exports.POST_CONSTRUCT = "post_construct";


/***/ }),

/***/ "./node_modules/inversify/lib/container/container.js":
/*!***********************************************************!*\
  !*** ./node_modules/inversify/lib/container/container.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var binding_1 = __webpack_require__(/*! ../bindings/binding */ "./node_modules/inversify/lib/bindings/binding.js");
var ERROR_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/lib/constants/error_msgs.js");
var literal_types_1 = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/lib/constants/literal_types.js");
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var metadata_reader_1 = __webpack_require__(/*! ../planning/metadata_reader */ "./node_modules/inversify/lib/planning/metadata_reader.js");
var planner_1 = __webpack_require__(/*! ../planning/planner */ "./node_modules/inversify/lib/planning/planner.js");
var resolver_1 = __webpack_require__(/*! ../resolution/resolver */ "./node_modules/inversify/lib/resolution/resolver.js");
var binding_to_syntax_1 = __webpack_require__(/*! ../syntax/binding_to_syntax */ "./node_modules/inversify/lib/syntax/binding_to_syntax.js");
var id_1 = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/lib/utils/id.js");
var serialization_1 = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/lib/utils/serialization.js");
var container_snapshot_1 = __webpack_require__(/*! ./container_snapshot */ "./node_modules/inversify/lib/container/container_snapshot.js");
var lookup_1 = __webpack_require__(/*! ./lookup */ "./node_modules/inversify/lib/container/lookup.js");
var Container = (function () {
    function Container(containerOptions) {
        var options = containerOptions || {};
        if (typeof options !== "object") {
            throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
        }
        if (options.defaultScope === undefined) {
            options.defaultScope = literal_types_1.BindingScopeEnum.Transient;
        }
        else if (options.defaultScope !== literal_types_1.BindingScopeEnum.Singleton &&
            options.defaultScope !== literal_types_1.BindingScopeEnum.Transient &&
            options.defaultScope !== literal_types_1.BindingScopeEnum.Request) {
            throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
        }
        if (options.autoBindInjectable === undefined) {
            options.autoBindInjectable = false;
        }
        else if (typeof options.autoBindInjectable !== "boolean") {
            throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
        }
        if (options.skipBaseClassChecks === undefined) {
            options.skipBaseClassChecks = false;
        }
        else if (typeof options.skipBaseClassChecks !== "boolean") {
            throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
        }
        this.options = {
            autoBindInjectable: options.autoBindInjectable,
            defaultScope: options.defaultScope,
            skipBaseClassChecks: options.skipBaseClassChecks
        };
        this.id = id_1.id();
        this._bindingDictionary = new lookup_1.Lookup();
        this._snapshots = [];
        this._middleware = null;
        this.parent = null;
        this._metadataReader = new metadata_reader_1.MetadataReader();
    }
    Container.merge = function (container1, container2) {
        var container = new Container();
        var bindingDictionary = planner_1.getBindingDictionary(container);
        var bindingDictionary1 = planner_1.getBindingDictionary(container1);
        var bindingDictionary2 = planner_1.getBindingDictionary(container2);
        function copyDictionary(origin, destination) {
            origin.traverse(function (key, value) {
                value.forEach(function (binding) {
                    destination.add(binding.serviceIdentifier, binding.clone());
                });
            });
        }
        copyDictionary(bindingDictionary1, bindingDictionary);
        copyDictionary(bindingDictionary2, bindingDictionary);
        return container;
    };
    Container.prototype.load = function () {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        var getHelpers = this._getContainerModuleHelpersFactory();
        for (var _a = 0, modules_1 = modules; _a < modules_1.length; _a++) {
            var currentModule = modules_1[_a];
            var containerModuleHelpers = getHelpers(currentModule.id);
            currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction);
        }
    };
    Container.prototype.loadAsync = function () {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        getHelpers = this._getContainerModuleHelpersFactory();
                        _a = 0, modules_2 = modules;
                        _b.label = 1;
                    case 1:
                        if (!(_a < modules_2.length)) return [3, 4];
                        currentModule = modules_2[_a];
                        containerModuleHelpers = getHelpers(currentModule.id);
                        return [4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _a++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        });
    };
    Container.prototype.unload = function () {
        var _this = this;
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        var conditionFactory = function (expected) { return function (item) {
            return item.moduleId === expected;
        }; };
        modules.forEach(function (module) {
            var condition = conditionFactory(module.id);
            _this._bindingDictionary.removeByCondition(condition);
        });
    };
    Container.prototype.bind = function (serviceIdentifier) {
        var scope = this.options.defaultScope || literal_types_1.BindingScopeEnum.Transient;
        var binding = new binding_1.Binding(serviceIdentifier, scope);
        this._bindingDictionary.add(serviceIdentifier, binding);
        return new binding_to_syntax_1.BindingToSyntax(binding);
    };
    Container.prototype.rebind = function (serviceIdentifier) {
        this.unbind(serviceIdentifier);
        return this.bind(serviceIdentifier);
    };
    Container.prototype.unbind = function (serviceIdentifier) {
        try {
            this._bindingDictionary.remove(serviceIdentifier);
        }
        catch (e) {
            throw new Error(ERROR_MSGS.CANNOT_UNBIND + " " + serialization_1.getServiceIdentifierAsString(serviceIdentifier));
        }
    };
    Container.prototype.unbindAll = function () {
        this._bindingDictionary = new lookup_1.Lookup();
    };
    Container.prototype.isBound = function (serviceIdentifier) {
        var bound = this._bindingDictionary.hasKey(serviceIdentifier);
        if (!bound && this.parent) {
            bound = this.parent.isBound(serviceIdentifier);
        }
        return bound;
    };
    Container.prototype.isBoundNamed = function (serviceIdentifier, named) {
        return this.isBoundTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
    };
    Container.prototype.isBoundTagged = function (serviceIdentifier, key, value) {
        var bound = false;
        if (this._bindingDictionary.hasKey(serviceIdentifier)) {
            var bindings = this._bindingDictionary.get(serviceIdentifier);
            var request_1 = planner_1.createMockRequest(this, serviceIdentifier, key, value);
            bound = bindings.some(function (b) { return b.constraint(request_1); });
        }
        if (!bound && this.parent) {
            bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
        }
        return bound;
    };
    Container.prototype.snapshot = function () {
        this._snapshots.push(container_snapshot_1.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware));
    };
    Container.prototype.restore = function () {
        var snapshot = this._snapshots.pop();
        if (snapshot === undefined) {
            throw new Error(ERROR_MSGS.NO_MORE_SNAPSHOTS_AVAILABLE);
        }
        this._bindingDictionary = snapshot.bindings;
        this._middleware = snapshot.middleware;
    };
    Container.prototype.createChild = function (containerOptions) {
        var child = new Container(containerOptions || this.options);
        child.parent = this;
        return child;
    };
    Container.prototype.applyMiddleware = function () {
        var middlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i] = arguments[_i];
        }
        var initial = (this._middleware) ? this._middleware : this._planAndResolve();
        this._middleware = middlewares.reduce(function (prev, curr) { return curr(prev); }, initial);
    };
    Container.prototype.applyCustomMetadataReader = function (metadataReader) {
        this._metadataReader = metadataReader;
    };
    Container.prototype.get = function (serviceIdentifier) {
        return this._get(false, false, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier);
    };
    Container.prototype.getTagged = function (serviceIdentifier, key, value) {
        return this._get(false, false, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier, key, value);
    };
    Container.prototype.getNamed = function (serviceIdentifier, named) {
        return this.getTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
    };
    Container.prototype.getAll = function (serviceIdentifier) {
        return this._get(true, true, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier);
    };
    Container.prototype.getAllTagged = function (serviceIdentifier, key, value) {
        return this._get(false, true, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier, key, value);
    };
    Container.prototype.getAllNamed = function (serviceIdentifier, named) {
        return this.getAllTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
    };
    Container.prototype.resolve = function (constructorFunction) {
        var tempContainer = this.createChild();
        tempContainer.bind(constructorFunction).toSelf();
        return tempContainer.get(constructorFunction);
    };
    Container.prototype._getContainerModuleHelpersFactory = function () {
        var _this = this;
        var setModuleId = function (bindingToSyntax, moduleId) {
            bindingToSyntax._binding.moduleId = moduleId;
        };
        var getBindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var _bind = _this.bind.bind(_this);
                var bindingToSyntax = _bind(serviceIdentifier);
                setModuleId(bindingToSyntax, moduleId);
                return bindingToSyntax;
            };
        };
        var getUnbindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var _unbind = _this.unbind.bind(_this);
                _unbind(serviceIdentifier);
            };
        };
        var getIsboundFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var _isBound = _this.isBound.bind(_this);
                return _isBound(serviceIdentifier);
            };
        };
        var getRebindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var _rebind = _this.rebind.bind(_this);
                var bindingToSyntax = _rebind(serviceIdentifier);
                setModuleId(bindingToSyntax, moduleId);
                return bindingToSyntax;
            };
        };
        return function (mId) { return ({
            bindFunction: getBindFunction(mId),
            isboundFunction: getIsboundFunction(mId),
            rebindFunction: getRebindFunction(mId),
            unbindFunction: getUnbindFunction(mId)
        }); };
    };
    Container.prototype._get = function (avoidConstraints, isMultiInject, targetType, serviceIdentifier, key, value) {
        var result = null;
        var defaultArgs = {
            avoidConstraints: avoidConstraints,
            contextInterceptor: function (context) { return context; },
            isMultiInject: isMultiInject,
            key: key,
            serviceIdentifier: serviceIdentifier,
            targetType: targetType,
            value: value
        };
        if (this._middleware) {
            result = this._middleware(defaultArgs);
            if (result === undefined || result === null) {
                throw new Error(ERROR_MSGS.INVALID_MIDDLEWARE_RETURN);
            }
        }
        else {
            result = this._planAndResolve()(defaultArgs);
        }
        return result;
    };
    Container.prototype._planAndResolve = function () {
        var _this = this;
        return function (args) {
            var context = planner_1.plan(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
            context = args.contextInterceptor(context);
            var result = resolver_1.resolve(context);
            return result;
        };
    };
    return Container;
}());
exports.Container = Container;


/***/ }),

/***/ "./node_modules/inversify/lib/container/container_module.js":
/*!******************************************************************!*\
  !*** ./node_modules/inversify/lib/container/container_module.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var id_1 = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/lib/utils/id.js");
var ContainerModule = (function () {
    function ContainerModule(registry) {
        this.id = id_1.id();
        this.registry = registry;
    }
    return ContainerModule;
}());
exports.ContainerModule = ContainerModule;
var AsyncContainerModule = (function () {
    function AsyncContainerModule(registry) {
        this.id = id_1.id();
        this.registry = registry;
    }
    return AsyncContainerModule;
}());
exports.AsyncContainerModule = AsyncContainerModule;


/***/ }),

/***/ "./node_modules/inversify/lib/container/container_snapshot.js":
/*!********************************************************************!*\
  !*** ./node_modules/inversify/lib/container/container_snapshot.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContainerSnapshot = (function () {
    function ContainerSnapshot() {
    }
    ContainerSnapshot.of = function (bindings, middleware) {
        var snapshot = new ContainerSnapshot();
        snapshot.bindings = bindings;
        snapshot.middleware = middleware;
        return snapshot;
    };
    return ContainerSnapshot;
}());
exports.ContainerSnapshot = ContainerSnapshot;


/***/ }),

/***/ "./node_modules/inversify/lib/container/lookup.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/lib/container/lookup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/lib/constants/error_msgs.js");
var Lookup = (function () {
    function Lookup() {
        this._map = new Map();
    }
    Lookup.prototype.getMap = function () {
        return this._map;
    };
    Lookup.prototype.add = function (serviceIdentifier, value) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        if (value === null || value === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== undefined) {
            entry.push(value);
            this._map.set(serviceIdentifier, entry);
        }
        else {
            this._map.set(serviceIdentifier, [value]);
        }
    };
    Lookup.prototype.get = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== undefined) {
            return entry;
        }
        else {
            throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
        }
    };
    Lookup.prototype.remove = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        if (!this._map.delete(serviceIdentifier)) {
            throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
        }
    };
    Lookup.prototype.removeByCondition = function (condition) {
        var _this = this;
        this._map.forEach(function (entries, key) {
            var updatedEntries = entries.filter(function (entry) { return !condition(entry); });
            if (updatedEntries.length > 0) {
                _this._map.set(key, updatedEntries);
            }
            else {
                _this._map.delete(key);
            }
        });
    };
    Lookup.prototype.hasKey = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        return this._map.has(serviceIdentifier);
    };
    Lookup.prototype.clone = function () {
        var copy = new Lookup();
        this._map.forEach(function (value, key) {
            value.forEach(function (b) { return copy.add(key, b.clone()); });
        });
        return copy;
    };
    Lookup.prototype.traverse = function (func) {
        this._map.forEach(function (value, key) {
            func(key, value);
        });
    };
    return Lookup;
}());
exports.Lookup = Lookup;


/***/ }),

/***/ "./node_modules/inversify/lib/inversify.js":
/*!*************************************************!*\
  !*** ./node_modules/inversify/lib/inversify.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var keys = __webpack_require__(/*! ./constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
exports.METADATA_KEY = keys;
var container_1 = __webpack_require__(/*! ./container/container */ "./node_modules/inversify/lib/container/container.js");
exports.Container = container_1.Container;
var literal_types_1 = __webpack_require__(/*! ./constants/literal_types */ "./node_modules/inversify/lib/constants/literal_types.js");
exports.BindingScopeEnum = literal_types_1.BindingScopeEnum;
exports.BindingTypeEnum = literal_types_1.BindingTypeEnum;
exports.TargetTypeEnum = literal_types_1.TargetTypeEnum;
var container_module_1 = __webpack_require__(/*! ./container/container_module */ "./node_modules/inversify/lib/container/container_module.js");
exports.AsyncContainerModule = container_module_1.AsyncContainerModule;
exports.ContainerModule = container_module_1.ContainerModule;
var injectable_1 = __webpack_require__(/*! ./annotation/injectable */ "./node_modules/inversify/lib/annotation/injectable.js");
exports.injectable = injectable_1.injectable;
var tagged_1 = __webpack_require__(/*! ./annotation/tagged */ "./node_modules/inversify/lib/annotation/tagged.js");
exports.tagged = tagged_1.tagged;
var named_1 = __webpack_require__(/*! ./annotation/named */ "./node_modules/inversify/lib/annotation/named.js");
exports.named = named_1.named;
var inject_1 = __webpack_require__(/*! ./annotation/inject */ "./node_modules/inversify/lib/annotation/inject.js");
exports.inject = inject_1.inject;
exports.LazyServiceIdentifer = inject_1.LazyServiceIdentifer;
var optional_1 = __webpack_require__(/*! ./annotation/optional */ "./node_modules/inversify/lib/annotation/optional.js");
exports.optional = optional_1.optional;
var unmanaged_1 = __webpack_require__(/*! ./annotation/unmanaged */ "./node_modules/inversify/lib/annotation/unmanaged.js");
exports.unmanaged = unmanaged_1.unmanaged;
var multi_inject_1 = __webpack_require__(/*! ./annotation/multi_inject */ "./node_modules/inversify/lib/annotation/multi_inject.js");
exports.multiInject = multi_inject_1.multiInject;
var target_name_1 = __webpack_require__(/*! ./annotation/target_name */ "./node_modules/inversify/lib/annotation/target_name.js");
exports.targetName = target_name_1.targetName;
var post_construct_1 = __webpack_require__(/*! ./annotation/post_construct */ "./node_modules/inversify/lib/annotation/post_construct.js");
exports.postConstruct = post_construct_1.postConstruct;
var metadata_reader_1 = __webpack_require__(/*! ./planning/metadata_reader */ "./node_modules/inversify/lib/planning/metadata_reader.js");
exports.MetadataReader = metadata_reader_1.MetadataReader;
var id_1 = __webpack_require__(/*! ./utils/id */ "./node_modules/inversify/lib/utils/id.js");
exports.id = id_1.id;
var decorator_utils_1 = __webpack_require__(/*! ./annotation/decorator_utils */ "./node_modules/inversify/lib/annotation/decorator_utils.js");
exports.decorate = decorator_utils_1.decorate;
var constraint_helpers_1 = __webpack_require__(/*! ./syntax/constraint_helpers */ "./node_modules/inversify/lib/syntax/constraint_helpers.js");
exports.traverseAncerstors = constraint_helpers_1.traverseAncerstors;
exports.taggedConstraint = constraint_helpers_1.taggedConstraint;
exports.namedConstraint = constraint_helpers_1.namedConstraint;
exports.typeConstraint = constraint_helpers_1.typeConstraint;
var serialization_1 = __webpack_require__(/*! ./utils/serialization */ "./node_modules/inversify/lib/utils/serialization.js");
exports.getServiceIdentifierAsString = serialization_1.getServiceIdentifierAsString;
var binding_utils_1 = __webpack_require__(/*! ./utils/binding_utils */ "./node_modules/inversify/lib/utils/binding_utils.js");
exports.multiBindToService = binding_utils_1.multiBindToService;


/***/ }),

/***/ "./node_modules/inversify/lib/planning/context.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/lib/planning/context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var id_1 = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/lib/utils/id.js");
var Context = (function () {
    function Context(container) {
        this.id = id_1.id();
        this.container = container;
    }
    Context.prototype.addPlan = function (plan) {
        this.plan = plan;
    };
    Context.prototype.setCurrentRequest = function (currentRequest) {
        this.currentRequest = currentRequest;
    };
    return Context;
}());
exports.Context = Context;


/***/ }),

/***/ "./node_modules/inversify/lib/planning/metadata.js":
/*!*********************************************************!*\
  !*** ./node_modules/inversify/lib/planning/metadata.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var Metadata = (function () {
    function Metadata(key, value) {
        this.key = key;
        this.value = value;
    }
    Metadata.prototype.toString = function () {
        if (this.key === METADATA_KEY.NAMED_TAG) {
            return "named: " + this.value.toString() + " ";
        }
        else {
            return "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }";
        }
    };
    return Metadata;
}());
exports.Metadata = Metadata;


/***/ }),

/***/ "./node_modules/inversify/lib/planning/metadata_reader.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/lib/planning/metadata_reader.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var MetadataReader = (function () {
    function MetadataReader() {
    }
    MetadataReader.prototype.getConstructorMetadata = function (constructorFunc) {
        var compilerGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.PARAM_TYPES, constructorFunc);
        var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED, constructorFunc);
        return {
            compilerGeneratedMetadata: compilerGeneratedMetadata,
            userGeneratedMetadata: userGeneratedMetadata || {}
        };
    };
    MetadataReader.prototype.getPropertiesMetadata = function (constructorFunc) {
        var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED_PROP, constructorFunc) || [];
        return userGeneratedMetadata;
    };
    return MetadataReader;
}());
exports.MetadataReader = MetadataReader;


/***/ }),

/***/ "./node_modules/inversify/lib/planning/plan.js":
/*!*****************************************************!*\
  !*** ./node_modules/inversify/lib/planning/plan.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Plan = (function () {
    function Plan(parentContext, rootRequest) {
        this.parentContext = parentContext;
        this.rootRequest = rootRequest;
    }
    return Plan;
}());
exports.Plan = Plan;


/***/ }),

/***/ "./node_modules/inversify/lib/planning/planner.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/lib/planning/planner.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_count_1 = __webpack_require__(/*! ../bindings/binding_count */ "./node_modules/inversify/lib/bindings/binding_count.js");
var ERROR_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/lib/constants/error_msgs.js");
var literal_types_1 = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/lib/constants/literal_types.js");
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var exceptions_1 = __webpack_require__(/*! ../utils/exceptions */ "./node_modules/inversify/lib/utils/exceptions.js");
var serialization_1 = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/lib/utils/serialization.js");
var context_1 = __webpack_require__(/*! ./context */ "./node_modules/inversify/lib/planning/context.js");
var metadata_1 = __webpack_require__(/*! ./metadata */ "./node_modules/inversify/lib/planning/metadata.js");
var plan_1 = __webpack_require__(/*! ./plan */ "./node_modules/inversify/lib/planning/plan.js");
var reflection_utils_1 = __webpack_require__(/*! ./reflection_utils */ "./node_modules/inversify/lib/planning/reflection_utils.js");
var request_1 = __webpack_require__(/*! ./request */ "./node_modules/inversify/lib/planning/request.js");
var target_1 = __webpack_require__(/*! ./target */ "./node_modules/inversify/lib/planning/target.js");
function getBindingDictionary(cntnr) {
    return cntnr._bindingDictionary;
}
exports.getBindingDictionary = getBindingDictionary;
function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
    var metadataKey = isMultiInject ? METADATA_KEY.MULTI_INJECT_TAG : METADATA_KEY.INJECT_TAG;
    var injectMetadata = new metadata_1.Metadata(metadataKey, serviceIdentifier);
    var target = new target_1.Target(targetType, name, serviceIdentifier, injectMetadata);
    if (key !== undefined) {
        var tagMetadata = new metadata_1.Metadata(key, value);
        target.metadata.push(tagMetadata);
    }
    return target;
}
function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
    var bindings = getBindings(context.container, target.serviceIdentifier);
    var activeBindings = [];
    if (bindings.length === binding_count_1.BindingCount.NoBindingsAvailable &&
        context.container.options.autoBindInjectable &&
        typeof target.serviceIdentifier === "function" &&
        metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
        context.container.bind(target.serviceIdentifier).toSelf();
        bindings = getBindings(context.container, target.serviceIdentifier);
    }
    if (!avoidConstraints) {
        activeBindings = bindings.filter(function (binding) {
            var request = new request_1.Request(binding.serviceIdentifier, context, parentRequest, binding, target);
            return binding.constraint(request);
        });
    }
    else {
        activeBindings = bindings;
    }
    _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);
    return activeBindings;
}
function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
    switch (bindings.length) {
        case binding_count_1.BindingCount.NoBindingsAvailable:
            if (target.isOptional()) {
                return bindings;
            }
            else {
                var serviceIdentifierString = serialization_1.getServiceIdentifierAsString(serviceIdentifier);
                var msg = ERROR_MSGS.NOT_REGISTERED;
                msg += serialization_1.listMetadataForTarget(serviceIdentifierString, target);
                msg += serialization_1.listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
                throw new Error(msg);
            }
        case binding_count_1.BindingCount.OnlyOneBindingAvailable:
            if (!target.isArray()) {
                return bindings;
            }
        case binding_count_1.BindingCount.MultipleBindingsAvailable:
        default:
            if (!target.isArray()) {
                var serviceIdentifierString = serialization_1.getServiceIdentifierAsString(serviceIdentifier);
                var msg = ERROR_MSGS.AMBIGUOUS_MATCH + " " + serviceIdentifierString;
                msg += serialization_1.listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
                throw new Error(msg);
            }
            else {
                return bindings;
            }
    }
}
function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
    var activeBindings;
    var childRequest;
    if (parentRequest === null) {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
        childRequest = new request_1.Request(serviceIdentifier, context, null, activeBindings, target);
        var thePlan = new plan_1.Plan(context, childRequest);
        context.addPlan(thePlan);
    }
    else {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
        childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
    }
    activeBindings.forEach(function (binding) {
        var subChildRequest = null;
        if (target.isArray()) {
            subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
        }
        else {
            if (binding.cache) {
                return;
            }
            subChildRequest = childRequest;
        }
        if (binding.type === literal_types_1.BindingTypeEnum.Instance && binding.implementationType !== null) {
            var dependencies = reflection_utils_1.getDependencies(metadataReader, binding.implementationType);
            if (!context.container.options.skipBaseClassChecks) {
                var baseClassDependencyCount = reflection_utils_1.getBaseClassDependencyCount(metadataReader, binding.implementationType);
                if (dependencies.length < baseClassDependencyCount) {
                    var error = ERROR_MSGS.ARGUMENTS_LENGTH_MISMATCH(reflection_utils_1.getFunctionName(binding.implementationType));
                    throw new Error(error);
                }
            }
            dependencies.forEach(function (dependency) {
                _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
            });
        }
    });
}
function getBindings(container, serviceIdentifier) {
    var bindings = [];
    var bindingDictionary = getBindingDictionary(container);
    if (bindingDictionary.hasKey(serviceIdentifier)) {
        bindings = bindingDictionary.get(serviceIdentifier);
    }
    else if (container.parent !== null) {
        bindings = getBindings(container.parent, serviceIdentifier);
    }
    return bindings;
}
function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
    if (avoidConstraints === void 0) { avoidConstraints = false; }
    var context = new context_1.Context(container);
    var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
    try {
        _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
        return context;
    }
    catch (error) {
        if (exceptions_1.isStackOverflowExeption(error)) {
            if (context.plan) {
                serialization_1.circularDependencyToException(context.plan.rootRequest);
            }
        }
        throw error;
    }
}
exports.plan = plan;
function createMockRequest(container, serviceIdentifier, key, value) {
    var target = new target_1.Target(literal_types_1.TargetTypeEnum.Variable, "", serviceIdentifier, new metadata_1.Metadata(key, value));
    var context = new context_1.Context(container);
    var request = new request_1.Request(serviceIdentifier, context, null, [], target);
    return request;
}
exports.createMockRequest = createMockRequest;


/***/ }),

/***/ "./node_modules/inversify/lib/planning/queryable_string.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inversify/lib/planning/queryable_string.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueryableString = (function () {
    function QueryableString(str) {
        this.str = str;
    }
    QueryableString.prototype.startsWith = function (searchString) {
        return this.str.indexOf(searchString) === 0;
    };
    QueryableString.prototype.endsWith = function (searchString) {
        var reverseString = "";
        var reverseSearchString = searchString.split("").reverse().join("");
        reverseString = this.str.split("").reverse().join("");
        return this.startsWith.call({ str: reverseString }, reverseSearchString);
    };
    QueryableString.prototype.contains = function (searchString) {
        return (this.str.indexOf(searchString) !== -1);
    };
    QueryableString.prototype.equals = function (compareString) {
        return this.str === compareString;
    };
    QueryableString.prototype.value = function () {
        return this.str;
    };
    return QueryableString;
}());
exports.QueryableString = QueryableString;


/***/ }),

/***/ "./node_modules/inversify/lib/planning/reflection_utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inversify/lib/planning/reflection_utils.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inject_1 = __webpack_require__(/*! ../annotation/inject */ "./node_modules/inversify/lib/annotation/inject.js");
var ERROR_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/lib/constants/error_msgs.js");
var literal_types_1 = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/lib/constants/literal_types.js");
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var serialization_1 = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/lib/utils/serialization.js");
exports.getFunctionName = serialization_1.getFunctionName;
var target_1 = __webpack_require__(/*! ./target */ "./node_modules/inversify/lib/planning/target.js");
function getDependencies(metadataReader, func) {
    var constructorName = serialization_1.getFunctionName(func);
    var targets = getTargets(metadataReader, constructorName, func, false);
    return targets;
}
exports.getDependencies = getDependencies;
function getTargets(metadataReader, constructorName, func, isBaseClass) {
    var metadata = metadataReader.getConstructorMetadata(func);
    var serviceIdentifiers = metadata.compilerGeneratedMetadata;
    if (serviceIdentifiers === undefined) {
        var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
        throw new Error(msg);
    }
    var constructorArgsMetadata = metadata.userGeneratedMetadata;
    var keys = Object.keys(constructorArgsMetadata);
    var hasUserDeclaredUnknownInjections = (func.length === 0 && keys.length > 0);
    var iterations = (hasUserDeclaredUnknownInjections) ? keys.length : func.length;
    var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
    var propertyTargets = getClassPropsAsTargets(metadataReader, func);
    var targets = constructorTargets.concat(propertyTargets);
    return targets;
}
function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
    var targetMetadata = constructorArgsMetadata[index.toString()] || [];
    var metadata = formatTargetMetadata(targetMetadata);
    var isManaged = metadata.unmanaged !== true;
    var serviceIdentifier = serviceIdentifiers[index];
    var injectIdentifier = (metadata.inject || metadata.multiInject);
    serviceIdentifier = (injectIdentifier) ? (injectIdentifier) : serviceIdentifier;
    if (serviceIdentifier instanceof inject_1.LazyServiceIdentifer) {
        serviceIdentifier = serviceIdentifier.unwrap();
    }
    if (isManaged) {
        var isObject = serviceIdentifier === Object;
        var isFunction = serviceIdentifier === Function;
        var isUndefined = serviceIdentifier === undefined;
        var isUnknownType = (isObject || isFunction || isUndefined);
        if (!isBaseClass && isUnknownType) {
            var msg = ERROR_MSGS.MISSING_INJECT_ANNOTATION + " argument " + index + " in class " + constructorName + ".";
            throw new Error(msg);
        }
        var target = new target_1.Target(literal_types_1.TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIdentifier);
        target.metadata = targetMetadata;
        return target;
    }
    return null;
}
function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
    var targets = [];
    for (var i = 0; i < iterations; i++) {
        var index = i;
        var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
        if (target !== null) {
            targets.push(target);
        }
    }
    return targets;
}
function getClassPropsAsTargets(metadataReader, constructorFunc) {
    var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
    var targets = [];
    var keys = Object.keys(classPropsMetadata);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var targetMetadata = classPropsMetadata[key];
        var metadata = formatTargetMetadata(classPropsMetadata[key]);
        var targetName = metadata.targetName || key;
        var serviceIdentifier = (metadata.inject || metadata.multiInject);
        var target = new target_1.Target(literal_types_1.TargetTypeEnum.ClassProperty, targetName, serviceIdentifier);
        target.metadata = targetMetadata;
        targets.push(target);
    }
    var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
    if (baseConstructor !== Object) {
        var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor);
        targets = targets.concat(baseTargets);
    }
    return targets;
}
function getBaseClassDependencyCount(metadataReader, func) {
    var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
    if (baseConstructor !== Object) {
        var baseConstructorName = serialization_1.getFunctionName(baseConstructor);
        var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
        var metadata = targets.map(function (t) {
            return t.metadata.filter(function (m) {
                return m.key === METADATA_KEY.UNMANAGED_TAG;
            });
        });
        var unmanagedCount = [].concat.apply([], metadata).length;
        var dependencyCount = targets.length - unmanagedCount;
        if (dependencyCount > 0) {
            return dependencyCount;
        }
        else {
            return getBaseClassDependencyCount(metadataReader, baseConstructor);
        }
    }
    else {
        return 0;
    }
}
exports.getBaseClassDependencyCount = getBaseClassDependencyCount;
function formatTargetMetadata(targetMetadata) {
    var targetMetadataMap = {};
    targetMetadata.forEach(function (m) {
        targetMetadataMap[m.key.toString()] = m.value;
    });
    return {
        inject: targetMetadataMap[METADATA_KEY.INJECT_TAG],
        multiInject: targetMetadataMap[METADATA_KEY.MULTI_INJECT_TAG],
        targetName: targetMetadataMap[METADATA_KEY.NAME_TAG],
        unmanaged: targetMetadataMap[METADATA_KEY.UNMANAGED_TAG]
    };
}


/***/ }),

/***/ "./node_modules/inversify/lib/planning/request.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/lib/planning/request.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var id_1 = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/lib/utils/id.js");
var Request = (function () {
    function Request(serviceIdentifier, parentContext, parentRequest, bindings, target) {
        this.id = id_1.id();
        this.serviceIdentifier = serviceIdentifier;
        this.parentContext = parentContext;
        this.parentRequest = parentRequest;
        this.target = target;
        this.childRequests = [];
        this.bindings = (Array.isArray(bindings) ? bindings : [bindings]);
        this.requestScope = parentRequest === null
            ? new Map()
            : null;
    }
    Request.prototype.addChildRequest = function (serviceIdentifier, bindings, target) {
        var child = new Request(serviceIdentifier, this.parentContext, this, bindings, target);
        this.childRequests.push(child);
        return child;
    };
    return Request;
}());
exports.Request = Request;


/***/ }),

/***/ "./node_modules/inversify/lib/planning/target.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/lib/planning/target.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var id_1 = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/lib/utils/id.js");
var metadata_1 = __webpack_require__(/*! ./metadata */ "./node_modules/inversify/lib/planning/metadata.js");
var queryable_string_1 = __webpack_require__(/*! ./queryable_string */ "./node_modules/inversify/lib/planning/queryable_string.js");
var Target = (function () {
    function Target(type, name, serviceIdentifier, namedOrTagged) {
        this.id = id_1.id();
        this.type = type;
        this.serviceIdentifier = serviceIdentifier;
        this.name = new queryable_string_1.QueryableString(name || "");
        this.metadata = new Array();
        var metadataItem = null;
        if (typeof namedOrTagged === "string") {
            metadataItem = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, namedOrTagged);
        }
        else if (namedOrTagged instanceof metadata_1.Metadata) {
            metadataItem = namedOrTagged;
        }
        if (metadataItem !== null) {
            this.metadata.push(metadataItem);
        }
    }
    Target.prototype.hasTag = function (key) {
        for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.key === key) {
                return true;
            }
        }
        return false;
    };
    Target.prototype.isArray = function () {
        return this.hasTag(METADATA_KEY.MULTI_INJECT_TAG);
    };
    Target.prototype.matchesArray = function (name) {
        return this.matchesTag(METADATA_KEY.MULTI_INJECT_TAG)(name);
    };
    Target.prototype.isNamed = function () {
        return this.hasTag(METADATA_KEY.NAMED_TAG);
    };
    Target.prototype.isTagged = function () {
        return this.metadata.some(function (m) {
            return (m.key !== METADATA_KEY.INJECT_TAG) &&
                (m.key !== METADATA_KEY.MULTI_INJECT_TAG) &&
                (m.key !== METADATA_KEY.NAME_TAG) &&
                (m.key !== METADATA_KEY.UNMANAGED_TAG) &&
                (m.key !== METADATA_KEY.NAMED_TAG);
        });
    };
    Target.prototype.isOptional = function () {
        return this.matchesTag(METADATA_KEY.OPTIONAL_TAG)(true);
    };
    Target.prototype.getNamedTag = function () {
        if (this.isNamed()) {
            return this.metadata.filter(function (m) { return m.key === METADATA_KEY.NAMED_TAG; })[0];
        }
        return null;
    };
    Target.prototype.getCustomTags = function () {
        if (this.isTagged()) {
            return this.metadata.filter(function (m) {
                return (m.key !== METADATA_KEY.INJECT_TAG) &&
                    (m.key !== METADATA_KEY.MULTI_INJECT_TAG) &&
                    (m.key !== METADATA_KEY.NAME_TAG) &&
                    (m.key !== METADATA_KEY.UNMANAGED_TAG) &&
                    (m.key !== METADATA_KEY.NAMED_TAG);
            });
        }
        return null;
    };
    Target.prototype.matchesNamedTag = function (name) {
        return this.matchesTag(METADATA_KEY.NAMED_TAG)(name);
    };
    Target.prototype.matchesTag = function (key) {
        var _this = this;
        return function (value) {
            for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
                var m = _a[_i];
                if (m.key === key && m.value === value) {
                    return true;
                }
            }
            return false;
        };
    };
    return Target;
}());
exports.Target = Target;


/***/ }),

/***/ "./node_modules/inversify/lib/resolution/instantiation.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/lib/resolution/instantiation.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_msgs_1 = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/lib/constants/error_msgs.js");
var literal_types_1 = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/lib/constants/literal_types.js");
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
function _injectProperties(instance, childRequests, resolveRequest) {
    var propertyInjectionsRequests = childRequests.filter(function (childRequest) {
        return (childRequest.target !== null &&
            childRequest.target.type === literal_types_1.TargetTypeEnum.ClassProperty);
    });
    var propertyInjections = propertyInjectionsRequests.map(resolveRequest);
    propertyInjectionsRequests.forEach(function (r, index) {
        var propertyName = "";
        propertyName = r.target.name.value();
        var injection = propertyInjections[index];
        instance[propertyName] = injection;
    });
    return instance;
}
function _createInstance(Func, injections) {
    return new (Func.bind.apply(Func, [void 0].concat(injections)))();
}
function _postConstruct(constr, result) {
    if (Reflect.hasMetadata(METADATA_KEY.POST_CONSTRUCT, constr)) {
        var data = Reflect.getMetadata(METADATA_KEY.POST_CONSTRUCT, constr);
        try {
            result[data.value]();
        }
        catch (e) {
            throw new Error(error_msgs_1.POST_CONSTRUCT_ERROR(constr.name, e.message));
        }
    }
}
function resolveInstance(constr, childRequests, resolveRequest) {
    var result = null;
    if (childRequests.length > 0) {
        var constructorInjectionsRequests = childRequests.filter(function (childRequest) {
            return (childRequest.target !== null && childRequest.target.type === literal_types_1.TargetTypeEnum.ConstructorArgument);
        });
        var constructorInjections = constructorInjectionsRequests.map(resolveRequest);
        result = _createInstance(constr, constructorInjections);
        result = _injectProperties(result, childRequests, resolveRequest);
    }
    else {
        result = new constr();
    }
    _postConstruct(constr, result);
    return result;
}
exports.resolveInstance = resolveInstance;


/***/ }),

/***/ "./node_modules/inversify/lib/resolution/resolver.js":
/*!***********************************************************!*\
  !*** ./node_modules/inversify/lib/resolution/resolver.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/lib/constants/error_msgs.js");
var literal_types_1 = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/lib/constants/literal_types.js");
var exceptions_1 = __webpack_require__(/*! ../utils/exceptions */ "./node_modules/inversify/lib/utils/exceptions.js");
var serialization_1 = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/lib/utils/serialization.js");
var instantiation_1 = __webpack_require__(/*! ./instantiation */ "./node_modules/inversify/lib/resolution/instantiation.js");
var invokeFactory = function (factoryType, serviceIdentifier, fn) {
    try {
        return fn();
    }
    catch (error) {
        if (exceptions_1.isStackOverflowExeption(error)) {
            throw new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY_IN_FACTORY(factoryType, serviceIdentifier.toString()));
        }
        else {
            throw error;
        }
    }
};
var _resolveRequest = function (requestScope) {
    return function (request) {
        request.parentContext.setCurrentRequest(request);
        var bindings = request.bindings;
        var childRequests = request.childRequests;
        var targetIsAnArray = request.target && request.target.isArray();
        var targetParentIsNotAnArray = !request.parentRequest ||
            !request.parentRequest.target ||
            !request.target ||
            !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
        if (targetIsAnArray && targetParentIsNotAnArray) {
            return childRequests.map(function (childRequest) {
                var _f = _resolveRequest(requestScope);
                return _f(childRequest);
            });
        }
        else {
            var result = null;
            if (request.target.isOptional() && bindings.length === 0) {
                return undefined;
            }
            var binding_1 = bindings[0];
            var isSingleton = binding_1.scope === literal_types_1.BindingScopeEnum.Singleton;
            var isRequestSingleton = binding_1.scope === literal_types_1.BindingScopeEnum.Request;
            if (isSingleton && binding_1.activated) {
                return binding_1.cache;
            }
            if (isRequestSingleton &&
                requestScope !== null &&
                requestScope.has(binding_1.id)) {
                return requestScope.get(binding_1.id);
            }
            if (binding_1.type === literal_types_1.BindingTypeEnum.ConstantValue) {
                result = binding_1.cache;
            }
            else if (binding_1.type === literal_types_1.BindingTypeEnum.Function) {
                result = binding_1.cache;
            }
            else if (binding_1.type === literal_types_1.BindingTypeEnum.Constructor) {
                result = binding_1.implementationType;
            }
            else if (binding_1.type === literal_types_1.BindingTypeEnum.DynamicValue && binding_1.dynamicValue !== null) {
                result = invokeFactory("toDynamicValue", binding_1.serviceIdentifier, function () { return binding_1.dynamicValue(request.parentContext); });
            }
            else if (binding_1.type === literal_types_1.BindingTypeEnum.Factory && binding_1.factory !== null) {
                result = invokeFactory("toFactory", binding_1.serviceIdentifier, function () { return binding_1.factory(request.parentContext); });
            }
            else if (binding_1.type === literal_types_1.BindingTypeEnum.Provider && binding_1.provider !== null) {
                result = invokeFactory("toProvider", binding_1.serviceIdentifier, function () { return binding_1.provider(request.parentContext); });
            }
            else if (binding_1.type === literal_types_1.BindingTypeEnum.Instance && binding_1.implementationType !== null) {
                result = instantiation_1.resolveInstance(binding_1.implementationType, childRequests, _resolveRequest(requestScope));
            }
            else {
                var serviceIdentifier = serialization_1.getServiceIdentifierAsString(request.serviceIdentifier);
                throw new Error(ERROR_MSGS.INVALID_BINDING_TYPE + " " + serviceIdentifier);
            }
            if (typeof binding_1.onActivation === "function") {
                result = binding_1.onActivation(request.parentContext, result);
            }
            if (isSingleton) {
                binding_1.cache = result;
                binding_1.activated = true;
            }
            if (isRequestSingleton &&
                requestScope !== null &&
                !requestScope.has(binding_1.id)) {
                requestScope.set(binding_1.id, result);
            }
            return result;
        }
    };
};
function resolve(context) {
    var _f = _resolveRequest(context.plan.rootRequest.requestScope);
    return _f(context.plan.rootRequest);
}
exports.resolve = resolve;


/***/ }),

/***/ "./node_modules/inversify/lib/syntax/binding_in_syntax.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/lib/syntax/binding_in_syntax.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var literal_types_1 = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/lib/constants/literal_types.js");
var binding_when_on_syntax_1 = __webpack_require__(/*! ./binding_when_on_syntax */ "./node_modules/inversify/lib/syntax/binding_when_on_syntax.js");
var BindingInSyntax = (function () {
    function BindingInSyntax(binding) {
        this._binding = binding;
    }
    BindingInSyntax.prototype.inRequestScope = function () {
        this._binding.scope = literal_types_1.BindingScopeEnum.Request;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingInSyntax.prototype.inSingletonScope = function () {
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingInSyntax.prototype.inTransientScope = function () {
        this._binding.scope = literal_types_1.BindingScopeEnum.Transient;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    return BindingInSyntax;
}());
exports.BindingInSyntax = BindingInSyntax;


/***/ }),

/***/ "./node_modules/inversify/lib/syntax/binding_in_when_on_syntax.js":
/*!************************************************************************!*\
  !*** ./node_modules/inversify/lib/syntax/binding_in_when_on_syntax.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_in_syntax_1 = __webpack_require__(/*! ./binding_in_syntax */ "./node_modules/inversify/lib/syntax/binding_in_syntax.js");
var binding_on_syntax_1 = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/inversify/lib/syntax/binding_on_syntax.js");
var binding_when_syntax_1 = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/inversify/lib/syntax/binding_when_syntax.js");
var BindingInWhenOnSyntax = (function () {
    function BindingInWhenOnSyntax(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
        this._bindingInSyntax = new binding_in_syntax_1.BindingInSyntax(binding);
    }
    BindingInWhenOnSyntax.prototype.inRequestScope = function () {
        return this._bindingInSyntax.inRequestScope();
    };
    BindingInWhenOnSyntax.prototype.inSingletonScope = function () {
        return this._bindingInSyntax.inSingletonScope();
    };
    BindingInWhenOnSyntax.prototype.inTransientScope = function () {
        return this._bindingInSyntax.inTransientScope();
    };
    BindingInWhenOnSyntax.prototype.when = function (constraint) {
        return this._bindingWhenSyntax.when(constraint);
    };
    BindingInWhenOnSyntax.prototype.whenTargetNamed = function (name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenTargetIsDefault = function () {
        return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    BindingInWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
    };
    BindingInWhenOnSyntax.prototype.whenParentNamed = function (name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
    };
    BindingInWhenOnSyntax.prototype.onActivation = function (handler) {
        return this._bindingOnSyntax.onActivation(handler);
    };
    return BindingInWhenOnSyntax;
}());
exports.BindingInWhenOnSyntax = BindingInWhenOnSyntax;


/***/ }),

/***/ "./node_modules/inversify/lib/syntax/binding_on_syntax.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/lib/syntax/binding_on_syntax.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_when_syntax_1 = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/inversify/lib/syntax/binding_when_syntax.js");
var BindingOnSyntax = (function () {
    function BindingOnSyntax(binding) {
        this._binding = binding;
    }
    BindingOnSyntax.prototype.onActivation = function (handler) {
        this._binding.onActivation = handler;
        return new binding_when_syntax_1.BindingWhenSyntax(this._binding);
    };
    return BindingOnSyntax;
}());
exports.BindingOnSyntax = BindingOnSyntax;


/***/ }),

/***/ "./node_modules/inversify/lib/syntax/binding_to_syntax.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/lib/syntax/binding_to_syntax.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/lib/constants/error_msgs.js");
var literal_types_1 = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/lib/constants/literal_types.js");
var binding_in_when_on_syntax_1 = __webpack_require__(/*! ./binding_in_when_on_syntax */ "./node_modules/inversify/lib/syntax/binding_in_when_on_syntax.js");
var binding_when_on_syntax_1 = __webpack_require__(/*! ./binding_when_on_syntax */ "./node_modules/inversify/lib/syntax/binding_when_on_syntax.js");
var BindingToSyntax = (function () {
    function BindingToSyntax(binding) {
        this._binding = binding;
    }
    BindingToSyntax.prototype.to = function (constructor) {
        this._binding.type = literal_types_1.BindingTypeEnum.Instance;
        this._binding.implementationType = constructor;
        return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toSelf = function () {
        if (typeof this._binding.serviceIdentifier !== "function") {
            throw new Error("" + ERROR_MSGS.INVALID_TO_SELF_VALUE);
        }
        var self = this._binding.serviceIdentifier;
        return this.to(self);
    };
    BindingToSyntax.prototype.toConstantValue = function (value) {
        this._binding.type = literal_types_1.BindingTypeEnum.ConstantValue;
        this._binding.cache = value;
        this._binding.dynamicValue = null;
        this._binding.implementationType = null;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toDynamicValue = function (func) {
        this._binding.type = literal_types_1.BindingTypeEnum.DynamicValue;
        this._binding.cache = null;
        this._binding.dynamicValue = func;
        this._binding.implementationType = null;
        return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toConstructor = function (constructor) {
        this._binding.type = literal_types_1.BindingTypeEnum.Constructor;
        this._binding.implementationType = constructor;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toFactory = function (factory) {
        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
        this._binding.factory = factory;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toFunction = function (func) {
        if (typeof func !== "function") {
            throw new Error(ERROR_MSGS.INVALID_FUNCTION_BINDING);
        }
        var bindingWhenOnSyntax = this.toConstantValue(func);
        this._binding.type = literal_types_1.BindingTypeEnum.Function;
        return bindingWhenOnSyntax;
    };
    BindingToSyntax.prototype.toAutoFactory = function (serviceIdentifier) {
        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
        this._binding.factory = function (context) {
            var autofactory = function () { return context.container.get(serviceIdentifier); };
            return autofactory;
        };
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toProvider = function (provider) {
        this._binding.type = literal_types_1.BindingTypeEnum.Provider;
        this._binding.provider = provider;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toService = function (service) {
        this.toDynamicValue(function (context) { return context.container.get(service); });
    };
    return BindingToSyntax;
}());
exports.BindingToSyntax = BindingToSyntax;


/***/ }),

/***/ "./node_modules/inversify/lib/syntax/binding_when_on_syntax.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inversify/lib/syntax/binding_when_on_syntax.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_on_syntax_1 = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/inversify/lib/syntax/binding_on_syntax.js");
var binding_when_syntax_1 = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/inversify/lib/syntax/binding_when_syntax.js");
var BindingWhenOnSyntax = (function () {
    function BindingWhenOnSyntax(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
    }
    BindingWhenOnSyntax.prototype.when = function (constraint) {
        return this._bindingWhenSyntax.when(constraint);
    };
    BindingWhenOnSyntax.prototype.whenTargetNamed = function (name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenTargetIsDefault = function () {
        return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    BindingWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
    };
    BindingWhenOnSyntax.prototype.whenParentNamed = function (name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
    };
    BindingWhenOnSyntax.prototype.onActivation = function (handler) {
        return this._bindingOnSyntax.onActivation(handler);
    };
    return BindingWhenOnSyntax;
}());
exports.BindingWhenOnSyntax = BindingWhenOnSyntax;


/***/ }),

/***/ "./node_modules/inversify/lib/syntax/binding_when_syntax.js":
/*!******************************************************************!*\
  !*** ./node_modules/inversify/lib/syntax/binding_when_syntax.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_on_syntax_1 = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/inversify/lib/syntax/binding_on_syntax.js");
var constraint_helpers_1 = __webpack_require__(/*! ./constraint_helpers */ "./node_modules/inversify/lib/syntax/constraint_helpers.js");
var BindingWhenSyntax = (function () {
    function BindingWhenSyntax(binding) {
        this._binding = binding;
    }
    BindingWhenSyntax.prototype.when = function (constraint) {
        this._binding.constraint = constraint;
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetNamed = function (name) {
        this._binding.constraint = constraint_helpers_1.namedConstraint(name);
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetIsDefault = function () {
        this._binding.constraint = function (request) {
            var targetIsDefault = (request.target !== null) &&
                (!request.target.isNamed()) &&
                (!request.target.isTagged());
            return targetIsDefault;
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetTagged = function (tag, value) {
        this._binding.constraint = constraint_helpers_1.taggedConstraint(tag)(value);
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenInjectedInto = function (parent) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.typeConstraint(parent)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenParentNamed = function (name) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.namedConstraint(name)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenParentTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.taggedConstraint(tag)(value)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.typeConstraint(ancestor));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        this._binding.constraint = function (request) {
            return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.typeConstraint(ancestor));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorNamed = function (name) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.namedConstraint(name));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorNamed = function (name) {
        this._binding.constraint = function (request) {
            return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.namedConstraint(name));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.taggedConstraint(tag)(value));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.taggedConstraint(tag)(value));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.traverseAncerstors(request, constraint);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        this._binding.constraint = function (request) {
            return !constraint_helpers_1.traverseAncerstors(request, constraint);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    return BindingWhenSyntax;
}());
exports.BindingWhenSyntax = BindingWhenSyntax;


/***/ }),

/***/ "./node_modules/inversify/lib/syntax/constraint_helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inversify/lib/syntax/constraint_helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/lib/constants/metadata_keys.js");
var metadata_1 = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/lib/planning/metadata.js");
var traverseAncerstors = function (request, constraint) {
    var parent = request.parentRequest;
    if (parent !== null) {
        return constraint(parent) ? true : traverseAncerstors(parent, constraint);
    }
    else {
        return false;
    }
};
exports.traverseAncerstors = traverseAncerstors;
var taggedConstraint = function (key) { return function (value) {
    var constraint = function (request) {
        return request !== null && request.target !== null && request.target.matchesTag(key)(value);
    };
    constraint.metaData = new metadata_1.Metadata(key, value);
    return constraint;
}; };
exports.taggedConstraint = taggedConstraint;
var namedConstraint = taggedConstraint(METADATA_KEY.NAMED_TAG);
exports.namedConstraint = namedConstraint;
var typeConstraint = function (type) { return function (request) {
    var binding = null;
    if (request !== null) {
        binding = request.bindings[0];
        if (typeof type === "string") {
            var serviceIdentifier = binding.serviceIdentifier;
            return serviceIdentifier === type;
        }
        else {
            var constructor = request.bindings[0].implementationType;
            return type === constructor;
        }
    }
    return false;
}; };
exports.typeConstraint = typeConstraint;


/***/ }),

/***/ "./node_modules/inversify/lib/utils/binding_utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/inversify/lib/utils/binding_utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.multiBindToService = function (container) {
    return function (service) {
        return function () {
            var types = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                types[_i] = arguments[_i];
            }
            return types.forEach(function (t) { return container.bind(t).toService(service); });
        };
    };
};


/***/ }),

/***/ "./node_modules/inversify/lib/utils/exceptions.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/lib/utils/exceptions.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/lib/constants/error_msgs.js");
function isStackOverflowExeption(error) {
    return (error instanceof RangeError ||
        error.message === ERROR_MSGS.STACK_OVERFLOW);
}
exports.isStackOverflowExeption = isStackOverflowExeption;


/***/ }),

/***/ "./node_modules/inversify/lib/utils/id.js":
/*!************************************************!*\
  !*** ./node_modules/inversify/lib/utils/id.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var idCounter = 0;
function id() {
    return idCounter++;
}
exports.id = id;


/***/ }),

/***/ "./node_modules/inversify/lib/utils/serialization.js":
/*!***********************************************************!*\
  !*** ./node_modules/inversify/lib/utils/serialization.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/lib/constants/error_msgs.js");
function getServiceIdentifierAsString(serviceIdentifier) {
    if (typeof serviceIdentifier === "function") {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier.name;
    }
    else if (typeof serviceIdentifier === "symbol") {
        return serviceIdentifier.toString();
    }
    else {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier;
    }
}
exports.getServiceIdentifierAsString = getServiceIdentifierAsString;
function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings) {
    var registeredBindingsList = "";
    var registeredBindings = getBindings(container, serviceIdentifier);
    if (registeredBindings.length !== 0) {
        registeredBindingsList = "\nRegistered bindings:";
        registeredBindings.forEach(function (binding) {
            var name = "Object";
            if (binding.implementationType !== null) {
                name = getFunctionName(binding.implementationType);
            }
            registeredBindingsList = registeredBindingsList + "\n " + name;
            if (binding.constraint.metaData) {
                registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
            }
        });
    }
    return registeredBindingsList;
}
exports.listRegisteredBindingsForServiceIdentifier = listRegisteredBindingsForServiceIdentifier;
function alreadyDependencyChain(request, serviceIdentifier) {
    if (request.parentRequest === null) {
        return false;
    }
    else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
        return true;
    }
    else {
        return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
    }
}
function dependencyChainToString(request) {
    function _createStringArr(req, result) {
        if (result === void 0) { result = []; }
        var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
        result.push(serviceIdentifier);
        if (req.parentRequest !== null) {
            return _createStringArr(req.parentRequest, result);
        }
        return result;
    }
    var stringArr = _createStringArr(request);
    return stringArr.reverse().join(" --> ");
}
function circularDependencyToException(request) {
    request.childRequests.forEach(function (childRequest) {
        if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
            var services = dependencyChainToString(childRequest);
            throw new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY + " " + services);
        }
        else {
            circularDependencyToException(childRequest);
        }
    });
}
exports.circularDependencyToException = circularDependencyToException;
function listMetadataForTarget(serviceIdentifierString, target) {
    if (target.isTagged() || target.isNamed()) {
        var m_1 = "";
        var namedTag = target.getNamedTag();
        var otherTags = target.getCustomTags();
        if (namedTag !== null) {
            m_1 += namedTag.toString() + "\n";
        }
        if (otherTags !== null) {
            otherTags.forEach(function (tag) {
                m_1 += tag.toString() + "\n";
            });
        }
        return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
    }
    else {
        return " " + serviceIdentifierString;
    }
}
exports.listMetadataForTarget = listMetadataForTarget;
function getFunctionName(v) {
    if (v.name) {
        return v.name;
    }
    else {
        var name_1 = v.toString();
        var match = name_1.match(/^function\s*([^\s(]+)/);
        return match ? match[1] : "Anonymous function: " + name_1;
    }
}
exports.getFunctionName = getFunctionName;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/reflect-metadata/Reflect.js":
/*!**************************************************!*\
  !*** ./node_modules/reflect-metadata/Reflect.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
// ContextView
var IContextView_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/contextView/api/IContextView */ "./src/robotlegs/bender/extensions/contextView/api/IContextView.ts");
exports.IContextView = IContextView_1.IContextView;
var ContextView_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/contextView/impl/ContextView */ "./src/robotlegs/bender/extensions/contextView/impl/ContextView.ts");
exports.ContextView = ContextView_1.ContextView;
var ContextViewListenerConfig_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/contextView/impl/ContextViewListenerConfig */ "./src/robotlegs/bender/extensions/contextView/impl/ContextViewListenerConfig.ts");
exports.ContextViewListenerConfig = ContextViewListenerConfig_1.ContextViewListenerConfig;
var ContextViewExtension_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/contextView/ContextViewExtension */ "./src/robotlegs/bender/extensions/contextView/ContextViewExtension.ts");
exports.ContextViewExtension = ContextViewExtension_1.ContextViewExtension;
var IMediatorMap_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/mediatorMap/api/IMediatorMap */ "./src/robotlegs/bender/extensions/mediatorMap/api/IMediatorMap.ts");
exports.IMediatorMap = IMediatorMap_1.IMediatorMap;
var Mediator_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/mediatorMap/impl/Mediator */ "./src/robotlegs/bender/extensions/mediatorMap/impl/Mediator.ts");
exports.Mediator = Mediator_1.Mediator;
var MediatorMapExtension_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/mediatorMap/MediatorMapExtension */ "./src/robotlegs/bender/extensions/mediatorMap/MediatorMapExtension.ts");
exports.MediatorMapExtension = MediatorMapExtension_1.MediatorMapExtension;
var IViewManager_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/viewManager/api/IViewManager */ "./src/robotlegs/bender/extensions/viewManager/api/IViewManager.ts");
exports.IViewManager = IViewManager_1.IViewManager;
var ManualStageObserverExtension_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/viewManager/ManualStageObserverExtension */ "./src/robotlegs/bender/extensions/viewManager/ManualStageObserverExtension.ts");
exports.ManualStageObserverExtension = ManualStageObserverExtension_1.ManualStageObserverExtension;
var StageCrawlerExtension_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/viewManager/StageCrawlerExtension */ "./src/robotlegs/bender/extensions/viewManager/StageCrawlerExtension.ts");
exports.StageCrawlerExtension = StageCrawlerExtension_1.StageCrawlerExtension;
var StageObserverExtension_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/viewManager/StageObserverExtension */ "./src/robotlegs/bender/extensions/viewManager/StageObserverExtension.ts");
exports.StageObserverExtension = StageObserverExtension_1.StageObserverExtension;
var ViewManagerExtension_1 = __webpack_require__(/*! ./robotlegs/bender/extensions/viewManager/ViewManagerExtension */ "./src/robotlegs/bender/extensions/viewManager/ViewManagerExtension.ts");
exports.ViewManagerExtension = ViewManagerExtension_1.ViewManagerExtension;
/**
 * Bundles
 */
var CreateJSBundle_1 = __webpack_require__(/*! ./robotlegs/bender/bundles/createjs/CreateJSBundle */ "./src/robotlegs/bender/bundles/createjs/CreateJSBundle.ts");
exports.CreateJSBundle = CreateJSBundle_1.CreateJSBundle;


/***/ }),

/***/ "./src/robotlegs/bender/bundles/createjs/CreateJSBundle.ts":
/*!*****************************************************************!*\
  !*** ./src/robotlegs/bender/bundles/createjs/CreateJSBundle.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
var IContextView_1 = __webpack_require__(/*! ../../extensions/contextView/api/IContextView */ "./src/robotlegs/bender/extensions/contextView/api/IContextView.ts");
var ContextView_1 = __webpack_require__(/*! ../../extensions/contextView/impl/ContextView */ "./src/robotlegs/bender/extensions/contextView/impl/ContextView.ts");
var ContextViewListenerConfig_1 = __webpack_require__(/*! ../../extensions/contextView/impl/ContextViewListenerConfig */ "./src/robotlegs/bender/extensions/contextView/impl/ContextViewListenerConfig.ts");
var ContextViewExtension_1 = __webpack_require__(/*! ../../extensions/contextView/ContextViewExtension */ "./src/robotlegs/bender/extensions/contextView/ContextViewExtension.ts");
var MediatorMapExtension_1 = __webpack_require__(/*! ../../extensions/mediatorMap/MediatorMapExtension */ "./src/robotlegs/bender/extensions/mediatorMap/MediatorMapExtension.ts");
var StageCrawlerExtension_1 = __webpack_require__(/*! ../../extensions/viewManager/StageCrawlerExtension */ "./src/robotlegs/bender/extensions/viewManager/StageCrawlerExtension.ts");
var StageObserverExtension_1 = __webpack_require__(/*! ../../extensions/viewManager/StageObserverExtension */ "./src/robotlegs/bender/extensions/viewManager/StageObserverExtension.ts");
var ViewManagerExtension_1 = __webpack_require__(/*! ../../extensions/viewManager/ViewManagerExtension */ "./src/robotlegs/bender/extensions/viewManager/ViewManagerExtension.ts");
/**
 * For that Classic Robotlegs flavour
 *
 * <p>This bundle installs a number of extensions commonly used
 * in typical Robotlegs applications and modules.</p>
 */
var CreateJSBundle = /** @class */ (function () {
    function CreateJSBundle() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    CreateJSBundle.prototype.extend = function (context) {
        this._context = context;
        this._logger = context.getLogger(this);
        this._context.install(ContextViewExtension_1.ContextViewExtension, ViewManagerExtension_1.ViewManagerExtension, StageObserverExtension_1.StageObserverExtension, MediatorMapExtension_1.MediatorMapExtension, StageCrawlerExtension_1.StageCrawlerExtension);
        this._context.addConfigHandler(core_1.instanceOfType(ContextView_1.ContextView), this.handleContextView.bind(this));
        this._context.whenInitializing(this.whenInitializing.bind(this));
        this._context.afterDestroying(this.afterDestroying.bind(this));
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    CreateJSBundle.prototype.handleContextView = function () {
        this._context.configure(ContextViewListenerConfig_1.ContextViewListenerConfig);
    };
    CreateJSBundle.prototype.whenInitializing = function () {
        if (!this._context.injector.isBound(IContextView_1.IContextView)) {
            this._logger.error("CreateJSBundle requires IContextView.");
        }
    };
    CreateJSBundle.prototype.afterDestroying = function () {
        this._context = null;
        this._logger = null;
    };
    return CreateJSBundle;
}());
exports.CreateJSBundle = CreateJSBundle;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/contextView/ContextViewExtension.ts":
/*!*****************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/contextView/ContextViewExtension.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
var IContextView_1 = __webpack_require__(/*! ./api/IContextView */ "./src/robotlegs/bender/extensions/contextView/api/IContextView.ts");
var ContextView_1 = __webpack_require__(/*! ./impl/ContextView */ "./src/robotlegs/bender/extensions/contextView/impl/ContextView.ts");
var createjs_patch_1 = __webpack_require__(/*! ./createjsPatch/createjs-patch */ "./src/robotlegs/bender/extensions/contextView/createjsPatch/createjs-patch.ts");
/**
 * <p>This Extension waits for a ContextView to be added as a configuration
 * and maps it into the context's injector.</p>
 *
 * <p>It should be installed before context initialization.</p>
 */
var ContextViewExtension = /** @class */ (function () {
    function ContextViewExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ContextViewExtension.prototype.extend = function (context) {
        this._injector = context.injector;
        this._logger = context.getLogger(this);
        context.beforeInitializing(this.beforeInitializing.bind(this));
        context.addConfigHandler(core_1.instanceOfType(ContextView_1.ContextView), this.handleContextView.bind(this));
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    ContextViewExtension.prototype.handleContextView = function (contextView) {
        if (this._injector.isBound(IContextView_1.IContextView)) {
            this._logger.warn("A contextView has already been installed, ignoring {0}", [contextView.view]);
        }
        else {
            this._logger.debug("Mapping {0} as contextView", [contextView.view]);
            createjs_patch_1.applyCreateJSPatch(contextView.view);
            this._injector.bind(IContextView_1.IContextView).toConstantValue(contextView);
        }
    };
    ContextViewExtension.prototype.beforeInitializing = function () {
        if (!this._injector.isBound(IContextView_1.IContextView)) {
            this._logger.error("A ContextView must be installed if you install the ContextViewExtension.");
        }
    };
    return ContextViewExtension;
}());
exports.ContextViewExtension = ContextViewExtension;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/contextView/api/IContextView.ts":
/*!*************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/contextView/api/IContextView.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.IContextView = Symbol("IContextView");


/***/ }),

/***/ "./src/robotlegs/bender/extensions/contextView/createjsPatch/createjs-patch.ts":
/*!*************************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/contextView/createjsPatch/createjs-patch.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Patch createjs to:
 * - emit "added"/"removed" events on stage
 */
function isConnectedToStage(stage, displayObject) {
    return displayObject.stage === stage;
}
function emitAddedEvent(stage, target) {
    var event = new createjs.Event("added", true, false);
    event.data = target;
    stage.dispatchEvent(event);
    if (target instanceof createjs.Container) {
        target.children.forEach(function (child) { return emitAddedEvent(stage, child); });
    }
}
function emitRemovedEvent(stage, target) {
    var event = new createjs.Event("removed", true, false);
    event.data = target;
    stage.dispatchEvent(event);
    if (target instanceof createjs.Container) {
        target.children.forEach(function (child) { return emitRemovedEvent(stage, child); });
    }
}
function applyCreateJSPatch(stage) {
    var addChild = createjs.Container.prototype.addChild;
    var addChildAt = createjs.Container.prototype.addChildAt;
    var removeChild = createjs.Container.prototype.removeChild;
    var removeChildAt = createjs.Container.prototype.removeChildAt;
    var removeAllChildren = createjs.Container.prototype.removeAllChildren;
    createjs.Container.prototype.addChild = function patchedAddChild(child) {
        var additionalChildren = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additionalChildren[_i - 1] = arguments[_i];
        }
        for (var i = 0, len = arguments.length; i < len; i++) {
            var object = arguments[i];
            addChild.call(this, object);
            if (isConnectedToStage(stage, object)) {
                emitAddedEvent(stage, object);
            }
        }
        return arguments[arguments.length - 1];
    };
    createjs.Container.prototype.addChildAt = function patchedAddChildAt() {
        var childOrIndex = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            childOrIndex[_i] = arguments[_i];
        }
        for (var i = 0, len = arguments.length - 1; i < len; i++) {
            var object = arguments[i];
            addChildAt.call(this, object, arguments[len] + i);
            if (isConnectedToStage(stage, object)) {
                emitAddedEvent(stage, object);
            }
        }
        return arguments[arguments.length - 2];
    };
    createjs.Container.prototype.removeChild = function patchedRemoveChild() {
        var child = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            child[_i] = arguments[_i];
        }
        var removed = true;
        for (var i = 0, len = child.length; i < len; i++) {
            if (isConnectedToStage(stage, child[i])) {
                emitRemovedEvent(stage, child[i]);
            }
            removed = removed && removeChild.call(this, child[i]);
        }
        return removed;
    };
    createjs.Container.prototype.removeChildAt = function patchedRemoveChildAt() {
        var index = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            index[_i] = arguments[_i];
        }
        var removed = true;
        for (var i = 0, len = arguments.length; i < len; i++) {
            var child = this.getChildAt(arguments[i]);
            if (isConnectedToStage(stage, child)) {
                emitRemovedEvent(stage, child);
            }
            removed = removed && removeChildAt.call(this, arguments[i]);
        }
        return removed;
    };
    createjs.Container.prototype.removeAllChildren = function patchedRemoveAllChildren() {
        if (isConnectedToStage(stage, this) && this.children.length) {
            this.children.forEach(function (child) {
                emitRemovedEvent(stage, child);
            });
        }
        removeAllChildren.call(this);
    };
}
exports.applyCreateJSPatch = applyCreateJSPatch;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/contextView/impl/ContextView.ts":
/*!*************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/contextView/impl/ContextView.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Context View represents the root Container for a Context
 */
var ContextView = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * The Context View represents the root Container for a Context
     * @param view The root Container for this Context
     */
    function ContextView(view) {
        if (view !== null && view !== undefined) {
            this._view = view;
        }
        else {
            throw new Error("View can't be null or undefined");
        }
    }
    /*============================================================================*/
    /* Public Properties                                                          */
    /*============================================================================*/
    /**
     *
     */
    ContextView.prototype.configure = function () { };
    Object.defineProperty(ContextView.prototype, "view", {
        /**
         * The root Container for this Context
         */
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    return ContextView;
}());
exports.ContextView = ContextView;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/contextView/impl/ContextViewListenerConfig.ts":
/*!***************************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/contextView/impl/ContextViewListenerConfig.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
var IContextView_1 = __webpack_require__(/*! ../api/IContextView */ "./src/robotlegs/bender/extensions/contextView/api/IContextView.ts");
var IViewManager_1 = __webpack_require__(/*! ../../viewManager/api/IViewManager */ "./src/robotlegs/bender/extensions/viewManager/api/IViewManager.ts");
/**
 * This configuration file adds the ContextView to the viewManager.
 *
 * It requires that the ViewManagerExtension, ContextViewExtension
 * and a ContextView have been installed.
 */
var ContextViewListenerConfig = /** @class */ (function () {
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    function ContextViewListenerConfig(contextView, viewManager) {
        this._contextView = contextView;
        this._viewManager = viewManager;
    }
    /**
     * @inheritDoc
     */
    ContextViewListenerConfig.prototype.configure = function () {
        // Adds the Context View to the View Manager at startup
        this._viewManager.addContainer(this._contextView.view);
    };
    ContextViewListenerConfig = __decorate([
        core_1.injectable(),
        __param(0, core_1.inject(IContextView_1.IContextView)), __param(1, core_1.inject(IViewManager_1.IViewManager)),
        __metadata("design:paramtypes", [Object, Object])
    ], ContextViewListenerConfig);
    return ContextViewListenerConfig;
}());
exports.ContextViewListenerConfig = ContextViewListenerConfig;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/mediatorMap/MediatorMapExtension.ts":
/*!*****************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/mediatorMap/MediatorMapExtension.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var IMediatorMap_1 = __webpack_require__(/*! ./api/IMediatorMap */ "./src/robotlegs/bender/extensions/mediatorMap/api/IMediatorMap.ts");
var MediatorMap_1 = __webpack_require__(/*! ./impl/MediatorMap */ "./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorMap.ts");
var IViewManager_1 = __webpack_require__(/*! ../viewManager/api/IViewManager */ "./src/robotlegs/bender/extensions/viewManager/api/IViewManager.ts");
/**
 * This extension installs a shared IMediatorMap into the context
 */
var MediatorMapExtension = /** @class */ (function () {
    function MediatorMapExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    MediatorMapExtension.prototype.extend = function (context) {
        context
            .beforeInitializing(this.beforeInitializing.bind(this))
            .beforeDestroying(this.beforeDestroying.bind(this))
            .whenDestroying(this.whenDestroying.bind(this));
        this._injector = context.injector;
        this._injector
            .bind(IMediatorMap_1.IMediatorMap)
            .to(MediatorMap_1.MediatorMap)
            .inSingletonScope();
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    MediatorMapExtension.prototype.beforeInitializing = function () {
        this._mediatorMap = this._injector.get(IMediatorMap_1.IMediatorMap);
        if (this._injector.isBound(IViewManager_1.IViewManager)) {
            this._viewManager = this._injector.get(IViewManager_1.IViewManager);
            this._viewManager.addViewHandler(this._mediatorMap);
        }
    };
    MediatorMapExtension.prototype.beforeDestroying = function () {
        this._mediatorMap.unmediateAll();
        if (this._injector.isBound(IViewManager_1.IViewManager)) {
            this._viewManager = this._injector.get(IViewManager_1.IViewManager);
            this._viewManager.removeViewHandler(this._mediatorMap);
        }
    };
    MediatorMapExtension.prototype.whenDestroying = function () {
        if (this._injector.isBound(IMediatorMap_1.IMediatorMap)) {
            this._injector.unbind(IMediatorMap_1.IMediatorMap);
        }
    };
    return MediatorMapExtension;
}());
exports.MediatorMapExtension = MediatorMapExtension;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/mediatorMap/api/IMediatorMap.ts":
/*!*************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/mediatorMap/api/IMediatorMap.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Mediator Map allows you to bind Mediators to objects
 */
exports.IMediatorMap = Symbol("IMediatorMap");


/***/ }),

/***/ "./src/robotlegs/bender/extensions/mediatorMap/impl/ConvertToEventDispatcher.ts":
/*!**************************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/mediatorMap/impl/ConvertToEventDispatcher.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Makes the bridge between the createjs.EventDispatcher and IEventDispatcher.
 */
var ConvertToEventDispatcher = /** @class */ (function () {
    function ConvertToEventDispatcher(createjsEventDispatcher) {
        this._createjsEventDispatcher = createjsEventDispatcher;
    }
    ConvertToEventDispatcher.prototype.addEventListener = function (type, listener, thisObject, useCapture, priority) {
        this._createjsEventDispatcher.on(type, listener, thisObject, false, null, useCapture);
    };
    ConvertToEventDispatcher.prototype.once = function (type, listener, thisObject, useCapture, priority) {
        this._createjsEventDispatcher.on(type, listener, thisObject, true, null, useCapture);
    };
    ConvertToEventDispatcher.prototype.removeEventListener = function (type, listener, thisObject, useCapture) {
        this._createjsEventDispatcher.off(type, listener, useCapture);
    };
    ConvertToEventDispatcher.prototype.hasEventListener = function (type) {
        return this._createjsEventDispatcher.hasEventListener(type);
    };
    ConvertToEventDispatcher.prototype.dispatchEvent = function (event) {
        return this._createjsEventDispatcher.dispatchEvent(event);
    };
    ConvertToEventDispatcher.prototype.willTrigger = function (type) {
        return this._createjsEventDispatcher.willTrigger(type);
    };
    return ConvertToEventDispatcher;
}());
exports.ConvertToEventDispatcher = ConvertToEventDispatcher;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/mediatorMap/impl/Mediator.ts":
/*!**********************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/mediatorMap/impl/Mediator.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
var ConvertToEventDispatcher_1 = __webpack_require__(/*! ./ConvertToEventDispatcher */ "./src/robotlegs/bender/extensions/mediatorMap/impl/ConvertToEventDispatcher.ts");
/**
 * Classic Robotlegs mediator implementation
 *
 * <p>Override initialize and destroy to hook into the mediator lifecycle.</p>
 */
var Mediator = /** @class */ (function () {
    function Mediator() {
    }
    Object.defineProperty(Mediator.prototype, "view", {
        get: function () {
            return this._viewComponent;
        },
        /*============================================================================*/
        /* Public Properties                                                          */
        /*============================================================================*/
        set: function (view) {
            this._viewComponent = view;
            this._viewConverted = new ConvertToEventDispatcher_1.ConvertToEventDispatcher(this._viewComponent);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Runs after the mediator has been destroyed.
     * Cleans up listeners mapped through the local EventMap.
     */
    Mediator.prototype.postDestroy = function () {
        this._eventMap.unmapAllListeners();
    };
    /*============================================================================*/
    /* Protected Functions                                                        */
    /*============================================================================*/
    Mediator.prototype.addViewListener = function (eventString, listener, thisObject, eventClass, useCapture, priority) {
        this._eventMap.mapListener(this._viewConverted, eventString, listener, thisObject, eventClass, useCapture, priority);
    };
    Mediator.prototype.addContextListener = function (eventString, listener, thisObject, eventClass, useCapture, priority) {
        this._eventMap.mapListener(this._eventDispatcher, eventString, listener, thisObject, eventClass, useCapture, priority);
    };
    Mediator.prototype.addDomListener = function (eventTarget, eventString, listener, options) {
        this._eventMap.mapDomListener(eventTarget, eventString, listener, options);
    };
    Mediator.prototype.removeViewListener = function (eventString, listener, thisObject, eventClass, useCapture) {
        this._eventMap.unmapListener(this._viewConverted, eventString, listener, thisObject, eventClass, useCapture);
    };
    Mediator.prototype.removeContextListener = function (eventString, listener, thisObject, eventClass, useCapture) {
        this._eventMap.unmapListener(this._eventDispatcher, eventString, listener, thisObject, eventClass, useCapture);
    };
    Mediator.prototype.removeDomListener = function (eventTarget, eventString, listener) {
        this._eventMap.unmapDomListener(eventTarget, eventString, listener);
    };
    Mediator.prototype.dispatch = function (event) {
        if (this._eventDispatcher.hasEventListener(event.type)) {
            this._eventDispatcher.dispatchEvent(event);
        }
    };
    __decorate([
        core_1.inject(core_1.IEventMap),
        __metadata("design:type", Object)
    ], Mediator.prototype, "_eventMap", void 0);
    __decorate([
        core_1.inject(core_1.IEventDispatcher),
        __metadata("design:type", Object)
    ], Mediator.prototype, "_eventDispatcher", void 0);
    Mediator = __decorate([
        core_1.injectable()
    ], Mediator);
    return Mediator;
}());
exports.Mediator = Mediator;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorFactory.ts":
/*!*****************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorFactory.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
var MediatorManager_1 = __webpack_require__(/*! ./MediatorManager */ "./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorManager.ts");
/**
 * @private
 */
var MediatorFactory = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function MediatorFactory(injector, manager) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._mediators = new Map();
        this._injector = injector;
        this._manager = manager || new MediatorManager_1.MediatorManager(this);
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    MediatorFactory.prototype.getMediator = function (item, mapping) {
        return this._mediators.get(item) ? this._mediators.get(item).get(mapping) : null;
    };
    /**
     * @private
     */
    MediatorFactory.prototype.createMediators = function (item, type, mappings) {
        var _this = this;
        var createdMediators = [];
        var mediator;
        mappings.forEach(function (mapping) {
            mediator = _this.getMediator(item, mapping);
            if (!mediator) {
                _this.mapTypeForFilterBinding(mapping.matcher, type, item);
                mediator = _this.createMediator(item, mapping);
                _this.unmapTypeForFilterBinding(mapping.matcher, type, item);
            }
            if (mediator) {
                createdMediators.push(mediator);
            }
        });
        return createdMediators;
    };
    /**
     * @private
     */
    MediatorFactory.prototype.removeMediators = function (item) {
        var _this = this;
        var mediators = this._mediators.get(item);
        if (!mediators) {
            return;
        }
        mediators.forEach(function (value, key) { return _this._manager.removeMediator(value, item, key); });
        this._mediators.delete(item);
    };
    /**
     * @private
     */
    MediatorFactory.prototype.removeAllMediators = function () {
        var _this = this;
        this._mediators.forEach(function (value, key) { return _this.removeMediators(key); });
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    MediatorFactory.prototype.createMediator = function (item, mapping) {
        var mediator = this.getMediator(item, mapping);
        if (mediator) {
            return mediator;
        }
        if (mapping.guards.length === 0 || core_1.guardsApprove(mapping.guards, this._injector)) {
            var mediatorClass = mapping.mediatorClass;
            mediator = core_1.instantiateUnmapped(this._injector, mediatorClass);
            if (mapping.hooks.length > 0) {
                this._injector.bind(mediatorClass).toConstantValue(mediator);
                core_1.applyHooks(mapping.hooks, this._injector);
                this._injector.unbind(mediatorClass);
            }
            this.addMediator(mediator, item, mapping);
        }
        return mediator;
    };
    MediatorFactory.prototype.addMediator = function (mediator, item, mapping) {
        var mediatorMap = this._mediators.get(item) || new Map();
        this._mediators.set(item, mediatorMap);
        mediatorMap.set(mapping, mediator);
        this._manager.addMediator(mediator, item, mapping);
    };
    MediatorFactory.prototype.mapTypeForFilterBinding = function (filter, type, item) {
        var _this = this;
        var requiredTypes = this.requiredTypesFor(filter, type);
        requiredTypes.forEach(function (requiredType) {
            _this._injector.bind(requiredType).toConstantValue(item);
        });
    };
    MediatorFactory.prototype.unmapTypeForFilterBinding = function (filter, type, item) {
        var _this = this;
        var requiredTypes = this.requiredTypesFor(filter, type);
        requiredTypes.forEach(function (requiredType) {
            if (_this._injector.isBound(requiredType)) {
                _this._injector.unbind(requiredType);
            }
        });
    };
    MediatorFactory.prototype.requiredTypesFor = function (filter, type) {
        var requiredTypes = filter.allOfTypes.concat(filter.anyOfTypes);
        if (requiredTypes.indexOf(type) === -1) {
            requiredTypes.push(type);
        }
        return requiredTypes;
    };
    return MediatorFactory;
}());
exports.MediatorFactory = MediatorFactory;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorManager.ts":
/*!*****************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorManager.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var MediatorManager = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function MediatorManager(factory) {
        this._factory = factory;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    MediatorManager.prototype.addMediator = function (mediator, item, mapping) {
        // Watch Display Object for removal
        if (item instanceof createjs.DisplayObject && mapping.autoRemoveEnabled) {
            item._onRemovedFromStage = this.onRemovedFromStage.bind(this, item);
            item.on("removed", item._onRemovedFromStage, this);
        }
        // Synchronize with item life-cycle
        this.initializeMediator(mediator, item);
    };
    /**
     * @private
     */
    MediatorManager.prototype.removeMediator = function (mediator, item, mapping) {
        if (item instanceof createjs.DisplayObject) {
            item.off("removed", item._onRemovedFromStage);
        }
        this.destroyMediator(mediator);
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    MediatorManager.prototype.onRemovedFromStage = function (displayObject, fromContainer) {
        this._factory.removeMediators(displayObject);
    };
    MediatorManager.prototype.initializeMediator = function (mediator, mediatedItem) {
        if ("preInitialize" in mediator) {
            mediator.preInitialize();
        }
        if ("view" in mediator) {
            mediator.view = mediatedItem;
        }
        if ("initialize" in mediator) {
            mediator.initialize();
        }
        if ("postInitialize" in mediator) {
            mediator.postInitialize();
        }
    };
    MediatorManager.prototype.destroyMediator = function (mediator) {
        if ("preDestroy" in mediator) {
            mediator.preDestroy();
        }
        if ("destroy" in mediator) {
            mediator.destroy();
        }
        if ("view" in mediator) {
            mediator.view = null;
        }
        if ("postDestroy" in mediator) {
            mediator.postDestroy();
        }
    };
    return MediatorManager;
}());
exports.MediatorManager = MediatorManager;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorMap.ts":
/*!*************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorMap.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
var MediatorFactory_1 = __webpack_require__(/*! ./MediatorFactory */ "./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorFactory.ts");
var MediatorViewHandler_1 = __webpack_require__(/*! ./MediatorViewHandler */ "./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorViewHandler.ts");
var NullMediatorUnmapper_1 = __webpack_require__(/*! ./NullMediatorUnmapper */ "./src/robotlegs/bender/extensions/mediatorMap/impl/NullMediatorUnmapper.ts");
var MediatorMapper_1 = __webpack_require__(/*! ./MediatorMapper */ "./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorMapper.ts");
/**
 * @private
 */
var MediatorMap = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function MediatorMap(context) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._mappers = new Map();
        this.NULL_UNMAPPER = new NullMediatorUnmapper_1.NullMediatorUnmapper();
        this._logger = context.getLogger(this);
        this._factory = new MediatorFactory_1.MediatorFactory(context.injector);
        this._viewHandler = new MediatorViewHandler_1.MediatorViewHandler(this._factory);
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.mapMatcher = function (matcher) {
        var desc = matcher.createTypeFilter().descriptor;
        var mapper = this._mappers.get(desc);
        if (mapper) {
            return mapper;
        }
        mapper = this.createMapper(matcher);
        this._mappers.set(desc, mapper);
        return mapper;
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.map = function (type) {
        return this.mapMatcher(new core_1.TypeMatcher().allOf(type));
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.unmapMatcher = function (matcher) {
        return this._mappers.get(matcher.createTypeFilter().descriptor) || this.NULL_UNMAPPER;
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.unmap = function (type) {
        return this.unmapMatcher(new core_1.TypeMatcher().allOf(type));
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.handleView = function (view, type) {
        this._viewHandler.handleView(view, type);
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.mediate = function (item) {
        this._viewHandler.handleItem(item, item.constructor);
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.unmediate = function (item) {
        this._factory.removeMediators(item);
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.unmediateAll = function () {
        this._factory.removeAllMediators();
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    MediatorMap.prototype.createMapper = function (matcher) {
        return new MediatorMapper_1.MediatorMapper(matcher.createTypeFilter(), this._viewHandler, this._logger);
    };
    MediatorMap = __decorate([
        core_1.injectable(),
        __param(0, core_1.inject(core_1.IContext)),
        __metadata("design:paramtypes", [Object])
    ], MediatorMap);
    return MediatorMap;
}());
exports.MediatorMap = MediatorMap;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorMapper.ts":
/*!****************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorMapper.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var MediatorMapping_1 = __webpack_require__(/*! ./MediatorMapping */ "./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorMapping.ts");
/**
 * @private
 */
var MediatorMapper = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function MediatorMapper(typeFilter, handler, logger) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._mappings = new Map();
        this._typeFilter = typeFilter;
        this._handler = handler;
        this._logger = logger;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    MediatorMapper.prototype.toMediator = function (mediatorClass) {
        var mapping = this._mappings.get(mediatorClass);
        return mapping ? this.overwriteMapping(mapping) : this.createMapping(mediatorClass);
    };
    /**
     * @inheritDoc
     */
    MediatorMapper.prototype.fromMediator = function (mediatorClass) {
        var mapping = this._mappings.get(mediatorClass);
        if (mapping) {
            this.deleteMapping(mapping);
        }
    };
    /**
     * @inheritDoc
     */
    MediatorMapper.prototype.fromAll = function () {
        this._mappings.forEach(this.deleteMapping, this);
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    MediatorMapper.prototype.createMapping = function (mediatorClass) {
        var mapping = new MediatorMapping_1.MediatorMapping(this._typeFilter, mediatorClass);
        this._handler.addMapping(mapping);
        this._mappings.set(mediatorClass, mapping);
        if (this._logger) {
            this._logger.debug("{0} mapped to {1}", [this._typeFilter, mapping]);
        }
        return mapping;
    };
    MediatorMapper.prototype.deleteMapping = function (mapping) {
        this._handler.removeMapping(mapping);
        this._mappings.delete(mapping.mediatorClass);
        if (this._logger) {
            this._logger.debug("{0} unmapped from {1}", [this._typeFilter, mapping]);
        }
    };
    MediatorMapper.prototype.overwriteMapping = function (mapping) {
        if (this._logger) {
            this._logger.warn("{0} already mapped to {1}\n" +
                'If you have overridden this mapping intentionally you can use "unmap()" ' +
                "prior to your replacement mapping in order to avoid seeing this message.\n", [this._typeFilter, mapping]);
        }
        this.deleteMapping(mapping);
        return this.createMapping(mapping.mediatorClass);
    };
    return MediatorMapper;
}());
exports.MediatorMapper = MediatorMapper;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorMapping.ts":
/*!*****************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorMapping.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var MediatorMapping = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function MediatorMapping(matcher, mediatorClass) {
        this._guards = [];
        this._hooks = [];
        this._autoRemoveEnabled = true;
        this._matcher = matcher;
        this._mediatorClass = mediatorClass;
    }
    Object.defineProperty(MediatorMapping.prototype, "matcher", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._matcher;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediatorMapping.prototype, "mediatorClass", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._mediatorClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediatorMapping.prototype, "guards", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._guards;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediatorMapping.prototype, "hooks", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._hooks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediatorMapping.prototype, "autoRemoveEnabled", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._autoRemoveEnabled;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    MediatorMapping.prototype.withGuards = function () {
        var guards = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            guards[_i] = arguments[_i];
        }
        this._guards = this._guards.concat.apply(this._guards, guards);
        return this;
    };
    /**
     * @inheritDoc
     */
    MediatorMapping.prototype.withHooks = function () {
        var hooks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            hooks[_i] = arguments[_i];
        }
        this._hooks = this._hooks.concat.apply(this._hooks, hooks);
        return this;
    };
    /**
     * @inheritDoc
     */
    MediatorMapping.prototype.autoRemove = function (value) {
        if (value === void 0) { value = true; }
        this._autoRemoveEnabled = value;
        return this;
    };
    return MediatorMapping;
}());
exports.MediatorMapping = MediatorMapping;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorViewHandler.ts":
/*!*********************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/mediatorMap/impl/MediatorViewHandler.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var MediatorViewHandler = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function MediatorViewHandler(factory) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._mappings = [];
        this._knownMappings = new Map();
        this._factory = factory;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    MediatorViewHandler.prototype.addMapping = function (mapping) {
        var index = this._mappings.indexOf(mapping);
        if (index > -1) {
            return;
        }
        this._mappings.push(mapping);
        this._knownMappings.clear();
    };
    /**
     * @private
     */
    MediatorViewHandler.prototype.removeMapping = function (mapping) {
        var index = this._mappings.indexOf(mapping);
        if (index === -1) {
            return;
        }
        this._mappings.splice(index, 1);
        this._knownMappings.clear();
    };
    /**
     * @private
     */
    MediatorViewHandler.prototype.handleView = function (view, type) {
        var interestedMappings = this.getInterestedMappingsFor(view, type);
        if (interestedMappings) {
            this._factory.createMediators(view, type, interestedMappings);
        }
    };
    /**
     * @private
     */
    MediatorViewHandler.prototype.handleItem = function (item, type) {
        var interestedMappings = this.getInterestedMappingsFor(item, type);
        if (interestedMappings) {
            this._factory.createMediators(item, type, interestedMappings);
        }
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    MediatorViewHandler.prototype.getInterestedMappingsFor = function (item, type) {
        var _this = this;
        // we've seen this type before and nobody was interested
        if (this._knownMappings.get(type) === false) {
            return null;
        }
        // we haven't seen this type before
        if (this._knownMappings.get(type) === undefined) {
            this._knownMappings.set(type, false);
            this._mappings.forEach(function (mapping) {
                if (mapping.matcher.matches(item)) {
                    if (!_this._knownMappings.get(type)) {
                        _this._knownMappings.set(type, []);
                    }
                    _this._knownMappings.get(type).push(mapping);
                }
            });
            // nobody cares, let's get out of here
            if (this._knownMappings.get(type) === false) {
                return null;
            }
        }
        // these mappings really do care
        return this._knownMappings.get(type);
    };
    return MediatorViewHandler;
}());
exports.MediatorViewHandler = MediatorViewHandler;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/mediatorMap/impl/NullMediatorUnmapper.ts":
/*!**********************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/mediatorMap/impl/NullMediatorUnmapper.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var NullMediatorUnmapper = /** @class */ (function () {
    function NullMediatorUnmapper() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    NullMediatorUnmapper.prototype.fromMediator = function (mediatorClass) { };
    /**
     * @private
     */
    NullMediatorUnmapper.prototype.fromAll = function () { };
    return NullMediatorUnmapper;
}());
exports.NullMediatorUnmapper = NullMediatorUnmapper;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/ManualStageObserverExtension.ts":
/*!*************************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/ManualStageObserverExtension.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var ContainerRegistry_1 = __webpack_require__(/*! ./impl/ContainerRegistry */ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerRegistry.ts");
var ManualStageObserver_1 = __webpack_require__(/*! ./impl/ManualStageObserver */ "./src/robotlegs/bender/extensions/viewManager/impl/ManualStageObserver.ts");
var installCount = 0;
/**
 * This extension install a manual Stage Observer
 */
var ManualStageObserverExtension = /** @class */ (function () {
    function ManualStageObserverExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ManualStageObserverExtension.prototype.extend = function (context) {
        context.whenInitializing(this.whenInitializing.bind(this));
        context.whenDestroying(this.whenDestroying.bind(this));
        installCount++;
        this._injector = context.injector;
        this._logger = context.getLogger(this);
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    ManualStageObserverExtension.prototype.whenInitializing = function () {
        // Hark, an actual Singleton!
        if (!ManualStageObserverExtension._manualStageObserver) {
            var containerRegistry = this._injector.get(ContainerRegistry_1.ContainerRegistry);
            this._logger.debug("Creating genuine ManualStageObserver Singleton");
            ManualStageObserverExtension._manualStageObserver = new ManualStageObserver_1.ManualStageObserver(containerRegistry);
        }
    };
    ManualStageObserverExtension.prototype.whenDestroying = function () {
        installCount--;
        if (installCount === 0) {
            this._logger.debug("Destroying genuine ManualStageObserver Singleton");
            ManualStageObserverExtension._manualStageObserver.destroy();
            ManualStageObserverExtension._manualStageObserver = null;
        }
    };
    return ManualStageObserverExtension;
}());
exports.ManualStageObserverExtension = ManualStageObserverExtension;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/StageCrawlerExtension.ts":
/*!******************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/StageCrawlerExtension.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var IContextView_1 = __webpack_require__(/*! ../contextView/api/IContextView */ "./src/robotlegs/bender/extensions/contextView/api/IContextView.ts");
var IViewManager_1 = __webpack_require__(/*! ./api/IViewManager */ "./src/robotlegs/bender/extensions/viewManager/api/IViewManager.ts");
var ContainerRegistry_1 = __webpack_require__(/*! ./impl/ContainerRegistry */ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerRegistry.ts");
var StageCrawler_1 = __webpack_require__(/*! ./impl/StageCrawler */ "./src/robotlegs/bender/extensions/viewManager/impl/StageCrawler.ts");
/**
 * View Handlers (like the MediatorMap) handle views as they land on stage.
 *
 * This extension checks for views that might already be on the stage
 * after context initialization and ensures that those views are handled.
 */
var StageCrawlerExtension = /** @class */ (function () {
    function StageCrawlerExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    StageCrawlerExtension.prototype.extend = function (context) {
        this._injector = context.injector;
        this._logger = context.getLogger(this);
        context.afterInitializing(this.afterInitializing.bind(this));
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    StageCrawlerExtension.prototype.afterInitializing = function () {
        this._containerRegistry = this._injector.get(ContainerRegistry_1.ContainerRegistry);
        this._injector.isBound(IViewManager_1.IViewManager) ? this.scanViewManagedContainers() : this.scanContextView();
    };
    StageCrawlerExtension.prototype.scanViewManagedContainers = function () {
        var _this = this;
        this._logger.debug("ViewManager is installed. Checking for managed containers...");
        var viewManager = this._injector.get(IViewManager_1.IViewManager);
        viewManager.containers.forEach(function (container) {
            _this.scanContainer(container);
        });
    };
    StageCrawlerExtension.prototype.scanContextView = function () {
        if (this._injector.isBound(IContextView_1.IContextView)) {
            this._logger.debug("ViewManager is not installed. Checking the ContextView...");
            var contextView = this._injector.get(IContextView_1.IContextView);
            this.scanContainer(contextView.view);
        }
        else {
            this._logger.error("A ContextView must be installed if you install the StageCrawlerExtension.");
        }
    };
    StageCrawlerExtension.prototype.scanContainer = function (container) {
        var binding = this._containerRegistry.getBinding(container);
        this._logger.debug("StageCrawler scanning container {0} ...", [container]);
        new StageCrawler_1.StageCrawler(binding).scan(container);
        this._logger.debug("StageCrawler finished scanning {0}", [container]);
    };
    return StageCrawlerExtension;
}());
exports.StageCrawlerExtension = StageCrawlerExtension;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/StageObserverExtension.ts":
/*!*******************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/StageObserverExtension.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var ContainerRegistry_1 = __webpack_require__(/*! ./impl/ContainerRegistry */ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerRegistry.ts");
var StageObserver_1 = __webpack_require__(/*! ./impl/StageObserver */ "./src/robotlegs/bender/extensions/viewManager/impl/StageObserver.ts");
var installCount = 0;
/**
 * This extension install an automatic Stage Observer
 */
var StageObserverExtension = /** @class */ (function () {
    function StageObserverExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    StageObserverExtension.prototype.extend = function (context) {
        context.whenInitializing(this.whenInitializing.bind(this));
        context.whenDestroying(this.whenDestroying.bind(this));
        installCount++;
        this._injector = context.injector;
        this._logger = context.getLogger(this);
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    StageObserverExtension.prototype.whenInitializing = function () {
        // Hark, an actual Singleton!
        if (!StageObserverExtension._stageObserver) {
            var containerRegistry = this._injector.get(ContainerRegistry_1.ContainerRegistry);
            this._logger.debug("Creating genuine StageObserver Singleton");
            StageObserverExtension._stageObserver = new StageObserver_1.StageObserver(containerRegistry);
        }
    };
    StageObserverExtension.prototype.whenDestroying = function () {
        installCount--;
        if (installCount === 0) {
            this._logger.debug("Destroying genuine StageObserver Singleton");
            StageObserverExtension._stageObserver.destroy();
            StageObserverExtension._stageObserver = null;
        }
    };
    /*============================================================================*/
    /* Private Static Properties                                                  */
    /*============================================================================*/
    // Really? Yes, there can be only one.
    StageObserverExtension._stageObserver = null;
    return StageObserverExtension;
}());
exports.StageObserverExtension = StageObserverExtension;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/ViewManagerExtension.ts":
/*!*****************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/ViewManagerExtension.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var IViewManager_1 = __webpack_require__(/*! ./api/IViewManager */ "./src/robotlegs/bender/extensions/viewManager/api/IViewManager.ts");
var ViewManager_1 = __webpack_require__(/*! ./impl/ViewManager */ "./src/robotlegs/bender/extensions/viewManager/impl/ViewManager.ts");
var ContainerRegistry_1 = __webpack_require__(/*! ./impl/ContainerRegistry */ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerRegistry.ts");
/**
 * This extension install a View Manager into the context
 */
var ViewManagerExtension = /** @class */ (function () {
    function ViewManagerExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ViewManagerExtension.prototype.extend = function (context) {
        context.whenInitializing(this.whenInitializing.bind(this));
        context.whenDestroying(this.whenDestroying.bind(this));
        this._injector = context.injector;
        // Just one Container Registry
        ViewManagerExtension._containerRegistry = ViewManagerExtension._containerRegistry || new ContainerRegistry_1.ContainerRegistry();
        this._injector.bind(ContainerRegistry_1.ContainerRegistry).toConstantValue(ViewManagerExtension._containerRegistry);
        // But you get your own View Manager
        this._injector
            .bind(IViewManager_1.IViewManager)
            .to(ViewManager_1.ViewManager)
            .inSingletonScope();
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    ViewManagerExtension.prototype.whenInitializing = function () {
        this._viewManager = this._injector.get(IViewManager_1.IViewManager);
    };
    ViewManagerExtension.prototype.whenDestroying = function () {
        this._viewManager.removeAllHandlers();
        this._injector.unbind(IViewManager_1.IViewManager);
        this._injector.unbind(ContainerRegistry_1.ContainerRegistry);
    };
    return ViewManagerExtension;
}());
exports.ViewManagerExtension = ViewManagerExtension;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/api/IViewManager.ts":
/*!*************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/api/IViewManager.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/*[Event(name="containerAdd", type="robotlegs.bender.extensions.viewManager.impl.ViewManagerEvent")]*/
/*[Event(name="containerRemove", type="robotlegs.bender.extensions.viewManager.impl.ViewManagerEvent")]*/
/*[Event(name="handlerAdd", type="robotlegs.bender.extensions.viewManager.impl.ViewManagerEvent")]*/
/*[Event(name="handlerRemove", type="robotlegs.bender.extensions.viewManager.impl.ViewManagerEvent")]*/
/**
 * The View Manager allows you to add multiple "view root" containers to a context
 */
exports.IViewManager = Symbol("IViewManager");


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/impl/ConfigureViewEvent.ts":
/*!********************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/impl/ConfigureViewEvent.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
/**
 * View Configuration Event
 * @private
 */
var ConfigureViewEvent = /** @class */ (function (_super) {
    __extends(ConfigureViewEvent, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a view configuration event
     * @param type The event type
     * @param view The associated view instance
     */
    function ConfigureViewEvent(type, view) {
        var _this = _super.call(this, type, true) || this;
        _this._view = view;
        return _this;
    }
    Object.defineProperty(ConfigureViewEvent.prototype, "view", {
        /**
         * The view instance associated with this event
         */
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ConfigureViewEvent.prototype.clone = function () {
        return new ConfigureViewEvent(this.type, this._view);
    };
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    ConfigureViewEvent.CONFIGURE_VIEW = "configureView";
    return ConfigureViewEvent;
}(core_1.Event));
exports.ConfigureViewEvent = ConfigureViewEvent;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerBinding.ts":
/*!******************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/impl/ContainerBinding.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
var ContainerBindingEvent_1 = __webpack_require__(/*! ./ContainerBindingEvent */ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerBindingEvent.ts");
/*[Event(name="bindingEmpty", type="robotlegs.bender.extensions.viewManager.impl.ContainerBindingEvent")]*/
/**
 * @private
 */
var ContainerBinding = /** @class */ (function (_super) {
    __extends(ContainerBinding, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function ContainerBinding(container) {
        var _this = _super.call(this) || this;
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        _this._handlers = [];
        _this._container = container;
        return _this;
    }
    Object.defineProperty(ContainerBinding.prototype, "parent", {
        /**
         * @private
         */
        get: function () {
            return this._parent;
        },
        /**
         * @private
         */
        set: function (value) {
            this._parent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerBinding.prototype, "container", {
        /**
         * @private
         */
        get: function () {
            return this._container;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    ContainerBinding.prototype.addHandler = function (handler) {
        if (this._handlers.indexOf(handler) > -1) {
            return;
        }
        this._handlers.push(handler);
    };
    /**
     * @private
     */
    ContainerBinding.prototype.removeHandler = function (handler) {
        var index = this._handlers.indexOf(handler);
        if (index > -1) {
            this._handlers.splice(index, 1);
            if (this._handlers.length === 0) {
                this.dispatchEvent(new ContainerBindingEvent_1.ContainerBindingEvent(ContainerBindingEvent_1.ContainerBindingEvent.BINDING_EMPTY));
            }
        }
    };
    /**
     * @private
     */
    ContainerBinding.prototype.handleView = function (view, type) {
        var length = this._handlers.length;
        for (var i = 0; i < length; i++) {
            var handler = this._handlers[i];
            handler.handleView(view, type);
        }
    };
    return ContainerBinding;
}(core_1.EventDispatcher));
exports.ContainerBinding = ContainerBinding;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerBindingEvent.ts":
/*!***********************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/impl/ContainerBindingEvent.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
/**
 * @private
 */
var ContainerBindingEvent = /** @class */ (function (_super) {
    __extends(ContainerBindingEvent, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function ContainerBindingEvent(type) {
        return _super.call(this, type) || this;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ContainerBindingEvent.prototype.clone = function () {
        return new ContainerBindingEvent(this.type);
    };
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    ContainerBindingEvent.BINDING_EMPTY = "bindingEmpty";
    return ContainerBindingEvent;
}(core_1.Event));
exports.ContainerBindingEvent = ContainerBindingEvent;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerRegistry.ts":
/*!*******************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/impl/ContainerRegistry.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
var ContainerBinding_1 = __webpack_require__(/*! ./ContainerBinding */ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerBinding.ts");
var ContainerBindingEvent_1 = __webpack_require__(/*! ./ContainerBindingEvent */ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerBindingEvent.ts");
var ContainerRegistryEvent_1 = __webpack_require__(/*! ./ContainerRegistryEvent */ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerRegistryEvent.ts");
/*[Event(name="containerAdd", type="robotlegs.bender.extensions.viewManager.impl.ContainerRegistryEvent")]*/
/*[Event(name="containerRemove", type="robotlegs.bender.extensions.viewManager.impl.ContainerRegistryEvent")]*/
/*[Event(name="rootContainerAdd", type="robotlegs.bender.extensions.viewManager.impl.ContainerRegistryEvent")]*/
/*[Event(name="rootContainerRemove", type="robotlegs.bender.extensions.viewManager.impl.ContainerRegistryEvent")]*/
/**
 * @private
 */
var ContainerRegistry = /** @class */ (function (_super) {
    __extends(ContainerRegistry, _super);
    function ContainerRegistry() {
        /*============================================================================*/
        /* Public Properties                                                          */
        /*============================================================================*/
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._bindings = [];
        _this._rootBindings = [];
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        _this._bindingByContainer = new Map();
        return _this;
    }
    Object.defineProperty(ContainerRegistry.prototype, "bindings", {
        /**
         * @private
         */
        get: function () {
            return this._bindings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerRegistry.prototype, "rootBindings", {
        /**
         * @private
         */
        get: function () {
            return this._rootBindings;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    ContainerRegistry.prototype.addContainer = function (container) {
        var binding = this._bindingByContainer.get(container);
        if (!binding) {
            binding = this.createBinding(container);
            this._bindingByContainer.set(container, binding);
        }
        return binding;
    };
    /**
     * @private
     */
    ContainerRegistry.prototype.removeContainer = function (container) {
        var binding = this._bindingByContainer.get(container);
        if (binding) {
            this.removeBinding(binding);
        }
        return binding;
    };
    /**
     * Finds the closest parent binding for a given display object
     *
     * @private
     */
    ContainerRegistry.prototype.findParentBinding = function (target) {
        var parent = target.parent;
        while (parent) {
            var binding = this._bindingByContainer.get(parent);
            if (binding) {
                return binding;
            }
            parent = parent.parent;
        }
        return null;
    };
    /**
     * @private
     */
    ContainerRegistry.prototype.getBinding = function (container) {
        return this._bindingByContainer.get(container);
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    ContainerRegistry.prototype.createBinding = function (container) {
        var _this = this;
        var binding = new ContainerBinding_1.ContainerBinding(container);
        this._bindings.push(binding);
        // Add a listener so that we can remove this binding when it has no handlers
        binding.addEventListener(ContainerBindingEvent_1.ContainerBindingEvent.BINDING_EMPTY, this.onBindingEmpty.bind(this));
        // If the new binding doesn't have a parent it is a Root
        binding.parent = this.findParentBinding(container);
        if (binding.parent == null) {
            this.addRootBinding(binding);
        }
        // Reparent any bindings which are contained within the new binding AND
        // A. Don't have a parent, OR
        // B. Have a parent that is not contained within the new binding
        this._bindingByContainer.forEach(function (childBinding) {
            if (container.contains(childBinding.container)) {
                if (!childBinding.parent) {
                    _this.removeRootBinding(childBinding);
                    childBinding.parent = binding;
                }
                else if (!container.contains(childBinding.parent.container)) {
                    childBinding.parent = binding;
                }
            }
        });
        this.dispatchEvent(new ContainerRegistryEvent_1.ContainerRegistryEvent(ContainerRegistryEvent_1.ContainerRegistryEvent.CONTAINER_ADD, binding.container));
        return binding;
    };
    ContainerRegistry.prototype.removeBinding = function (binding) {
        var _this = this;
        // Remove the binding itself
        this._bindingByContainer.delete(binding.container);
        var index = this._bindings.indexOf(binding);
        this._bindings.splice(index, 1);
        // Drop the empty binding listener
        binding.removeEventListener(ContainerBindingEvent_1.ContainerBindingEvent.BINDING_EMPTY, this.onBindingEmpty);
        if (!binding.parent) {
            // This binding didn't have a parent, so it was a Root
            this.removeRootBinding(binding);
        }
        // Re-parent the bindings
        this._bindingByContainer.forEach(function (childBinding) {
            if (childBinding.parent === binding) {
                childBinding.parent = binding.parent;
                if (!childBinding.parent) {
                    // This binding used to have a parent,
                    // but no longer does, so it is now a Root
                    _this.addRootBinding(childBinding);
                }
            }
        });
        this.dispatchEvent(new ContainerRegistryEvent_1.ContainerRegistryEvent(ContainerRegistryEvent_1.ContainerRegistryEvent.CONTAINER_REMOVE, binding.container));
    };
    ContainerRegistry.prototype.addRootBinding = function (binding) {
        this._rootBindings.push(binding);
        this.dispatchEvent(new ContainerRegistryEvent_1.ContainerRegistryEvent(ContainerRegistryEvent_1.ContainerRegistryEvent.ROOT_CONTAINER_ADD, binding.container));
    };
    ContainerRegistry.prototype.removeRootBinding = function (binding) {
        var index = this._rootBindings.indexOf(binding);
        this._rootBindings.splice(index, 1);
        this.dispatchEvent(new ContainerRegistryEvent_1.ContainerRegistryEvent(ContainerRegistryEvent_1.ContainerRegistryEvent.ROOT_CONTAINER_REMOVE, binding.container));
    };
    ContainerRegistry.prototype.onBindingEmpty = function (event) {
        this.removeBinding(event.target);
    };
    return ContainerRegistry;
}(core_1.EventDispatcher));
exports.ContainerRegistry = ContainerRegistry;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerRegistryEvent.ts":
/*!************************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/impl/ContainerRegistryEvent.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
/**
 * Container existence event
 * @private
 */
var ContainerRegistryEvent = /** @class */ (function (_super) {
    __extends(ContainerRegistryEvent, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a new container existence event
     * @param type The event type
     * @param container The container associated with this event
     */
    function ContainerRegistryEvent(type, container) {
        var _this = _super.call(this, type) || this;
        _this._container = container;
        return _this;
    }
    Object.defineProperty(ContainerRegistryEvent.prototype, "container", {
        /**
         * The container associated with this event
         */
        get: function () {
            return this._container;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ContainerRegistryEvent.prototype.clone = function () {
        return new ContainerRegistryEvent(this.type, this._container);
    };
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    ContainerRegistryEvent.CONTAINER_ADD = "containerAdd";
    ContainerRegistryEvent.CONTAINER_REMOVE = "containerRemove";
    ContainerRegistryEvent.ROOT_CONTAINER_ADD = "rootContainerAdd";
    ContainerRegistryEvent.ROOT_CONTAINER_REMOVE = "rootContainerRemove";
    return ContainerRegistryEvent;
}(core_1.Event));
exports.ContainerRegistryEvent = ContainerRegistryEvent;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/impl/ManualStageObserver.ts":
/*!*********************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/impl/ManualStageObserver.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var ContainerRegistryEvent_1 = __webpack_require__(/*! ./ContainerRegistryEvent */ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerRegistryEvent.ts");
var ConfigureViewEvent_1 = __webpack_require__(/*! ./ConfigureViewEvent */ "./src/robotlegs/bender/extensions/viewManager/impl/ConfigureViewEvent.ts");
/**
 * @private
 */
var ManualStageObserver = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function ManualStageObserver(containerRegistry) {
        var _this = this;
        this._registry = containerRegistry;
        // We care about all containers (not just roots)
        this._registry.addEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.CONTAINER_ADD, this.onContainerAdd, this);
        this._registry.addEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.CONTAINER_REMOVE, this.onContainerRemove, this);
        // We might have arrived late on the scene
        this._registry.bindings.forEach(function (binding) {
            _this.addContainerListener(binding.container);
        });
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    ManualStageObserver.prototype.destroy = function () {
        var _this = this;
        this._registry.removeEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.CONTAINER_ADD, this.onContainerAdd, this);
        this._registry.removeEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.CONTAINER_REMOVE, this.onContainerRemove, this);
        this._registry.rootBindings.forEach(function (binding) {
            _this.removeContainerListener(binding.container);
        });
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    ManualStageObserver.prototype.onContainerAdd = function (event) {
        this.addContainerListener(event.container);
    };
    ManualStageObserver.prototype.onContainerRemove = function (event) {
        this.removeContainerListener(event.container);
    };
    ManualStageObserver.prototype.addContainerListener = function (container) {
        // We're interested in ALL container bindings
        // but just for normal, bubbling events
        this._eventListener = this.onConfigureView.bind(this);
        container.addEventListener(ConfigureViewEvent_1.ConfigureViewEvent.CONFIGURE_VIEW, this._eventListener);
    };
    ManualStageObserver.prototype.removeContainerListener = function (container) {
        container.removeEventListener(ConfigureViewEvent_1.ConfigureViewEvent.CONFIGURE_VIEW, this._eventListener);
    };
    ManualStageObserver.prototype.onConfigureView = function (event) {
        // Stop that event!
        event.stopPropagation();
        var container = event.currentTarget;
        var view = event.target;
        var type = view.constructor;
        this._registry.getBinding(container).handleView(view, type);
    };
    return ManualStageObserver;
}());
exports.ManualStageObserver = ManualStageObserver;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/impl/StageCrawler.ts":
/*!**************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/impl/StageCrawler.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 */
var StageCrawler = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function StageCrawler(containerBinding) {
        this._binding = containerBinding;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    StageCrawler.prototype.scan = function (container) {
        this.scanContainer(container);
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    StageCrawler.prototype.scanContainer = function (container) {
        var _this = this;
        this.processView(container);
        container.children.forEach(function (child) {
            if (child instanceof createjs.Container) {
                _this.scanContainer(child);
            }
            else {
                _this.processView(child);
            }
        });
    };
    StageCrawler.prototype.processView = function (view) {
        this._binding.handleView(view, view.constructor);
    };
    return StageCrawler;
}());
exports.StageCrawler = StageCrawler;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/impl/StageObserver.ts":
/*!***************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/impl/StageObserver.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var ContainerRegistryEvent_1 = __webpack_require__(/*! ./ContainerRegistryEvent */ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerRegistryEvent.ts");
/**
 * @private
 */
var StageObserver = /** @class */ (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function StageObserver(containerRegistry) {
        var _this = this;
        this._registry = containerRegistry;
        // We only care about roots
        this._registry.addEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.ROOT_CONTAINER_ADD, this.onRootContainerAdd, this);
        this._registry.addEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.ROOT_CONTAINER_REMOVE, this.onRootContainerRemove, this);
        // We might have arrived late on the scene
        this._registry.rootBindings.forEach(function (binding) {
            _this.addRootListener(binding.container);
        });
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    StageObserver.prototype.destroy = function () {
        var _this = this;
        this._registry.removeEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.ROOT_CONTAINER_ADD, this.onRootContainerAdd, this);
        this._registry.removeEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.ROOT_CONTAINER_REMOVE, this.onRootContainerRemove, this);
        this._registry.rootBindings.forEach(function (binding) {
            _this.removeRootListener(binding.container);
        });
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    StageObserver.prototype.onRootContainerAdd = function (event) {
        this.addRootListener(event.container);
    };
    StageObserver.prototype.onRootContainerRemove = function (event) {
        this.removeRootListener(event.container);
    };
    StageObserver.prototype.addRootListener = function (container) {
        this._containerListener = this.onViewAddedToStage.bind(this);
        container.addEventListener("added", this._containerListener);
    };
    StageObserver.prototype.removeRootListener = function (container) {
        container.removeEventListener("added", this._containerListener);
    };
    StageObserver.prototype.onViewAddedToStage = function (event) {
        var view = event.data;
        var type = view.constructor;
        // Walk upwards from the nearest binding
        var binding = this._registry.findParentBinding(view);
        while (binding) {
            binding.handleView(view, type);
            binding = binding.parent;
        }
    };
    return StageObserver;
}());
exports.StageObserver = StageObserver;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/impl/ViewManager.ts":
/*!*************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/impl/ViewManager.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
var ViewManagerEvent_1 = __webpack_require__(/*! ./ViewManagerEvent */ "./src/robotlegs/bender/extensions/viewManager/impl/ViewManagerEvent.ts");
var ContainerRegistry_1 = __webpack_require__(/*! ./ContainerRegistry */ "./src/robotlegs/bender/extensions/viewManager/impl/ContainerRegistry.ts");
/*[Event(name="containerAdd", type="robotlegs.bender.extensions.viewManager.impl.ViewManagerEvent")]*/
/*[Event(name="containerRemove", type="robotlegs.bender.extensions.viewManager.impl.ViewManagerEvent")]*/
/*[Event(name="handlerAdd", type="robotlegs.bender.extensions.viewManager.impl.ViewManagerEvent")]*/
/*[Event(name="handlerRemove", type="robotlegs.bender.extensions.viewManager.impl.ViewManagerEvent")]*/
/**
 * @private
 */
var ViewManager = /** @class */ (function (_super) {
    __extends(ViewManager, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function ViewManager(containerRegistry) {
        var _this = _super.call(this) || this;
        /*============================================================================*/
        /* Public Properties                                                          */
        /*============================================================================*/
        _this._containers = [];
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        _this._handlers = [];
        _this._registry = containerRegistry;
        return _this;
    }
    Object.defineProperty(ViewManager.prototype, "containers", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._containers;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ViewManager.prototype.addContainer = function (container) {
        var _this = this;
        if (!this.validContainer(container)) {
            return;
        }
        this._containers.push(container);
        this._handlers.forEach(function (handler) {
            _this._registry.addContainer(container).addHandler(handler);
        });
        this.dispatchEvent(new ViewManagerEvent_1.ViewManagerEvent(ViewManagerEvent_1.ViewManagerEvent.CONTAINER_ADD, container));
    };
    /**
     * @inheritDoc
     */
    ViewManager.prototype.removeContainer = function (container) {
        var index = this._containers.indexOf(container);
        if (index === -1) {
            return;
        }
        this._containers.splice(index, 1);
        var binding = this._registry.getBinding(container);
        this._handlers.forEach(function (handler) {
            binding.removeHandler(handler);
        });
        this.dispatchEvent(new ViewManagerEvent_1.ViewManagerEvent(ViewManagerEvent_1.ViewManagerEvent.CONTAINER_REMOVE, container));
    };
    /**
     * @inheritDoc
     */
    ViewManager.prototype.addViewHandler = function (handler) {
        var _this = this;
        if (this._handlers.indexOf(handler) !== -1) {
            return;
        }
        this._handlers.push(handler);
        this._containers.forEach(function (container) {
            _this._registry.addContainer(container).addHandler(handler);
        });
        this.dispatchEvent(new ViewManagerEvent_1.ViewManagerEvent(ViewManagerEvent_1.ViewManagerEvent.HANDLER_ADD, null, handler));
    };
    /**
     * @inheritDoc
     */
    ViewManager.prototype.removeViewHandler = function (handler) {
        var _this = this;
        var index = this._handlers.indexOf(handler);
        if (index === -1) {
            return;
        }
        this._handlers.splice(index, 1);
        this._containers.forEach(function (container) {
            _this._registry.getBinding(container).removeHandler(handler);
        });
        this.dispatchEvent(new ViewManagerEvent_1.ViewManagerEvent(ViewManagerEvent_1.ViewManagerEvent.HANDLER_REMOVE, null, handler));
    };
    /**
     * @inheritDoc
     */
    ViewManager.prototype.removeAllHandlers = function () {
        var _this = this;
        var binding = null;
        this._containers.forEach(function (container) {
            binding = _this._registry.getBinding(container);
            _this._handlers.forEach(function (handler) {
                binding.removeHandler(handler);
            });
        });
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    ViewManager.prototype.validContainer = function (container) {
        var isValid = this._containers.indexOf(container) < 0;
        if (isValid) {
            this._containers.forEach(function (registeredContainer) {
                if (registeredContainer.contains(container) || container.contains(registeredContainer)) {
                    throw new Error("Containers can not be nested");
                }
            });
        }
        return isValid;
    };
    ViewManager = __decorate([
        core_1.injectable(),
        __param(0, core_1.inject(ContainerRegistry_1.ContainerRegistry)),
        __metadata("design:paramtypes", [ContainerRegistry_1.ContainerRegistry])
    ], ViewManager);
    return ViewManager;
}(core_1.EventDispatcher));
exports.ViewManager = ViewManager;


/***/ }),

/***/ "./src/robotlegs/bender/extensions/viewManager/impl/ViewManagerEvent.ts":
/*!******************************************************************************!*\
  !*** ./src/robotlegs/bender/extensions/viewManager/impl/ViewManagerEvent.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @robotlegsjs/core */ "./node_modules/@robotlegsjs/core/lib/index.js");
/**
 * Container existence event
 * @private
 */
var ViewManagerEvent = /** @class */ (function (_super) {
    __extends(ViewManagerEvent, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a view manager event
     * @param type The event type
     * @param container The container associated with this event
     * @param handler The view handler associated with this event
     */
    function ViewManagerEvent(type, container, handler) {
        var _this = _super.call(this, type) || this;
        _this._container = container;
        _this._handler = handler;
        return _this;
    }
    Object.defineProperty(ViewManagerEvent.prototype, "container", {
        /**
         * The container associated with this event
         */
        get: function () {
            return this._container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewManagerEvent.prototype, "handler", {
        /**
         * The view handler associated with this event
         */
        get: function () {
            return this._handler;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ViewManagerEvent.prototype.clone = function () {
        return new ViewManagerEvent(this.type, this._container, this._handler);
    };
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    ViewManagerEvent.CONTAINER_ADD = "containerAdd";
    ViewManagerEvent.CONTAINER_REMOVE = "containerRemove";
    ViewManagerEvent.HANDLER_ADD = "handlerAdd";
    ViewManagerEvent.HANDLER_REMOVE = "handlerRemove";
    return ViewManagerEvent;
}(core_1.Event));
exports.ViewManagerEvent = ViewManagerEvent;


/***/ })

/******/ });
//# sourceMappingURL=game.906810b7ee13a4f096ee.js.map