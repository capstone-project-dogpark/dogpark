import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CommentForm} from "./CommentForm.jsx";
import React from "react";
import {httpConfig} from "../../utils/http-config.js";
import {fetchLikesByLikePostId} from "../../store/likes.js";

export function IndividualPost({profile, post}) {


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
    const clickLike = () => {
        httpConfig.post('/apis/like/', {likePostId: post.postId})
            .then(reply =>{
                if (reply.status === 200) {
                    dispatch(fetchLikesByLikePostId(post.postId))
                }
            })
    }
  return (
      <>
          <Card style={{ width: '30rem' }}>
              <Link to={`/ProfileViewPage/${profile.profileId}`}>{profile.profileAtHandle}</Link>
              <Card.Img variant="top" src={post.postImageUrl} alt={post.postCaption} />
              <Card.Body>
                  <Button onClick={clickLike} size="sm">{likes.length}<FontAwesomeIcon icon="fa-heart" /></Button>
                  <Card.Text>{post.postCaption}</Card.Text>
                  <CommentForm postId={post.postId}/>
                  {comments.map(comment => <Card.Text key = {comment.commentId}>{comment.commentText}</Card.Text>)}
              </Card.Body>

          </Card>
      </>
  )



}