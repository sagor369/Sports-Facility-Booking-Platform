import { NextFunction, Request, Response } from "express";
import config from "../../../config";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AppError } from "../Errors/CustomError";
import httpStatus from "http-status";
import { TokenCheck } from "../../../Utills/AuthUtills";
import { CatchAsync } from "../../../Utills/CatchAsync";

export const Authorizetion = (userRole: string) => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You are not authorized to access this route1"
      );
    }
    const accessToken = token?.split(" ") as string[]
    const decodedToken = jwt.verify(
      accessToken[1] as string,
      config.jwt_secrate as string
    ) as JwtPayload;

    const { email, role } = decodedToken;
    await TokenCheck({ email, role }, userRole);
    req.user= decodedToken
    next();
  });
};
