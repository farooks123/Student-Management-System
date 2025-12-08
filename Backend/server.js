const express=require("express");
const ConnectDB = require("./connection/db");
const app=express()// calling the function
const mongoose=require("mongoose");
const Student=require("./model/Student")
const PORT=3000;//port should be used 


ConnectDB();

app.post("api/student",async(req,res)=>{

    try {
       const newStudent=req.body;
       const student=new Student(newStudent);
       await student.save();
       res.status(200).json({
        success:true,
        message:"Successfullly Created Student",
        student:student,
       })
    } catch (error) {
        console.log("Error creating Student",error)
    }
});
app.listen(PORT,()=>{
    console.log("Application is running on PORT",PORT);
})