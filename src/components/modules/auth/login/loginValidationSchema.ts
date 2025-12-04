import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z
    .string()
    .nonempty("Name is required")
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" }),

  password: z
    .string()
    .min(1, { message: "Password is required" })
    .nonempty("Email is required"),
});
