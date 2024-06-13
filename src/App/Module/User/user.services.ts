import httpStatus from "http-status";
import { AppError } from "../../../middelware/Errors/CustomError";
import { TLogin, TUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../../config";

const CreateUserInToDb = async (payload: TUser) => {
  const NewUser = await User.create(payload);
  const result = await User.findById(NewUser?._id).select("-password");
  return result;
};

const LoginUserInToDb = async (payload: TLogin) => {
  const { email, password } = payload;
  const isUser = await User.findOne({ email }).select("password");
  if (!isUser) {
    throw new AppError(httpStatus.NOT_FOUND, " user not found");
  }
  if (isUser?.isDelete){
    throw new AppError(httpStatus.NOT_FOUND, `${isUser.email} user is deleted`);
  }
  const isPasswordMatch = await bcrypt.compare(password, isUser?.password);
  
  if (!isPasswordMatch) {
    throw new AppError(httpStatus.NOT_FOUND, `${password} is not match`);
  }
  const jwtHeader = {
    role: isUser?.role,
    email: isUser?.email,
  };
  const token = jwt.sign(jwtHeader, config.jwt_secrate as string, {
    expiresIn: "2d",
  });
  console.log(token);
  const UserData = await User.findOne({ email }).select("-password");
  const result = {
    UserData,
    token,
  };
  return result;
};

export const UserServices = {
  CreateUserInToDb,
  LoginUserInToDb,
};
