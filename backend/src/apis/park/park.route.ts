import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check} from "express-validator";
import {getAllParksController, getParkByParkIdController} from "./park.controller";

export const parkRouter = Router()
parkRouter.route('/:parkId').get(asyncValidatorController([
    check('parkId', 'Please provide a valid parkId').isUUID()
]), getParkByParkIdController)

parkRouter.route('/')
    .get(getAllParksController)


