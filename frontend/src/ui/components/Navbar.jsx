import React from "react"
import {Container, Nav, Navbar} from "react-bootstrap";
import {SignUp} from "../SignUp.jsx";

export function Navigation() {
    return (
        <>
            <Navbar navbar-collapse="true" expand="lg" variant="light">
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nar">
                        <Nav className="ms-auto">
                            <Nav.Link className="navLink" href='/'>Home</Nav.Link>
                            <Nav.Link className="navLink" href='/CommunityPage'>The Community</Nav.Link>
                            <Nav.Link className="navLink" href='/SignUp'>Create a Pet Profile</Nav.Link>
                            <Nav.Link className="navLink" href='/DogParks'>Parks</Nav.Link>
                            <Nav.Link className="navLink" href='/Login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}