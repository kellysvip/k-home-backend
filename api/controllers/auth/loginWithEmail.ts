import { Response, Request, NextFunction } from "express";
import { sendResponse, AppError, catchAsync } from "../../../helpers/ultis";
import { IUser, User } from "../../../models/User";
import httpStatus from "http-status";
import bcrypt from "bcryptjs";

export const loginWithEmail = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    //get data from request
    const { email, password } = req.body;
    //Validation

    let user = (await User.findOne({ email })) as unknown as IUser;
    if (!user) throw new AppError(400, "Invalid Credentials", "Login Error");

    //Process
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new AppError(400, "Wrong Password", "Login Error");

    const accessToken = await user.generateToken();
    console.log(accessToken);

    //Response
    sendResponse(res, httpStatus.OK, { user, accessToken }, "Login Success");
  }
);
