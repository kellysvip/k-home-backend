import { Response, Request, NextFunction } from "express";
import { sendResponse, catchAsync } from "../../../helpers/ultis";
import httpStatus from "http-status";
import { Message } from "../../../models/Message";

export const addMessage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const {...info} =req.body
    const newMessage = await Message.create({...info})
   
    sendResponse(
      res,
      httpStatus.CREATED,
      { newMessage },
      "Add Message Success"
    );
  }
);
