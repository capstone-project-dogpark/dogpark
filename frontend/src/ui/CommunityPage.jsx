import React from "react";
import {CommunityPost} from "./components/CommunityPost.jsx";
import Card from "react-bootstrap/Card";
import {CardImg} from "react-bootstrap";
import {Comment} from "./components/Comment.jsx";



export function CommunityPage() {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Text>Caption</Card.Text>
                <Comment/>
            </Card.Body>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Text>Caption</Card.Text>
                <Comment/>
            </Card.Body>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Text>Caption</Card.Text>
                <Comment/>
            </Card.Body>

        </Card>
    );
}

