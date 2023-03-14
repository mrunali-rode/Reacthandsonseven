import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const StudentTable = () => {
    const data = useSelector((state) => state.Student);
  return (
    <>
    <table border={1} width='80%' cellPadding={10} id='tableDesign'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {
        data.studentArray.map((item,index) => (
          // each item is an object
            <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.course}</td>
            <td>{item.batch}</td>
            <td>{item.Change}<Link to={`/studentpage/${index+1}`} state={{details:item,id:index}}>Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default StudentTable