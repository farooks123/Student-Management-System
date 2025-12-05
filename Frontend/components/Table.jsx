import React from 'react';
import "./Table.css";

const Table = () => {

    const students=[
        {name:"Sandeep",age:23},
        {name:"Manish",age:24},
        {name:"Farook",age:23},
        {name:"Chandan",age:25},
        {name:"ManyaShree",age:22},
        {name:"Shashank",age:26},
    ];
  return (
    <div className='Table-container'>
      
<table className='student-table'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>

       
        {
            students.map((student,index)=>(  

               <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td><button className='action-btn edit'>Edit</button>
                      <button className='action-btn delete'>Delete</button></td>
               </tr> 
            ))      }
    </tbody>
</table>

    </div>
  );
};

export default Table





 /* With .map()://
 - You don’t need to manually call a function for each student.
- It loops through the array automatically and renders each row.
- If you add more students later, the table updates without extra code.
  showing .map() is a best practice in React. */

//   - key is required when rendering lists so React can track elements efficiently.
// - key={index} works fine for static lists (like your 5 students).
// instead of using id we are using index to get it effeciently
        