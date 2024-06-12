import mongoose from "mongoose";
import { TErrorRespons, TErrorSource } from "./error.interface";


const ValidationError = (err: mongoose.Error.ValidationError):TErrorRespons =>{
    const errorSource:TErrorSource = Object.values(err.errors).map((value: mongoose.Error.ValidatorError | mongoose.Error.CastError )=>{
        return {
            path: value?.path,
            message: value?.message
        }
    })
    return {
        statusCode: 400,
        message: "Validation error",
        errorSource,
      };

}

export default ValidationError