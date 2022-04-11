import { object, number, string, TypeOf } from "zod";
const payload = {
  body: object({
    
    Id: string({ required_error: "Consent Id is required" }),
  }),
};

const params = {
  params: object({
    Id: string({
      required_error: "Concent Id is required",
    }),
    userId: string({
      required_error: "User Id is required",
    }),
  }),
};

export const createConcentSchema = object({
  ...payload,
});
export const getConcentSchema = object({
  ...params,
});




export type CreateConcentInput = TypeOf<typeof createConcentSchema>;
export type getConcentInput = TypeOf<typeof getConcentSchema>;
