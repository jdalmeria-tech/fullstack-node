const { body } = require("express-validator");

const createTaskValidator = [
  body("title", "Title cannot be empty").notEmpty(),
  body("title", "Title must be a string").isString(),
  body("title").isLength({ max: 100 }),
  body("title").trim(),
  body("dueDate", "dueDate must be a valid ISO8601 string")
    .notEmpty()
    .isISO8601(),

  body(
    "description",
    "The description cannot be empty and needs to be a string"
  )
    .notEmpty()
    .isString()
    .trim(),
  body(
    "description",
    "The description cannot be more than 500 characters long"
  ).isLength({ max: 500 }),

  body("priority").isIn(["low", "normal", "high"]),
  body("status").isIn(["todo", "inProgress", "completed"]),
  body("user").notEmpty().isMongoId(),

];

module.exports = createTaskValidator;

