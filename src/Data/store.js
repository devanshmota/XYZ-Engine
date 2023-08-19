import { configureStore } from "@reduxjs/toolkit";
import minmaxSlice from './minmaxSlice'
import projectSlice from "./projectSlice";

const store = configureStore({
    reducer: {
        minmax: minmaxSlice.reducer,
        project: projectSlice.reducer,
    }
})

export default store;