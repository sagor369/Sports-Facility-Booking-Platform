import { Router } from "express";
import { FacultyController } from "./Faculty.controller";


const router = Router()

router.post("/", FacultyController.postFaculty)
router.get("/", FacultyController.getFaculty)
router.get("/:id", FacultyController.getSingleFaculty)



export const FacultyRouter = router