import { Router } from 'express'

import { imageUploader } from '../../utils/controllers/multer.controller'
import { imageUploadController } from './image-upload.controller'

export const ImageUploadRoute = Router()

ImageUploadRoute.route('/')
    .post(imageUploader, imageUploadController)