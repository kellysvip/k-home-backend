import { Response, Request, NextFunction } from "express";
import { sendResponse, AppError, catchAsync } from "../../../helpers/ultis";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";

export const calculatePostCount = async (userId: string) => {
  const postCount = await Post.countDocuments({
    author: userId,
    isDeleted: false,
  });
  await User.findByIdAndUpdate(userId, { postCount });
};

export const createPost = catchAsync(
  async (
    req: Request & { userId?: string },
    res: Response,
    next: NextFunction
  ) => {
    //get data from request
    const currentUserId = req.userId;
    const {
      title,
      imageUrl,
      address,
      price,
      noBedroom,
      noBathroom,
      description,
      area,
      status,
      isDelete,
    } = req.body;

    let post = await Post.create({
      title,
      imageUrl,
      address,
      price,
      noBedroom,
      noBathroom,
      description,
      area,
      status,
      isDelete,
      author: currentUserId,
    });
    await calculatePostCount(currentUserId!);
    post = await post.populate("author");

    //Response
    sendResponse(res, 200, true, { post }, null, "Create Post Success");
  }
);
