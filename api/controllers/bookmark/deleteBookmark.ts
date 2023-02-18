import { Response, Request, NextFunction } from "express";
import { sendResponse, AppError, catchAsync, validateSchema } from "../../../helpers/ultis";
import httpStatus from "http-status";
import { Bookmark } from "../../../models/Bookmark";
import Joi from "joi";

const paramSchema = Joi.object({
  postId: Joi.string().required(),
  });

export const deleteBookmark = catchAsync(
  async (
    req: Request<{postId: string}, {}, any, {}> & {
      userId: string;
    },
    res: Response,
    next: NextFunction
  ) => {
    const currentUserId = req.userId

    const { postId } = validateSchema<{ postId: string }>(
        paramSchema,
        req.params
      );
    const deletedBookmark = await Bookmark.deleteOne({ postId: postId, user: currentUserId });

    sendResponse(
      res,
      httpStatus.OK,
      { deletedBookmark },
      "Delete Bookmark Success"
    );
  }
);
