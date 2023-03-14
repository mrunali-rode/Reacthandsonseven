import { createSlice } from "@reduxjs/toolkit";

export const StudentSlice = createSlice({
    name: 'Student', 
    initialState: {
        studentArray: [],
        studentInfo: {
            name: '',
            age: '',
            course: '',
            batch: ''
        }
    },
    reducers: {
        addUser: (state, action) => {
            state.studentArray.push(action.payload.state)
            return state
        },
        editUser: (state, action) => {
            state.studentArray[action.payload.index] = action.payload.state;
            console.log(action.payload)
            return state
        }
    }
});

export const {addUser, editUser} = StudentSlice.actions;
export default StudentSlice.reducer