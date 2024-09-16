import mongoose from "mongoose";

export async function connectToMongoDB(): Promise<void> {
  try {
    await mongoose.connect(
      process.env.MONGOURI || "mongodb://localhost:27017/postDB"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

