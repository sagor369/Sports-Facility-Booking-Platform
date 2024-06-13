import { z } from "zod";

export const FacultyValidate = z.object({
  data: z.object({
    name: z.string(),
    description: z.string(),
    pricePerHour: z.number(),
    location: z.string(),
  }),
});

export const updateFacultyValidate = FacultyValidate.partial()
