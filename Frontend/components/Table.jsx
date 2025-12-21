import React, { useEffect, useState } from 'react';
import "../components/Table.css";
import { getAllStudents, deleteStudent } from '../src/services/api';
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState(""); // success/error message

  async function usefetchStudents() {
    try {
      const students = await getAllStudents();
      setStudents(students);
    } catch (error) {
      console.log("Error fetching students", error);
    }
  }

  useEffect(() => {
    usefetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      setMessage("✅ Student deleted successfully!");
      usefetchStudents();
      // clear message after 2 seconds
      setTimeout(() => setMessage(""), 2000);
    } catch (error) {
      setMessage("❌ Error deleting student");
      console.log("Error deleting student", error);
    }
  };

  return (
    <>
      <div>STUDENT TABLE</div>
      {message && (
        <p style={{ color: message.includes("Error") ? "red" : "green" }}>
          {message}
        </p>
      )}<div className="create-button-wrapper">
  <button className="create-button" onClick={() => navigate("/create-student")}>
    Create Student
  </button>
</div>

      <div  className="table-container">
        
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
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>
                  <button onClick={() => navigate(`/edit-student/${student._id}`)}>
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this student?")) {
                        handleDelete(student._id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;