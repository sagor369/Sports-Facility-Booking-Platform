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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenCheck = void 0;
const http_status_1 = __importDefault(require("http-status"));
const CustomError_1 = require("../App/middelware/Errors/CustomError");
const user_model_1 = require("../App/Module/User/user.model");
const TokenCheck = (decoded, userRole) => __awaiter(void 0, void 0, void 0, function* () {
    const Users = yield user_model_1.User.findOne({ email: decoded === null || decoded === void 0 ? void 0 : decoded.email });
    if (!Users) {
        throw new CustomError_1.AppError(http_status_1.default.UNAUTHORIZED, "You are not authorized to access this route2");
    }
    if (Users.role !== decoded.role) {
        throw new CustomError_1.AppError(http_status_1.default.UNAUTHORIZED, "You are not authorized to access this route3");
    }
    if (decoded.role !== userRole) {
        throw new CustomError_1.AppError(http_status_1.default.UNAUTHORIZED, "You are not authorized to access this route4");
    }
});
exports.TokenCheck = TokenCheck;
