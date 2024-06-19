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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeCheck = void 0;
const Booking_model_1 = require("./Booking.model");
const TimeCheck = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const payloadDate = payload.date;
    const bookingData = yield Booking_model_1.Booking.find({ faculty: payload.faculty, date: payloadDate });
    for (const booking of bookingData) {
        const newStartTime = `2024-02-12T${payload === null || payload === void 0 ? void 0 : payload.startTime}`;
        const newEndTime = `2024-02-12T${payload === null || payload === void 0 ? void 0 : payload.endTime}`;
        const existingStartTime = `2024-02-12T${booking === null || booking === void 0 ? void 0 : booking.startTime}`;
        const existingEndTime = `2024-02-12T${booking === null || booking === void 0 ? void 0 : booking.endTime}`;
        if (newStartTime < existingEndTime && newEndTime > existingStartTime) {
            return true;
        }
    }
    return false;
});
exports.TimeCheck = TimeCheck;
