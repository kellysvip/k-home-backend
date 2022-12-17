import { Response, Request, NextFunction } from "express";
import { IUser, User } from "../../../models/User";
import { sendResponse, AppError, catchAsync } from "../../../helpers/ultis";
import { IGetUserAuthInfoRequest } from "../../../constants/interfaces/request.interface";


export const updateProfile = catchAsync(
  async (
    req: Request<{ userId: string }, {}, any, IGetUserAuthInfoRequest> & {
      userId: string;
    },
    res: Response,
    next: NextFunction
  ) => {
    const currentUserId = req.userId; //req.userId validate
    const {
      params: { userId },
    } = req;

    if (currentUserId !== userId)
      throw new AppError(400, "Permission Required", "Update User Error");

    const user = (await User.findById(userId)) as IUser;
    if (!user) throw new AppError(400, "User not found", "Update User Error");

    const allows = [
      "name",
      "avatarUrl",
      "aboutMe",
      "jobTitle",
      "facebookLink",
      "instagramLink",
    ];
    allows.forEach((field) => {
      if (req.body[field] !== undefined) {
        (user as any)[field] = req.body[field];
      }
    });
    await user.save();


    //Response
    sendResponse(res, 200, true, { user }, null, "Update User Success"); 
  }
);
