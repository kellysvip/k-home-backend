import { Response, Request, NextFunction } from "express";
import { sendResponse, catchAsync, AppError } from "../../../helpers/ultis";
import httpStatus from "http-status";
import { Conversation } from "../../../models/Conversation";

export const createConversation = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const { senderId, receiverId} = req.body
    const conversation = await Conversation.find({
      $or: [{ members: [senderId, receiverId] }, { members: [receiverId, senderId] }],
    });
    console.log(conversation);
    if (conversation.length > 0) throw new AppError(400, "Conversation has exists", "Create Conversation Error")
    const newConversation = await Conversation.create({
     members: [senderId, receiverId]
    });
    sendResponse(
      res,
      httpStatus.CREATED,
      { newConversation },
      "Create Conversation Success"
    );
  }
);
