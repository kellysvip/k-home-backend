import { Response, Request, NextFunction } from "express";
import {
  sendResponse,
  catchAsync,
  validateSchema,
  AppError,
} from "../../../helpers/ultis";
import httpStatus from "http-status";
import { Message } from "../../../models/Message";
import Joi from "joi";
import { Conversation } from "../../../models/Conversation";
import { User } from "../../../models/User";
const requestSchema = Joi.object({
  conversationId: Joi.string().required(),
  senderId: Joi.string().required(),
  text: Joi.string().required(),
});
export const addMessage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const { ...info } = validateSchema(requestSchema, req.body);
    const { conversationId, senderId } = info;

    const isConvExist = await Conversation.exists({ _id: conversationId });
    if (!isConvExist)
      throw new AppError(404, "Conversation not found", "Add Message Error");

    const isUserExist = await User.exists({ _id: senderId });
    if (!isUserExist)
      throw new AppError(404, "User not found", "Add Message Error");

    const newMessage = await Message.create({ ...info });

    sendResponse(
      res,
      httpStatus.CREATED,
      { newMessage },
      "Add Message Success"
    );
  }
);
