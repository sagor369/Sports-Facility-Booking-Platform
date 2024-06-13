import { Request, Response } from "express";
import { SendRespons } from "../../../Utills/SendRespons";
import httpStatus from "http-status";
import { CatchAsync } from "../../../Utills/CatchAsync";
import { FacultyServices } from "./Faculty.services";

const postFaculty = CatchAsync(async (req: Request, res: Response) => {
  const result = await FacultyServices.createFacultyInToDb(req.body);
  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Facility added successfully ",
    data: result,
  });
});
const getFaculty = CatchAsync(async (req: Request, res: Response) => {
  const result = await FacultyServices.getFacultyInToDb();
  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Facilities retrieved successfully ",
    data: result,
  });
});
const getSingleFaculty = CatchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
  const result = await FacultyServices.getSingleFacultyInToDb(id);
  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "create course is successfuly ",
    data: result,
  });
});
const updateFaculty = CatchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
  const result = await FacultyServices.updateFacultyInToDb(id, req.body);
  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "create course is successfuly ",
    data: result,
  });
});
const deleteFaculty = CatchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
  const result = await FacultyServices.deleteFacultyInToDb(id);
  SendRespons(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "create course is successfuly ",
    data: result,
  });
});

export const FacultyController = {
  postFaculty,
  getFaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty
};
