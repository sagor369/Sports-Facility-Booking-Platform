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
exports.FacultyServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const Faculty_model_1 = require("./Faculty.model");
const CustomError_1 = require("../../middelware/Errors/CustomError");
const createFacultyInToDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistsFaculty = yield Faculty_model_1.Faculty.findOne({ name: payload === null || payload === void 0 ? void 0 : payload.name });
    if (isExistsFaculty) {
        throw new CustomError_1.AppError(http_status_1.default.FORBIDDEN, `${payload.name} Faculty already exists`);
    }
    const result = yield Faculty_model_1.Faculty.create(payload);
    return result;
});
const getFacultyInToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Faculty_model_1.Faculty.find({ isDelete: false }).sort("-createdAt");
    return result;
});
const getSingleFacultyInToDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Faculty_model_1.Faculty.findById(id);
    if ((result === null || result === void 0 ? void 0 : result.isDelete) === true) {
        return "this data is deleted";
    }
    return result;
});
const updateFacultyInToDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isFacultyExists = yield Faculty_model_1.Faculty.findById(id);
    if (!isFacultyExists) {
        throw new CustomError_1.AppError(http_status_1.default.NOT_FOUND, "this faculty is not found");
    }
    if (isFacultyExists.isDelete) {
        throw new CustomError_1.AppError(http_status_1.default.FORBIDDEN, "this faculty is delete");
    }
    const result = yield Faculty_model_1.Faculty.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
    return result;
});
const deleteFacultyInToDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isFacultyExists = yield Faculty_model_1.Faculty.findById(id);
    if (!isFacultyExists) {
        throw new CustomError_1.AppError(http_status_1.default.NOT_FOUND, "this faculty is not found");
    }
    if (isFacultyExists.isDelete) {
        throw new CustomError_1.AppError(http_status_1.default.FORBIDDEN, "this faculty is already delete");
    }
    const result = yield Faculty_model_1.Faculty.findByIdAndUpdate(id, { isDelete: true }, { new: true, runValidators: true });
    return result;
});
exports.FacultyServices = {
    createFacultyInToDb,
    getFacultyInToDb,
    getSingleFacultyInToDb,
    updateFacultyInToDb,
    deleteFacultyInToDb
};
