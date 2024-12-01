const mongoose = require('mongoose')

const tasksModel = require('../models/tasks')

// function to get all the tasks that have been created so far

const Get_All_Tasks = async (req,res)=>{
    
    const tasks = await tasksModel.find({}).sort({createdAt:-1})

    if (!tasks){
        return res.status(404).json({error:"Opps tasks not found"})
    }

    return res.status(200).json(tasks)
}

// function to get a single task by it's id

const Get_Single_Task = async (req,res)=>{
    
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){

        return res.status(400).json({error:"Invalid Id"})
    }

    const task = await tasksModel.findById(id)

    if (!task){
        return res.status(404).json({error:"Opps can't find the specified tasks"})
    }

    return res.status(200).json(task)
}

// function to create a task

const Create_Task = async (req,res)=>{

    const { title,description,dueDate,assignee,status,priority,tags,comments,attachements,createdBy,createdAt,updatedAt } = req.body

    try{
        const task = await tasksModel.create({ title,description,dueDate,assignee,status,priority,tags,comments,attachements,createdBy,createdAt,updatedAt })
        return res.status(200).json(task)
    }

    catch (error) {
        return res.status(505).json({error: error.message})
    }


}


module.exports = {Get_All_Tasks,Get_Single_Task,Create_Task}