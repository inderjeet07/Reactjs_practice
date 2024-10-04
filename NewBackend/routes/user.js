const express=require("express");

const router = express.Router();

const { User } = require('../models/user')

const {handlerGetAllUsers,handlerCreateNewUser} = require('../controllers/user')

router.route('/').get(handlerGetAllUsers).post(handlerCreateNewUser);

// router.post('/',async (req,res)=>{
    
// })

router.get('/:id',async(req,res)=>{

    const current_user = await User.findById(req.params.id);

    if(!current_user) return res.status(404).json({msg:"The user is not found"})

})
.patch('/:id',async(req,res)=>{

    await User.findByIdAndUpdate(req.params.id,{lastName:"this is new updated by user"});

    return res.json({msg:"User is updated"})

})
.delete('/:id',async(req,res)=>{
   await User.findByIdAndDelete(req.params.id);

   return res.json({msg:"record is deleted",Id:req.params.id})
})

module.exports = router