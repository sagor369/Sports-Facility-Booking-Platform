import { Request, Response } from "express";
import { SendRespons } from "../../../Utills/SendRespons";
import httpStatus from "http-status";
import { CatchAsync } from "../../../Utills/CatchAsync";
import { BookingServices } from "./Booking.services";
import jwt from "jsonwebtoken";
import config from "../../../config";

const createBooking = CatchAsync(async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization;
  const result = await BookingServices.createBookingInToDb(
    req.body,
    accessToken as string
  );
  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Booking created successfully",
    data: result,
  });
});
const getBooking = CatchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.gatBookintInToDB();
  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bookings retrieved successfully",
    data: result,
  });
});
const getUserBooking = CatchAsync(async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization;
  const result = await BookingServices.gatUserBookingInToDb(accessToken as string);
  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Bookings retrieved successfully",
    data: result,
  });
});
const deleteUserBooking = CatchAsync(async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization;
  const {id} = req.params
  const result = await BookingServices.deleteUserBooking(id, accessToken as string);
  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Booking cancelled successfully ",
    data: result,
  });
});

export const BookingController = {
  createBooking,
  getBooking,
  getUserBooking,
  deleteUserBooking

};
