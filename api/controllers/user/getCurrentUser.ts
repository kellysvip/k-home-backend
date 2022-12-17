import { Response, Request, NextFunction } from "express";
import { User } from "../../../models/User";
import { sendResponse, AppError, catchAsync } from "../../../helpers/ultis";
import { IGetUserAuthInfoRequest } from "../../../constants/interfaces/request.interface";

export const getCurrentUser = catchAsync(
  async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const currentUserId = req.userId;
    console.log('currentUserId', currentUserId);
    const user = await User.findById(currentUserId);

    if (!user)
      throw new AppError(400, "User not found", "Get Curent User Error");

    sendResponse(res, 200, true, { user }, null, "Get Current User Success");
  }
);
