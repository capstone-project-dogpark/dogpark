import {Request, Response} from 'express'
import {upLoadToCloudinary} from '../../utils/cloudinary.utils'

export async function imageUploadController (request: Request, response: Response): Promise<Response> {
    try {
        if (request.file === undefined) {
            throw new Error ('Please provide a valid file type')
        }

        const message: string = await upLoadToCloudinary(request.file)
        return response.json({ status: 200, data: null, message: message})
    }   catch (error: any) {
        console.error(error)
        return response.json ({status: 500, message: error.message, data: null })
    }
}