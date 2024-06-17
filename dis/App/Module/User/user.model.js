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
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const user_const_1 = require("./user.const");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: 0
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: Object.values(user_const_1.UserRole),
        default: "User"
    },
    isDelete: {
        type: Boolean,
        default: false
    }
});
UserSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        user.password = yield bcrypt_1.default.hash(user.password, Number(config_1.default.bc_hash));
        next();
    });
});
// UserSchema.post("save", async function (doc, next) {
//   doc.password = "";
//   next();
// });
exports.User = (0, mongoose_1.model)("user", UserSchema);
