import express from "express";
import { createConversation } from "./createConservation";
import { getConversation } from "./getConversation";
import { getSingleConversation } from "./getSingleConversation";

const router = express.Router();
//create conversation
router.post("/", createConversation);

//get all conversation of user
router.get("/:userId", getConversation);

//get single conversation of user
// router.get("/:userId", getSingleConversation);
export default router;
