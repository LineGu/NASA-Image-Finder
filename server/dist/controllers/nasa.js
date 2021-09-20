"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _language = _interopRequireDefault(require("../constants/language"));

var _index = require("../utils/index");

var _status = require("../constants/status");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var nasaController = {
  getNasaImg: function getNasaImg(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _req$query, text, pageNum, searchText, result, _err$response$status, status;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$query = req.query, text = _req$query.q, pageNum = _req$query.page;
              searchText = text;

              if (!(0, _index.isKorean)(text)) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return (0, _index.translateText)(_language["default"].ENGLISH, _language["default"].KOREAN, text);

            case 6:
              searchText = _context.sent;

            case 7:
              _context.next = 9;
              return (0, _index.getImgData)(searchText, pageNum);

            case 9:
              result = _context.sent;
              res.status(_status.STATUS_CODE.OK).json({
                result: result,
                msg: _status.STATUS_MSG.OK
              });
              _context.next = 19;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              status = ((_err$response$status = _context.t0.response.status) !== null && _err$response$status !== void 0 ? _err$response$status : _context.t0.request) ? _context.t0.request.res.statusCode : _context.t0.message;
              if (_status.STATUS_CODE.CLIENT_ERROR <= status < _status.STATUS_CODE.SERVER_ERROR) res.json({
                msg: _status.STATUS_MSG.CLIENT_ERROR
              });
              if (_status.STATUS_CODE.SERVER_ERROR <= status) res.json({
                msg: _status.STATUS_MSG.SERVER_ERROR
              });
              res.json({
                msg: _status.STATUS_MSG.UNKNOWN_ERROR
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }))();
  }
};
var _default = nasaController;
exports["default"] = _default;