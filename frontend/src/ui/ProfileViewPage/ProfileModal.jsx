import {useState} from "react";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {UpdateProfileForm} from "./ProfileUpdate";

export function ProfileModal() {
    const [show, setShow]= useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Update profile
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdateProfileForm/>
                </Modal.Body>
            </Modal>
        </>
    );
}