import { Response, Request, NextFunction } from "express";
import { sendResponse, AppError, catchAsync } from "../../../helpers/ultis";
import httpStatus from "http-status";
import { Bookmark } from "../../../models/Bookmark";
import { IGetUserAuthInfoRequest } from "../../../constants/interfaces/request.interface";


export const getCurrentBookmark = catchAsync(
  async (
    req: Request<{ userId: string }, {}, any, IGetUserAuthInfoRequest> & {
      userId: string;
    },
    res: Response,
    next: NextFunction
  ) => {
    const currentUserId = req.userId; 
    const currentBookmark = await Bookmark.find({ user: currentUserId }).populate("postId");

    sendResponse(
      res,
      httpStatus.OK,
      { currentBookmark },
      "Get Current Bookmark Success"
    );
  }
);
