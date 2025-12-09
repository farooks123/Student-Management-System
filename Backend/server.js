const express=require("express");
const ConnectDB = require("./connection/db");
const app=express()// calling the function
const mongoose=require("mongoose");
const Student=require("./model/Student")
app.use(express.json());


const PORT=3000;//port should be used 


ConnectDB();

app.get("/api/students",async(req,res)=>{

    try {
        const students=await Student.find();
        res.status(200).json({
            success:true,
            message:"Successfully Fetched All Students",
            students:students,
        })
        
    } catch (error) {
       res.status(400).json({
        success:false,
        message:"Error Fetching Student",
        error:error,
       })
    }
})

app.post("/api/student",async(req,res)=>{

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