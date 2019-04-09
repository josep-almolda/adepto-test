"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Shift = require("../Models/Shift");

var _Shift2 = _interopRequireDefault(_Shift);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// GET: list of shifts
var index = function index(req, res) {
    _Shift2.default.get(function (err, shifts) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "Shifts retrieved successfully",
            data: shifts
        });
    });
};

// POST: create new shift
var _new = function _new(req, res) {
    console.log('***REQUEST***\n\n\n', req.body);
    var shift = new _Shift2.default.Shift();
    shift.day = req.body.day;
    shift.requiredRole = req.body.requiredRole;
    shift.hours = req.body.hours;

    shift.save(function (err) {
        if (err) {
            res.send("err");
        } else {
            res.json({
                message: 'New contact created!',
                data: shift
            });
        }
    });
};

// GET: Get one shift by id
var view = function view(req, res) {
    _Shift2.default.findById(req.params.id, function (err, shift) {
        if (err) res.send(err);
        res.json({
            message: 'Shift details loading..',
            data: shift
        });
    });
};

// PUT: Update a shift
var update = function update(req, res) {
    _Shift2.default.findById(req.params.id, function (err, shift) {
        if (err) res.send(err);
        shift.day = req.body.day;
        shift.requiredRole = req.body.requiredRole;
        shift.hours = req.body.hours;

        shift.save(function (err) {
            if (err) res.json(err);
            res.json({
                message: 'Shift Info updated',
                data: contact
            });
        });
    });
};

// DELETE: delete a shift
var _delete = function _delete(req, res) {
    _Shift2.default.remove({
        _id: req.params.id
    }, function (err, shift) {
        if (err) res.send(err);
        res.json({
            status: "success",
            message: 'Shift deleted'
        });
    });
};

exports.default = {
    index: index,
    new: _new,
    view: view,
    update: update,
    delete: _delete
};