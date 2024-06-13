import { string } from "zod";
import { UserRole } from "./user.const";

export type TUser = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: keyof typeof UserRole;
  address: string;
  isDelete: boolean
};

export type TLogin = {
  email: string
  password: string
}
