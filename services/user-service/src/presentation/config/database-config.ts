import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
export const connectDb = async (): Promise<void> => {
  try {
    await mongoose
      .connect(
        process.env.MONGODB_URI || "mongodb://localhost:27017/userDatabase"
      )
      .then((response) => {
        if (response) {
          console.log("mongodb connected to the user database locally");
        }
      });
  } catch (err) {
    console.error("mongodb connection error", err);
    process.exit(1);
  }
};
