'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _sourceMapSupport = require('source-map-support');

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sourceMapSupport2.default.install();
var path = require('path');

var app = (0, _express2.default)();
app.use(_express2.default.static('static'));

app.get('*', function (req, res) {
    res.sendFile(path.resolve('../static/'));
});

app.listen(3000, function () {
    return console.log('App started at port 3000');
});