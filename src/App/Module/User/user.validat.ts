import { z } from "zod";

export const ValidateUser = z.object({
  data: z.object({
    name: z.string({
      required_error: "name is required please enter your name",
    }),
    email: z
      .string({
        required_error: "email is required ",
        invalid_type_error: "email is invalid",
      })
      .email(),
    phoneNumber: z.string().max(14).min(9),
    role: z.string(),
    address: z.string(),
    password: z.string(),
  }),
});

export const  LoginUserValidation = z.object({
  data:z.object({
    email: z
      .string({
        required_error: "email is required ",
        invalid_type_error: "email is invalid",
      })
      .email(),
      password: z.string()
  })
})
