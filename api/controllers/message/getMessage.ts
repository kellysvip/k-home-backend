import { Response, Request, NextFunction } from "express";
import { sendResponse, catchAsync } from "../../../helpers/ultis";
import httpStatus from "http-status";
import { Message } from "../../../models/Message";

export const getMessage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const { conversationId } = req.params
    const messages = await Message.find({
        // $or: [{senderId: {$in: [userId]}}, {receiverId: {$in: [userId]}}]
        conversationId: conversationId
    })

    sendResponse(
      res,
      httpStatus.OK,
      { messages },
      "Get Messages Success"
    );
  }
);
