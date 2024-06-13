import { TSendData } from "./utils.interface"
import { Response } from "express"

export const SendRespons = <T>(res:Response, data:TSendData<T>) =>{
   const {message, statusCode, success, accessToken} = data
   if(accessToken){

       res.status(statusCode).json({
           success,
           message,
           accessToken,
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