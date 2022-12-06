import React from 'react';

import {Formik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import jwtDecode from 'jwt-decode'
import { getAuth} from "../../../../store/auth.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormDebugger } from '../../display-error/FormDebugger'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { DisplayError } from '../../display-error/DisplayError'
import { DisplayStatus } from '../../display-error/DisplayStatus'
import {httpConfig} from "../../../../utils/http-config.js";


export const SignInForm = () => {

    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("Please provide a valid email")
            .required('Email is required'),
        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters")
    });

    const signIn = {
        profileEmail: "",
        profilePassword: ""
    };

    const submitSignIn = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-in/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if(reply.status === 200 && reply.headers["authorization"]) {
                    window.localStorage.removeItem("authorization");
                    window.localStorage.setItem("authorization", reply.headers["authorization"]);
                    resetForm();
                    let jwtToken = jwtDecode(reply.headers["authorization"])
                    dispatch(getAuth(jwtToken))
                    // React useNavigate will go here to welcome page
                }
                setStatus({message, type});
            });
    };

    return (
        <>
            <Formik
                initialValues={signIn}
                onSubmit={submitSignIn}
                validationSchema={validator}
            >
                {SignInFormContent}
            </Formik>
        </>
    )
};

function SignInFormContent(props) {
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
                {/*controlId must match what is passed to the initialValues prop*/}
                <Form.Group className="mb-1" controlId="profileEmail">
                    <Form.Label>email</Form.Label>
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

                <FontAwesomeIcon icon="key"/>
                {/*controlId must match what is defined by the initialValues object*/}
                <Form.Group className="mb-1" controlId="profileAtHandle">
                    <Form.Label>password</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="key"/>
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="profilePassword"
                            type="text"
                            value={values.profilePassword}
                            placeholder="p@ssword1"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"profilePassword"} />
                </Form.Group>

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
            <div className="pt-3">
                <DisplayStatus status={status} />
            </div>
        </>
    )
}
