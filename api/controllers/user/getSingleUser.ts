import { Response, Request, NextFunction } from "express";
import { IUser, User } from "../../../models/User";
import { sendResponse, AppError, catchAsync, validateSchema } from "../../../helpers/ultis";
import { IGetUserAuthInfoRequest } from "../../../constants/interfaces/request.interface";
import httpStatus from 'http-status'
import Joi from "joi";

const paramSchema = Joi.object({
  userId: Joi.string().required(),
});

export const getSingleUser = catchAsync(
  async (req: Request<{ userId: string }, {}, any, IGetUserAuthInfoRequest> & {
    userId: string;
  }, res: Response, next: NextFunction) => {
    const { userId } = validateSchema<{ userId: string }>(
      paramSchema,
      req.params
    );

    const user = (await User.findById(userId)) as IUser;
    if (!user)
      throw new AppError(404, "User not found", "Get Single User Error");
    //Process

    //Response
    sendResponse(res, httpStatus.OK,  { user }, "Get Single User Success");
  }
);
