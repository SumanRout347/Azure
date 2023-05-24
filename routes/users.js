const express=require("express")
const router=express.Router()
const {createUser,getAllUsers}=require("../controller/UserController")

router.post("/createUser",createUser)
router.get("/users",getAllUsers)





module.exports=router