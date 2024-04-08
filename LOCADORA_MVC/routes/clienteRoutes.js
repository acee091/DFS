const express = require('express')
const router = express.Router()
const ClienteController = require('../controllers/clienteController')

router.get('/register', ClienteController.registerCliente)
router.post('/register', ClienteController.registerClienteSave)
router.get('/consulta', ClienteController.queryCliente)
router.get('/inicio', ClienteController.inicioCliente)

module.exports = router