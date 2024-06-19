import httpStatus from "http-status";
import { AppError } from "../App/middelware/Errors/CustomError";
import { User } from "../App/Module/User/user.model";
import { TToken } from "./utils.interface";

export const TokenCheck =async (decoded:TToken, userRole: string)=>{
    
    const Users =await User.findOne({email: decoded?.email})
    if(!Users){
        throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized to access this route2")
    }
    if(Users.role !== decoded.role){
        throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized to access this route3")
    }
    if(decoded.role !== userRole){
        throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized to access this route4")
    }

}
