import { ZodError, ZodIssue } from "zod";
import { TErrorRespons, TErrorSource } from "./error.interface";
import httpStatus from "http-status";


const ZodErrors = (err: ZodError):TErrorRespons =>{
const errorSource:TErrorSource = err.issues.map((issue:ZodIssue) =>{
    return {
        path: issue?.path[issue?.path.length - 1],
        message: issue.message,
      };
}) 


    return {
        statusCode: httpStatus.BAD_REQUEST,
        message: "validation error",
        errorSource
    }

}

export default ZodErrors