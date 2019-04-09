import { Schema, model } from 'mongoose'

var shiftSchema = Schema({
    day: {
        type: String,
        required: true,
        enum: ['SAT', 'SUN'],
    },
    requiredRole: {
        type: String,
        required: true,
        enum: ['Manager', 'Chef', 'Dishwasher', 'Cook'],
    },
    hours: Number,
})

const Shift = model('contact', shiftSchema)

const get = (callback, limit) => {
    Shift.find(callback).limit(limit)
}

export default {
    Shift,
    get
}