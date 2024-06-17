"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faculty = void 0;
const mongoose_1 = require("mongoose");
const FacultySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    pricePerHour: {
        type: Number,
        required: true,
    },
    isDelete: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.Faculty = (0, mongoose_1.model)("faculty", FacultySchema);
