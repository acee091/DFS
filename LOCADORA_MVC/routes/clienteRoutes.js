const express = require('express')
const router = express.Router()
const ClienteController = require('../controllers/clienteController')

router.get('client', ClienteController.registerCliente)
router.post('client', ClienteController.registerClienteSave)
router.get('consultacliente', ClienteController.queryCliente)

module.exports = router