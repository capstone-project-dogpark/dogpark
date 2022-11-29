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

    let likeIdSet = new Set
    for(let like of data){
        const {likeId, likePostId} = like
        if(likeIdSet.has(likePostId) === false) {
            likeIdSet.add(likePostId)
              dispatch(fetchLikesByLikePostId(likeId))
        }
        dispatch(fetchLikesByLikePostId(likeId))
    }
};

export default slice.reducer