import express from 'express'
import shiftController from './Controllers/shiftController'

const router = express.Router()

// Set default API response
router.get('/', (req, res) => {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to Staff Shifts crafted with love!',
     })
})

// Shift Routes
router.route('/shifts')
    .get(shiftController.index)
    .post(shiftController.new)
router.route('/shifts/:id')
    .get(shiftController.view)
    .patch(shiftController.update)
    .put(shiftController.update)
    .delete(shiftController.delete)

export default router