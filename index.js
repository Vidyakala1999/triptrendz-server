// import env file
require('dotenv').config()

// 1. import express
const express=require('express')
const router = require('./routes/router')
const cors = require('cors')


// 2. create server using express
const server=express()

// integrate Front-End
server.use(cors())

// to convert json to .js
server.use(express.json())

// router set
server.use(router)

// import connection.js file
require('./db/connection')

// server run
// port
const port=4000 || process.env.port

server.listen(port,()=>{
    console.log(`__________server started at port number ${port}__________`);
})