import { unknown } from "zod"
import { TSendData } from "./utils.interface"
import { Response } from "express"

export const SendRespons = <T>(res:Response, data:TSendData<T>) =>{
   const {message, statusCode, success} = data
    res.status(statusCode).json({
        message,
        success,
        data: data?.data
    })
}