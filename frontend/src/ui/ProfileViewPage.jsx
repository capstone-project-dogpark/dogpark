import React from "react";
import {CardImg, Col, Container, Image, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function ProfileViewPage() {
    return(
        <>
           <Container>
               <Row className="container-fluid">
                   <Col className="mt-3 mb-3">
                       <h1 className="text-start mb-4">Beau</h1>
                       <CardImg className="rounded-circle" src='https://placedog.net/250' ></CardImg>
                       <Button className="bg-opacity-50 position-absolute">Follow</Button>
                       <FontAwesomeIcon icon="fa-light fa-dog"/>
                   </Col>
                   <Col className="container-fluid mt-3 mb-5"></Col>
                   <CardImg className="flex-column mb-3" src='https://placedog.net/300' ></CardImg>
                   <Col>
                   <Button className="bg-danger container-sm">Like<FontAwesomeIcon icon="fa-regular fa-heart" /></Button>
                   </Col>
                   <Col>
                       <Button className="bg-dark container-sm">Comment</Button>
                   </Col>
                   <Container className="text-info me-1">
                       <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.</p>
                   </Container>
                   <Row>
                   <Col className="text-">
                   <li>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.</li>
                   </Col>
                   </Row>
               </Row>
           </Container>
        </>
    )
}