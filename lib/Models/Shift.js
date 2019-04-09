'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var shiftSchema = (0, _mongoose.Schema)({
    day: {
        type: String,
        required: true,
        enum: ['SAT', 'SUN']
    },
    requiredRole: {
        type: String,
        required: true,
        enum: ['Manager', 'Chef', 'Dishwasher', 'Cook']
    },
    hours: Number
});

var Shift = (0, _mongoose.model)('contact', shiftSchema);

var get = function get(callback, limit) {
    Shift.find(callback).limit(limit);
};

exports.default = {
    Shift: Shift,
    get: get
};