import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Comment} from "./Comment.jsx";
import {CardImg} from "react-bootstrap";
import React from "react";

export function ProfileCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <CardImg src='https://placedog.net/400' ></CardImg>
            <Card.Body>
                <Card.Title>Pets Name</Card.Title>
            </Card.Body>
        </Card>
    );
}

