import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config.js";

const slice = createSlice({
    name: "likes",
    initialState: {},
    reducers: {
        addLikes: (likes, action) => {
            likes[action.payload.likePostId] = action.payload.data
        },
        removeLike: (likes, action) => {
            // likes.filter(like => like !== action.payload)
            const index = likes[action.payload.likePostId].findIndex(like => action.payload.likeProfileId === like.likeProfileId)
            if (index) {
                delete likes[action.payload.likePostId][index]
            }
        }
    }
})

export const {addLikes} = slice.actions

export const fetchLikesByLikePostId = (likePostId) => async (dispatch) => {
    const {data} =  await httpConfig.get(`/apis/like/likePostId/${likePostId}`);
    const payload = {likePostId, data}
    dispatch(addLikes(payload));
};

export default slice.reducer