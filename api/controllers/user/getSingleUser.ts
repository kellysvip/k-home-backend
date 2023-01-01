import { Response, Request, NextFunction } from "express";
import { IUser, User } from "../../../models/User";
import { sendResponse, AppError, catchAsync } from "../../../helpers/ultis";
import { IGetUserAuthInfoRequest } from "../../../constants/interfaces/request.interface";
import httpStatus from 'http-status'

export const getSingleUser = catchAsync(
  async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    //get data from request
    const currentUserId = req.userId;
    const userId = req.params.userId;

    const user = (await User.findById(userId)) as IUser;
    if (!user)
      throw new AppError(404, "User not found", "Get Single User Error");
    //Process

    //Response
    sendResponse(res, httpStatus.OK,  { user }, "Get Single User Success");
  }
);
