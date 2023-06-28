const express= require('express')
const app= express()
const mongoose= require('mongoose')
const route= require('./route/route.js')
require('dotenv').config()
const cors= require('cors')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
mongoose.connect(process.env.mongodbString, {useNewUrlParser:true}).then(()=>console.log("mongodb connected successfuly")).catch((err)=>console.log(err.message))
app.use('/',route)
app.listen(process.env.PORT||8080, ()=>{
    console.log("server has started on the port :" ,process.env.PORT||8080)
})
