import { Response, Request, NextFunction } from "express";
import { User } from "../../../models/User";
import { sendResponse, AppError, catchAsync } from "../../../helpers/ultis";
import { IGetUserAuthInfoRequest } from "../../../constants/interfaces/request.interface";
import httpStatus from 'http-status'

export const getCurrentUser = catchAsync(
  async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const currentUserId = req.userId;
    console.log('currentUserId', currentUserId);
    const user = await User.findById(currentUserId);

    if (!user)
      throw new AppError(404, "User not found", "Get Curent User Error");

    sendResponse(res, httpStatus.OK,  { user }, "Get Current User Success");
  }
);
