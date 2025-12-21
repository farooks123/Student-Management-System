import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {getStudentById, updateStudent} from "../src/services/api";
import "../components/Edit.css"; 
import axios from "axios";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState(""); // success/error message

  useEffect(() => {
   async function fetchStudent() {
      try {
        const student= await getStudentById(id);
        console.log("Fetched student:", student);
        setName(student.name);
        setAge(student.age);
      } 
      catch (error) {
      }
    }
    fetchStudent();
  }, [id]);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleUpdate = async (e) => { 
    e.preventDefault();
    try {
      const updateStudentresponse=await updateStudent(id,name,age);
      setMessage(updateStudentresponse);
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      setMessage("❌ Error updating student");
      console.log("Error updating student", error);
    }
  };

  return (

   
    <div className="edit-student-container">
      <h2>Edit Student</h2>

      {message && (
        <p style={{ color: message.includes("Error") ? "red" : "green" }}>
          {message}
        </p>
      )}
      
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name} onChange={(e)=> setName(e.target.value)}
           
            placeholder="Enter name"
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={age}onChange={(e)=>setAge(e.target.value)}
           
            placeholder="Enter age"
            required
          />
        </div>
        <div className="button-group">
          <button type="submit">Update</button>
          <button type="button" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;