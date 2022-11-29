import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function FeedView({post}) {
    console.log(post)
    return (
        <>
            <Container>
                <Row className="justify-content-center">
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src="https://www.placecage.com/400/400" />
                <Card.Body>
                    <Button size="sm"><FontAwesomeIcon icon="fa-heart" /></Button>
                    <Card.Text>
                        Caption for post here.
                    </Card.Text>
                    <Form style={{ width: '20rem' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Comment" />
                            <Button size="sm" className="mt-2" type="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
                </Row>
            </Container>
        </>
    )


}