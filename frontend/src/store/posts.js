import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config.js";
import {fetchProfileByProfileId} from "./profiles.js";
import {fetchLikesByLikePostId} from "./likes.js";
import {fetchCommentsByCommentPostId} from "./comments.js";

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
        const {postId, postProfileId} = post
        dispatch(fetchLikesByLikePostId(postId))
        dispatch(fetchCommentsByCommentPostId(postId))
        dispatch(fetchProfileByProfileId(postProfileId))
    }
};

export default slice.reducer