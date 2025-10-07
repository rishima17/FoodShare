import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoute.js";
import contactRoutes from "./routes/contactRoute.js";
import foodPartnerRoutes from "./routes/foodpartnerRoute.js";

dotenv.config();
const app = express();

// CORS Configuration
app.use(
  cors({
    origin: [
      "https://left-over-food-donation-git-main-rishimas-projects.vercel.app",
      "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api", contactRoutes);
app.use("/api", foodPartnerRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" Database Connected"))
  .catch(err => console.error("MongoDB Connection Error:",err));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
