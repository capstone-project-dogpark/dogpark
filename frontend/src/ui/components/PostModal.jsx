import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from "react-redux";
import {httpConfig} from "../../utils/http-config.js";
import {fetchAllPosts} from "../../store/posts.js";
import {Formik} from "formik";
import * as Yup from "yup"
import {FormDebugger} from "./display-error/FormDebugger.jsx";
import {DisplayError} from "./display-error/DisplayError.jsx";
import {DisplayStatus} from "./display-error/DisplayStatus.jsx";
import {FormControl, Image, InputGroup} from "react-bootstrap";
import {useDropzone} from "react-dropzone";
import {fetchAuth} from "../../store/auth.js";


export function PostModal() {
    const dispatch = useDispatch()
    const initialValues = {
        postCaption: "",
        postImageUrl: ""
    }
    React.useEffect(()=>{dispatch(fetchAuth())}, [dispatch])
    const auth = useSelector(state => state.auth)
    function handleSubmit (values, {resetForm, setStatus}) {
    console.log(values)
            httpConfig.post(`/apis/image-upload`, values.postImageUrl)
                .then(reply => {

                    if (reply.status === 200) {
                            httpConfig.post("/apis/post", {...values, postImageUrl: reply.message, postProfileId: auth?.profileId, postParkId: null})
                                .then(reply => {
                                    let {message, type} =reply

                                    if (reply.status === 200) {
                                        resetForm()
                                        dispatch(fetchAllPosts())
                                    }
                                    setStatus({message, type})
                                    return (reply)
                                })
                }
        })
    }

    const validator = Yup.object().shape({
        postCaption: Yup.string()
            .required("Please write a caption for your post")
            .max(252, "Caption should not exceed 252 characters"),
        postImageUrl: Yup.mixed()
            .required("Please upload an image for your post")
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
                    <Modal.Title>Create a post</Modal.Title>
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
        setFieldValue,
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
                           fieldValue: 'postImageUrl'
                       }}
                   />
                   <Form.Control   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.postCaption} className="my-2" name="postCaption" size="sm" type="text" placeholder="Write a caption" />

                   <Button type="submit" variant="primary">Post</Button>{''}

               </Form.Group>

           </Form>

            </>
            )
            }

function ImageDropZone ({ formikProps }) {

    const onDrop = React.useCallback(acceptedFiles => {

        const formData = new FormData()
        formData.append('image', acceptedFiles[0])

        formikProps.setFieldValue(formikProps.fieldValue, formData)

    }, [formikProps])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <Form.Group className={"mb-3"} {...getRootProps()}>
            <Form.Label>User Avatar</Form.Label>

            <InputGroup size="lg" className="">
                {
                    formikProps.values.profileImageUrl &&
                    <>
                        <div className="bg-transparent m-0">
                            <Image  fluid={true} height={100} rounded={true} thumbnail={true} width={100} alt="user avatar" src={formikProps.values.profileImageUrl} />
                        </div>

                    </>
                }
                <div className="d-flex flex-fill bg-light justify-content-center align-items-center border rounded">
                    <FormControl
                        aria-label="profile avatar file drag and drop area"
                        aria-describedby="image drag drop area"
                        className="form-control-file"
                        accept="image/*"
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        {...getInputProps()}
                    />
                    {
                        isDragActive ?
                            <span className="align-items-center" >Drop image here</span> :
                            <span className="align-items-center" >Drag and drop image here, or click here to select an image</span>
                    }
                </div>


            </InputGroup>
        </Form.Group>
    )
}

