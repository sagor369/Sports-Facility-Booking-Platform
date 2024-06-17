"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const ZodErrors = (err) => {
    const errorSource = err.issues.map((issue) => {
        return {
            path: issue === null || issue === void 0 ? void 0 : issue.path[(issue === null || issue === void 0 ? void 0 : issue.path.length) - 1],
            message: issue.message,
        };
    });
    return {
        statusCode: http_status_1.default.BAD_REQUEST,
        message: "validation error",
        errorSource
    };
};
exports.default = ZodErrors;
