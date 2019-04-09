import Shift from '../Models/Shift'

// GET: list of shifts
const index = (req, res) => {
    Shift.get((err, shifts) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Shifts retrieved successfully",
            data: shifts
        })
    })
}

// POST: create new shift
const _new = (req, res) => {
    var shift = new Shift.Shift()
    shift.day = req.body.day
    shift.requiredRole = req.body.requiredRole
    shift.hours = req.body.hours

    shift.save(err => {
        if (err) {
            res.send("err");
        }
        else {
            res.json({
                message: 'New contact created!',
                data: shift,
            })
        }
    })
}

// GET: Get one shift by id
const view = (req, res) => {
    Shift.findById(req.params.id, (err, shift) => {
        if (err) res.send(err)
        res.json({
            message: 'Shift details loading..',
            data: shift,
        })
    })
}

// PUT: Update a shift
const update = (req, res) => {
    Shift.findById(req.params.id, (err, shift) => {
        if (err) res.send(err);
        shift.day = req.body.day
        shift.requiredRole = req.body.requiredRole
        shift.hours = req.body.hours

        shift.save(err => {
            if (err)
                res.json(err)
            res.json({
                message: 'Shift Info updated',
                data: contact,
            })
        })
    })
}

// DELETE: delete a shift
const _delete = function (req, res) {
    Shift.remove({
        _id: req.params.id
    }, (err, shift) => {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Shift deleted',
        })
    })
}

export default {
    index,
    new: _new,
    view,
    update,
    delete: _delete
}