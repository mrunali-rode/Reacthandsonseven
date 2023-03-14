import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../features/Home';
import StudentPage from '../features/StudentDe/StudentPage';
import Contact from '../features/Contact';
import StudentEdit from '../features/StudentDe/StudentEdit';

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='student' element={<StudentPage/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='studentpage' element={<StudentEdit/>}/>
        <Route path='studentpage/:id' element={<StudentEdit/>}/>
    </Routes>
    </>
  )
}

export default Routing

