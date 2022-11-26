import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export function FeedView() {
    return (
        <>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src="https://www.placecage.com/500/500" />
                <Card.Body>
                    <Button size="sm">Like</Button>
                    <Card.Text>
                        Caption for post here.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Form style={{ width: '30rem' }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Comment" />
                    <Button className="mt-2" type="submit">Submit</Button>
                </Form.Group>
            </Form>

        </>
    )


}