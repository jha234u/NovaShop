import express from "express";
import {
  createOrder,
  getMyOrders,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/:userId", getMyOrders);

export default router;