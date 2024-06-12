import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt"
import config from "../../../config";

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
    
  },
  phoneNumber: {
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
    type:String,
    default: "user"
  }
});

UserSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bc_hash));
  next();
});

UserSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});

 export const User = model<TUser>("user", UserSchema)
