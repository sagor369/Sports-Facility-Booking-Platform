import { TUser } from "./user.interface";
import { User } from "./user.model";


const CreateUserInToDb = async(payload: TUser) =>{
    payload.role= "user"
    const resutl = await User.create(payload)
}