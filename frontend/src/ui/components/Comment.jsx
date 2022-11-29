import React from "react";
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'

export function Comment() {
    console.log('comment')
    return (

    <>
        <h5>Comments</h5>
        <Form.Control size="sm" type="text" placeholder="Small text" />
        <Button variant="primary" type="submit">
            Post
        </Button>
    </>
)


}