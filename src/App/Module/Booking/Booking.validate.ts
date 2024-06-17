import { z } from "zod";

const TimeValidate = z.string().refine(
  (time) => {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(time);
  },
  {
    message: 'Invalid time format , expected "HH:MM" in 24 hours format',
  }
);
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const BookingValidate = z.object({
  data: z.object({
    date: z.string().regex(dateRegex, {
      message: "Invalid date format. Expected format: YYYY-MM-DD",
    }),
    startTime: TimeValidate,
    endTime: TimeValidate,
    faculty: z.string(),
  }),
});
