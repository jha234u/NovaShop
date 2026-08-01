import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const fallbackUsers = [];

const isMongoReady = () => mongoose.connection.readyState === 1;

const buildUserResponse = (user) => ({
  _id: user._id,
  name: user.name,
  email: user.email,
});

// Register User
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (isMongoReady()) {
      const exists = await User.findOne({ email });

      if (exists) {
        return res.status(400).json({
          message: "User already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      return res.status(201).json({
        success: true,
        message: "Registration Successful",
        user: buildUserResponse(user),
      });
    }

    const exists = fallbackUsers.find((user) => user.email === email);

    if (exists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      _id: `local-${Date.now()}`,
      name,
      email,
      password: hashedPassword,
      role: "user",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    fallbackUsers.push(user);

    return res.status(201).json({
      success: true,
      message: "Registration Successful",
      user: buildUserResponse(user),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Login User
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (isMongoReady()) {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      return res.json({
        success: true,
        token,
        user: buildUserResponse(user),
      });
    }

    const user = fallbackUsers.find((item) => item.email === email);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({
      success: true,
      token,
      user: buildUserResponse(user),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
