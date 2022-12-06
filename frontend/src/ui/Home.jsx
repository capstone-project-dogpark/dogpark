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
                <img className="img-thumbnail" src="../src/assets/dogLogo2.jpg" alt="dog logo"/>
                        <h6 className="quote">Let's find a park for your best friend.</h6>
            </div>
            <Container fluid className="container-fluid py-3">
                <Row className="Row gx-md-2 gy-3">
                    <Col className="text-center" md="12">
                        <h5>Welcome! Our mission is to provide dog owners in Albuquerque, New Mexico with an online community to interact with each other and share posts about their dogs and dog park experiences. Here you will have the ability to create your own pet profile, share your dog park photos, comment on photos, as well as follow other dog owners. We have also provided a map of all dog parks for your convenience. Thank you for visiting, enjoy!</h5>
                    </Col>
                </Row>

            </Container>

        </>
    )
}