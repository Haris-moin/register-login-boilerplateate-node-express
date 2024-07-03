import express from "express";
import { login, register } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
// router.post("/", protect, admin, getUsers);

export default router;
