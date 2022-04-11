import { DocumentDefinition, FilterQuery } from "mongoose";
import { forEach, omit } from "lodash";
import UserModel, { UserDocument } from "../models/user.model";

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    const user = await UserModel.create(input);
    return user.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean();
}


export async function deleteUser(
  query: FilterQuery<UserDocument>
) {
  return UserModel.deleteOne(query);
}

