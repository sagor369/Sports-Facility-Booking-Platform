import { NextFunction, Request, Response } from "express";
import config from "../../../config";
import  jwt  from "jsonwebtoken";
import { AppError } from "../Errors/CustomError";
import httpStatus from "http-status";

const Authorizetion = async(req:Request, res:Response, next: NextFunction) =>{
    const accessToken = req.headers.authorization;
    const decodedToken = jwt.verify(accessToken as string, config.jwt_secrate as string)
    if(!accessToken){
        throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized to access this route"
        )}
    
}