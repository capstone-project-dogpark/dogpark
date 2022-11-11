import { Request, Response, NextFunction } from 'express'
import {
    insertPost,
    selectAllPosts,
    selectPostByPostId,
    selectPostByPostProfileId,
    Post
} from '../../utils/models/Post'
import { Status } from '../../utils/interfaces/status'
import {Profile, selectWholeProfileByProfileId} from '../../utils/models/Profile'

export async function getAllPostController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const data = await selectAllPosts ()
        const status: Status = { status: 200, message: null, data }
        return response.json(status)
    }   catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getPostByPostProfileIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {postProfileId } = request.params
        const data = await selectPostByPostId (postProfileId)
        const status: Status = { status: 200, message: null, data }
        return response.json(status)
    }   catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getPostByPostIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { postId } = request.params
        const data = await selectPostByPostId (postId)
        return response.json({status: 200, message: null, data})
    }   catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: null
        })
    }
}

export async function postPost (request: Request, response: Response): Promise<Response<status>> {
    try {
        const {postCaption} = request.body
        const profile: Profile = request.session.profile as Profile
        const postProfileId: string = profile.profileId as string

        const post: Post = {
            postId: null,
            postProfileId,
            postCaption,
            postDate: null
        }
        const result = await insertPost(post)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    }   catch (error) {
        return response.json({
            status: 500,
            message: 'Error creating post try again later.',
        })
    }
}
