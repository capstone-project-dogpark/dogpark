import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {CommunityPost} from "./components/CommunityPost.jsx";

export function CommunityPage() {
    return(
        <>
            <Container className="text-center mt-5 mb-3" >
                <Row className=" mt-5 mb-4">
                    <h1>Community Page</h1>
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