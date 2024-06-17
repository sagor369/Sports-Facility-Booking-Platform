"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CastErrorhandler = (err) => {
    const errorSource = [{
            path: err.path,
            message: err.message
        }];
    return {
        statusCode: 404,
        message: "cast error",
        errorSource,
    };
};
exports.default = CastErrorhandler;
