const express = require('express');

const fs=require("fs");

const app = express();

const mongoose=require("mongoose");

const {User} = require("./models/user");

const  userRouter  = require('./routes/user');

const bitlyRoter = require('./routes/bitlylink');

const bodyParser = require('body-parser')

app.use(bodyParser.json());

const PORT=8000;

const {DataBaseConnection} = require('./connections');

DataBaseConnection('mongodb://localhost:27017/NodeBackend').then(()=>console.log('datbase is working fine'));;

app.use(express.urlencoded({extended:true}));

app.use('/api/users',userRouter);

app.use('/bitly',bitlyRoter)

app.listen(PORT,()=> console.log(`server is started ${PORT}`));
