import httpStatus from "http-status";
import { Faculty } from "../Faculty/Faculty.model";
import { TBooking } from "./Booking.interface";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../../config";
import { User } from "../User/user.model";
import { AppError } from "../../middelware/Errors/CustomError";
import { Booking } from "./Booking.model";
import { TimeCheck } from "./Booking.utils";

const createBookingInToDb = async (payload: TBooking, token: string) => {
  const facultys = await Faculty.findById(payload.faculty);
  if (!facultys) {
    throw new AppError(httpStatus.NOT_FOUND, "Faculty is not found");
  }
  const time = await TimeCheck(payload);
  if (time) {
    throw new AppError(httpStatus.NOT_FOUND, "this schedule in not available");
  }

  const tokenDecoded = jwt.verify(token, config.jwt_secrate as string);
  const { email } = tokenDecoded as JwtPayload;
  const users = await User.findOne({ email });
  if (!users) {
    throw new AppError(httpStatus.NOT_FOUND, "user is not found");
  }

  const [startHour, startMin] = payload.startTime.split(":").map(Number);
  const [endHour, endMin] = payload.endTime.split(":").map(Number);
  const startminite = startHour * 60 + startMin;
  const endtminite = endHour * 60 + endMin;
  const totalTime = (endtminite - startminite) / 60;
  payload.payableAmount = totalTime * facultys?.pricePerHour;
  payload.user = users._id;
  const result = await Booking.create(payload);
  return result;
};
const gatBookintInToDB = async () => {
  const result = await Booking.find().populate("faculty").populate("user");
  return result;
};

const gatUserBookingInToDb = async (token: string) => {
  const tokenDecoded = jwt.verify(token, config.jwt_secrate as string);
  const { email } = tokenDecoded as JwtPayload;
  const user = await User.findOne({ email }).select("_id");
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "user is not found");
  }
  const result = await Booking.find({
    user: user._id,
    isDelete: false,
  }).populate("faculty");
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "your Booking is not found");
  }
  return result;
};

const deleteUserBooking = async (id: string, token: string) => {
  const tokenDecoded = jwt.verify(token, config.jwt_secrate as string);
  const { email } = tokenDecoded as JwtPayload;
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "user is not found");
  }
  const checkBooking = await Booking.findById(id);
  if (!checkBooking) {
    throw new AppError(httpStatus.NOT_FOUND, "this booking is fot found");
  }
  if (checkBooking.isDelete) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "this booking is all ready delete"
    );
  }
  const result = await Booking.findByIdAndUpdate(
    id,
    { isDelete: true },
    { new: true }
  );
  return result;
};

export const BookingServices = {
  createBookingInToDb,
  gatBookintInToDB,
  gatUserBookingInToDb,
  deleteUserBooking,
};
