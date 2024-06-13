import { Request, Response } from "express";
import { SendRespons } from "../../../Utills/SendRespons";
import httpStatus from "http-status";
import { CatchAsync } from "../../../Utills/CatchAsync";
import { BookingServices } from "./Booking.services";
import jwt from "jsonwebtoken";
import config from "../../../config";

const createBooking = CatchAsync(async (req: Request, res: Response) => {
    const accessToken = req.headers.authorization;
    const val = jwt.verify(accessToken as string, config.jwt_secrate as string)
    console.log(val)
  const result = await BookingServices.createBookingInToDb(req.body, accessToken as string);
  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "create course is successfuly ",
    data: result,
  });
});

export const BookingController = {
createBooking
}