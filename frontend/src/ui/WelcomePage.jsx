import React from "react"
import {Container, Image} from "react-bootstrap";

export function WelcomePage () {
    return (
        <>
            <Container className="text-center mt-5">
                <h1>Welcome, Furball!</h1>
            </Container>

            <Container className="mt-5">
            <Image fluid={true} className={"rounded-circle"} src={"https://www.placecage.com/200/200"} alt={"place cage image"} />
            </Container>


        </>
    )
}