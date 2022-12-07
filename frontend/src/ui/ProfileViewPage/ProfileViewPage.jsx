import React, {useEffect} from "react";
import {CardImg, Col, Container, Image, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FeedView} from "../components/FeedView.jsx";
import Card from "react-bootstrap/Card";
import {CommentForm} from "../components/CommentForm.jsx";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {IndividualPost} from "../components/IndividualPost.jsx";
import follows, {fetchFollowsByFollowProfileId} from "../../store/follows.js";
import {httpConfig} from "../../utils/http-config.js";
import {fetchLikesByLikePostId} from "../../store/likes.js";

export function ProfileViewPage() {
    const dispatch= useDispatch()
    const loggedInProfile=useSelector(state => state.auth ?? null)
    const {profileId} = useParams()
    const follow= useSelector(state => state.follows[profileId]?.filter(follow=> follow.followerProfileId=== loggedInProfile.profileId)[0] ?? null)
    const profile = useSelector(state=>state.profiles[profileId])
    const posts = useSelector(state => state.posts.filter(post=>post.postProfileId===profileId))

    const followOrUnfollow= loggedInProfile ? (follow ? 'unfollow' : 'follow') : 'Please login'
console.log('profileId', profileId)
    const effects=()=>{
        dispatch(fetchFollowsByFollowProfileId(profileId))
    }
    useEffect(effects,[dispatch])

    const clickFollow = () => {
        httpConfig.post('/apis/follow/', {followProfileId: profileId, followerProfileId: loggedInProfile.profileId})
            .then(reply =>{
                if (reply.status === 200) {
                    dispatch(fetchFollowsByFollowProfileId(profileId))
                }
            })
    }

    return(
        <>

            <Container className="text-center mt-5">
                <Button onClick={clickFollow} size="sm"> {followOrUnfollow} </Button>
                <h1>{profile.profileAtHandle}</h1>
                <Image fluid={true} className="profileViewPhoto rounded-circle" src={profile.profileImage} alt={"User Default Image"} />
            </Container>

            <Container>
                <Row className="justify-content-center mt-3 mb-3">
                    {posts.map(post=><IndividualPost key={post.postId} profile={profile} post={post}/>)}
                </Row>
            </Container>


                    </>
    )
}


                    {/*<Container>*/}
           {/*    <Row className="container-fluid">*/}
           {/*        <Col className="mt-3 mb-3">*/}
           {/*            <h1 className="text-start mb-4">Beau</h1>*/}
           {/*            <CardImg className="rounded-circle" src='https://placedog.net/250' ></CardImg>*/}
           {/*            <Button className="bg-opacity-50 position-absolute">Follow</Button>*/}
           {/*            <FontAwesomeIcon icon="fa-light fa-dog"/>*/}
           {/*        </Col>*/}
           {/*        <Col className="container-fluid mt-3 mb-5"></Col>*/}
           {/*        <CardImg className="flex-column mb-3" src='https://placedog.net/300' ></CardImg>*/}
           {/*        <Col>*/}
           {/*        <Button className="bg-danger container-sm">Like<FontAwesomeIcon icon="fa-regular fa-heart" /></Button>*/}
           {/*        </Col>*/}
           {/*        <Col>*/}
           {/*            <Button className="bg-dark container-sm">Comment</Button>*/}
           {/*        </Col>*/}
           {/*        <Container className="text-info me-1">*/}
           {/*            <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.</p>*/}
           {/*        </Container>*/}
           {/*        <Row>*/}
           {/*        <Col className="text-">*/}
           {/*        <li>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.</li>*/}
           {/*        </Col>*/}
           {/*        </Row>*/}
           {/*    </Row>*/}
           {/*</Container>*/}