import { Router } from "express";
import { BookingController } from "./Booking.controller";
import { Authorizetion } from "../../middelware/auth/Auth";
import { ValidateRequest } from "../../middelware/ValidationRequist";
import { BookingValidate } from "./Booking.validate";

const router = Router()
router.post("/",ValidateRequest(BookingValidate), Authorizetion("user"), BookingController.createBooking)
router.get("/",Authorizetion("admin"), BookingController.getBooking)
router.get("/user",Authorizetion("user"), BookingController.getUserBooking)
router.delete("/:id",Authorizetion("user"), BookingController.deleteUserBooking)

export const BookingRouter = router