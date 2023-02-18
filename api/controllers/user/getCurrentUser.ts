import { Response, Request, NextFunction } from "express";
import { User } from "../../../models/User";
import { sendResponse, AppError, catchAsync } from "../../../helpers/ultis";
import { IGetUserAuthInfoRequest } from "../../../constants/interfaces/request.interface";
import httpStatus from "http-status";

export const getCurrentUser = catchAsync(
  async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const currentUserId = req.userId;

    const user = await User.findById(currentUserId);
    // const user = await User.find();

    if (!user)
      throw new AppError(404, "User not found", "Get Curent User Error");
    const totalUsers = await User.countDocuments();
    sendResponse(
      res,
      httpStatus.OK,
      { user, totalUsers },
      "Get Current User Success"
    );
  }
);
