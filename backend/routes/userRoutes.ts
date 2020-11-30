import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
} from "../controllers/userController";
import { protect, admin } from "../middleware/authMiddleware";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
