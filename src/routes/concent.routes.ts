import express from "express";

import validateResource from "../middleware/validateResource";

import {
  createConcentSchema,
} from "../schema/concent.schema";
import {
  createConcentHandler,
  getAllUserConcent,
} from "../controller/concent.controller";

const router = express.Router();

router.post(
  "/:userId",
 validateResource(createConcentSchema),
 createConcentHandler

);

router.get("/:userId", getAllUserConcent);

export { router as ConcentRoutes };
