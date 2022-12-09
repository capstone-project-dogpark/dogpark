import { Express } from 'express'
import { Readable} from "stream"
import { v2 as cloudinaryUtils, UploadStream, UploadApiOptions } from 'cloudinary';

export const upLoadToCloudinary = async (file: Express.Multer.File): Promise<string> => {

    cloudinaryUtils.config({
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        cloud_name: process.env.CLOUDINARY_NAME
    })

    return await new Promise((resolve, reject): void => {
        const cloudinaryUploadStream: UploadStream = cloudinaryUtils.uploader.upload_stream(
            (Error: Error, cloudinaryResult: UploadApiOptions|undefined) => {
                if (cloudinaryResult !== undefined) {
                    resolve(cloudinaryResult.secure_url)
                } else {
                    reject(Error)
                }
            }
        )

        const readable: Readable = new Readable()
        readable._read = () => {}
        readable.push(file.buffer)
        readable.push(null)
        readable.pipe(cloudinaryUploadStream)
    })
}