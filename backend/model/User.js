// ==== File: backend/models/User.js ====
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String },
  googleId: { type: String },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date },
});

export default mongoose.model("User", userSchema);