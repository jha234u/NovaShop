import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/novashop";
    await mongoose.connect(uri);

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("⚠️ MongoDB connection failed:", error.message);
    console.log("Server will continue running without DB connectivity.");
  }
};

export default connectDB;
