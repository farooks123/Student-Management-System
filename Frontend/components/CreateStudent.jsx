
import React, { useState } from 'react'
import { addStudent } from '../src/services/api'
  
const CreateStudent = () => {

const [name,setName]=useState("");
const [age,setAge]=useState(0);
const [message,setMessage]=useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const createStudentresponse=await addStudent({name,age});
     setMessage(createStudentresponse)
  }
  return (
  
    <div>
      Create Student Page
      <form onSubmit={handleSubmit}>

       Enter the Name:<input type="text" value={name} onChange={(e)=> setName(e.target.value)} id="name"/><br/>
       <br />
       Enter The Age:<input type="number" value={age}onChange={(e)=>setAge(e.target.value)} id="age"/><br/><br />
       <button type='submit'>Submit</button>
       <div>

       </div>
{message && <p style={{ color: "green" }}>{message}</p>}



      </form>
    </div>
  )
}

export default CreateStudent
