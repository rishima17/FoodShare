import mongoose from "mongoose";

const foodPartnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true }, // restaurant, cafe, individual
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("FoodPartner", foodPartnerSchema);
