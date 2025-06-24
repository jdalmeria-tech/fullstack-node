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
