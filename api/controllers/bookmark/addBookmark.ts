import { Response, Request, NextFunction } from "express";
import { sendResponse, AppError, catchAsync, validateSchema } from "../../../helpers/ultis";
import httpStatus from "http-status";
import { Bookmark } from "../../../models/Bookmark";
import { IGetUserAuthInfoRequest } from "../../../constants/interfaces/request.interface";
import Joi from "joi";

const requestSchema = Joi.object({
  postId: Joi.string().required(),
});

export const addBookmark = catchAsync(
  async (
    req: Request<{ userId: string }, {}, any, IGetUserAuthInfoRequest> & {
      userId: string;
    },
    res: Response,
    next: NextFunction
  ) => {
    const currentUserId = req.userId;

    const { postId } = validateSchema(requestSchema, req.body);

    const currentBookmark = await Bookmark.exists({
      user: currentUserId,
      postId: postId,
    });
    if (currentBookmark)
      throw new AppError(400, "Bookmark already exists", "Add Bookmark Error");
      
    const newBookmark = await Bookmark.create({
      user: currentUserId,
      postId: postId,
    });

    sendResponse(res, httpStatus.OK, { newBookmark }, "Add Bookmark Success");
  }
);
