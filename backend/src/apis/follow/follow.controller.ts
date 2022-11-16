import {NextFunction, Request, Response} from 'express'
import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'
import {deleteFollow, insertFollow, Follow, selectFollowByFollowProfileId, selectFollowsByFollowerProfileId} from '../../utils/models/follow'

export async function getFollowsByFollowProfileId (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {followProfileId} = request.params
        const data = await selectFollowsByFollowerProfileId(followProfileId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
    return response.json({
        status: 500,
        message: '',
        data: []
    })
    }
}

export async function toggleFollowController (request: Request, response: Response): Promise<Response<string>> {
    try {
        const {followerProfileId, followApproved} = request.body
        const profile = request.session.profile as Profile
        const followProfileId = profile.profileId as string

        const follow: Follow = {
            followApproved,
            followProfileId,
            followerProfileId,
            followDate: null
        }

        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        const selectedFollow: Follow|null = await selectFollowByFollowProfileId(follow)
        if (selectedFollow === null) {
            status.message = await insertFollow(follow)
        } else {
            status.message = await deleteFollow(follow)
        }

        return response.json(status)
    } catch (error: any) {
        return (response.json({ status: 500, data: null, message: error.message}))
    }
}