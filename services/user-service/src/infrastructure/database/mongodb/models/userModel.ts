import mongoose, { Schema, Document } from "mongoose";
export interface Iuser extends Document {
  _id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, requried: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model<Iuser>("User", userSchema);
