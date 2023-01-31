import express from "express";
import { createConversation } from "./createConservation";
import { getConversation } from "./getConversation";

const router = express.Router();
//create conversation
router.post(
    "/",
    createConversation
  );
//get conversation of user
router.get(
  "/:userId",
  getConversation
);
  export default router;