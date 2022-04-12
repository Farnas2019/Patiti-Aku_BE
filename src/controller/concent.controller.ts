import { Request, Response } from "express";
import { any } from "zod";
// This is the Concent model and Document imported from the Concent's Model
import ConcentModel, { ConcentDocument } from "../models/concent.model";
import UserModel from "../models/user.model";
// This import all the services needed for proper implementation of the Concent,
// check the concents services for more details
import { createConcent, findConcent } from "../service/concent.service";

//  This is a service that is used to find a user
import { findUser } from "../service/user.service";

//  This is a logger used in loging the activities to the console
import logger from "../utils/logger";

// Controller That creates new Concent
export async function createConcentHandler(req: Request, res: Response) {
  try {
    const userId = req.params.userId;
    const body = req.body;
    const user = await UserModel.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({
        status: "failed",
        Message: "User Does not exist",
      });
    }
    const Concent = await createConcent({
      ...body,
      enabled: true
    });
  
    //@ts-ignore
    user.concent.push(Concent);
    user.save();
    return res.status(200).json({
      status: "success",
      message: "Concent successfully created",
      data: {
        user: user.id,
        Concent: [{ id: Concent.Id, enabled: Concent.enabled }],
      },
    });
  } catch (error: any) {
    return res.status(409).json({ status: "failed", message: error.message });
  }
}

// Controller That get all User's Concent
export async function getAllUserConcent(req: Request, res: Response) {
  const userId = req.params.userId;
  try {
    const user = await findUser({ id: userId });
    if (!user) {
      return res.status(409).send({
        status: "failed",
        message: "No User with the given ID",
      });
    }

    const concent = await ConcentModel.find({ userId: userId }).exec();
    if (!concent) {
      return res
        .status(200)
        .json({ status: "Empty", Message: "No Concent available" });
    }
    return res.status(200).json({
      status: "success",
      message: "All User's Concents retrieved successfully",
      data: { Concents: concent },
    });
  } catch (error: any) {
    logger.error(`${error}`);
    return res
      .status(409)
      .json({ status: "failed", message: `${error.message}` });
  }
}
