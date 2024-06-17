"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DublicatErrorHandler = (err) => {
    const match = err.message.match(/"([^"]*)"/);
    const extractedValue = match && match[1];
    const errorSource = [{
            path: "",
            message: `${extractedValue} is already exists`
        }];
    return {
        statusCode: 400,
        message: "Validation error",
        errorSource,
    };
};
exports.default = DublicatErrorHandler;
