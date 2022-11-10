import {Schema} from "express-validator";

export const signUpValidator: Schema = {
    profileAboutPet: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profile about pet must be between 0 to 275 characters',
            options: {min: 1, max: 275}
        },
        optional: {
            options: {
                nullable: true
            }
        }

    },
    profileAtHandle: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profile handle must be between seven to thirty-two characters',
            options: {min: 7, max: 32}
        },
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'please provide a valid email'
        },
        isLength: {
            errorMessage: 'profile email must be shorter than 64 characters',
            options: {min: 1, max: 64}
        }

    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8, max: 200 }
        }

    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'Confirm password must be at least eight characters',
            options: { min: 8, max: 200 }
        },
        custom: {
            errorMessage: 'Password confirmation does not match password',
            options: (value, { req, location, path }) => {
                if (value !== req.body.profilePassword) {
                    throw new Error('Password confirmation does not match password')
                }

                // Indicates the success of this synchronous custom validator
                return true
            }
        }
    },
    profileImage: {
        isURL: true,
        optional: {
            options: {
                nullable: true
            }
        },
        isLength: {
            errorMessage: 'profile image must be between 0 to 255 characters',
            options: {min: 1, max: 255}
        },
    }
}