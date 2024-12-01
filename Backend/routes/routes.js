const express = require('express')

const router = express.Router()

const {Get_All_Tasks,Get_Single_Task,Create_Task} = require('../controllers/tasks')

// Get all tasks for manager

router.get('/tasks',Get_All_Tasks)

// Get a single task for manager

router.get('/task/:id',Get_Single_Task)

// Create a task

router.post('/create-task',Create_Task)

module.exports = router