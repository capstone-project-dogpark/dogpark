import {Schema} from "express-validator";

export const signInValidator: Schema = {
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at lease eight characters',
            options: {min: 8, max: 200}
        },
        trim: true,
        escape: true
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'please provide a valid email'
        },
        trim: true
    }
}