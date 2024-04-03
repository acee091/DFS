const express = require('express')
const router = express.Router()
const CarController = require('../controllers/carController')

router.get('/register', CarController.registerCar)
router.post('/register', CarController.registerCarSave)

module.exports = router