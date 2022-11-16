import { Router } from 'express'
import {getFollowsByFollowProfileId, toggleFollowController} from "./follow.controller"
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller"
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller"
import {check} from 'express-validator'

export const followRouter = Router ()

followRouter.route('/')
    .post(isLoggedIn, toggleFollowController)
followRouter.route('followProfileId/:followProfileId')
    .get (asyncValidatorController)[
        check('followProfileId', 'please provide a valid followerProfileId').isUUID()
    ]), getFollowsByFollowProfileId)
