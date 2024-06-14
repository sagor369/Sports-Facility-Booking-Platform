import { TBooking } from "./Booking.interface";
import { Booking } from "./Booking.model";

export const TimeCheck = async (payload: TBooking) => {
  const bookingData = await Booking.findOne({ faculty: payload.faculty });
  const newStartTime = `${payload?.date}T${payload?.startTime}`;
  const newEndTime = `${payload?.date}T${payload?.endTime}`;
  const oldStartTime = `${bookingData?.date}T${bookingData?.startTime}`;
  const oldEndTime = `${bookingData?.date}T${bookingData?.endTime}`;

  if (newStartTime < oldEndTime && newEndTime > oldStartTime) {
    return true;
  }
};
