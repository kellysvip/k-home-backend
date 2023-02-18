import { Response, Request, NextFunction } from "express";
import {
  sendResponse,
  catchAsync,
  AppError,
  validateSchema,
} from "../../../helpers/ultis";
import httpStatus from "http-status";
import { Conversation } from "../../../models/Conversation";
import { User } from "../../../models/User";
import Joi from "joi";

// const requestSchema = Joi.object({
//   ownPostId: Joi.string(),
// });

const paramSchema = Joi.object({
  userId: Joi.string().required(),
});

export const getConversation = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = validateSchema(paramSchema, req.params);
    // const { ownPostId } = validateSchema(requestSchema, req.query);

    // const isUserExist = await User.exists({ _id: userId });
    // const isOwnPostExist = await User.exists({ _id: ownPostId });
    // if (!(isUserExist && isOwnPostExist))
    //   throw new AppError(400, "User not found", "Create Conversation Error");

    const conversation = await Conversation.find({ members: userId }).populate("members");

    sendResponse(
      res,
      httpStatus.OK,
      { conversation },
      "Get Conversation Success"
    );
  }
);
