"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendRespons = void 0;
const SendRespons = (res, data) => {
    const { message, statusCode, success, accessToken } = data;
    if (accessToken) {
        res.status(statusCode).json({
            success,
            message,
            accessToken,
            data: data === null || data === void 0 ? void 0 : data.data
        });
    }
    else {
        res.status(statusCode).json({
            success,
            message,
            data: data === null || data === void 0 ? void 0 : data.data
        });
    }
};
exports.SendRespons = SendRespons;
