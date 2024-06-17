import { Router } from "express";
import { CheckDataController } from "./CheckQvailability.controller";
import { ValidateRequest } from "../../middelware/ValidationRequist";
import { ValidateDate } from "./checkAcailavility.validate";


const router = Router()
router.get("/",ValidateRequest(ValidateDate), CheckDataController.gatCheckQuery)

export const CheckDataRouter = router