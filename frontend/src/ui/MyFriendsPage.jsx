import React from "react";
import {CardImg, Col, Container, Row} from "react-bootstrap";
import {ProfileCard} from "./components/ProfileCard";

export function MyFriendsPage() {
    return(
        <>
            <Container className="text-center mt-5 mb-3" >
                <Row className=" mt-5 mb-4">
                    <h1>My Friends page</h1>
                <Col>

                    <ProfileCard>className</ProfileCard>
                </Col>
                <Col>
                        <ProfileCard>className</ProfileCard>
                </Col>
                <Col>
                        <ProfileCard>className</ProfileCard>
                </Col>

                    <Col>

                        <ProfileCard>className</ProfileCard>
                    </Col>
                    <Col>
                        <ProfileCard>className</ProfileCard>
                    </Col>
                    <Col>
                        <ProfileCard>className</ProfileCard>
                    </Col>
                </Row>


            </Container>

        </>
    )
}