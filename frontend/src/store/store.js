import {configureStore, combineReducers} from "@reduxjs/toolkit";
import posts from "./posts.js";

const reducer =combineReducers({posts})
export default configureStore({reducer})