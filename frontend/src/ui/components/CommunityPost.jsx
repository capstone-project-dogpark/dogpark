import React from 'react'
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Comment} from "./Comment.jsx";
import Button from "react-bootstrap/Button";

export function CommunityPost() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Text>Caption</Card.Text>
                <Comment/>
            </Card.Body>
        </Card>
    );
}

