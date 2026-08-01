import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";
import connectDB from "./config/db.js";

dotenv.config();

await connectDB();

await mongoose.connection.dropDatabase().catch(() => {});

const products = [
  {
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones.",
    price: 149,
    image: "/products/headphones.png",
    category: "Electronics",
    stock: 20,
    rating: 4.8,
  },
  {
    name: "Smart Watch",
    description: "Fitness tracking smartwatch with AMOLED display.",
    price: 199,
    image: "/products/smartwatch.png",
    category: "Electronics",
    stock: 15,
    rating: 4.7,
  },
  {
    name: "Gaming Mouse",
    description: "High precision RGB gaming mouse.",
    price: 79,
    image: "/products/mouse.png",
    category: "Accessories",
    stock: 30,
    rating: 4.6,
  },
  {
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with blue switches.",
    price: 99,
    image: "/products/keyboard.png",
    category: "Accessories",
    stock: 18,
    rating: 4.8,
  },
  {
    name: "Laptop",
    description: "Powerful laptop for work and gaming.",
    price: 999,
    image: "/products/laptop.png",
    category: "Computers",
    stock: 10,
    rating: 4.9,
  },
  {
    name: "Smartphone",
    description: "Latest flagship smartphone.",
    price: 899,
    image: "/products/smartphone.png",
    category: "Mobiles",
    stock: 25,
    rating: 4.7,
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with deep bass.",
    price: 129,
    image: "/products/speaker.png",
    category: "Audio",
    stock: 22,
    rating: 4.6,
  },
  {
    name: "DSLR Camera",
    description: "Professional DSLR camera for creators.",
    price: 1199,
    image: "/products/camera.png",
    category: "Photography",
    stock: 8,
    rating: 4.9,
  },
];

await Product.deleteMany();
await Product.insertMany(products);

console.log("✅ Products Seeded Successfully");

process.exit();
