import { Response, Request, NextFunction } from "express";
import { sendResponse, catchAsync } from "../../../helpers/ultis";
import httpStatus from "http-status";
import { Conversation } from "../../../models/Conversation";

export const getConversation = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // $and: [{members: {$in: [userId]}}, {members: {$in: [ownPostId]}}]
    // members: [userId, ownPostId]
    //  $and: [{members:{$in: [userId]}}, {members: {$in: [ownPostId]}}]
    const { userId } = req.params;
    const { ownPostId } = req.query;
    console.log(ownPostId);

    const conversation = await Conversation.find({
      $or: [{ members: [userId, ownPostId] }, { members: [ownPostId, userId] }],
    });

    sendResponse(
      res,
      httpStatus.OK,
      { conversation },
      "Get Conversation Success"
    );
  }
);
