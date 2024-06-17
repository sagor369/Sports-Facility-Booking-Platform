import { Request, Response } from "express";
import { CatchAsync } from "../../../Utills/CatchAsync";
import { SendRespons } from "../../../Utills/SendRespons";
import httpStatus from "http-status";
import { CheckData } from "./CheckQvailability.services";


const gatCheckQuery = CatchAsync(async (req: Request, res: Response) => {
  const {date} = req.query
    const result = await CheckData.gatCheckQvailabilityInToDb(date as string);
  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Availability checked successfully",
    data: result,
  });
});

export const 
CheckDataController = {
    gatCheckQuery
}