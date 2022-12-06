import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import posts, {setAllPosts} from "../../store/posts.js";
import {useDispatch, useSelector} from "react-redux";
import {httpConfig} from "../../utils/http-config.js";
import {fetchLikesByLikePostId} from "../../store/likes.js";
import {Formik} from "formik";
import {CommentForm} from "./CommentForm";



export function FeedView({post}) {

    const dispatch = useDispatch ()
    const {postCaption, postImageUrl} = post
    console.log(post)
    const likes = useSelector(state => {
        if(state.likes[post.postId] === undefined){
            return[]
        } else {
            return state.likes[post.postId]
        }
    })
    const comments = useSelector(state => {
        if(state.comments[post.postId] === undefined){
            return[]
        } else {
            return state.comments[post.postId]
        }
    })
    const profile = useSelector(state => {
        if(state.profiles[post.postProfileId] === undefined){
            return[]
        } else {
            return state.profiles[post.postProfileId]
        }
    })
    console.log(comments)
    //
    // const profile = useSelector(state => {
    //     if (state.profile[post.postProfileId] === undefined){
    //         return null
    //     } else {
    //         return state.profile[post.postProfileId]
    //     }
    // })


    const clickLike = () => {
        httpConfig.post('/apis/like/', {likePostId: post.postId})
            .then(reply =>{
                if (reply.status === 200) {
                    dispatch(fetchLikesByLikePostId(post.postId))
                }
            })
    }

    // if (profile === null) {
    //     return (<></>)
    // }

    return (
        <>
            <Container>
                <Row className="justify-content-center mt-3 mb-3">
            <Card style={{ width: '30rem' }}>
                <p>{profile.profileAtHandle}</p>
                <Card.Img variant="top" src={post.postImageUrl} alt={postCaption} />
                <Card.Body>
                    <Button onClick={clickLike} size="sm">{likes.length}<FontAwesomeIcon icon="fa-heart" /></Button>
                    <Card.Text>{postCaption}</Card.Text>
                    <CommentForm postId={post.postId}/>
                    {comments.map(comment => <Card.Text key = {comment.commentId}>{comment.commentText}</Card.Text>)}
                </Card.Body>

            </Card>
                </Row>
            </Container>
        </>
    )


}