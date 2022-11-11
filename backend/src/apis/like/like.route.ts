import { Router } from 'express'
import {getLikesByLikePostId, toggleLikeController} from "./like.controller"
import { isLoggedIn } from "../../utils/controllers/isLoggedIn.controller"
import { asyncValidatorController } from "../../utils/controllers/async-validator.controller"
import { check } from 'express-validator'

const router = Router()


router.route('/')
    .post(isLoggedIn, toggleLikeController)
router.route('likePostId/:likePostId')
    .get(asyncValidatorController([
        check('likeTweetId', 'please provide a valid likePostId').isUUID()
    ]), getLikesByLikePostId)

export default router