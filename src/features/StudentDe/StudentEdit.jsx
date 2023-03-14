import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { addUser, editUser} from './StudentSlice'

const StudentEdit = () => {
    const navigate = useNavigate();
    const editData = useLocation();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Student)

    const [state, setDetails] = useState(data.studentInfo);

    useEffect(() => {
        if(editData.state !== null) {
            setDetails({
                name: editData.state.details.name,
                age: editData.state.details.age,
                course: editData.state.details.course,
                batch: editData.state.details.batch
            })
        }
    }, [editData])

    const changeHandler = (e) => {
        setDetails({...state,[e.target.name]: e.target.value});
    }

    const submit= () => {
        if(editData.state === null) {
            dispatch(addUser({state}));
            navigate('/student');
        } else {
            let index = editData.state.id;
            dispatch(editUser({state, index}));
            navigate('/student');
        }
    }
  return (
    <div>
        <input type='text' placeholder='name' name="name" value={state.name} className='inputCon' onChange={changeHandler}/>
        <input type='number' placeholder='age'name="age" value={state.age} className='inputCon' onChange={changeHandler}/>
        <br/>
        <br/>
        <input type='text' placeholder='course' name="course" value={state.course} className='inputCon' onChange={changeHandler}/>
        <input type='text' placeholder='batch' name="batch" value={state.batch} className='inputCon' onChange={changeHandler}/>
        <br/>
        <br/>
        <br/>
        <Link to='/student'><button  className='btn_btn'>Cancel</button></Link>
        <button className='btn_btn' onClick={submit}>{editData.state===null ? 'Submit' : 'Update'}</button>
    </div>
  )
}

export default StudentEdit