import { createSlice } from "@reduxjs/toolkit";

const minmaxSlice = createSlice({
    name: 'minmax',
    initialState: {

        maxX: "",
        minX: "",

        maxY: "",
        minY: "",

        maxZ: "",
        minZ: "",

    },
    reducers: {
        setMaxX: (state, action) => {
            state.maxX = action.payload;
        },
        setMinX: (state, action) => {
            state.minX = action.payload;
        },
        setMaxY: (state, action) => {
            state.maxY = action.payload
        },
        setMinY: (state, action) => {
            state.minY = action.payload;
        },
        setMaxZ: (state, action) => {
            state.maxZ = action.payload;
        },
        setMinZ: (state, action) => {
            state.minZ = action.payload;
        }
    }
})
export default minmaxSlice;
export const { setMaxX, setMinX, setMaxY, setMinY, setMaxZ, setMinZ } = minmaxSlice.actions;