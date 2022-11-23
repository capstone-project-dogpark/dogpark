import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Login () {
    return (
        <>
            <Form className="w-25 text-center">
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

        </>
    )
}