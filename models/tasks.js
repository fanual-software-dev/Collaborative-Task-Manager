const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tasksModel = new Schema({
    title: {
        type:String,
        required: true
    },

    description: {
        type:String,
        required: true
    },

    givento:{
        type:Number,
    },

    endDate:{
        type:Number,
        required:true
    }



},{timestamps:true})

module.exports = mongoose.model('task',tasksModel)