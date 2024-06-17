"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidate = void 0;
const zod_1 = require("zod");
const TimeValidate = zod_1.z.string().refine((time) => {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(time);
}, {
    message: 'Invalid time format , expected "HH:MM" in 24 hours format',
});
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
exports.BookingValidate = zod_1.z.object({
    data: zod_1.z.object({
        date: zod_1.z.string().regex(dateRegex, {
            message: "Invalid date format. Expected format: YYYY-MM-DD",
        }),
        startTime: TimeValidate,
        endTime: TimeValidate,
        faculty: zod_1.z.string(),
    }),
});
