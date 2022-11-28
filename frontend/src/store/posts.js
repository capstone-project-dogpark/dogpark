import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config.js";
import {fetchProfileByProfileId} from "./profiles.js";

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
    let profileIdSet = new Set
    for(let post of data){
        const {postId, postProfileId} = post
        if(profileIdSet.has(postProfileId) === false) {
            profileIdSet.add(postProfileId)
            dispatch(fetchProfileByProfileId(postProfileId))
        }
        dispatch(fetchLikesbyLikePostId(postId))
    }
};

export default slice.reducer