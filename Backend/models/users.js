const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UsersModel = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    avatar: { type: String },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'task' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('user',UsersModel)

