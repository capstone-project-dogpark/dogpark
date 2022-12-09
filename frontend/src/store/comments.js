import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config.js";

const slice = createSlice({
    name: "comment",
    initialState: {},
    reducers: {
        addComment: (comment, action) => {
            comment[action.payload.commentPostId] = action.payload.data
        },
        removeComment: (comment, action) => {
            const index = comment[action.payload.commentPostId].findIndex(comment => action.payload.commentProfileId === comment.commentProfileId)
            if (index) {
                delete comment[action.payload.commentPostId][index]
            }
        }
    }
})

export const {addComment} = slice.actions

export const fetchCommentsByCommentPostId = (commentPostId) => async (dispatch) => {
    const {data} = await httpConfig.get
    (`/apis/comment/commentPostId/${commentPostId}`);
    const payload = {commentPostId, data}
    dispatch(addComment(payload));
};

export default slice.reducer