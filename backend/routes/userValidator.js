import { check } from "express-validator";

export const registerValidation = [
  check("name").notEmpty().withMessage("Name is required"),

  check("email").isEmail().withMessage("Invalid email address"),

  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain at least one special character"),
];

export const loginValidation = [
  check("email").isEmail().withMessage("Invalid email address"),
  check("password").notEmpty().withMessage("Password is required"),
];

export const adminLoginValidation = [
  check("email").isEmail().withMessage("Invalid email address"),
  check("password").notEmpty().withMessage("Password is required"),
];
