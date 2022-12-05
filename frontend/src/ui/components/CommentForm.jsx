import {useDispatch} from "react-redux";
import * as Yup from "yup";
import {httpConfig} from "../../utils/http-config.js";
import jwtDecode from "jwt-decode";
import {getAuth} from "../../store/auth.js";
import {Formik} from "formik";
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DisplayError} from "./display-error/DisplayError.jsx";
import {DisplayStatus} from "./display-error/DisplayStatus.jsx";
import React from "react";

export const CommentForm = () => {

    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        commentText: Yup.string()
            .max(252, "A comment cannot be longer than 252 characters")
    });

    const comment = {
        commentText: "",
    };

    const submitComment = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/comment/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if(reply.status === 200 ) {

                    resetForm();
                }
                setStatus({message, type});
            });
    };

    return (
        <>
            <Formik
                initialValues={comment}
                onSubmit={submitComment}
                validationSchema={validator}>

                {CommentFormContent}
            </Formik>
        </>
    )
};

function CommentFormContent(props) {
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
                <Form.Group className="mb-1" controlId="commentText">
                    <Form.Label>Comment</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="envelope"/>
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="Comment"
                            type="text"
                            value={values.commentText}
                            placeholder="Comment"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"commentText"} />
                </Form.Group>

                <FontAwesomeIcon icon="key"/>
                {/*controlId must match what is defined by the initialValues object*/}
                <Form.Group className={"mt-3"}>
                    <Button className="btn btn-primary" type="submit">Submit</Button>
                    {" "}
                </Form.Group>
            </Form>
            <div className="pt-3">
                <DisplayStatus status={status} />
            </div>
        </>
    )
}
