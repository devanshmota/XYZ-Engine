import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'project',
    initialState: {


        form: {
            projectName: '',
            projectDesc: '',
            client: '',
            contractor: ''
        }

    },
    reducers: {
        setForm: (state, action) => {
            state.form = action.payload;
        }
    }
})
export default projectSlice;
export const { setForm } = projectSlice.actions;