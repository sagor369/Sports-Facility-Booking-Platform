import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
export const notFound = (req:Request, res: Response, next:NextFunction) =>{
    return res.status(httpStatus.NOT_FOUND).json({seccess: false, message: "api route not found"})
}