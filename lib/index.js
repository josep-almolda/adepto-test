'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apiRoutes = require('./api-routes');

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || 8080;

app.use(_bodyParser2.default.urlencoded({
     extended: true
}));

app.use(_bodyParser2.default.json());

_mongoose2.default.connect('mongodb+srv://dbUser:dbUserPassword@cluster0-yfipl.mongodb.net/test?retryWrites=true');

var db = _mongoose2.default.connection;

app.get('/', function (req, res) {
     return res.send('Hello World with Express');
});

app.use('/api', _apiRoutes2.default);

app.listen(port, function () {
     console.log('Running Staff Shifts on port: ' + port);
});