import { Router } from "express";
import { BookingController } from "./Booking.controller";
import { Authorizetion } from "../../middelware/auth/Auth";


const router = Router()
router.post("/", Authorizetion("user"), BookingController.createBooking)
router.get("/",Authorizetion("admin"), BookingController.getBooking)

export const BookingRouter = router