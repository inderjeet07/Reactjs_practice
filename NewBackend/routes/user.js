const express=require("express");

const router = express.Router();

const {handleGetAllUserDetails,handleCreateNewUser,handleGetUserById,
    handleUpdateUserById,handleDeleteUserById,handleLoginUser} = require("../controllers/user")

const {User} = require("../models/user")

router.route("/")
.get(handleGetAllUserDetails)
.post(handleCreateNewUser);

router.route("/login").post(handleLoginUser)

router.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)

module.exports = router
