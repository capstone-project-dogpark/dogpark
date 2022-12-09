import { Schema} from 'express-validator'

export const postValidator: Schema = {
    postProfileId: {
        isUUID: {
            errorMessage: 'Please provide a valid postProfileId'
        }
    },
    postCaption: {
        isLength: {
            errorMessage: 'A post cannot be longer than 252 characters',
            options: {max: 252}
        },
        trim: true,
        escape: true
    },
    postParkId:{
        isUUID: {
            errorMessage: 'Please provide a valid parkId'
        },
        optional: {
            options: {
                nullable: true
            }
        }
    }
}
