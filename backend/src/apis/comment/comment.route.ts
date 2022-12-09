import { Router } from 'express'
import {
    getAllCommentsController,
    getCommentByCommentIdController,
    postCommentController,
    getCommentsByCommentPostIdController
} from "./comment.controller";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller"
import { check, checkSchema} from "express-validator"
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller"
import {commentValidator} from './comment.validator'

export const CommentRouter: Router = Router()
CommentRouter.route('commentId').get(asyncValidatorController([
    check('commentId','please provide a valid commentId').isUUID()
]),getCommentByCommentIdController)

CommentRouter.route('/commentPostId/:commentPostId').get(asyncValidatorController([
    check('commentPostId', 'please provide a valid commentId').isUUID()
]),getCommentsByCommentPostIdController)

CommentRouter.route('/')
.get(getAllCommentsController)
.post(isLoggedIn, asyncValidatorController(checkSchema((commentValidator))), postCommentController)

export default Router