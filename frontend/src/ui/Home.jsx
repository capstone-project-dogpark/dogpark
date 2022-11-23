import React from "react"
import {Button, Col, Container, Row, Nav} from "react-bootstrap";
import {CommunityPost} from "./components/CommunityPost.jsx";
import {Comment} from "./components/Comment.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export function Home() {
    return (
        <>
            <Container className="text-center">
                <Row>
                    <Col>
                        <h1>Dogs Best Friend</h1>
                        <h3>"Let's find a friend for your best friend"</h3>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>

                    </Col>
                </Row>
                <CommunityPost/>
            </Container>

        </>
    )
}