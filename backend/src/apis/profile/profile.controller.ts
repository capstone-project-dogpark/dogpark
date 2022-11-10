import { Request, Response } from 'express'
import {
    PartialProfile,
    Profile,
    selectPartialProfileByProfileId,
    selectWhoProfileByProfileId,
    updateProfile
} from '../../utils/models/Profile'
import { Status } from '../../utils/interfaces/Status'

export async function putProfileController (request: Request, response: Response): Promise<Response> {
    try {
        const { profileId } = request.params
        const { profileEmail , profileAvatarUrl, profileAtHandle } = request.body
        const profilePhone = request.body.profilePhone ?? null
        const profile = request.sessions.profile as Profile
        const profileIdFromSession = profile.profileId as string

        const preformUpdate = async (partialProfile: PartialProfile): Promise<Response> => {
            const previousProfile: Profile = await selectWholeProfileByProfileId (partialProfile.profileId as string) as Profile
            const newProfile: Profile = { ...previousProfile, ...partialProfile}
            await updateProfile(newProfile)
            return response.json({status: 200, data:null, message: 'Profile successfully updated'})
        }

        const updateFailed = (message: string): Response => {
            return response.json({status:400, data: null, message})
        }

        return profileId === profileIdFromSession
        ? await preformUpdate({ profileId, profileAtHandle, profileAboutPet, profileEmail, profileImage})
            : updateFailed('you are not allowed to preform this action')
    } catch (error: any) {
        return response.json({ status: 400, data: null, message: error.message})
    }
}

export async function getProfileByProfileId (request: Request, response: Response): Promise<Response> {
    try {
        const { profileId } = request.params
        const mySqlResult = await selectPartialProfileByProfileId(profileId)
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: mull }
        return response.json(status)
    } catch (error: any) {
        return (response.json({ status: 400, data: null, message: error.message }))
    }
}