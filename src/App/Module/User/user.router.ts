import { Router } from "express";
import { UserController } from "./user.controller";
import { LoginUserValidation, ValidateUser } from "./user.validat";
import { ValidateRequest } from "../../middelware/ValidationRequist";


const router = Router()
router.post("/signup",ValidateRequest(ValidateUser), UserController.signUpUser)
router.post("/login", ValidateRequest(LoginUserValidation), UserController.LoginUser)



export const UserRoute = router