import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config.js";

const parksSlice = createSlice({
    name: 'parks',
    initialState: [],
    reducers: {
        setAllParks: (parks, action) => {
            return action.payload
        }
    }
})

export const {setAllParks} = parksSlice.actions

export default parksSlice.reducer

export const fetchAllParks = () => async dispatch => {
    const {data} = await httpConfig.get('/apis/park')
    dispatch(setAllParks(data))
}