import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoMemoryServer;
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/novashop";
    await mongoose.connect(uri);
    isConnected = true;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.warn("⚠️ Primary MongoDB connection failed, trying in-memory fallback...");
    try {
      mongoMemoryServer = await MongoMemoryServer.create();
      const uri = mongoMemoryServer.getUri();
      await mongoose.connect(uri);
      isConnected = true;
      console.log("✅ In-memory MongoDB Connected");
    } catch (memoryError) {
      console.error("⚠️ MongoDB connection failed:", error.message);
      console.error("⚠️ In-memory fallback failed:", memoryError.message);
      console.log("Server will continue running without DB connectivity.");
    }
  }
};

export default connectDB;
