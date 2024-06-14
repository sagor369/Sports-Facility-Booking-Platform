import httpStatus from "http-status";
import { Faculty } from "../Faculty/Faculty.model";
import { TBooking } from "./Booking.interface";
import jwt, { JwtPayload }  from "jsonwebtoken";
import config from "../../../config";
import { User } from "../User/user.model";
import { AppError } from "../../middelware/Errors/CustomError";
import { Booking } from "./Booking.model";


const createBookingInToDb = async(payload: TBooking, token:string)=>{
    const facultys = await Faculty.findById(payload.faculty)
    if(!facultys){
        throw new AppError(httpStatus.NOT_FOUND, "Faculty is not found")
    }
    const tokenDecoded =  jwt.verify(token, config.jwt_secrate as string)
    const { role, email } = tokenDecoded as JwtPayload;
    const users =await User.findOne({email})
    if(!users){
        throw new AppError(httpStatus.NOT_FOUND, "user is not found")
    }

    const [startHour, startMin] = payload.startTime.split(":").map(Number)
    const [endHour, endMin] = payload.endTime.split(":").map(Number)
    const startminite = startHour *60 + startMin
    const endtminite = endHour *60 + endMin
    // const date = new Date()
    // const startDate = date.setHours(startHour, startMin, 0, 0)
    // const endDate = date.setHours(endHour, endMin, 0, 0)
    // console.log(startDate, endDate)
    const totalTime =(endtminite - startminite )/60 
    payload.payableAmount = totalTime * facultys?.pricePerHour
    payload.user= users._id
    const result =await Booking.create(payload)
    return result
}

const gatBookintInToDB = async()=>{
    const result = await Booking.find().populate("faculty").populate("user")
    return result
}

export const BookingServices = {
    createBookingInToDb,
    gatBookintInToDB
}