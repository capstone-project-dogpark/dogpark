import { Request, Response, NextFunction } from 'express';
import {Result, ValidationChain, validationResult} from 'express-validator'


export const asyncValidatorController  = (validations: ValidationChain[])  => {
    return async (request: Request, response: Response, next: NextFunction): Promise<void | Response> => {
        await Promise.all(validations.map((validation: ValidationChain ): Promise<Result> => validation.run(request)));

        const errors: Result = validationResult(request);

        if (errors.isEmpty()) {
            return next()
        }
        return  response.json({ status: 418, data: null, message: errors.array()[0].msg })
    }
}