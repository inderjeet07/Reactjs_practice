const http=require("http");
const fs= require("fs");
const url=require("url");
const { log } = require("console");
const mongoose = require("mongoose");
const express=require('express');
const users=require('./MOCK_DATA.json')
const { type } = require("os");
const { stringify } = require("querystring");



const {DataBaseConnections} = require("./connections");

const {User} = require('./models/user');

const userRouter = require('./routes/user')

const app = express();

app.use(express.urlencoded({extended:false}));


DataBaseConnections('mongodb://127.0.0.1:27017/youtube-app-1').then(()=>console.log('Database is connected'));

app.use('/api/users',userRouter)

app.listen(8010,()=>console.log('server started'));