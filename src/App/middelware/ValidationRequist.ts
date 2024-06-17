import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { CatchAsync } from "../../Utills/CatchAsync";

export const ValidateRequest = (payload: AnyZodObject) => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await payload.parseAsync({
      data: req.body,
      query: req.query
    });
    next();
  });
};
