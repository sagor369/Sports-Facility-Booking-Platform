import { TSendData } from "./utils.interface"
import { Response } from "express"

export const SendRespons = <T>(res:Response, data:TSendData<T>) =>{
   const {message, statusCode, success, token} = data
   if(token){

       res.status(statusCode).json({
           success,
           message,
           token,
           data: data?.data
       })
   }else {
    res.status(statusCode).json({
        success,
        message,
        data: data?.data
    })
   }
}