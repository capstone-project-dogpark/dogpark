import React from "react";
import Map from "react-map-gl"
import { Container, Row, Col } from 'react-bootstrap'
import { Pin } from './Pin.jsx'
import data from "../data/cityparks.json"

export function DogParks () {
    const [points, setPoints] = React.useState([ { lat: 35.332, lng: -106.652 }])

    React.useEffect(()=>{
        const parks =[];
        // console.log(data.features[0].geometry.rings[0][0]);

        data.features.forEach(park => {
          if(park.attributes.DogPark ==="y"){
              const obj={};
              obj.ParkName = park.attributes.ParkName;
              obj.ParkAddress = park.attributes.ParkAddress;
              if(park.geometry.rings){
                  obj.lat = park.geometry?.rings[0][0][0];
                  obj.lng = park.geometry?.rings[0][0][1];
              }
              if(park.geometry.curveRings){
                  obj.lat = park.geometry?.curveRings[0][0][0];
                  obj.lng = park.geometry?.curveRings[0][0][1];
              }

              parks.push(obj);
          }
        })
console.log(parks);
        setPoints(parks)
    }, [])

    React.useEffect(()=>{console.log(points)}, [points])

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
                            {points.map((point, index) => <Pin lat={Number(point.lat)} name={point.ParkName} address ={point.ParkAddress} lng={Number(point.lng)} index={index} key={index}/>)}
                        </Map>
                    </Col>
                </Row>
            </Container>

        </>
    )

}