import { model, Schema } from "mongoose";
import { TBooking } from "./Booking.interface";
import { BookingStatus } from "./Booking.const";

const BookingSchema = new Schema<TBooking>({
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  payableAmount: {
    type: Number,
    required: true,
  },
  faculty: {
    type: Schema.Types.ObjectId,
    ref: "faculty",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  isBooked: {
    type: String,
    enum: Object.values(BookingStatus),
    default: "confirmed",
  },
  isDelete:{
    type: Boolean,
    default: false
  }
});

export const Booking = model("booking", BookingSchema)
