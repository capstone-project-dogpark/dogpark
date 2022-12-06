import React from "react"
import {Button, Col, Container, Row, Nav, Image} from "react-bootstrap";
import {CommunityPost} from "./components/CommunityPost.jsx";
import {Comment} from "./components/Comment.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ProfileCard} from "./components/ProfileCard";
import {FeedView} from "./components/FeedView.jsx";
import "./App.css"

export function Home() {
    return (
        <>
            <div className="headerImage text-center">
                        <h1>Dog's Best Friend</h1>
                        <h6>Let's find a friend for your best friend</h6>
            </div>

            <Container fluid className="container-fluid py-5">
                <Row className="Row gx-md-2 gy-3">
                    <Col className="text-center" md="12">
                        <p>Welcome! Our mission is to provide dog owners with a place to interact with each other and share posts about their dogs and dog park experiences here in the city of Albuquerque. We have provided a map of all dog parks as well as the ability to create your own pet profile in order to share your experiences!</p>
                    </Col>
                </Row>

            </Container>

        </>
    )
}