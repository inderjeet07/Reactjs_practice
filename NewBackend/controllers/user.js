const {User} = require("../models/user");

const {v4:uuidv4} =require("uuid");

const {setUser} = require('../service/auth')

async function handleGetAllUserDetails(req,res) {

    const allUserData = await User.find({});

    // console.log("allUserData=========",allUserData)

    if(!allUserData) return res.status(404).json({msg:"No User is find"})

     return res.status(200).json(allUserData)
    
}

async function handleCreateNewUser(req,res) {

    const body_response=req.body;
    const result = await User.create({
     firstName:body_response.firstName,
     lastName:body_response.lastName,
     email:body_response.email,
     password:body_response.password,
     jobTitle:body_response.jobTitle,
    //  createdBy: req.user._id,
    });
     res.render("home");
    // console.log("resuluttt",result)
    // return res.status(201).json({msg:"succcess"});
    
}

async function handleLoginUser(req,res) {

    const {email,password}=req.body;

    const user = await User.findOne({email,password});

    if(!user) res.render("login",{
            error:"email and password is not find"
        });

    // const sessionId = uuidv4();

    console.log("user--------",user)

    const token = setUser(user);

    // res.cookie("uid",token);

    return res.json({token})

    // return res.redirect("/")

    
}

async function handleGetUserById(req,res) {
    
    const current_user_id=req.params.id;

    const find_users = await User.findById(current_user_id);

    console.log("finduser is", find_users)

    if(!find_users) return res.json("User Is not found");

    res.status(200).json({msg:"user is found",details:find_users})
}

async function handleUpdateUserById(req,res) {
    
    const current_user_id=req.params.id;

    const updated = await User.findByIdAndUpdate(current_user_id,{firstName:req.body.firstName});

    return res.status(200).json({msg:"user Id updated"})
}

async function handleDeleteUserById(req,res) {

    const current_user_id=req.params.id;

    const delete_user =  await User.findByIdAndDelete(current_user_id);

    if(!delete_user) return res.json("user is not found")

      return res.status(200).json({msg:"user is delete",delte_user_id:delete_user})
    
}
module.exports={
    handleGetAllUserDetails,
    handleCreateNewUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleLoginUser
}