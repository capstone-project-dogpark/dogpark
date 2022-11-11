import {NextFunction, request, Request, response, Response} from "express"
import { Status } from '../../utils/interfaces/status'
import { Profile } from '../../utils/models/Profile'
import { deleteLike, insertLike, Like, selectLikeByLikeId, selectLikesByLikePostId } from '../../utils/models/like'

export async function getLikesByLikePostId (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { likePostId } = request.params
        const data = await selectLikesByLikePostId(likePostId)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function toggleLikeController (request: Request, response: Response): Promise<Response<string>> {
    try {
        const {likePostId} = request.body
        const profile = request.session.profile as Profile
        const likeProfileId = profile.profileId as string

        const like: Like = {
            likeProfileId,
            likePostId,
            likeDate: null
        }

        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        const selectedLike: Like|null = await selectLikeByLikeId(like)
        if (selectedLike === null) {
            status.message = await insertLike(like)
        } else {
            status.message = await deleteLike(like)
        }

        return response.json(status)
    } catch (error: any) {
        return (response.json({ status: 500, data: null, message: error.message}))
    }
}