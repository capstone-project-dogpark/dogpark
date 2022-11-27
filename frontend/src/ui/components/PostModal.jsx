import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export function PostModal() {
    const values = [''];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    {typeof v === 'string' && `Post ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Creat a post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control type="file" size="sm" />
                        <Form.Control className="my-2" size="sm" type="text" placeholder="Write a caption" />

                        <Button variant="primary">Post</Button>{''}

                </Form.Group>
                </Modal.Body>
            </Modal>
        </>
    );
}