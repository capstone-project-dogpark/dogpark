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

;


    return (
        <>
            <Container className={'justify-content-center container-fluid'}>
                <Row>
                    <Col>
                        <h1>Dog Parks</h1>
                        <Map
                            initialViewState={{
                                latitude: 35.1032,
                                longitude: -106.6273,
                                zoom: 9
                            }}
                            mapboxAccessToken={'pk.eyJ1IjoiYWFyb241MDUiLCJhIjoiY2xhdWFyaGVwMDRlaTNvbXQzd2lodzhycCJ9._2gFOo1iNytw6oL1-15Veg'}
                            style={{border: "10px solid green", display: "block", margin: "0 auto", width: "75vw", height: "75vh"}}
                            mapStyle="mapbox://styles/aaron505/claxli0jp001o15lnod4iujjh"
                        >
                            {parks.map((park, index) => <Pin lat={Number(park.parkLat)} name={park.parkName} address ={park.parkAddress} lng={Number(park.parkLng)} index={index} key={index}/>)}

                        </Map>
                    </Col>
                </Row>
            </Container>

            <Container className="container my-5">
                <Row className="row gx-lg-5 gy-5">
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh3.googleusercontent.com/p/AF1QipNNGKr4P0TzXEkb90ROUK-RUSovK8s7t9jxPaw=s1360-w1360-h1020" alt="meow"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?q=Westgate+Community+Park&rlz=1C1VDKB_enUS963US963&sxsrf=ALiCzsZs99eCTiKfFZ0hI0ixdog6W37CEg%3A1670393714041&ei=ci-QY7mRAuehytMPufGMmAs&ved=0ahUKEwi5kte_7eb7AhXnkHIEHbk4A7MQ4dUDCBA&uact=5&oq=Westgate+Community+Park&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzILCC4QgAQQxwEQrwEyAggmMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoHCCMQ6gIQJzoNCC4QxwEQ0QMQ6gIQJzoNCAAQjwEQ6gIQtAIYAToNCC4QjwEQ6gIQtAIYAUoECEEYAEoECEYYAVCPCliPCmD3EmgCcAF4AIABaYgBaZIBAzAuMZgBAKABAaABArABFMABAdoBBggBEAEYCg&sclient=gws-wiz-serp">Westgate Community</a></h5>
                    </Col>
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh3.googleusercontent.com/p/AF1QipN2u1vk3BA2NjeUZ-y1c3GjYpt7GhMvuXyF_EL0=s1360-w1360-h1020" alt="park"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?gs_ssp=eJzj4tZP1zcsSaksMs8pNmC0UjWosDA3MjJItEwxSzJNM7VMS7IyqEgzMDNJTjE3s0y2MLAwMEv1EsrJL1ZIzCkBkin56QoFiUXZAPpZFbk&q=los+altos+dog+park&rlz=1C1VDKB_enUS963US963&oq=Los+AL&aqs=chrome.1.69i57j46i39i175i199j69i59j46i433i512j0i433i512j46i512j0i131i433i512j69i60.6639j0j9&sourceid=chrome&ie=UTF-8">Los Altos</a></h5>
                    </Col>
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh3.googleusercontent.com/p/AF1QipPOUlLFv4b4LbD1iFhHd5_ZqyI82gZEjsPZsIc=s1360-w1360-h1020" alt="park"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?rlz=1C1VDKB_enUS963US963&sxsrf=ALiCzsZ4JSElij82zZLtOPiIdrEfAxegGA:1670396205472&q=tower+park&spell=1&sa=X&ved=2ahUKEwiZitjj9ub7AhWZhnIEHc0dA1EQirwEKAB6BAgGEAE&biw=1280&bih=569&dpr=1.5">Tower</a></h5>
                    </Col>
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh3.googleusercontent.com/p/AF1QipMM7SfVOCX_RI7XX-ugSDf7nFXGA1qYHOS9Rqq0=s1360-w1360-h1020" alt="park"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?q=Rio+Grande+Triangle&rlz=1C1VDKB_enUS963US963&oq=Rio+Grande+Triangle&aqs=chrome..69i57j46i175i199i512j0i22i30j0i390l2.1391j0j7&sourceid=chrome&ie=UTF-8">Rio Grande Triangle</a></h5>
                    </Col>
                </Row>

                <Row className="row gx-lg-5 gy-5">
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh5.googleusercontent.com/p/AF1QipO7o7k1koQwslB_4LtGjJQNjFxxRtsp4E-F7qcX=s1360-w1360-h1020" alt="park"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?q=santa+fe+village&rlz=1C1VDKB_enUS963US963&oq=Santa+Fe+Village&aqs=chrome.0.0i512j46i20i175i199i263i512l2j0i512j46i175i199i512l3j0i512l3.1679j0j7&sourceid=chrome&ie=UTF-8">Santa Fe Village</a></h5>
                    </Col>
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh3.googleusercontent.com/p/AF1QipN3aXuUfnFAOhxeuKKZlEvek_qyFPG6dBKhQiz8=s1360-w1360-h1020" alt="park"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?q=country+meadows+dog+park&rlz=1C1VDKB_enUS963US963&sxsrf=ALiCzsYp0FM2agB4QdlbjMev1TtHgXdK5Q%3A1670397054943&ei=fjyQY6WaOZ6DytMP4O22mAc&ved=0ahUKEwil0d_4-eb7AhWegXIEHeC2DXMQ4dUDCBA&uact=5&oq=country+meadows+dog+park&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICCEQoAEQiwMyCAghEKsCEIsDMgUIIRCrAjIFCCEQqwIyBQghEJIDMgUIIRCSAzIFCCEQkgMyBQghEJIDMgUIIRCSAzoKCAAQRxDWBBCwAzoECCMQJzoECAAQQzoFCAAQgAQ6CgguEMcBEK8BEEM6CwguEIAEEMcBEK8BOgoIABCABBCHAhAUOhAILhCABBCHAhDHARCvARAUOgsILhCvARDHARCABDoGCAAQFhAeOgUIIRCgAToICCEQFhAeEB1KBAhBGABKBAhGGABQgg9Y7yVgmChoAXABeACAAZ4BiAGzCJIBAzAuOZgBAKABAcgBCLgBAcABAQ&sclient=gws-wiz-serp">Country Meadows</a></h5>
                    </Col>
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh3.googleusercontent.com/p/AF1QipN-A6iZ4FdXltgzC0gZrh0pow9Sbg-LuMKEHgM7=s1360-w1360-h1020" alt="park"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?q=uss+bullhead+park&rlz=1C1VDKB_enUS963US963&sxsrf=ALiCzsbml621U2PqiibtQCJ2fzveYTVtrg%3A1670397153644&ei=4TyQY737Ju3NytMP7vCo0AQ&gs_ssp=eJzj4tZP1zcsSa4stig3NGC0UjWosDA3MjJINEk2S7Q0NrM0SrEyqEg1sUyxMEu1BJIpSclpZl6CpcXFCkmlOTkZqYkpCgWJRdkA2BoVjQ&oq=USS+Bullhead+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgBMgUIABCABDIQCC4QrwEQxwEQhwIQgAQQFDIFCAAQgAQyBQgAEIAEMgQIABBDMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yAggmOgoIABBHENYEELADSgQIQRgASgQIRhgAUPkFWPkFYLceaAFwAXgAgAF1iAF1kgEDMC4xmAEAoAEByAEIwAEB&sclient=gws-wiz-serp">USS Bullhead</a></h5>
                    </Col>
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh3.googleusercontent.com/p/AF1QipMVxefIxt2yzO3nDSiVodekjffp1qgoCS4ACg0=s1360-w1360-h1020" alt="park"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?q=kirtland+dog+park&rlz=1C1VDKB_enUS963US963&oq=kirtland+do&aqs=chrome.0.0i20i263i355i512j46i20i175i199i263i512j46i175i199i512l3j69i57j0i10i433i512j0i10i512l3.6871j0j9&sourceid=chrome&ie=UTF-8">Kirtland</a></h5>
                    </Col>
                </Row>

                <Row className="row gx-lg-5 gy-5">
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh3.googleusercontent.com/p/AF1QipOoYvnKe6wvQFg-pZrLWVXa0pnHqywvnDvVVhVZ=s1360-w1360-h1020" alt="meow"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?q=Tom+Bolack+Urban+Forest&rlz=1C1VDKB_enUS963US963&oq=Tom+Bolack+Urban+Forest&aqs=chrome..69i57j0i512.2361j0j9&sourceid=chrome&ie=UTF-8">Tom Bolack Urban Forest</a></h5>
                    </Col>
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh3.googleusercontent.com/p/AF1QipMBHlG5WUQrtuqFTia_Vdh0A7PFZHH1C4D6c2id=s1360-w1360-h1020" alt="park"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?rlz=1C1VDKB_enUS963US963&sxsrf=ALiCzsa0CC2Ot9io1ekrBGXa7FfZKg3-hA:1670397506231&q=Coronado+park&spell=1&sa=X&ved=2ahUKEwiZ9_fP--b7AhVbhXIEHT0BD_4QirwEKAB6BAgFEAE&biw=1280&bih=569&dpr=1.5">Coronado</a></h5>
                    </Col>
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh5.googleusercontent.com/p/AF1QipOyoh6Sxrns1t_r3Dd5qYKPmGJEo_o7kfCwOGAa=s1360-w1360-h1020" alt="park"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?q=North+Domingo+Baca+park&rlz=1C1VDKB_enUS963US963&sxsrf=ALiCzsYvbHNe3SvJefI1HW91Vq6wsXH0DA%3A1670397573828&ei=hT6QY-H1MbewytMPyqC4yAw&ved=0ahUKEwihzJXw--b7AhU3mHIEHUoQDskQ4dUDCBA&uact=5&oq=North+Domingo+Baca+park&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzILCC4QrwEQxwEQgAQyCwguEK8BEMcBEIAEMgQIABBDMgUIABCABDoKCAAQRxDWBBCwAzoQCC4QrwEQxwEQhwIQgAQQFDoQCC4QgAQQhwIQxwEQrwEQFDoFCAAQhgNKBAhBGABKBAhGGABQiQZYpg1g-A9oAXABeACAAYMBiAG-BJIBAzAuNZgBAKABAcgBCMABAQ&sclient=gws-wiz-serp">North Domingo Baca</a></h5>
                    </Col>
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh5.googleusercontent.com/p/AF1QipNUQ_aAH66ed55os6Cyrf7Uw1zPA7W79X-Z7Efo=s1360-w1360-h1020" alt="park"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?q=Ouray+Off+Leash+Dog+Area&rlz=1C1VDKB_enUS963US963&oq=Ouray+Off+Leash+Dog+Area&aqs=chrome..69i57j33i160j33i160i395.1584j1j7&sourceid=chrome&ie=UTF-8">Ouray Off Leash Dog Area</a></h5>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh5.googleusercontent.com/p/AF1QipNDnzq0cFue0bnnG4hHIwZGr3gXRce6czId2OY=s1360-w1360-h1020" alt="park"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?q=Roosevelt+dog+park&rlz=1C1VDKB_enUS963US963&sxsrf=ALiCzsaX4zT0-_k5vi8hPk0hvLRuE_4uCg%3A1670397866409&ei=qj-QY-_OGPrYytMPrYKZuAU&ved=0ahUKEwjvy9f7_Ob7AhV6rHIEHS1BBlcQ4dUDCBA&uact=5&oq=Roosevelt+dog+park&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzILCC4QgAQQxwEQrwEyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgUIABCGAzIFCAAQhgMyBQgAEIYDMgUIABCGAzoKCAAQRxDWBBCwAzoNCAAQgAQQhwIQsQMQFDoICAAQgAQQsQM6BQgAEIAEOgoIABCxAxCDARBDOgsIABCABBCxAxDJAzoLCC4QgAQQsQMQgwE6BQguEIAEOgsILhCvARDHARCRAjoKCAAQgAQQhwIQFDoLCC4QxwEQrwEQkQJKBAhBGABKBAhGGABQ-AVY3hNgiBZoAXABeACAAYYBiAGnCJIBAzAuOZgBAKABAcgBCMABAQ&sclient=gws-wiz-serp">Roosevelt</a></h5>
                    </Col>
                    <Col className="col-lg-3 text-center">
                        <img className=" mb-4 img-fluid " src="https://lh5.googleusercontent.com/p/AF1QipMJamNVI53uOMll3THqAPvLr_nY4Nr0pxXyKcXE=s1360-w1360-h1020" alt="park"/>
                        <h5 className="border rounded bg-light p-3"><a href="https://www.google.com/search?q=canine+skyline+dog+park&rlz=1C1VDKB_enUS963US963&oq=Canine+Skyline+Dog+Park&aqs=chrome.0.0i355i512j46i175i199i512j0i390l4.1112j0j9&sourceid=chrome&ie=UTF-8">Canine Skyline Dog Park</a></h5>
                    </Col>
                </Row>
            </Container>

        </>
    )

}

