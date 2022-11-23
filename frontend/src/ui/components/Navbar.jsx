import React from "react"
import {Container, Nav, Navbar} from "react-bootstrap";

export function Navigation() {
    return (
        <>
            <Navbar navbar-collapse expand="lg" bg="light" variant="light">
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nar">
                        <Nav className="ms-auto">
                            <Nav.Link href='/'>Albuquerque Dog Parks</Nav.Link>
                            <Nav.Link href='/about'>The Community</Nav.Link>
                            <Nav.Link href='/about'>Create a Pet Profile</Nav.Link>
                            <Nav.Link href='/about'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}