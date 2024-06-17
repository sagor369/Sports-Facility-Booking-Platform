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
exports.BookingServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const Faculty_model_1 = require("../Faculty/Faculty.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config"));
const user_model_1 = require("../User/user.model");
const CustomError_1 = require("../../middelware/Errors/CustomError");
const Booking_model_1 = require("./Booking.model");
const Booking_utils_1 = require("./Booking.utils");
const createBookingInToDb = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    const facultys = yield Faculty_model_1.Faculty.findById(payload.faculty);
    if (!facultys) {
        throw new CustomError_1.AppError(http_status_1.default.NOT_FOUND, "Faculty is not found");
    }
    const time = yield (0, Booking_utils_1.TimeCheck)(payload);
    if (time) {
        throw new CustomError_1.AppError(http_status_1.default.NOT_FOUND, "this schedule in not available");
    }
    const tokenDecoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_secrate);
    const { email } = tokenDecoded;
    const users = yield user_model_1.User.findOne({ email });
    if (!users) {
        throw new CustomError_1.AppError(http_status_1.default.NOT_FOUND, "user is not found");
    }
    const [startHour, startMin] = payload.startTime.split(":").map(Number);
    const [endHour, endMin] = payload.endTime.split(":").map(Number);
    const startminite = startHour * 60 + startMin;
    const endtminite = endHour * 60 + endMin;
    const totalTime = (endtminite - startminite) / 60;
    payload.payableAmount = totalTime * (facultys === null || facultys === void 0 ? void 0 : facultys.pricePerHour);
    payload.user = users._id;
    const result = yield Booking_model_1.Booking.create(payload);
    return result;
});
const gatBookintInToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Booking_model_1.Booking.find().populate("faculty").populate("user");
    return result;
});
const gatUserBookingInToDb = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenDecoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_secrate);
    const { email } = tokenDecoded;
    const user = yield user_model_1.User.findOne({ email }).select("_id");
    if (!user) {
        throw new CustomError_1.AppError(http_status_1.default.NOT_FOUND, "user is not found");
    }
    const result = yield Booking_model_1.Booking.find({
        user: user._id,
        isDelete: false,
    }).populate("faculty");
    if (!result) {
        throw new CustomError_1.AppError(http_status_1.default.NOT_FOUND, "your Booking is not found");
    }
    return result;
});
const deleteUserBooking = (id, token) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenDecoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_secrate);
    const { email } = tokenDecoded;
    const user = yield user_model_1.User.findOne({ email });
    if (!user) {
        throw new CustomError_1.AppError(http_status_1.default.NOT_FOUND, "user is not found");
    }
    const checkBooking = yield Booking_model_1.Booking.findById(id);
    if (!checkBooking) {
        throw new CustomError_1.AppError(http_status_1.default.NOT_FOUND, "this booking is fot found");
    }
    if (checkBooking.isDelete) {
        throw new CustomError_1.AppError(http_status_1.default.NOT_FOUND, "this booking is all ready delete");
    }
    const result = yield Booking_model_1.Booking.findByIdAndUpdate(id, { isDelete: true }, { new: true });
    return result;
});
exports.BookingServices = {
    createBookingInToDb,
    gatBookintInToDB,
    gatUserBookingInToDb,
    deleteUserBooking,
};
