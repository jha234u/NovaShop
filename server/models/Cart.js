import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [{ type: Object }],
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
