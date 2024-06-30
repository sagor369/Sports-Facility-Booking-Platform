import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt"
import config from "../../../config";
import { UserRole } from "./user.const";

const UserSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true, 
    trim: true,
    select: 0
    
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  role:{
    type: String,
    required: true,
    enum: Object.values(UserRole),
    default: "User"
  },
  isDelete:{
    type:Boolean,
    default: false
  }
});

UserSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bc_hash));
  next();
});

// UserSchema.post("save", async function (doc, next) {
//   doc.password = "";
//   next();
// });

 export const User = model<TUser>("user", UserSchema)
