import React from "react";
import {CardImg, Col, Container, Image, Row} from "react-bootstrap";

export function ProfileViewPage() {
    return(
        <>
           <Container>
               <Row>
                   <Col className="flex-row">
                       <CardImg src='https://placedog.net/250' ></CardImg>
                   </Col>
               </Row>
           </Container>
        </>
    )
}