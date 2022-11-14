import {NextFunction, Request, Response} from 'express'
import {Status} from "../../utils/interfaces/status";
import {
    insertPark,
    selectAllPark,
    selectParksByParkId,
    selectParksByParkProfileId,
    park} from "../../utils/models/park"



export async function getAllParkControllers(request: Request, response:Response): Promise<Response<Status>> {
    try{
        const data = await selectAllPark()
        //return the response
        const status: Status = {status: 200, message: null, data }
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getParkByParkProfileIdController (request: Request, response:Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {parkProfileId} = request.params
        const data = await selectParksByParkProfileId(parkProfileId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}



