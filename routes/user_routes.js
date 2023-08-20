import express from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controllers/user_controller.js";
import validateToken from "../middleware/validate_token_handler.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

export default router;
