import { Request, Response } from "express"
import { UserServices } from "./user.services"
import { SendRespons } from "../../../Utills/SendRespons"
import httpStatus from "http-status"
import { CatchAsync } from "../../../Utills/CatchAsync"


const signUpUser = CatchAsync(async(req:Request, res:Response)=>{
  const result = await UserServices.CreateUserInToDb(req.body)
    SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User registered successfully ",
        data: result,
      })
  })
const LoginUser = CatchAsync(async(req:Request, res:Response)=>{
  const result = await UserServices.LoginUserInToDb(req.body)
  const {accessToken, UserData, refreshToken} = result

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  })

  SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User logged in successfully",
        accessToken,
        data: UserData,
      })
  })

  export const UserController = {
    signUpUser,
    LoginUser
  }