
import React, { useState } from 'react'
import { addStudent } from '../src/services/api'
import "../components/Create.css";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createStudentresponse = await addStudent({ name, age });
    setMessage(createStudentresponse);
  };

  return (
    <div className="create-student-container">
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
            required
          />
        </div>
        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setName("") || setAge(0)}>
            Clear
          </button>
        </div>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default CreateStudent
