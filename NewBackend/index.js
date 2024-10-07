const express = require('express');

const path = require('path');

const fs=require("fs");

const app = express();

const mongoose=require("mongoose");

const {User} = require("./models/user");

const {LinkModel} = require('./models/bitlylink')

const  userRouter  = require('./routes/user');

const bitlyRoter = require('./routes/bitlylink');

const bodyParser = require('body-parser');

const staticRoute = require('./routes/staticRouter');

const cookieParser= require("cookie-parser");

const {restrictToLoggedinUserOnly,checkAuth} = require('./middleware/auth')

app.use(cookieParser());

app.set("view engine","ejs");

app.set("views",path.resolve("./views"));

app.use(bodyParser.json());

const PORT=8007;

const {DataBaseConnection} = require('./connections');
const { url } = require('inspector');

DataBaseConnection('mongodb://127.0.0.1:27017/NodeBackend').then(()=>console.log('datbase is working fine'));;

app.use(express.urlencoded({extended:true}));

app.use('/users',userRouter);

app.use('/bitly',restrictToLoggedinUserOnly,bitlyRoter);

app.use('/',checkAuth,staticRoute);

app.get('/test', async(req,res)=>{
    const allUrls = await LinkModel.find({});

    console.log("allUrls",allUrls)

    return res.render("home",{
        urls: allUrls,
        
    });
})

app.listen(PORT,()=> console.log(`server is started ${PORT}`));
