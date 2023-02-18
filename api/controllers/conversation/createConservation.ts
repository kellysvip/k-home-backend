import { Response, Request, NextFunction } from "express";
import { sendResponse, catchAsync, AppError, validateSchema } from "../../../helpers/ultis";
import httpStatus from "http-status";
import { Conversation } from "../../../models/Conversation";
import Joi from "joi";
import { User } from "../../../models/User";

const requestSchema = Joi.object({
  receiverId: Joi.string().required(),
  senderId: Joi.string().required(),
});

export const createConversation = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const { senderId, receiverId} = validateSchema(requestSchema, req.body)

    const isSenderExist = await User.exists({_id: senderId})
    const isReceiverExist = await User.exists({_id: receiverId})
    if (!(isSenderExist && isReceiverExist)) throw new AppError(400, "User not found", "Create Conversation Error")

    const isConvExist = await Conversation.exists({
      $or: [{ members: [senderId, receiverId] }, { members: [receiverId, senderId] }],
    });
    if (isConvExist) throw new AppError(400, "Conversation has exists", "Create Conversation Error")
    const newConversation = await Conversation.create({
     members: [senderId, receiverId]
    });

    
    sendResponse(
      res,
      httpStatus.CREATED,
      { newConversation: await Conversation.findOne({ _id: newConversation.id }).populate("members") },
      "Create Conversation Success"
    );
  }
);
