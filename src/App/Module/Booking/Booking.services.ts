import httpStatus from "http-status";
import { AppError } from "../../../middelware/Errors/CustomError";
import { Faculty } from "../Faculty/Faculty.model";
import { TBooking } from "./Booking.interface";
import jwt, { JwtPayload }  from "jsonwebtoken";
import config from "../../../config";
import { User } from "../User/user.model";


const createBookingInToDb = async(payload: TBooking, token:string)=>{
    const isFacultyExists = await Faculty.findById(payload.faculty)
    if(!isFacultyExists){
        throw new AppError(httpStatus.NOT_FOUND, "Faculty is not found")
    }
    const tokenDecoded =  jwt.verify(token, config.jwt_secrate as string)
    const { role, email } = tokenDecoded as JwtPayload;
    // console.log(tokenDecoded, role, email)
    // const isUserExists = User.findOne({email})
    return null
}

export const BookingServices = {
    createBookingInToDb
}