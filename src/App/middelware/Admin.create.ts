import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../Utills/CatchAsync";
import { AppError } from "./Errors/CustomError";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import { TokenCheck } from "../../Utills/AuthUtills";

export const AdminCreate = () => {
    return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
      const accessToken = req.headers.authorization;
      const payload = req.body
      
      if(payload.role !== "admin"){
       return next()
      }
      if (!accessToken) {
        throw new AppError(
          httpStatus.UNAUTHORIZED,
          "You are not authorized to access create admin user"
        );
      }
      const decodedToken = jwt.verify(
        accessToken as string,
        config.jwt_secrate as string
      ) as JwtPayload;
  
      const { email, role } = decodedToken;
      await TokenCheck({ email, role }, "admin");
      next();
    });
  };