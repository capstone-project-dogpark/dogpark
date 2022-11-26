import React from "react"
import {Container, Row, Col, Image} from "react-bootstrap";
import {FeedView} from "./components/FeedView.jsx";
import Button from 'react-bootstrap/Button';

export function WelcomePage () {
    return (
        <>
            <Container className="text-center mt-5">
                <h1>Welcome, Furball!</h1>
            </Container>


            <Container className="mt-5">
                <Row>
                    <Col className="">
            <Image fluid={true} className={"rounded-circle"} src={"https://www.placecage.com/200/200"} alt={"place cage image"} />
                </Col>
                    <Col>
                        <Button variant="primary">Create Post</Button>
                    </Col>
                    <Col>
                        <FeedView/>
                    </Col>
            </Row>
            </Container>


        </>
    )
}