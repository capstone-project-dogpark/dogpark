import React, {useEffect} from "react";
import {CommunityPost} from "./components/CommunityPost.jsx";
import Card from "react-bootstrap/Card";
import {CardImg, Container} from "react-bootstrap";
import {Comment} from "./components/Comment.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts} from "../store/posts.js";
import {FeedView} from "./components/FeedView";
import {PostModal} from "./components/PostModal";



export function CommunityPage() {
    const posts = useSelector (state => state.posts ? state.posts: [])
    const dispatch = useDispatch ()

    function initialEffects(){
        dispatch(fetchAllPosts())
    }

    useEffect(initialEffects, [dispatch])
    return (
        <>
            <Container className="mt-2 mb-5 text-center">
                <h1>Share your furry friends with our community!</h1>
                <PostModal/>
            </Container>

            {posts.map(post => <FeedView post={post} key={post.postId}/>)}

        </>
    );
}

