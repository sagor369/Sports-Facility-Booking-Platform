"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateDate = void 0;
const zod_1 = require("zod");
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
exports.ValidateDate = zod_1.z.object({
    query: zod_1.z.object({
        date: zod_1.z.string().regex(dateRegex, {
            message: "Invalid date format. Expected format: YYYY-MM-DD",
        }).optional()
    }).optional()
});
