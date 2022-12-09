import { NextFunction, Request, Response } from "express"
import { verify, VerifyErrors} from "jsonwebtoken";
import {Status} from "../interfaces/Status";
import {Profile} from '../models/Profile'
import {IncomingHttpHeaders} from 'http'

export function isLoggedIn (request: Request, response: Response, next: NextFunction): any {
    const status: Status = {status: 400, message: 'Please log in', data: null}

const sessionProfile = (request: Request): Profile | undefined => request.session?.profile ?? undefined


const signature = (request: Request): string => request.session?.signature ?? 'no signature'

const isSessionsActive = (isProfileActive: Profile | undefined): boolean => (isProfileActive !== undefined)

const getJwtTokenFromHeader = (header: IncomingHttpHeaders): string | undefined => {
    return header.authorization
}

const unverifiedJwtToken: string | undefined = getJwtTokenFromHeader (request.headers)

// const isJwtValid: boolean|void = unverifiedJwtToken
//   ? verify(
//         unverifiedJwtToken,
//         signature(request),
//         {maxAge: "3hr"},
//
//     )
//   : false;

const isJwtValid = (unverifiedJwtToken: string | undefined): boolean => {
    if (unverifiedJwtToken === undefined) {
        return false;
    }
const result: unknown = verify(
    unverifiedJwtToken,
    signature(request),
    {maxAge: '3hr' },
    (error: VerifyErrors | null): boolean => error == null
) as unknown

return result as boolean
}

if(isJwtValid(unverifiedJwtToken) && isSessionsActive(sessionProfile(request))) {
    return next()
}
isJwtValid(unverifiedJwtToken) && isSessionsActive(sessionProfile(request)) ? next() : response.json(status)}