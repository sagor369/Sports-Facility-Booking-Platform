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
exports.CheckData = void 0;
const Booking_model_1 = require("../Booking/Booking.model");
const gatCheckQvailabilityInToDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const d = new Date();
    const years = d.getFullYear();
    const month = d.getMonth().toString().padStart(2, "0");
    const day = d.getDate();
    const defaltDate = `${years}-${month}-${day}`;
    const searchQuery = query || defaltDate;
    const result = yield Booking_model_1.Booking.find({ date: searchQuery }).select("startTime endTime");
    return result;
});
exports.CheckData = {
    gatCheckQvailabilityInToDb,
};
