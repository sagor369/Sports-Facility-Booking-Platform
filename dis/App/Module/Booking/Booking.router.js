"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRouter = void 0;
const express_1 = require("express");
const Booking_controller_1 = require("./Booking.controller");
const Auth_1 = require("../../middelware/auth/Auth");
const ValidationRequist_1 = require("../../middelware/ValidationRequist");
const Booking_validate_1 = require("./Booking.validate");
const router = (0, express_1.Router)();
router.post("/", (0, ValidationRequist_1.ValidateRequest)(Booking_validate_1.BookingValidate), (0, Auth_1.Authorizetion)("user"), Booking_controller_1.BookingController.createBooking);
router.get("/", (0, Auth_1.Authorizetion)("admin"), Booking_controller_1.BookingController.getBooking);
router.get("/user", (0, Auth_1.Authorizetion)("user"), Booking_controller_1.BookingController.getUserBooking);
router.delete("/:id", (0, Auth_1.Authorizetion)("user"), Booking_controller_1.BookingController.deleteUserBooking);
exports.BookingRouter = router;
