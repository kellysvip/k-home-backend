import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import router from "./routes/index";
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { AppError, sendResponse } from "./helpers/ultis";

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
  "mongodb+srv://admin:admin@cluster0.j7fapsx.mongodb.net/test";

mongoose
  .connect(mongoURI)
  .then(async () => console.log(`DB connected ${mongoURI}`))
  .catch((err: string) => console.log(err));

//Error Handler
app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = 404;
  err.message = "Not Found";
  next(err);
});

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  console.log("ERROR", err);
  if (err.isOperational) {
    return sendResponse(
      res,
      err.statusCode ? err.statusCode : 500,
      false,
      { message: err.message },
      null,
      err.errorType
    );
  } else {
    return sendResponse(
      res,
      err.statusCode ? err.statusCode : 500,
      false,
      { message: err.message },
      null,
      "Internal Server Error"
    );
  }
});

app.use("/api", router);

export default app;
module.exports = app;
