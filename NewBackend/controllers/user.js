const express = require("express");

const {User} = require('../models/user')

async function handlerGetAllUsers(req,res){
    const AllUsers = await User.find({})
    if(!AllUsers) return res.status(404).json({err:"User is not found"})
     return res.json(AllUsers)
}
async function handlerCreateNewUser(req,res){
    const body_response = req.body;
    const result = await User.create({
     firstName:body_response.firstName,
     lastName:body_response.lastName,
     email:body_response.email,
     jobTitle:body_response.jobTitle
    });
    return res.status(201).json({msg:"succcess"});  
}
module.exports={
    handlerGetAllUsers,handlerCreateNewUser
}
