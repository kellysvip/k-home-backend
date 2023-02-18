import express from "express";
import { addMessage } from "./addMessage";
import { getMessage } from "./getMessage";

const router = express.Router();
// add
router.post(
    "/", addMessage
  );

  // get
router.get(
  "/:conversationId", getMessage
);
  
  export default router;