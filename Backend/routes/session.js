const express = require('express')

const router = express.Router()

const {User_Sign_Up,User_Log_In} = require('../controllers/session')

// user sign up

router.post('/signup',User_Sign_Up)

// use log in

router.get('/login',User_Log_In)

module.exports = router