const authController = require('../controllers/auth')
const express = require('express')
const router = express.Router()

router.get('/register', authController.register)
router.get('/login', authController.login)
router.get('/profile', authController.UserQuery)
router.post('/register', authController.UserRegister)
router.post('/delete', authController.UserDelete)
router.post('/update', authController.UserUpdate)
router.post('/login', authController.UserLogin)

module.exports = router