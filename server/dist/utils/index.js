"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImgData = exports.translateText = exports.isEnglish = exports.isKorean = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _papago = _interopRequireDefault(require("../config/papago.js"));

var _status = require("../constants/status");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isKorean = function isKorean(text) {
  var koreanType = /^[0-9가-힣\s]+$/;
  return koreanType.test(text);
};

exports.isKorean = isKorean;

var isEnglish = function isEnglish(text) {
  var englishType = /^[A-Za-z0-9\s]+$/;
  return englishType.test(text);
};

exports.isEnglish = isEnglish;

var translateText = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(target, source, text) {
    var languageConfig, result, translatedText;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            languageConfig = {
              target: target,
              source: source
            };
            _context.next = 4;
            return _axios["default"].post('https://openapi.naver.com/v1/papago/n2mt', _objectSpread(_objectSpread({}, languageConfig), {}, {
              text: text
            }), {
              headers: _papago["default"]
            });

          case 4:
            result = _context.sent;
            translatedText = result.data.message.result.translatedText;

            if (!isEnglish(translatedText)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", translatedText);

          case 10:
            throw new Error(_status.STATUS_MSG.CLIENT_ERROR);

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function translateText(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.translateText = translateText;

var getImgData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(text, page) {
    var _yield$axios$get, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _axios["default"].get("https://images-api.nasa.gov/search?q=".concat(text, "&media_type=image&page=").concat(page));

          case 3:
            _yield$axios$get = _context2.sent;
            data = _yield$axios$get.data;
            return _context2.abrupt("return", data.collection);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getImgData(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getImgData = getImgData;