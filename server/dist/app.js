"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./initializer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var startServer = function startServer() {
  var app = (0, _express["default"])();
  var SERVER_PORT = process.env.SERVER_PORT;

  _index["default"].init(app);

  app.listen(SERVER_PORT, function () {
    return console.log('SUCCESS');
  });
};

startServer();