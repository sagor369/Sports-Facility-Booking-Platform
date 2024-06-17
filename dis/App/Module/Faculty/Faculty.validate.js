"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFacultyValidate = exports.FacultyValidate = void 0;
const zod_1 = require("zod");
exports.FacultyValidate = zod_1.z.object({
    data: zod_1.z.object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
        pricePerHour: zod_1.z.number(),
        location: zod_1.z.string(),
    }),
});
exports.updateFacultyValidate = exports.FacultyValidate.partial();
