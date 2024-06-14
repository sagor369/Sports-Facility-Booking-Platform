import { Router } from "express";
import { FacultyController } from "./Faculty.controller";
import { FacultyValidate, updateFacultyValidate } from "./Faculty.validate";
import { ValidateRequest } from "../../middelware/ValidationRequist";
import { Authorizetion } from "../../middelware/auth/Auth";


const router = Router()

router.post("/",ValidateRequest(FacultyValidate),Authorizetion("admin"), FacultyController.postFaculty)
router.get("/", FacultyController.getFaculty)
router.get("/:id", FacultyController.getSingleFaculty)
router.put("/:id",ValidateRequest(updateFacultyValidate),Authorizetion("admin"), FacultyController.updateFaculty)
router.delete("/:id",Authorizetion("admin"), FacultyController.deleteFaculty)



export const FacultyRouter = router