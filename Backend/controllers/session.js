const mongoose = require('mongoose')

const userModel = require('../models/users')

// function for user sign up

const User_Sign_Up = async (req,res)=>{

    const {name,email,password,role} = req.body
    let session = req.session

    if (!name || !email){
        return res.status(400).json({error:"bad request"})
    }

    const old_user = await userModel.findOne({email:email})

    if (old_user){
        return res.status(400).json({error:"User already exist by this email"})
    }

    try {
        
        const user = await userModel.create({name,email,password,role})
        session.username = user.name
        session.email = user.email
        session.id = user._id
        session.password = user.password
        session.role = user.role
        return res.status(200).json(user)
    }

    catch(e){
        return res.status(500).json({error:e})
    }

}

// function for user login

const User_Log_In = async (req,res)=>{

    const {email,password} = req.body

    const session = req.session

    if (session.email){
        res.status(200).json({mssg:"User already in session"})
    }

    const user = await userModel.findOne({email:email})

    if (!user){
        return res.status(404).json({error:"User not found. Please check ur email"})
    }

    if (user.password!==password){
        return res.status(400).json({error:"Invalid credential"})
    }

    session.username = user.name
    session.email = user.email
    session.id = user._id
    session.password = user.password
    session.role = user.role

    return res.status(200).json(session)

}

module.exports = {User_Sign_Up,User_Log_In}