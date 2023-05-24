const userModel = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { name, email, dateOfBirth } = req.body;
    if (!name || !email) {
      return res.status(500).json({
        success: false,
        message: "empty fields",
      });
    }
    const newUser = new userModel({ name, email, dateOfBirth });
    await newUser.save();
  res.status(200).json({
      success: true,
      data: newUser,
      message: "user created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

exports.getAllUsers=async(req,res)=>{
  try {
    const users=await userModel.find({})
    res.status(200).json({
      success:true,
      data:users,
      message:"all users"
    })
    
  } catch (error) {

    res.status(400).json({
      success:false,
      message:"something went wrong"
    })
    
  }

}
