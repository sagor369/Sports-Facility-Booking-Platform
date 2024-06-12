import { Router } from "express";
import { UserRoute } from "../App/Module/User/user.router";


const router = Router()

const routerModel = [
    {
        path: "/auth",
        rout: UserRoute
    }
]
routerModel.forEach(rt => router.use(rt.path, rt.rout))
export default router