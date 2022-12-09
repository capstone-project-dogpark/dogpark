import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import {Button, Form, FormControl, Image, InputGroup} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {DisplayError} from "../components/display-error/DisplayError.jsx";
import {DisplayStatus} from "../components/display-error/DisplayStatus.jsx";
import {httpConfig} from "../../utils/http-config.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts} from "../../store/posts.js";
import {useDropzone} from "react-dropzone";
import {getAuth} from "../../store/auth.js";



export const UpdateProfileForm = () => {
    const profile= useSelector(state => state.auth ?? null)
    // const signUp = {
    //     profileEmail: "",
    //     profileAtHandle: "",
    //     profileAboutPet: "",
    //     profileImage: null,
    // };

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        profileAtHandle: Yup.string()
            .required("profile handle is required"),
        profileAboutPet: Yup.string()
            .required("profile About pet is required"),
        profileImage: Yup.mixed()
    });

    // const HandleSubmit = (values, {resetForm, setStatus}) => {
    //     httpConfig.post("/apis/profile/", values)
    //         .then(reply => {
    //                 let {message, type} = reply;
    //
    //                 if(reply.status === 200) {
    //                     resetForm();
    //                 }
    //                 setStatus({message, type});
    //             }
    //         );
    // };
    const dispatch = useDispatch()
    function HandleSubmit (values, {resetForm, setStatus}) {

        httpConfig.post(`/apis/image-upload`, values.profileImage)
            .then(rep => {

                if (rep.status === 200) {
                    httpConfig.put(`/apis/profile/${profile.profileId}`, {...values, profileImage: rep.message})
                        .then(reply => {
                            let {mess, type} =reply

                            if (reply.status === 200) {
                                resetForm()
                                dispatch(getAuth({...values, profileImage: rep.message}))
                            }
                            setStatus({mess, type})
                            return (reply)
                        })
                }
            })
    }

    return (

        <Formik
            initialValues={profile}
            onSubmit={HandleSubmit}
            validationSchema={validator}
        >
            {EditProfileContent}
        </Formik>

    )
};
function  EditProfileContent(props){
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        setFieldValue,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    return (
        <>
            <Form onSubmit={handleSubmit}>
                {/*controlId must match what is passed to the initialValues prop*/}
                <Form.Group className="mb-1" controlId="profileEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="envelope"/>
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="profileEmail"
                            type="text"
                            value={values.profileEmail}
                            placeholder="your@email.you"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"profileEmail"} />
                </Form.Group>
                {/*controlId must match what is defined by the initialValues object*/}


                <Form.Group className="mb-1" controlId="profileAtHandle">
                    <Form.Label>Pets Name</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="dove"/>
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="profileAtHandle"
                            type="text"
                            value={values.profileAtHandle}
                            placeholder="Pets name"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"profileAtHandle"} />
                </Form.Group>

                <Form.Group className="mb-1" controlId="profilePhone">
                    <Form.Label>About your Pet</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="phone"/>
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="profileAboutPet"
                            type="text"
                            value={values.profileAboutPet}
                            placeholder="placeholder-placeholder"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"profileAboutPet"} />
                </Form.Group>
                <Form.Label>Upload Image</Form.Label>
                <ImageDropZone
                    formikProps={{
                        values,
                        handleChange,
                        handleBlur,
                        setFieldValue,
                        fieldValue: 'profileImage'
                    }}
                />

                <Form.Group className={"mt-3"}>
                    <Button className="btn btn-primary" type="submit">Submit</Button>
                    {" "}
                    <Button
                        className="btn btn-danger"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </Button>
                </Form.Group>


            </Form>
            <DisplayStatus status={status} />

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
                    formikProps.values.profileImage &&
                    <>
                        <div className="bg-transparent m-0">
                            <Image  fluid={true} height={100} rounded={true} thumbnail={true} width={100} alt="user avatar" src={formikProps.values.profileImage} />
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

