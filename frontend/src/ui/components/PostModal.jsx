import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useDispatch} from "react-redux";
import {httpConfig} from "../../utils/http-config.js";
import {fetchAllPosts} from "../../store/posts.js";
import {Formik} from "formik";
import * as Yup from "yup"
import {FormDebugger} from "./display-error/FormDebugger.jsx";
import {DisplayError} from "./display-error/DisplayError.jsx";
import {DisplayStatus} from "./display-error/DisplayStatus.jsx";


export function PostModal() {
    const dispatch = useDispatch()
    const initialValues = {
        postCaption: "",
        postAvatarUrl: ""
    }

    function handleSubmit(values, {resetForm, setStatus}) {
        httpConfig.post("/apis/post", values).then(reply => {
                const {message, status, type} = reply
                if (status === 200) {
                    resetForm()
                    dispatch(fetchAllPosts())
                }
                setStatus({message, type})
            }
        )
    }

    const validator = Yup.object().shape({
        postCaption: Yup.string()
            .required("Please write a caption for your post")
            .max(),
        postImageUrl: Yup.string()
            .required("Please upload an image for your post")
            .max(36, "Image url cannot exceed 36 characters"),
    })





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
                    <i className="fas fa-plus-circle"></i>
                    {typeof v === 'string' && `${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Creat a post</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validator}>
                        {PostFormContent}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}

function PostFormContent(props) {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    return (
        <>
           <Form onSubmit={handleSubmit}>
               <Form.Group controlId="formFileSm" className="mb-3">
                   <Form.Label>Upload Image</Form.Label>
                   <ImageDropZone
                       formikProps={{
                           values,
                           handleChange,
                           handleBlur,
                           setFieldValue,
                           fieldValue: 'postAvatarUrl'
                       }}
                   />
                   <Form.Control   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.post} className="my-2" size="sm" type="text" placeholder="Write a caption" />

                   <Button variant="primary">Post</Button>{''}

               </Form.Group>

           </Form>
            </>
            )
            }
