import express from "express";
import {
  createUserHandler,
  getUserHandler,
  deleteUserHandler
} from "../controller/user.controller";

import validateResource from "../middleware/validateResource";

import { createUserSchema } from "../schema/user.schema";

const router = express.Router();

//Create users - POST
router.post("/", validateResource(createUserSchema), createUserHandler);

// Delete users - DELETE
router.delete("/:userId", deleteUserHandler);


//Get - GET
router.get("/:userId", getUserHandler);

export { router as authRoutes };
