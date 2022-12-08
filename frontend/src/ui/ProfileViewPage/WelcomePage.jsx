import React, {useEffect} from "react"
import {Container, Row, Col, Image} from "react-bootstrap";
import {FeedView} from "../components/FeedView.jsx";
import Button from 'react-bootstrap/Button';
import {PostModal} from "../components/PostModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts} from "../../store/posts.js";
import {ProfileModal} from "./ProfileModal";
import {fetchAuth} from "../../store/auth.js";


export function WelcomePage () {
    const posts = useSelector (state => state.posts ? state.posts: [])
    const profile= useSelector(state => state.auth ?? null)
    const dispatch = useDispatch ()

    function initialEffects(){
        dispatch(fetchAllPosts())
        dispatch(fetchAuth())
    }

    useEffect(initialEffects, [dispatch])
    return (
        <>
            {profile &&
                <Container className="text-center mt-5">
                    <h1>{profile.profileAtHandle}</h1>
                    <Image fluid={true} className={"rounded-circle"} src={profile.profileImage}
                           alt={"place cage image"}/>
                </Container>
            }
            <Container className="mt-2 text-center mb-5">
                <PostModal/>
                <ProfileModal/>

            </Container>
           {posts.map(post => <FeedView post={post} key={post.postId}/>)}
        </>
    )
}