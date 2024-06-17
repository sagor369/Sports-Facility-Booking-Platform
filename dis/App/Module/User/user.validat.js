"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserValidation = exports.ValidateUser = void 0;
const zod_1 = require("zod");
exports.ValidateUser = zod_1.z.object({
    data: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "name is required please enter your name",
        }),
        email: zod_1.z
            .string({
            required_error: "email is required ",
            invalid_type_error: "email is invalid",
        })
            .email(),
        phoneNumber: zod_1.z.string().max(14).min(9),
        role: zod_1.z.string(),
        address: zod_1.z.string(),
        password: zod_1.z.string(),
    }),
});
exports.LoginUserValidation = zod_1.z.object({
    data: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: "email is required ",
            invalid_type_error: "email is invalid",
        })
            .email(),
        password: zod_1.z.string()
    })
});
