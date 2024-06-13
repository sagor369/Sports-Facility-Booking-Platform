import { Router } from "express";
import { FacultyController } from "./Faculty.controller";
import { ValidateRequest } from "../../../middelware/ValidationRequist";
import { FacultyValidate, updateFacultyValidate } from "./Faculty.validate";


const router = Router()

router.post("/",ValidateRequest(FacultyValidate), FacultyController.postFaculty)
router.get("/", FacultyController.getFaculty)
router.get("/:id", FacultyController.getSingleFaculty)
router.put("/:id",ValidateRequest(updateFacultyValidate), FacultyController.updateFaculty)
router.delete("/:id", FacultyController.deleteFaculty)



export const FacultyRouter = router