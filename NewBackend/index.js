const http=require("http");
const fs= require("fs");
const url=require("url");
const { log } = require("console");
const mongoose = require("mongoose");
const express=require('express');
const { type } = require("os");
const { stringify } = require("querystring");

const app = express();

// mongoose.connection
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>console.log('Mongodb connected'))
.catch(err=>console.log("this is the error ",err))

//Schema

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    jobTitle:{
        type:String
    },
    gender:{
        type:String
    }

})

const User = mongoose.model('user',userSchema)

app.get('/',(req,res)=>{

return res.send("Hello This is Homepage")

});

app.get('/about',(req,res)=>{
    return res.send(`This is the aboutpage and hey ${req.query.name}`)
});

app.listen(8001,()=>{
    console.log("server is running");
})

// const NewBackend=http.createServer((req,res)=>{

//     if(req.url==='/favicon.ico') return res.end();
//     // console.log("New Request recive",req.headers);
//     const log = `${Date.now()}: New Req Recived\n`

//     const myUrl= url.parse(req.url,true)

//     // console.log("myUrl==========",myUrl)


//     fs.appendFile('log.txt',log,(err,data)=>{

//         switch(myUrl.pathname){
//             case '/':
//                 res.end('This is homepage');
//                 break;
//             case '/about':
//                 res.end('This is inderjeet');
//                 break;
//             case '/contact':
//                 res.end('This is contact page');
//                 break;
//             default:
//                 res.end('404 page not found');
//                 break;
//         }
        
//     })
// });
// NewBackend.listen(8000,()=>console.log('server started'));