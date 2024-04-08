const express = require('express')
const router = express.Router()
const ReservaController = require('../controllers/reservaController')

router.get('/register', ReservaController.registerReserva)
router.post('/register', ReservaController.registerReservaSave)
router.get('/consulta', ReservaController.queryReserva)
router.get('/inicio', ReservaController.inicioReserva)

module.exports = router