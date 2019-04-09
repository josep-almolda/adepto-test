'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _shiftController = require('./Controllers/shiftController');

var _shiftController2 = _interopRequireDefault(_shiftController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Staff Shifts crafted with love!'
    });
});

// Shift Routes
router.route('/shifts').get(_shiftController2.default.index).post(_shiftController2.default.new);
router.route('/shifts/:id').get(_shiftController2.default.view).patch(_shiftController2.default.update).put(_shiftController2.default.update).delete(_shiftController2.default.delete);

exports.default = router;