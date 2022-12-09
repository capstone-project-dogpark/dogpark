import {Request, Response, NextFunction} from "express";
import {
    insertComment,
    selectAllComments,
    selectCommentByCommentId,
    selectCommentsByCommentPostId,
    selectCommentByCommentProfileId,
    Comment
} from "../../utils/models/comment";
import { Status } from '../../utils/interfaces/Status'
import {Profile} from '../../utils/models/Profile'

export async function getAllCommentsController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const data = await selectAllComments()
        const status: Status = {status: 200, message: null, data}
        return response.json(status)
    }
        catch (error) {
            return response.json({
                status: 500,
                message: '',
                data: []
            })
        }
    }


export async function getCommentsByCommentPostIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {commentPostId} = request.params
        const data = await selectCommentsByCommentPostId (commentPostId)
        const status: Status = { status: 200, message: null, data}
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getCommentByCommentIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { commentId } = request.params
        const data = await selectCommentByCommentId(commentId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}

export async function postCommentController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const {commentId, commentDate, commentText, commentPostId} = request.body
        const profile: Profile = request.session.profile as Profile
        const commentProfileId: string = profile.profileId as string

        const comment:Comment = {
            commentId,
            commentProfileId,
            commentDate,
            commentText,
            commentPostId
        }
        const result = await insertComment (comment)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    }   catch (error) {
        return response.json({
            status: 500,
            message: 'Error creating comment try again later',
        })
    }
}