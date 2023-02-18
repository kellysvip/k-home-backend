import { Response, Request, NextFunction } from "express";
import { IUser, User } from "../../../models/User";
import { sendResponse, AppError, catchAsync, validateSchema } from "../../../helpers/ultis";
import httpStatus from "http-status";
import bcrypt from "bcryptjs";
import Joi from "joi";
const requestSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(), 
  password: Joi.string().required(),  // valid later
});

export const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let { name, email, password } = validateSchema(requestSchema, req.body);

    let user = (await User.findOne({ email })) as IUser;
    if (user)
      throw new AppError(400, "UserId already exists", "Register Error");

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    user = (await User.create({ name, email, password })) as unknown as IUser;

    const accessToken = await user.generateToken();

    //Response
    sendResponse(
      res,
      httpStatus.CREATED,
      { user, accessToken },
      "Create User Success"
    );
  }
);
