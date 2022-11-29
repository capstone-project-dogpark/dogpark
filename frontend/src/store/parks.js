import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config.js";

const parksSlice = createSlice({
    name: 'parks',
    initialState: [],
    reducers: {
        setAllLocation: (location, action) => {
            return action.payload
        }
    }
})

export const {setAllParks} = parksSlice

export default parksSlice.reducer

export const fetchAllParks = () => async dispatch => {
    const {data} = await httpConfig.get('/apis/parks')
    dispatch(setAllParks(data))
}