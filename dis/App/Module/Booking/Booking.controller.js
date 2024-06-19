"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingController = void 0;
const SendRespons_1 = require("../../../Utills/SendRespons");
const http_status_1 = __importDefault(require("http-status"));
const CatchAsync_1 = require("../../../Utills/CatchAsync");
const Booking_services_1 = require("./Booking.services");
const createBooking = (0, CatchAsync_1.CatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Booking_services_1.BookingServices.createBookingInToDb(req.body, req.user);
    (0, SendRespons_1.SendRespons)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Booking created successfully",
        data: result,
    });
}));
const getBooking = (0, CatchAsync_1.CatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Booking_services_1.BookingServices.gatBookintInToDB();
    (0, SendRespons_1.SendRespons)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Bookings retrieved successfully",
        data: result,
    });
}));
const getUserBooking = (0, CatchAsync_1.CatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Booking_services_1.BookingServices.gatUserBookingInToDb(req === null || req === void 0 ? void 0 : req.user);
    (0, SendRespons_1.SendRespons)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Bookings retrieved successfully",
        data: result,
    });
}));
const deleteUserBooking = (0, CatchAsync_1.CatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield Booking_services_1.BookingServices.deleteUserBooking(id, req.user);
    (0, SendRespons_1.SendRespons)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Booking cancelled successfully ",
        data: result,
    });
}));
exports.BookingController = {
    createBooking,
    getBooking,
    getUserBooking,
    deleteUserBooking,
};
