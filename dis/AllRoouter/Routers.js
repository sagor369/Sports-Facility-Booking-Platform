"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = require("../App/Module/User/user.router");
const Faculty_router_1 = require("../App/Module/Faculty/Faculty.router");
const Booking_router_1 = require("../App/Module/Booking/Booking.router");
const CheckQvailability_router_1 = require("../App/Module/CheckQvailability/CheckQvailability.router");
const router = (0, express_1.Router)();
const routerModel = [
    {
        path: "/auth",
        rout: user_router_1.UserRoute
    },
    {
        path: "/facility",
        rout: Faculty_router_1.FacultyRouter
    },
    {
        path: "/bookings",
        rout: Booking_router_1.BookingRouter
    },
    {
        path: "/check-availability",
        rout: CheckQvailability_router_1.CheckDataRouter
    }
];
routerModel.forEach(rt => router.use(rt.path, rt.rout));
exports.default = router;
