const { query } = require("express-validator");

const getTasksValidator = [
  query("limit", "Limit must be a valid integer").optional().isInt().toInt(),
  query("page", "Page must be a valid integer").optional().isInt().toInt(),
  query("order", "Order must be on of ['asc', 'dsc']")
    .optional()
    .isIn(["asc", "dsc"]),
];

module.exports = getTasksValidator;