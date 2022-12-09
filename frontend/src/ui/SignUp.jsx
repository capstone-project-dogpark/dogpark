import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from "react-bootstrap";
import {SignUpForm} from "./components/main-nav/sign-up/SignUpForm.jsx";

export function SignUp () {
    return (
        <>
            <Container className="text-center mt-4">
                <h1>Let's get started on your pet's profile!</h1>
            </Container>

            <Container>
                <Row className="justify-content-center">
                    <Col className="col-8">
                        <SignUpForm />
{/*            <Form>*/}
{/*                <Form.Group controlId="enterEmail">*/}
{/*                    <Form.Label></Form.Label>*/}
{/*                    <Form.Control type="email" placeholder="Enter email" />*/}
{/*                    <Form.Text className="text-muted">*/}
{/*                    </Form.Text>*/}
{/*                </Form.Group>*/}
{/*                <Form.Group controlId="dogsName">*/}
{/*                    <Form.Label></Form.Label>*/}
{/*                    <Form.Control type="name" placeholder="Dog's Name" />*/}
{/*                    <Form.Text className="text-muted">*/}
{/*                    </Form.Text>*/}
{/*                </Form.Group>*/}
{/*                <Form.Group controlId="createPassword">*/}
{/*                    <Form.Label></Form.Label>*/}
{/*                    <Form.Control type="password" placeholder="Create a password" />*/}
{/*                    <Form.Text className="text-muted">*/}
{/*                    </Form.Text>*/}
{/*                </Form.Group>*/}
{/*                <Form.Group controlId="confirmPassword">*/}
{/*                    <Form.Label></Form.Label>*/}
{/*                    <Form.Control type="password" placeholder="Confirm password" />*/}
{/*                    <Form.Text className="text-muted">*/}
{/*                    </Form.Text>*/}
{/*                </Form.Group>*/}
{/*                <Button className="mt-3" type="submit">Submit</Button>*/}
{/*            </Form>*/}
                    </Col>
                </Row>
            </Container>
        </>
    )
}