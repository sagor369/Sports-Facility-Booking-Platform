import { z } from "zod";
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
export const ValidateDate = z.object({
    query: z.object({
        date:z.string().regex(dateRegex, {
            message: "Invalid date format. Expected format: YYYY-MM-DD",
          }).optional()
    }).optional()
})