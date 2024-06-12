import { Router } from "express";
import { UserController } from "./user.controller";
import { ValidateRequest } from "../../../middelware/ValidationRequist";
import { ValidateUser } from "./user.validat";


const router = Router()
router.post("/signup",ValidateRequest(ValidateUser), UserController.signUpUser)
router.post("/login")



export const UserRoute = router