import {NextFunction, Request, Response} from 'express'
import {Status} from "../../utils/interfaces/Status";
import {
    selectAllParks,
    selectParkByParkId,
    selectParksByDistance,
} from "../../utils/models/Park"



export async function getAllParksController (request: Request, response:Response): Promise<Response<Status>> {
    try{
        const data = await selectAllParks()
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

export async function getParkByParkIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {parkId} = request.params
        const data = await selectParkByParkId(parkId)
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getParksByDistance (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {userLng, userLat, distance} = request.params
        const data = await selectParksByDistance(userLng, userLat, distance)
        return response.json ({status: 200, message: null, data})
    } catch (error) {
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    }
}


