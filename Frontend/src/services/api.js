import axios from "axios"

const API=axios.create({
    baseURL:"http://localhost:3000/api",

});


export const getAllStudents=async()=>{
    try {
        const response=await API.get("/students");
        console.log("response",response);
        console.log("response.data",response.data);
        console.log("response.data.students",response.data.students);
        const studentsArray=response.data.students;
        for(let i=0;i<studentsArray.length;i++){
            console.log("Student Name: ",studentsArray[i].name);
             console.log("Student Age: ",studentsArray[i].age);
             console.log("---------------");
        }

    } catch (error) {
        console.log("Error while calling getAllStudents ",error);
    }
}
