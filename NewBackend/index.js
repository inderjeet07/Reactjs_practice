const http=require("http");
const fs= require("fs");
const url=require("url");
const { log } = require("console");
const mongoose = require("mongoose");
const express=require('express');
const users=require('./MOCK_DATA.json')
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

// mongoose.connection
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>console.log('Mongodb connected'))
.catch(err=>console.log("this is the error ",err))

//Schema

// const userSchema= new mongoose.Schema({
//     firstName:{
//         type:String,
//         required:true
//     },
//     lastName:{
//         type:String
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     jobTitle:{
//         type:String
//     },
//     gender:{
//         type:String
//     }

// })

// const User = mongoose.model('user',userSchema)

app.use(express.urlencoded({extended:false}))


// app.get('/users',(req,res)=>{
//     return(
//         res.json(users)
//     )
// });
// app.get('/users/:id',(req,res)=>{
//     console.log("request paramter_id",req.params.id)
//     const current_user = users.find((obj)=>(obj.id === Number(req.params.id)))
//     // console.log("current-user-details",current_user)
//     return(
//         res.json(current_user)
//     )
// })
// .post('users/:id',(req,res)=>{
//     return res.json({status:"pending"})
// })
// .patch('users/:id',(req,res)=>{
//     return res.json({status:"pending"})
// });

// app.listen(8000,()=>console.log('server start'))



// app.get('/',(req,res)=>{

// return res.send("Hello This is Homepage")

// });

// app.get('/about',(req,res)=>{
//     return res.send(`This is the aboutpage and hey ${req.query.name}`)
// });

// app.listen(8001,()=>{
//     console.log("server is running");
// })

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

app.get('/api/users',(req,res)=>{
    return(res.json(users));
});

app.post('/api/users',async (req,res)=>{
    const body_response=req.body;
    const result = await User.create({
     firstName:body_response.firstName,
     lastName:body_response.lastName,
     email:body_response.email,
     jobTitle:body_response.jobTitle
    });

    console.log("resuluttt",result)

    return res.status(201).json({msg:"succcess"});

    
    // users.push({...body_response,id:users.length+1});
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{

    //     console.log("bodyy-----------",body_response)
    //     res.json({status:"success"})
    // });
   
})

app.get('/api/users/:id',(req,res)=>{

    const current_user = users.find((obj)=>(obj.id === Number(req.params.id)));

    console.log("current_user==========",current_user)

    return(
        res.json(current_user)
    )

})
.patch('/api/users/:id',(req,res)=>{
    const user_id = req.params.id;

    console.log("userId",user_id);

    var already_data = users.find((obj)=>obj.id === Number(user_id))

    console.log("already_data", already_data);

    already_data.email = req.body.email;
    already_data.first_name = req.body.first_name;
    already_data.last_name = req.body.last_name;

    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        res.json({status:"Success"})

    })

})
.delete('/api/users/:id',(req,res)=>{
    const current_id = Number(req.params.id);

    console.log("curreeenttttttt",typeof(req.params.id))

    var indexOfCouseInJson = users.map(function(item) { return item.id; }).indexOf(current_id); //find the index of :id

    // .indexOf(current_id);
    console.log("indexOfCouseInJson",indexOfCouseInJson)

    if(indexOfCouseInJson!==-1){

        users.splice(indexOfCouseInJson,1);




    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        // if (err) {
        //     console.error("Error writing to file:", err);
        //     return res.status(500).json({ error: "Failed to write to file." });
        // }
        res.json({ status: "success" });
    })}else {
        // User not found
        res.status(404).json({ error: "User not found." });
    }
    // users.reduce((obj)=>({
    //     if()
    // }))
})
app.listen(8000,()=>console.log('server started'));