import { Router } from 'express'
import {getFollowsByFollowProfileId, toggleFollowController, toggleLikeController} from "./follow.controller"
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller"
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller"
import {check} from 'express-validator'

const router = Router ()

router.route('/')
    .post(isLoggedIn, toggleFollowController)
router.route('/followProfileId/:followerProfileId')
    .get (asyncValidatorController)[
        check('followerProfileId, 'please provide a valid followerProfileId').isUUID()
    ]), getFollowsByFollowProfileId)
