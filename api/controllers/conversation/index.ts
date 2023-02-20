import express from "express";
import { loginRequired } from "../../../middlewares/authentication";
import { createConversation } from "./createConservation";
import { getConversation } from "./getConversation";
import { getSingleConversation } from "./getSingleConversation";

const router = express.Router();

  /**
 * @route POST /conversations
 * @description Create conversation
 * @body senderId, receivedId
 * @access Login Required
 */
router.post("/", loginRequired,createConversation);

  /**
 * @route GET /conversations/userId
 * @description Get all conversation of user
 * @body 
 * @access Login Required
 */
router.get("/:userId", loginRequired,getConversation);

//get single conversation of user
// router.get("/:userId", getSingleConversation);
export default router;
