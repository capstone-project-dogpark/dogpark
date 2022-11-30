import {configureStore, combineReducers} from "@reduxjs/toolkit";
import posts from "./posts.js";
import likes from "./likes.js";

const reducer =combineReducers({posts, likes})
export default configureStore({reducer})