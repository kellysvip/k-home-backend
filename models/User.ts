import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY || "hdfgjhd";

export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    phoneNumber?: String;
    avatarUrl?: string;
    aboutMe?: string;
    jobTitle?: string;
    facebookLink?: string;
    instagramLink?: string;
    isDeleted?: string;
    generateToken: () => Promise<string>;
    toJSON: () => IUser;
    save: () => Promise<IUser>

  }

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: true,
    },
    phoneNumber: {
      type: String,
      required: false,
      default: "0966044156",
    },
    avatarUrl: {
      type: String,
      required: false,
      default: "",
    },
    aboutMe: {
      type: String,
      required: false,
      default: "",
    },
    jobTitle: {
      type: String,
      required: false,
      default: "",
    },
    faceBookLink: {
      type: String,
      required: false,
      default: "",
    },
    instagramLink: {
      type: String,
      required: false,
      default: "",
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
      select: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const user = this._doc;
  delete user.password;
  delete user.isDeleted;
  return user;
};

userSchema.method("generateToken", async function generateToken() {
  const accessToken: string = await jwt.sign(
    { _id: this._id },
    JWT_SECRET_KEY,
    {
      expiresIn: "1d",
    }
  );
  return accessToken;
});

export const User = mongoose.model("User", userSchema);
