import {configureStore} from '@reduxjs/toolkit';
import StudentReducer from '../features/StudentDe/StudentSlice'

export default configureStore ({
    reducer: {
        Student: StudentReducer
    }
})