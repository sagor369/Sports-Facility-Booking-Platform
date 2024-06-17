"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = require("mongoose");
const Booking_const_1 = require("./Booking.const");
const BookingSchema = new mongoose_1.Schema({
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    payableAmount: {
        type: Number,
        required: true,
    },
    faculty: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "faculty",
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    isBooked: {
        type: String,
        enum: Object.values(Booking_const_1.BookingStatus),
        default: "confirmed",
    },
    isDelete: {
        type: Boolean,
        default: false
    }
});
exports.Booking = (0, mongoose_1.model)("booking", BookingSchema);
