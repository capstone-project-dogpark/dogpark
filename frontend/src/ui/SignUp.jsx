import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from "react-bootstrap";

export function SignUp () {
    return (
        <>
            <Container className="text-center mt-4">
                <h1>Let's get started on your pet's profile!</h1>
            </Container>

            <Container>
                <Row className="justify-content-center">
            <Form>
                <Form.Group className="mb-3" controlId="enterEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="createPassword">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Create a password" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Confirm password" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="dogsName">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" placeholder="Dog's Name" />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
                </Row>
            </Container>
        </>
    )
}