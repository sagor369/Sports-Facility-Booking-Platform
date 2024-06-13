import { Types } from "mongoose"
import { BookingStatus } from "./Booking.const"

export type TBooking = {
    date: string 
    startTime: string
    endTime: string 
    user: Types.ObjectId
    faculty: Types.ObjectId
    payableAmount: number
    isBooked: keyof typeof BookingStatus
}