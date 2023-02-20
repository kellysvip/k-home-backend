import express from "express";
import { loginRequired } from "../../../middlewares/authentication";
import { addMessage } from "./addMessage";
import { getMessage } from "./getMessage";

const router = express.Router();
/**
 * @route POST /messages
 * @description Add message
 * @body conversationId, senderId, text
 * @access Login Required
 */
router.post("/", loginRequired, addMessage);

/**
 * @route GET /messages/:conversationId
 * @description Get message
 * @body
 * @access Login Required
 */
router.get("/:conversationId", loginRequired, getMessage);

export default router;
