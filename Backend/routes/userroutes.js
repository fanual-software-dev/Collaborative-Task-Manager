const express = require('express')

const router = express.Router()

const {Get_All_Users,Get_Single_User,Create_User} = require('../controllers/users')

// get all users

router.get('/users',Get_All_Users)

// get single user

router.get('/user/:id',Get_Single_User)

// create a user

router.post('/create-user/:id',Create_User)

//trying to check git configuration

module.exports = router