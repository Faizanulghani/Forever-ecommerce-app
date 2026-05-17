import { validationResult } from "express-validator";
import {
  loginUser,
  registerUser,
  adminLogin,
} from "../controllers/userController.js";
import {
  registerValidation,
  loginValidation,
  adminLoginValidation,
} from "./userValidator.js";
import route from "express";

const router = route.Router();

const handleValidation = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    const message = error.array().map((err) => err.msg);
    return res.json({ success: false, error: message });
  }
  next();
};

router.post("/register", registerValidation, handleValidation, registerUser);
router.post("/login", loginValidation, handleValidation, loginUser);
router.post("/admin", adminLoginValidation, handleValidation, adminLogin);

export default router;
