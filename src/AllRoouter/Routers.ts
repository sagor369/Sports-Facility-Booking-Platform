import { Router } from "express";
import { UserRoute } from "../App/Module/User/user.router";
import { FacultyRouter } from "../App/Module/Faculty/Faculty.router";


const router = Router()

const routerModel = [
    {
        path: "/auth",
        rout: UserRoute
    },
    {
        path: "/facility",
        rout: FacultyRouter
    }
]
routerModel.forEach(rt => router.use(rt.path, rt.rout))
export default router