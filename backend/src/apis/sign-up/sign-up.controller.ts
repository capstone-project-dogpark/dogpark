import {Request, Response} from "express";
import Mailgun from "mailgun.js";
import formData from 'form-data'
import {setActivationToken, setHash} from "../../utils/auth.utils";
import {insertProfile, Profile} from "../../utils/models/Profile";

export async function signUpController(request:Request, response:Response) {
    try {
        const mailGun = new Mailgun(formData)
        const mailGunClient = mailGun.client({username:'api',key:process.env.MAILGUN_API_KEY as string})
        const {profileAboutPet, profileAtHandle, profilePassword, profilePasswordConfirm, profileEmail, profileImage} = request.body
        const profileHash = await setHash(profilePassword)
        const profileActivationToken = setActivationToken()
        const basePath: string = `${request.protocol}://${request.hostname}/${request.originalUrl}/activation/${profileActivationToken}`
        const message = `<h2>Welcome to Dog Park</h2>
in order to post photos of your dog you must confirm your account
<a href="${basePath}">${basePath}</a>`
        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
            to: profileEmail,
            subject: 'Account verification for dog park',
            html: message
        }
const profile : Profile = {profileId: null, profileAboutPet, profileActivationToken, profileAtHandle, profileImage, profileEmail, profileHash}
        const successMessage = await insertProfile(profile)
        await mailGunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)
        return response.json ({status:200, message: successMessage, data: null})
    }catch(error: any) {
        return (response.json({status:500, message:error.message, data:null}))
    }
}