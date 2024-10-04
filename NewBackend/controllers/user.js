const {User} = require('../models/user')

async function handleGetAllUsers(req,res){

     var Dbase_records = await User.find({});
 
     return res.json(Dbase_records)
 }

 async function handleGetUserById(req,res){

    var Dbase_records = await User.findById(req.params.id);

    if(!Dbase_records) return res.status(404).json({error:"No user find"})
        return res.json(Dbase_records)

    
 }

 async function handleUpdateUserById(req,res) {

    await User.findByIdAndUpdate(req.params.id,{lastName:"This is the updated last name"});

    return res.json({status:"updated"})
    
 }

 async function handleDeleteUserById(req,res) {

    await User.findByIdAndDelete(req.params.id);

    return res.json({status:"success"})
    
 }

 async function handleCreateNewUser(req,res) {

    const body_response=req.body;
    const result = await User.create({
     firstName:body_response.firstName,
     lastName:body_response.lastName,
     email:body_response.email,
     jobTitle:body_response.jobTitle
    });
   
    return res.json({msg:"succcess"});
    
 }


 module.exports={

    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser

 }