import httpStatus from "http-status";
import { AppError } from "../../../middelware/Errors/CustomError";
import { TFaculty } from "./Faculty.interface";
import { Faculty } from "./Faculty.model";

const createFacultyInToDb = async(payload: TFaculty) =>{
    const result =await Faculty.create(payload)
    return result
}
const getFacultyInToDb = async() =>{
    const result =await Faculty.find().sort("-createdAt")
    return result
}
const getSingleFacultyInToDb = async(id: string) =>{
    const result = await Faculty.findById(id)
    return result
}
const updateFacultyInToDb = async(id: string, payload: Partial<TFaculty>) =>{
    
    const isFacultyExists = await Faculty.findById(id)
    if(!isFacultyExists){
        throw new AppError(httpStatus.NOT_FOUND, "this faculty is not found")
    }
    if(isFacultyExists.isDelete){
        throw new AppError(httpStatus.FORBIDDEN, "this faculty is delete")
    }
    
    const result =await Faculty.findByIdAndUpdate(id, payload, {new: true, runValidators:true})
    return result
}
const deleteFacultyInToDb = async(id: string, ) =>{
    
    const isFacultyExists = await Faculty.findById(id)
    if(!isFacultyExists){
        throw new AppError(httpStatus.NOT_FOUND, "this faculty is not found")
    }
    if(isFacultyExists.isDelete){
        throw new AppError(httpStatus.FORBIDDEN, "this faculty is already delete")
    }
    
    const result =await Faculty.findByIdAndUpdate(id, {isDelete: true}, {new: true, runValidators:true})
    return result
}

export const FacultyServices = {
    createFacultyInToDb,
    getFacultyInToDb,
    getSingleFacultyInToDb,
    updateFacultyInToDb,
    deleteFacultyInToDb

}