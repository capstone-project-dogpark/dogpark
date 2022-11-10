import {Request, Response} from 'express'
import {upLoadToCloudinary} from '../../utils/cloudinary.utils'

export async function ImageUploadController (request: Request, response: Response): Promise<Response> {
    try {
        if (request.file === undefined) {
            throw new Error ('Please provide a valid file type')
        }

        const message: string = await upLoadToCloudinary(request.file)
        return response.json({ status: 200, data: null, message: message})
    }   catch (error: any) {
        return response.json ({status: 400, message: error.message, data: null })
    }
}