const { body } = require("express-validator");

const createUserValidator = [
  body("firstName", "First name is required and a string")
    .isString()
    .notEmpty()
    .isLength({ max: 100 })
    .trim(),
  body("lastName", "Last name is a string")
    .isString()
    .optional()
    .isLength({ max: 100 })
    .trim(),
  body("email", "Email is required and must be a valid email address")
    .isEmail()
    .notEmpty()
    .isLength({ max: 200 })
    .trim(),
  body(
    "password",
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  )
    .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .notEmpty()
    .isLength({ min: 8 }),
];

module.exports = createUserValidator;
