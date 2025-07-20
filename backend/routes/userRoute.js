import { validationResult } from "express-validator";
import {
  loginUser,
  registerUser,
  adminLogin,
} from "../controllers/userController.js";
import { registerValidation } from "./userValidator.js";
import route from "express";

const router = route.Router();

router.post("/register", registerValidation, (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    const message = error.array().map((err) => err.msg);
    return res.status(400).json({ success: false, error: message });
  }

  registerUser(req, res);
});
router.post("/login", loginUser);
router.post("/admin", adminLogin);

export default router;
