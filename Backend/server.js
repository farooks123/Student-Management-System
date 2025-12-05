const express=require("express")
const app=express()// calling the function

const PORT=3000;//port should be used 

app.listen(PORT,()=>{
    console.log("Application is running on PORT",PORT);
})