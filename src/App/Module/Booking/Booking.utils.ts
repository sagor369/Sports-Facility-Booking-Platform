import { TBooking } from "./Booking.interface";
import { Booking } from "./Booking.model";

export const TimeCheck = async (payload: TBooking) => {
  const payloadDate = new Date(payload.date)
  const bookingData = await Booking.findOne({ faculty: payload.faculty, date: payloadDate });
  const newStartTime = `2024-02-12T${payload?.startTime}`;
  const newEndTime = `2024-02-12TT${payload?.endTime}`;
  const oldStartTime = `2024-02-12TT${bookingData?.startTime}`;
  const oldEndTime = `2024-02-12TT${bookingData?.endTime}`;

  if (newStartTime < oldEndTime && newEndTime > oldStartTime) {
    return true;
  }
};
