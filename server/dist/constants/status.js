"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STATUS_MSG = exports.STATUS_CODE = void 0;
var STATUS_CODE = {
  OK: 200,
  CLIENT_ERROR: 400,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  TRANSLATE_ERROR: 'TRANSLATE_FAIL'
};
exports.STATUS_CODE = STATUS_CODE;
var STATUS_MSG = {
  SERVER_ERROR: 'SERVER_ERROR',
  CLIENT_ERROR: 'CLIENT_ERROR',
  OK: 'SUCCESS',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};
exports.STATUS_MSG = STATUS_MSG;