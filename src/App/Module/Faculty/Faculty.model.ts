import { model, Schema } from "mongoose";
import { TFaculty } from "./Faculty.interface";

const FacultySchema = new Schema<TFaculty>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
}, {timestamps:true});

export const Faculty = model("faculty", FacultySchema)
