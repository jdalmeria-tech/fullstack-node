const User = require("../user.schema.js");
const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");

async function createUserProvider(req, res) {
  const validatedData = matchedData(req);

  try {
    const user = new User({
      firstName: validatedData.firstName,
      lastName: validatedData.lastName,
      email: validatedData.email,
      password: validatedData.password,
    });

    await user.save();
    delete user.password; // Remove password from response for security
    return res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    errorLogger("Error while creating an account", req, error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason:
        "Unable to process your request at the moment, please try again later.",
    });
  }
}

module.exports = createUserProvider;
