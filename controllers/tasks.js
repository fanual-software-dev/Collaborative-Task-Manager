const mongoose = require('mongoose')

const tasksModel = require('../models/tasks')

const Get_All_Tasks = async ()=>{
    console.log('get all tasks')
}

const Get_Single_Task = async ()=>{
    console.log('get single task')
}


module.exports = {Get_All_Tasks,Get_Single_Task}