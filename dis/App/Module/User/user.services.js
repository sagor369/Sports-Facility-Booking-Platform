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
exports.UserServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config"));
const CustomError_1 = require("../../middelware/Errors/CustomError");
const CreateUserInToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const NewUser = yield user_model_1.User.create(payload);
    const result = yield user_model_1.User.findById(NewUser === null || NewUser === void 0 ? void 0 : NewUser._id);
    return result;
});
const LoginUserInToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isUser = yield user_model_1.User.findOne({ email }).select("+password");
    if (!isUser) {
        throw new CustomError_1.AppError(http_status_1.default.NOT_FOUND, " user not found");
    }
    if (isUser === null || isUser === void 0 ? void 0 : isUser.isDelete) {
        throw new CustomError_1.AppError(http_status_1.default.NOT_FOUND, `${isUser.email} user is deleted`);
    }
    const isPasswordMatch = yield bcrypt_1.default.compare(password, isUser === null || isUser === void 0 ? void 0 : isUser.password);
    if (!isPasswordMatch) {
        throw new CustomError_1.AppError(http_status_1.default.NOT_FOUND, `${password} is not match`);
    }
    const jwtHeader = {
        role: isUser === null || isUser === void 0 ? void 0 : isUser.role,
        email: isUser === null || isUser === void 0 ? void 0 : isUser.email,
    };
    const accessToken = `Bearer ${jsonwebtoken_1.default.sign(jwtHeader, config_1.default.jwt_secrate, {
        expiresIn: "2d",
    })}`;
    const refreshToken = `Bearer ${jsonwebtoken_1.default.sign(jwtHeader, config_1.default.jwt_refresh, {
        expiresIn: "30d",
    })}`;
    const UserData = yield user_model_1.User.findOne({ email }).select("-password");
    const result = {
        UserData,
        accessToken,
        refreshToken
    };
    return result;
});
exports.UserServices = {
    CreateUserInToDb,
    LoginUserInToDb,
};
