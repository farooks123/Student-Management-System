const express=require("express");
const ConnectDB = require("./connection/db");
const app=express()// calling the function
const cors=require("cors");
app.use(cors());
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
});

app.get("/api/student/:id", async (req, res) => {
    try {
        const studentId = req.params.id;   // get id from URL
        const student = await Student.findById(studentId);  // find student by id

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Successfully Fetched Student",
            student: student,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error Fetching Student",
            error: error.message,
        });
    }
});

app.put("/api/student/:id",async(req,res)=>{

    try {
        const studentId=req.params.id;
        const updatedData=req.body;

        const result=await Student.findByIdAndUpdate(studentId,updatedData,{new:true});

        if(!result){
            res.status(400).json({
                success:false,
                message:"Error updating student",
            })
        }
        res.status(200).json({
            success:true,
            message:"Successfully Updated Student",
            student:result,
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error Updating Student",
            error:error.message,
        })
    }
})

app.delete("/api/student/:id",async(req,res)=>{

    try {
        const studentId=req.params.id;
        const deletedStudent=await Student.findByIdAndDelete(studentId);
        if(!deletedStudent){
            res.status(400).json({
                success:false,
                message:"Student not found",
            })
        }
        res.status(200).json({
            success:true,
            message:"Successfully deleted Student",
            student:deletedStudent
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error deleting Student",
            error:error.message
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