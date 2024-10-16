import {z} from "zod";

const userAdminValidation = z.object({
  password: z
    .string({
      required_error: "Password field is required",
    })
    .min(6, "Password should be at least 6 characters!"),
  Admin: z.object({
    name: z.string({
      required_error: "Name field is required",
    }),
    email: z
      .string({required_error: "Email must be a valid email address"})
      .email("Invalid Email format"),
  }),
});

const userRenterValidation = z.object({
  password: z
    .string({
      required_error: "Password field is required",
    })
    .min(6, "Password should be at least 6 characters!"),
  renter: z.object({
    name: z.string({
      required_error: "Name field is required",
    }),
    email: z
      .string({required_error: "Email must be a valid email address"})
      .email("Invalid Email format"),
  }),
});

const userUpdateValidation = z.object({
  body: z
    .object({
      name: z.string().optional(),
      email: z.string().email().optional(),
    })
    .strict(),
});

export const userValidationSchema = {
  userAdminValidation,
  userRenterValidation,
  userUpdateValidation,
};
