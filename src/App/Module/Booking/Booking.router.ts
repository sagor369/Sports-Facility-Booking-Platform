import { Router } from "express";
import { BookingController } from "./Booking.controller";


const router = Router()
router.post("/", BookingController.createBooking)

export const BookingRouter = router