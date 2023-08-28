const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller');

router 
    .get('/', appointmentController.get)
    .get('/:id', appointmentController.getById)
    .post('/', appointmentController.create)
    .put('/:id', appointmentController.update)
    .delete('/:id', appointmentController._delete);

module.exports = router;