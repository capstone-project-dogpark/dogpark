import React from "react"
import {Nav} from "react-bootstrap";

export function Navbar() {
    return (
        <>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link className="position-absolute top-0 end-0 border" cleventKey="link-1">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                </Nav.Item>
            </Nav>
            <h1 className="text-center mt-4 mb-4">Dog's Best Friend</h1>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                </Nav.Item>
            </Nav>
        </>
    )
}