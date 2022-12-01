import {configureStore, combineReducers} from "@reduxjs/toolkit";
import posts from "./posts.js";
import likes from "./likes.js";
import auth from "./auth.js";
import parks from "./parks.js";


const reducer =combineReducers({posts, likes, auth, parks})
export default configureStore({reducer})