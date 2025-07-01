const { max } = require("date-fns");
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    maxlength: [100, "First name cannot be more than 100 characters"],
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
    maxlength: [100, "Last name cannot be more than 100 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        // Regular expression to validate email format
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      },
      message: () => `Please enter a valid email address`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

// Create the User model using the user schema
const User = model("User", userSchema);

// Export the User model for use in other parts of the application
module.exports = User;

/**
 * @swagger
 * 
 * components:
 *   schemas:
 *    User:
 *     type: object
 *     required:
 *       - firstName
 *       - email
 *       - password
 *     properties:
 *       firstName:
 *         type: string
 *         description: The first name of the user
 *         maxLength: 100
 *       lastName:
 *         type: string
 *         description: The last name of the user
 *         maxLength: 100
 *       email:
 *         type: string
 *         description: A valid email address of the user
 *       password:
 *        type: string
 *        description: Must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.
 *     example:
 *      firstName: John
 *      lastName: Doe
 *      email: john@doe.com
 *      password: Password123!
 *
 * */
