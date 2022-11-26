import React from "react"
import {Container, Row, Col, Image} from "react-bootstrap";
import {FeedView} from "./components/FeedView.jsx";
import Button from 'react-bootstrap/Button';

export function WelcomePage () {
    return (
        <>
            <Container className="text-center mt-5">
                <h1>Welcome, Furball!</h1>
                <Image fluid={true} className={"rounded-circle"} src={"https://www.placecage.com/100/100"} alt={"place cage image"} />
            </Container>

            <Container className="mt-3 text-center mb-5">
                                <Button size="sm" variant="primary">Create Post</Button>
            </Container>

            <FeedView/>

        </>
    )
}