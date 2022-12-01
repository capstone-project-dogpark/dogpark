import {configureStore, combineReducers} from "@reduxjs/toolkit";
import posts from "./posts.js";
import likes from "./likes.js";
import auth from "./auth.js";

const reducer =combineReducers({posts, likes, auth})
export default configureStore({reducer})