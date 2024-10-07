
const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose")

const UserSchema=new mongoose.Schema({
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
    password:{
        type:String,
        // required:true,
        // unique:true
    },
    jobTitle:{
        type:String
    }
},{timestamps:true});

const User = mongoose.model('user',UserSchema);

module.exports={User}