import { Response, Request, NextFunction } from "express";
import { IUser, User } from "../../../models/User";
import { sendResponse, AppError, catchAsync } from "../../../helpers/ultis";
import mongoose, { FilterQuery } from "mongoose";
import { Post } from "../../../models/Post";
import { Types } from "mongoose";
import { IGetPostQuery } from "../../../constants/interfaces/query.interface";

export const getPosts = catchAsync(
  async (
    req: Request<{ userId: string }, any, {}, IGetPostQuery> & {
      userId: string;
    },
    res: Response,
    next: NextFunction
  ) => {
    //get data from request
    const currentUserId = req.userId; //req.userId validate

    const {
      params: { userId },
    } = req;

    let { page, limit, ...filter } = { ...req.query };

    page = page || 1;
    limit = limit || 10;

    let filterConditions = [] as FilterQuery<IUser>;
    filterConditions = [{ isDeleted: false }];
    if (filter.title) {
      filterConditions.push({
        title: { $regex: filter.title, $options: "i" },
      });
    }

    const filterCriteria = filterConditions.length
      ? { $and: filterConditions }
      : ({} as FilterQuery<IUser>);

    const count = await Post.countDocuments({ filterCriteria });
    const totalPage = Math.ceil(count / limit);
    const offset = limit * (page - 1);
    let posts = await Post.find({ filterCriteria })
      .sort({ createAt: -1 })
      .skip(offset)
      .limit(limit)
      .populate("author");

    //Response
    sendResponse(
      res,
      200,
      true,
      { posts, totalPage, count },
      null,
      "Get All Post User Can See Success"
    ); //errorts
  }
);
