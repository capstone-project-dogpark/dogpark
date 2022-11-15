import { Router } from 'express'
import {
    getAllCommentsController,
    getCommentByCommentIdController,
    commentComment
} from "./comment.controller";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller"
import { check, checkSchema} from "express-validator"
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller"
import {commentValidator} from './comment.validator'

const router = Router()
router.route('commetId').get(asyncValidatorController([
    check('commentId','please prvide a valid commentId').isUUID()
]),getCommentByCommentIdController)

router.route('/commetProfiledId/:commentProfileId').get(asyncValidatorController([
    check('commentId', 'please provide a valid commentId').isUUID()
]),asyncValidatorController)

router.route('/')
.get(getAllCommentsController)
.post(isLoggedIn, asyncValidatorController(checkSchema((commentValidator))), commentComment)

export default router