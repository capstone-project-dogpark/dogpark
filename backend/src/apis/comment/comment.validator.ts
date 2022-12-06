import { Schema} from 'express-validator'

export const commentValidator: Schema = {
    commentProfileId: {
        isUUID: {
            errorMessage: 'Please provide a valid commentProfileId'
        }
    },
    commentPostId:{
        isUUID: {
            errorMessage: 'Please provide a valid postId'
        }
    },

    commentText: {
        isLength: {
            errorMessage: 'A comment cannot be longer than 252 characters',
            options: { max: 252 }
        },
        trim: true,
        escape: true
    },
    commentDate: {
        toDate: true
    }
}
