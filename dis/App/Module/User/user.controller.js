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
exports.UserController = void 0;
const user_services_1 = require("./user.services");
const SendRespons_1 = require("../../../Utills/SendRespons");
const http_status_1 = __importDefault(require("http-status"));
const CatchAsync_1 = require("../../../Utills/CatchAsync");
const signUpUser = (0, CatchAsync_1.CatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_services_1.UserServices.CreateUserInToDb(req.body);
    (0, SendRespons_1.SendRespons)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User registered successfully ",
        data: result,
    });
}));
const LoginUser = (0, CatchAsync_1.CatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_services_1.UserServices.LoginUserInToDb(req.body);
    const { accessToken, UserData, refreshToken } = result;
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
    });
    (0, SendRespons_1.SendRespons)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User logged in successfully",
        accessToken,
        data: UserData,
    });
}));
exports.UserController = {
    signUpUser,
    LoginUser
};
