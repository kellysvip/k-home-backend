import { Response, Request, NextFunction } from "express";
import { sendResponse, AppError, catchAsync } from "../../../helpers/ultis";
import { IPost, Post } from "../../../models/Post";
import { IGetPostQuery } from "../../../constants/interfaces/query.interface";

export const getSinglePost = catchAsync(
  async (req: Request<{ postId: string }, any, {}, IGetPostQuery> & {
    userId: string;
  }, res: Response, next: NextFunction) => {
    //get data from request
    const currentUserId = req.userId; 
    console.log(currentUserId);
    const {
      params: { postId },
    } = req;

    let post = await Post.findById(postId).populate("author") as IPost
    if (!post)
      throw new AppError(400, "Post not found", "Get Single Post Error");

    //Response
    sendResponse(
      res,
      200,
      true,
      {post}, 
      null,
      "Get Single Post Success"
    );
  }
);
