import { Response, Request, NextFunction } from "express";
import { IUser, User } from "../../../models/User";
import {
  sendResponse,
  AppError,
  catchAsync,
  validateSchema,
} from "../../../helpers/ultis";
import { IGetUserAuthInfoRequest } from "../../../constants/interfaces/request.interface";
import httpStatus from "http-status";
import Joi from "joi";

const paramSchema = Joi.object({
  userId: Joi.string().required(),
});

const requestSchema = Joi.object({
  name: Joi.string(),
  avatarUrl: Joi.string().allow(''),
  phoneNumber: Joi.string(),
  aboutMe: Joi.string(),
  jobTitle: Joi.string().allow(''),
  facebookLink: Joi.string().allow(''),
  instagramLink: Joi.string().allow(''),
});

export const updateProfile = catchAsync(
  async (
    req: Request<{ userId: string }, {}, any, IGetUserAuthInfoRequest> & {
      userId: string;
    },
    res: Response,
    next: NextFunction
  ) => {
    const currentUserId = req.userId; //req.userId validate
    const { userId } = validateSchema<{ userId: string }>(
      paramSchema,
      req.params
    );
    const { ...info } = validateSchema(requestSchema, req.body)

    if (currentUserId !== userId)
      throw new AppError(400, "Permission Required", "Update User Error");
    
    const user = await User.findByIdAndUpdate(
      { _id: userId },
      { ...info },
      { new: true }
    );
    if (!user)
      throw new AppError(
        404,
        "User not found or User not authorized",
        "Update User Error"
      );

    //Response
    sendResponse(res, httpStatus.OK, { user }, "Update User Success");
  }
);
