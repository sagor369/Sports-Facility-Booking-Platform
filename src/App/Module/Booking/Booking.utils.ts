import { TBooking } from "./Booking.interface";
import { Booking } from "./Booking.model";

export const TimeCheck = async (payload: TBooking) => {
  const payloadDate = payload.date
  const bookingData = await Booking.findOne({ faculty: payload.faculty, date: payloadDate });
  const newStartTime = `2024-02-12T${payload?.startTime}`;
  const newEndTime = `2024-02-12T${payload?.endTime}`;
  const oldStartTime = `2024-02-12T${bookingData?.startTime}`;
  const oldEndTime = `2024-02-12T${bookingData?.endTime}`;

  if (newStartTime < oldEndTime && newEndTime > oldStartTime) {
    return true;
  }
  return false
};
