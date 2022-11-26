import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from "react-bootstrap";

export function Login () {
    return (
        <>
            <Container className="mt-4 text-center">
                <h1>Please enter your login information</h1>
            </Container>

            <Container>
                <Row className="justify-content-center">
                    <Col className="col-7">
            <Form className="text-center">
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}