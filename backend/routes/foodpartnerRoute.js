import express from "express";
import { submitFoodPartner } from "../controllers/foodpartnerController.js";

const router = express.Router();

router.post("/food-partner", submitFoodPartner);

export default router;
