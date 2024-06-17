import { Router } from "express";
import { UserRoute } from "../App/Module/User/user.router";
import { FacultyRouter } from "../App/Module/Faculty/Faculty.router";
import { BookingRouter } from "../App/Module/Booking/Booking.router";
import { CheckDataRouter } from "../App/Module/CheckQvailability/CheckQvailability.router";


const router = Router()

const routerModel = [
    {
        path: "/auth",
        rout: UserRoute
    },
    {
        path: "/facility",
        rout: FacultyRouter
    },
    {
        path: "/bookings",
        rout: BookingRouter
    },
    {
        path: "/check-availability",
        rout: CheckDataRouter
    }
]
routerModel.forEach(rt => router.use(rt.path, rt.rout))
export default router