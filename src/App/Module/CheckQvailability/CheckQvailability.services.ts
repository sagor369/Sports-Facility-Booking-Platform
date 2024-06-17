import { Booking } from "../Booking/Booking.model";

const gatCheckQvailabilityInToDb = async (query: string) => {
  const d = new Date();
  const years = d.getFullYear();
  const month = d.getMonth().toString().padStart(2, "0");
  const day = d.getDate();
  const defaltDate = `${years}-${month}-${day}`;
  const searchQuery = query || defaltDate;
  const result = await Booking.find({ date: searchQuery }).select(
    "startTime endTime"
  );
  return result;
};

export const CheckData = {
  gatCheckQvailabilityInToDb,
};
