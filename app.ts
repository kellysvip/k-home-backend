import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import router from "./routes/index";
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { AppError } from "./helpers/ultis";
import httpStatus from "http-status";

require("dotenv/config");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Connect to MONGODB   //NODE_ENV === 'test'
const mongoURI: string =
  process.env.MONGODB_URI ||
  "mongodb+srv://admin:admin@cluster0.j7fapsx.mongodb.net/main";

mongoose
  .connect(mongoURI)
  .then(async () => console.log(`DB connected ${mongoURI}`))
  .catch((err: string) => console.log(err));

//Error Handler
app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  if (err.statusCode) {
    return res
      .status(err.statusCode)
      .json({ message: err.message ? err.message : err.statusCode });
  }
  return res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .json({ message: httpStatus[httpStatus.INTERNAL_SERVER_ERROR] });
  next(err);
});

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  console.log("ERROR", err);
  if (err.isOperational) {
    return res
      .status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error_msg: err.message || httpStatus[httpStatus.INTERNAL_SERVER_ERROR] });
  }
});

app.use("/api", router);



export default app;
module.exports = app;
