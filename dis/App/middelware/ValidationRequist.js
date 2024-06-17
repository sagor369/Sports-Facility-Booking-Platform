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
exports.ValidateRequest = void 0;
const CatchAsync_1 = require("../../Utills/CatchAsync");
const ValidateRequest = (payload) => {
    return (0, CatchAsync_1.CatchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield payload.parseAsync({
            data: req.body,
            query: req.query
        });
        next();
    }));
};
exports.ValidateRequest = ValidateRequest;
