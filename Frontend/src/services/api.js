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
        console.log("studentsArray",studentsArray);
        return studentsArray;
        // for(let i=0;i<studentsArray.length;i++){
        //     console.log("Student Name: ",studentsArray[i].name);
        //      console.log("Student Age: ",studentsArray[i].age);
        //      console.log("---------------");
        // 
    } catch (error) {
        console.log("Error while calling getAllStudents ",error);
    }
}

    //POST require
     export const addStudent=async({name,age})=>{
        try {
            const response=await API.post("/student",{name,age});
            return response.data.message;
        } catch (error) {
    
           console.log("Error while adding student",error);
        }
     }

     export const getStudentById = async (id) => {
  try {
    const response = await API.get(`/student/${id}`);           
      return response.data.student;
    } catch (error) {       
    console.log("Error while fetching student by ID", error);
  }
     }
     export const updateStudent = async (id,name,age) => {
  try {
    const response = await API.put(`/student/${id}`, { name, age });
    return response.data.message;
  } catch (error) {
    console.log("Error while updating student", error);
  }
};

//    DELETE student by ID
export const deleteStudent = async (id) => {
  try {
    const response = await API.delete(`/student/${id}`);
    return response.data.message;
  } catch (error) {
    console.log("Error while deleting student", error);
  }
};