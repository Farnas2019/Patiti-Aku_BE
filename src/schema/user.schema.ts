import { object, string, number, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }),
});

const params = {
  params: object({
    userId: string({
      required_error: "User Id is required",
    }),
  }),
};
export const getUserSchema = object({
  ...params,
});

export type CreateUserInput = 
  TypeOf<typeof createUserSchema>;
export type getUserInput = 
  TypeOf<typeof getUserSchema>;
