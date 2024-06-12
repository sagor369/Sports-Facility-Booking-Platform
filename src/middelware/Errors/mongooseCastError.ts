import mongoose from "mongoose";
import { TErrorSource } from "./error.interface"; 


const CastErrorhandler = (err:mongoose.Error.CastError) =>{
    const errorSource:TErrorSource = [{
        path: err.path,
        message: err.message
    }]
    return {
        statusCode: 404,
        message: "cast error",
        errorSource,
      };
}
export default CastErrorhandler