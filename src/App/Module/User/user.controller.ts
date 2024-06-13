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
        message: "create course is successfuly ",
        data: result,
      })
  })
const LoginUser = CatchAsync(async(req:Request, res:Response)=>{
  const result = await UserServices.LoginUserInToDb(req.body)
  const {token, UserData} = result
  SendRespons(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "create course is successfuly ",
        token,
        data: UserData,
      })
  })

  export const UserController = {
    signUpUser,
    LoginUser
  }