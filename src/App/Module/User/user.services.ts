import { TUser } from "./user.interface";
import { User } from "./user.model";


const CreateUserInToDb = async(payload: TUser) =>{
    payload.role= "user"
    const result = await User.create(payload)
    return result
}

export const UserServices = {
    CreateUserInToDb
}