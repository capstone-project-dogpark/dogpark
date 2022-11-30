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

export function FeedView({post}) {

    const dispatch = useDispatch ()
    const {postCaption} = post
    const likes = useSelector(state => {
        if(state.likes[post.postId] === undefined){
            return[]
        } else {
            return state.likes[post.postId]
        }
    })
    console.log(likes)
    //
    // const profile = useSelector(state => {
    //     if (state.profile[post.postProfileId] === undefined){
    //         return null
    //     } else {
    //         return state.profile[post.postProfileId]
    //     }
    // })


    const clickLike = () => {
        httpConfig.post('/apis/like/', {likesPostId: post.postId})
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
                <Row className="justify-content-center">
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src="https://www.placecage.com/400/400" />
                <Card.Body>
                    <Button onClick={clickLike} size="sm">{likes.length}<FontAwesomeIcon icon="fa-heart" /></Button>
                    <Card.Text>{postCaption}</Card.Text>
                    <Form style={{ width: '20rem' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="comment" placeholder="Comment" />
                            <Button size="sm" className="mt-2" type="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
                </Row>
            </Container>
        </>
    )


}