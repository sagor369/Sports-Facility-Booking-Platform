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
exports.Authorizetion = void 0;
const config_1 = __importDefault(require("../../../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const CustomError_1 = require("../Errors/CustomError");
const http_status_1 = __importDefault(require("http-status"));
const AuthUtills_1 = require("../../../Utills/AuthUtills");
const CatchAsync_1 = require("../../../Utills/CatchAsync");
const Authorizetion = (userRole) => {
    return (0, CatchAsync_1.CatchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        if (!token) {
            throw new CustomError_1.AppError(http_status_1.default.UNAUTHORIZED, "You are not authorized to access this route1");
        }
        const accessToken = token === null || token === void 0 ? void 0 : token.split(" ");
        const decodedToken = jsonwebtoken_1.default.verify(accessToken[1], config_1.default.jwt_secrate);
        const { email, role } = decodedToken;
        yield (0, AuthUtills_1.TokenCheck)({ email, role }, userRole);
        req.user = decodedToken;
        next();
    }));
};
exports.Authorizetion = Authorizetion;
