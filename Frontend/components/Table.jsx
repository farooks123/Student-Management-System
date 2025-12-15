import React,{ useEffect,useState} from 'react'
import "../components/Table.css"
import { getAllStudents } from '../src/services/api'
import {useNavigate} from "react-router-dom"

const Table = () => {
  const navigate=useNavigate();
  const [students,setStudents]=useState([])


  async function usefetchStudents(){
    try {
      const students=await getAllStudents();
      console.log("students in usefetchStudents",students);   
      setStudents(students);
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    console.log("useEffect called");
    usefetchStudents();

},[])

  return (
  <>
  <div>STUDENT TABLE</div>
  <div><button onClick={()=> navigate("/create-student")}>
    Create Student 
    </button>
    </div>
    <div className='table'>
      <table>
        <thead>
            <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
           {
          students.map((student)=>(
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
            ))
           }
        </tbody>
      </table>
    </div>
    
    </>
  )
}

export default Table