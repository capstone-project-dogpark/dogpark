import {NextFunction, Request, Response} from 'express'
import { Status } from '../../utils/interfaces/status'
import { Profile } from '../../utils/models/Profile'
import {deleteFollow, insertFollow, Follow, selectFollowByFollowProfileId, selectFollowsByFollowProfileId} from '../../utils/models/follow'

export async function getFollowsByFollowProfileId (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {followProfileId} = request.params
        const data = await selectFollowsByFollowProfileId(followProfileId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
    return response.json({
        status: 500,
        message: '',
        data: []
    })
    }
}