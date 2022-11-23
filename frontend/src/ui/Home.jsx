import React from "react"
import {Button, Col, Container, Row, Nav} from "react-bootstrap";
import {CommunityPost} from "./components/CommunityPost.jsx";
import {Comment} from "./components/Comment.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ProfileCard} from "./components/ProfileCard";


export function Home() {
    return (
        <>
            <Container className="text-center">
                <Row>
                    <Col>
                        <h1>Dogs Best Friend</h1>
                        <h3>"Let's find a friend for your best friend"</h3>
                    </Col>
                </Row>
            </Container>

            <Container className="text-center">
                <Row>
                    <Col>
                        <h2>Our Goal</h2>
                        <p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p>
                    </Col>
                    <Col>
                        <img className="rounded-circle mb-4" src="../assets/hannah-lim-U6nlG0Y5sfs-unsplash.jpg" alt="Dogs"/>
                    </Col>
                </Row>

            </Container>

        </>
    )
}