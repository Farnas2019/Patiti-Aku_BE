import { Request, Response } from "express";
import { any } from "zod";
import UserModel from "../models/user.model";
import { CreateUserInput } from "../schema/user.schema";
import { createUser, deleteUser, findUser} from "../service/user.service";
import logger from "../utils/logger";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  //Generate user ID
  const ID = "PATITI-AKU" + Math.random().toString(36).substr(2, 13).toUpperCase();

  try {
    const existingUser = await findUser({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        status: "failed",
        message: "Email already exist.",
      });
    }
    const input = { ...req.body, id:ID };
    //@ts-ignore
    const user = await createUser(input);
    return res
      .status(200)
      .json({ status: "200", message: "Success", data: user });
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getUserHandler(req: Request, res: Response) {
  const userId = req.params.userId;
  try {
    const user = await UserModel.findOne({ id: userId }).populate("concent");
    if (!user) {
      return res.status(409).send({
        status: "failed",
        message: "User Doesn't Exist",
      });
    }
    return res
      .status(200)
      .json({ status: "success", message: "user data", data: user});
  } catch (error: any) {
    logger.error(`${error}`);
    return res
      .status(409)
      .json({ status: "failed", message: `${error.message}` });
  }
}
export async function deleteUserHandler(req: Request, res: Response) {
  const userId = req.params.userId;;
  try {
    const user = await findUser({ id: userId });
    if (!user) {
      return res.status(409).send({
        status: "failed",
        message: "User Doesn't Exist",
      });
    }
    await deleteUser({userId:userId});
    return res
      .status(200)
      .json({ status: "success", message: "User Deleted" });
  } catch (error: any) {
    logger.error(`${error}`);
    return res
      .status(409)
      .json({ status: "failed", message: `${error.message}` });
  }
}

