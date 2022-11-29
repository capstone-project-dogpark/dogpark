import React, {useEffect} from "react";
import {CommunityPost} from "./components/CommunityPost.jsx";
import Card from "react-bootstrap/Card";
import {CardImg} from "react-bootstrap";
import {Comment} from "./components/Comment.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts} from "../store/posts.js";
import {FeedView} from "./components/FeedView";



export function CommunityPage() {
    const posts = useSelector (state => state.posts ? state.posts: [])

    const dispatch = useDispatch ()

    function initialEffects(){
        dispatch(fetchAllPosts())
    }

    useEffect(initialEffects, [dispatch])
    console.log(posts)
    return (
        <>
            {posts.map(post => <FeedView post={post} key={post.postId}/>)}

        </>
    );
}

