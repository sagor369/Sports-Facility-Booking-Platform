import httpStatus from "http-status";
import { TLogin, TUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../../config";
import { AppError } from "../../middelware/Errors/CustomError";

const CreateUserInToDb = async (payload: TUser) => {
  const NewUser = await User.create(payload);
  const result = await User.findById(NewUser?._id);
  return result;
};

const LoginUserInToDb = async (payload: TLogin) => {
  const { email, password } = payload;
  const isUser = await User.findOne({ email }).select("+password");
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
  const accessToken = `Bearer ${jwt.sign(jwtHeader, config.jwt_secrate as string, {
    expiresIn: "2d",
  })}`;
  const refreshToken  = `Bearer ${jwt.sign(jwtHeader, config.jwt_refresh as string, {
    expiresIn: "30d",
  })}`;
  const UserData = await User.findOne({ email }).select("-password");
  const result = {
    UserData,
    accessToken,
    refreshToken
  };
  return result;
};

export const UserServices = {
  CreateUserInToDb,
  LoginUserInToDb,
};
