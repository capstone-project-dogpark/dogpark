import React, {useEffect} from "react";
import Map from "react-map-gl"
import { Container, Row, Col } from 'react-bootstrap'
import { Pin } from './Pin.jsx'
import data from "../data/cityparks.json"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllParks} from "../store/parks.js";

export function DogParks () {
    const dispatch = useDispatch ()
    const parks = useSelector(state => state.parks ? state.parks : [] )
    const effects = () => {
        dispatch(fetchAllParks())
    }
    useEffect(effects, [dispatch])

console.log(parks);


    return (
        <>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col>
                        <h1>Dog Parks</h1>
                        <Map
                            initialViewState={{
                                latitude: 35.33,
                                longitude: -106.65,
                                zoom: 9
                            }}
                            mapboxAccessToken={'pk.eyJ1IjoiYWFyb241MDUiLCJhIjoiY2xhdWFyaGVwMDRlaTNvbXQzd2lodzhycCJ9._2gFOo1iNytw6oL1-15Veg'}
                            style={{width: 900, height: 600}}
                            mapStyle="mapbox://styles/aaron505/claxli0jp001o15lnod4iujjh"
                        >
                            {parks.map((park, index) => <Pin lat={Number(park.parkLat)} name={park.parkName} address ={park.parkAddress} lng={Number(park.parkLng)} index={index} key={index}/>)}
                        </Map>
                    </Col>
                </Row>
            </Container>

        </>
    )

}