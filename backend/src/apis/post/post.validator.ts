import { Schema} from 'express-validator'

export const postValidator: Schema = {
    postProfileId: {
        isUUID: {
            errorMessage: 'Please provide a valid postProfileId'
        }
    },
    postContent: {
        isLength {
            errorMessage: 'A post cannot be longeer than 252 characters',
            options: { max: 252 }
        },
        trim: true,
        escape: true
        },
        postDate: {
        toDate: true
    }
}