"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatchAsync = void 0;
const CatchAsync = (fn) => {
    return ((req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => { console.log(err), next(err); });
    });
};
exports.CatchAsync = CatchAsync;
