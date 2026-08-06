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
  console.error("❌ MongoDB Atlas Connection Failed:");
  console.error(error);

  console.warn("⚠️ Trying in-memory fallback...");

  try {
    mongoMemoryServer = await MongoMemoryServer.create();
    const uri = mongoMemoryServer.getUri();

    await mongoose.connect(uri);
    isConnected = true;

    console.log("✅ In-memory MongoDB Connected");
  } catch (memoryError) {
    console.error("❌ In-memory MongoDB Failed:");
    console.error(memoryError);
  }
}
};

export default connectDB;
