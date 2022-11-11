import { Router } from 'express'
import {
    getAllPostsController,
    getPostByPostIdController,
    postPost
} from './post.controller'
import {asyncValidatorController} from '../../utils/controllers/async-validator.controller'
import { check, checkSchema } from 'express-validator'
import { isLoggedIn } from '../../utils/controllers/isLoggedIn.controller'
import { postValidator } from './post.validator'

const router = Router()
router.route('/:PostId').get(asyncValidatorController([
    check('postId', 'please provide a valid postId').isUUID()
]), getPostByPostIdController)

router.route('/postProfileId/:postProfileId').get(asyncValidatorController([
    check('PostId', 'please provide a valid postId').isUUID()
]), getPostByPostIdController)

router.route('/')
.get(getAllPostsController)
.post(isLoggedIn, asyncValidatorController(checkSchema((postValidator))) , postPost)

export default router