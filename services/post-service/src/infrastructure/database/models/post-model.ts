import mongoose, { Schema, Document } from "mongoose";
export interface IpostDocument extends Document {
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}
const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
export const PostModel = mongoose.model<IpostDocument>('Post',PostSchema);
