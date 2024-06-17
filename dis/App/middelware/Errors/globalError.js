"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const ZodErrorHandler_1 = __importDefault(require("./ZodErrorHandler"));
const mongooseValidationError_1 = __importDefault(require("./mongooseValidationError"));
const mongooseCastError_1 = __importDefault(require("./mongooseCastError"));
const mongooseDublicatError_1 = __importDefault(require("./mongooseDublicatError"));
const CustomError_1 = require("./CustomError");
const GlobalError = (err, req, res, next) => {
    let statusCode = 404;
    let message = (err === null || err === void 0 ? void 0 : err.message) || "";
    let errorSources = [
        {
            path: "",
            message: "",
        },
    ];
    if (err instanceof zod_1.ZodError) {
        const simplefyError = (0, ZodErrorHandler_1.default)(err);
        statusCode = simplefyError.statusCode;
        errorSources = simplefyError.errorSource;
        message = simplefyError.message;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "ValidationError") {
        const simplefyError = (0, mongooseValidationError_1.default)(err);
        statusCode = simplefyError.statusCode;
        errorSources = simplefyError.errorSource;
        message = simplefyError.message;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "CastError") {
        const simplefyError = (0, mongooseCastError_1.default)(err);
        statusCode = simplefyError.statusCode;
        errorSources = simplefyError.errorSource;
        message = simplefyError.message;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
        const simplefyError = (0, mongooseDublicatError_1.default)(err);
        statusCode = simplefyError.statusCode;
        errorSources = simplefyError.errorSource;
        message = simplefyError.message;
    }
    else if (err instanceof CustomError_1.AppError) {
        (statusCode = err === null || err === void 0 ? void 0 : err.statusCode),
            (message = err === null || err === void 0 ? void 0 : err.message),
            (errorSources = [
                {
                    path: "",
                    message: err === null || err === void 0 ? void 0 : err.message,
                },
            ]);
    }
    else if (err === Error) {
        (message = err === null || err === void 0 ? void 0 : err.message),
            (errorSources = [
                {
                    path: "",
                    message: err === null || err === void 0 ? void 0 : err.message,
                },
            ]);
    }
    return res.status(statusCode).json({
        success: false,
        message: message,
        errorSources,
        stack: err.stack,
        err,
    });
};
exports.default = GlobalError;
