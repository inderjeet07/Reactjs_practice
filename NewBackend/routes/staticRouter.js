const express = require('express');

const router = express.Router();

const {LinkModel} = require('../models/bitlylink');


router.get('/',async (req,res)=>{

    if(!req.user) return res.redirect('/login')

    const allurls = await LinkModel.find({createdBy:req.user._id});

    return res.render('home',{
        urls:allurls,
    }); 
});

router.get('/signup',async (req,res)=>{

    return res.render("signup");
    
});

router.get('/login',async (req,res)=>{

    return res.render("login");
    
});


module.exports = router;