import { Schema } from "express-validator"

export const profileValidator: Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'please provide a valid ProfileId'
        }
    },
    profileAtHandle: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileAtHandle must be between seven and thirty two characters',
            options: {min: 7, max: 32}
        }
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },
    profileImage: {
        optional: {
            options: {
                nullable: true
            }
        },
        isURL: {
            errorMessage: 'ProfileCard image is malformed please upload a new image'
        }
    }
}