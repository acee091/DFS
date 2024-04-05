const express = require('express')
const router = express.Router()
const ReservaController = require('../controllers/reservaController')

router.get('/reserva', ReservaController.registerReserva)
router.post('/reserva', ReservaController.registerReservaSave)
router.get('/consultareserva', ReservaController.queryReserva)

module.exports = router