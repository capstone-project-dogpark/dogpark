import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from "react-bootstrap";
import {SignInForm} from "./components/main-nav/sign-in/SignInForm";

export function Login () {
    return (
        <>
            <Container className="mt-4 text-center">
                <h1>Please enter your login information</h1>
            </Container>

            <Container>
                <Row className="justify-content-center">
                    <Col className="col-7">
                        <SignInForm/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}