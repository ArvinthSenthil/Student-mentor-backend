import express from "express";
import asyncHandler from "express-async-handler";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/usercontroller.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/").post(registerUser);

export default router;
