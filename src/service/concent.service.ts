import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";
import ConcentModel, {
  ConcentDocument,
} from "../models/concent.model";

export async function createConcent(
  input: DocumentDefinition<
    Omit<ConcentDocument, "createdAt" | "updatedAt">
  >
) {
  return ConcentModel.create(input);
}

export async function findConcent(
  query: FilterQuery<ConcentDocument>,
  options: QueryOptions = { lean: true }
) {
  return ConcentModel.findOne(query, {}, options);
}

