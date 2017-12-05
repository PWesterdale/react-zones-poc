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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _zones = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var comp = function comp(props) {
    return _react2.default.createElement(
        'div',
        null,
        'I\'m Injected, But I\'m using props from my parent (props.extId = ',
        props.extId,
        ')'
    );
};

var Nothing = function (_React$Component) {
    _inherits(Nothing, _React$Component);

    function Nothing() {
        _classCallCheck(this, Nothing);

        return _possibleConstructorReturn(this, (Nothing.__proto__ || Object.getPrototypeOf(Nothing)).apply(this, arguments));
    }

    _createClass(Nothing, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('I don\'t even have to render');
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Nothing;
}(_react2.default.Component);

(0, _zones.onInit)('test').then(function (e) {
    (0, _zones.add)('test', 'injected', comp);
    setTimeout(function () {
        (0, _zones.add)('test', 'nothing', Nothing);
    }, 1000);
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.init = init;
exports.onInit = onInit;
exports.add = add;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Zone = function () {
    function Zone(id) {
        _classCallCheck(this, Zone);

        this.id = id;
        this.children = [];
        this.keyed = {};
    }

    _createClass(Zone, [{
        key: 'add',
        value: function add(key, component) {
            this.keyed[key] = component;
            this.children.push({ c: component, key: key });
        }
    }]);

    return Zone;
}();

function init(instance, zId) {
    var ev = new CustomEvent('zone.' + zId + '.ready');
    window.dispatchEvent(ev);
    addListener(instance, zId);
}

function onInit(zId) {
    return new Promise(function (resolve, reject) {
        window.addEventListener('zone.' + zId + '.ready', function (e) {
            return resolve(e);
        });
    });
}

function add(zId, key, component) {
    return new Promise(function (resolve, reject) {
        var ev = new CustomEvent('zone.' + zId + '.add', {
            detail: { key: key, component: component }
        });
        window.dispatchEvent(ev);
    });
}

function addListener(instance, zId) {
    if (!instance.zone) {
        instance.zone = new Zone(zId);instance.state = { zoneUpdates: 0 };
    };
    window.addEventListener('zone.' + zId + '.add', function (e) {
        instance.zone.add(e.detail.key, e.detail.component);
        instance.setState({
            'zoneUpdates': instance.state.zoneUpdates + 1
        });
    });
}

/***/ })

/******/ });