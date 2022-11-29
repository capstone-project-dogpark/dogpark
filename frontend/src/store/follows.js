import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config.js";

const slice = createSlice({
    name: "follows",
    initialState: {},
    reducers: {
        addFollows: (follows, action) => {
            follows[action.payload.followProfileId] = action.payload.data
        },
        removeFollows: (follows, action) => {

            const index = follows[action.payload.followProfileId].findIndex(follow => action.payload.followProfileId === follow.followProfileId)
            if (index) {
                delete follows[action.payload.followProfileId][index]
            }
        }
    }
})

export const {addFollows} = slice.actions

export const fetchFollowsByFollowProfileId = (followProfileId) => async (dispatch) => {
    const {data} =  await httpConfig.get(`/apis/follow/followProfileId/${followProfileId}`);
    const payload = {followProfileId, data}
    dispatch(addFollows(payload));
};

export default slice.reducer