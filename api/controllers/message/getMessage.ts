import { Response, Request, NextFunction } from "express";
import { sendResponse, catchAsync, validateSchema, AppError } from "../../../helpers/ultis";
import httpStatus from "http-status";
import { Message } from "../../../models/Message";
import Joi from "joi";
import { Conversation } from "../../../models/Conversation";
const paramSchema = Joi.object({
  conversationId: Joi.string().required(),
});

export const getMessage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const { conversationId } = validateSchema(paramSchema, req.params)
    const conversationInfo = await Conversation.findOne({ _id: conversationId }).populate("members");
    if (!conversationInfo)
      throw new AppError(404, "Conversation not found", "Get Message Error");
    const messages = await Message.find({
        conversationId: conversationId
    }).populate([{path: "conversationId", populate: {path: 'members'}}])

    sendResponse(
      res,
      httpStatus.OK,
      { messages,conversationInfo },
      "Get Messages Success"
    );
  }
);
