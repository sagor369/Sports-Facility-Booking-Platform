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
exports.FacultyController = void 0;
const SendRespons_1 = require("../../../Utills/SendRespons");
const http_status_1 = __importDefault(require("http-status"));
const CatchAsync_1 = require("../../../Utills/CatchAsync");
const Faculty_services_1 = require("./Faculty.services");
const postFaculty = (0, CatchAsync_1.CatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Faculty_services_1.FacultyServices.createFacultyInToDb(req.body);
    (0, SendRespons_1.SendRespons)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Facility added successfully ",
        data: result,
    });
}));
const getFaculty = (0, CatchAsync_1.CatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Faculty_services_1.FacultyServices.getFacultyInToDb();
    (0, SendRespons_1.SendRespons)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Facilities retrieved successfully ",
        data: result,
    });
}));
const getSingleFaculty = (0, CatchAsync_1.CatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield Faculty_services_1.FacultyServices.getSingleFacultyInToDb(id);
    (0, SendRespons_1.SendRespons)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Facilities retrieved successfully ",
        data: result,
    });
}));
const updateFaculty = (0, CatchAsync_1.CatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield Faculty_services_1.FacultyServices.updateFacultyInToDb(id, req.body);
    (0, SendRespons_1.SendRespons)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Facilities update successfully ",
        data: result,
    });
}));
const deleteFaculty = (0, CatchAsync_1.CatchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield Faculty_services_1.FacultyServices.deleteFacultyInToDb(id);
    (0, SendRespons_1.SendRespons)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Facilities delete successfully ",
        data: result,
    });
}));
exports.FacultyController = {
    postFaculty,
    getFaculty,
    getSingleFaculty,
    updateFaculty,
    deleteFaculty
};
