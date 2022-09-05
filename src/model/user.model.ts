import mongoose from "mongoose";
import config from "config";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);
