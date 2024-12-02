require('dotenv').config()

const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const DB_URI = process.env.MONGO_URI
const Secret = process.env.SECRET
const taskRouter = require('./routes/routes')
const userRouter = require('./routes/userroutes')
const sessionRouter = require('./routes/session')
const app = express()

mongoose.connect(DB_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Connected to DB && listening to port`,process.env.PORT)
        })
    })

    .catch((Error)=>{
        console.log(Error.message,"Here is the error")
    })

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use(express.json())

app.use(session({
    secret:Secret,
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge: 10*60*1000}
}))

app.use('/api',taskRouter)
app.use('/api',userRouter)
app.use('/',sessionRouter)
