import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config.js";
import {fetchProfileByProfileId} from "./profiles.js";
import {fetchLikesByLikePostId} from "./likes.js";

const slice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        setAllPosts: (posts, action) => {
            return action.payload
        }
    }
})

export const {setAllPosts} = slice.actions

export const fetchAllPosts = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/post");
    dispatch(setAllPosts(data));


    for(let post of data){
        const {postId} = post
        dispatch(fetchLikesByLikePostId(postId))
    }
};

export default slice.reducer