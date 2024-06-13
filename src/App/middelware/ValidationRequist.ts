import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const ValidateRequest = (payload: AnyZodObject) =>{ 
    return async(req: Request, res: Response, next:NextFunction) => {
        try{
            await payload.parseAsync({
                data:  req.body
            })
            next()
        }catch(err){
            next(err)
        }
}}