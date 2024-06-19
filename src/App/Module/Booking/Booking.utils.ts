import { TBooking } from "./Booking.interface";
import { Booking } from "./Booking.model";

export const TimeCheck = async (payload: TBooking) => {
  const payloadDate = payload.date
  const bookingData = await Booking.find({ faculty: payload.faculty, date: payloadDate });
  for (const booking of bookingData){
    const newStartTime = `2024-02-12T${payload?.startTime}`;
    const newEndTime = `2024-02-12T${payload?.endTime}`;
    const existingStartTime = `2024-02-12T${booking?.startTime}`;
    const existingEndTime = `2024-02-12T${booking?.endTime}`;
  
    if (newStartTime < existingEndTime && newEndTime > existingStartTime) {
      return true;
    }
  }
  return false
};
