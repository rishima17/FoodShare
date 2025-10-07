import FoodPartner from "../models/foodpartner.js";

export const submitFoodPartner = async (req, res) => {
  try {
    const { name, email, phone, location, type, description } = req.body;
    if (!name || !email || !phone || !location || !type || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPartner = new FoodPartner({ name, email, phone, location, type, description });
    await newPartner.save();

    res.status(201).json({ message: "Food partner request submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
