const mongoose=require("mongoose")

require("dotenv").config()

exports.dataBase=async()=>{
    mongoose.connect(process.env.URL,{
        useNewUrlParser:true
    }).then(()=>console.log("db connected")).catch((err)=>console.log(err))
}