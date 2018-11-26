"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.listen(4000, function () {
  console.log('Listening');
});