
const express = require('express');
 
const { DatabaseConnection }=require('./connection');

const { logReq } = require("./middlewares/user");

const app = express(); 

const  userRouter  = require('./routes/user')

//Schema

DatabaseConnection('mongodb://127.0.0.1:27017/youtube-app-1').then(()=>console.log('Database is connected'));

// // mongoose.connection
// mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
// .then(()=>console.log('Mongodb connected'))
// .catch(err=>console.log("this is the error ",err))

//Schema

app.use(express.urlencoded({extended:false}));

app.use(logReq('log.txt'))

app.use('/api/users',userRouter)

app.listen(8000,()=>console.log('server started'));