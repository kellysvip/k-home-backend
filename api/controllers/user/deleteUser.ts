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



export const deleteUser = catchAsync(
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
    if (currentUserId !== userId && currentUserId !== "63ea296a09d7e41a329cd07b")
      throw new AppError(400, "Permission Required", "Update User Error");
    
    const user = await User.findByIdAndUpdate(
      { _id: userId },
      { isDeleted: true },
      { new: true }
    );
    if (!user)
      throw new AppError(
        404,
        "User not found or User not authorized",
        "Delete User Error"
      );

    //Response
    sendResponse(res, httpStatus.OK, { user }, "Delete User Success");
  }
);
