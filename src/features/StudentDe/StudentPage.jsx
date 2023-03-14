import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentTable from './StudentTable';

const StudentPage = () => {
    const data = useSelector((state) => state.Student)
  return (
   <div>
      <div style={{fontSize:'30px',marginTop:'30px'}}>Student Details</div>
      <div>
        <Link to='/studentpage'><button id='addButton'>Add New student</button></Link></div>
      <div>
        {data.studentArray.length ? <StudentTable/>:''}
      </div>
    </div>
  )
}

export default StudentPage