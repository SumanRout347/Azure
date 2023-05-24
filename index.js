const express=require("express")
const app=express()
const route=require("./routes/users")

const {dataBase}=require("./config/Database")



require("dotenv").config()

dataBase()
app.listen(process.env.PORT,()=>{
    console.log(`Running at ${process.env.PORT}`)
})

app.use(express.json())
app.use("/api/v1",route)


