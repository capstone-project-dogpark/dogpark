import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Comment} from "./Comment.jsx";

export function ProfileCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Pets Name</Card.Title>
            </Card.Body>
        </Card>
    );
}

