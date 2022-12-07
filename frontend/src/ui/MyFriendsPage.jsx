import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ProfileCard} from "./components/ProfileCard";
import {useSelector} from "react-redux";
import {fetchAuth} from "../store/auth.js";

export function MyFriendsPage() {
    const auth = useSelector((state => state.follows ? state.follows: []))
    const follows = useSelector (state => state.follows ? state.follows: [])
    const profile= useSelector(state => state.auth ?? null)
    const dispatch = useDispatch ()

    function initialEffects(){
        dispatch(fetchAllFollows())
        dispatch(fetchAuth())
    }

    useEffect(initialEffects, [dispatch])

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