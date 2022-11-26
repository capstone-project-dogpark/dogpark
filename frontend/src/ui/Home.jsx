import React from "react"
import {Button, Col, Container, Row, Nav, Image} from "react-bootstrap";
import {CommunityPost} from "./components/CommunityPost.jsx";
import {Comment} from "./components/Comment.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ProfileCard} from "./components/ProfileCard";
import {FeedView} from "./components/FeedView.jsx";


export function Home() {
    return (
        <>
            <Container className="text-center mb-5">
                <Row>
                    <Col>
                        <h1>Dogs Best Friend</h1>
                        <h3>"Let's find a friend for your best friend"</h3>
                    </Col>
                </Row>
            </Container>

            <Container className="container-fluid py-5">
                <Row className="Row gx-md-5 gy-5">
                    <Col className="text-center" md="7">
                        <h2>Our Goal</h2>
                        <p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p>
                    </Col>
                    <Col md="5">
                        <Image fluid={true} className={"d-block mx-auto"} src={"https://www.placecage.com/gif/400/400"} alt={"place cage image"} />
                    </Col>
                </Row>

            </Container>

        </>
    )
}