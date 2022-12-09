import multer, {FileFilterCallback, StorageEngine} from 'multer'
import e, { Express, Request } from 'express'

const storage: StorageEngine = multer.memoryStorage()
const limits = { fields: 2, files: 1, parts: 2 }
const fileFilter = (request: Request, file: Express.Multer.File, callback: FileFilterCallback): void => {
    const { originalname } = file
    return (originalname.match(/\.(jpg|jpeg|png|git)$/) !=null)
        ? callback(null, true)
        : callback(null, false)
}


//export const imageUploader = multer({storage, limits, fileFilter(req: e.Request, file: Express.Multer.File, callback: multer.FileFilterCallback) {
    //}).single('image')


export const imageUploader = multer({storage, limits, fileFilter}).single('image')