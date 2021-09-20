"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cors = _interopRequireDefault(require("cors"));

var _cors2 = _interopRequireDefault(require("../config/cors.js"));

var _nasa = _interopRequireDefault(require("../routes/nasa.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initializer = {
  init: function init(app) {
    app.use((0, _cors["default"])(_cors2["default"]));
    app.use('/nasa', _nasa["default"]);
  }
};
var _default = initializer;
exports["default"] = _default;