import React, {useEffect} from "react"
import {Container, Row, Col, Image} from "react-bootstrap";
import {FeedView} from "./components/FeedView.jsx";
import Button from 'react-bootstrap/Button';
import {PostModal} from "./components/PostModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts} from "../store/posts.js";


export function WelcomePage () {
    const posts = useSelector (state => state.posts ? state.posts: [])

    const dispatch = useDispatch ()

    function initialEffects(){
        dispatch(fetchAllPosts())
    }

    useEffect(initialEffects, [dispatch])
    console.log(posts)
    return (
        <>
            <Container className="text-center mt-5">
                <h1>Welcome, Furball!</h1>
                <Image fluid={true} className={"rounded-circle"} src={"https://www.placecage.com/100/100"} alt={"place cage image"} />
            </Container>
            <Container className="mt-2 text-center mb-5">
                <PostModal/>
            </Container>
            {FeedView.map(FeedView => <FeedView misquote={FeedView} key={FeedView.FeedViewId}/>)}
        </>
    )
}