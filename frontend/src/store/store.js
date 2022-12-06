import {configureStore, combineReducers} from "@reduxjs/toolkit";
import posts from "./posts.js";
import likes from "./likes.js";
import auth from "./auth.js";
import parks from "./parks.js";
import comments from "./comments.js"
import profiles from "./profiles.js";


const reducer =combineReducers({posts, likes, auth, parks, comments, profiles})
export default configureStore({reducer})