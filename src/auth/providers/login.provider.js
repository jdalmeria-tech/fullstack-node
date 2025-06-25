const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const errorLogger = require("../../helpers/errorLogger.helper.js");
const getUserByEmail = require("../../users/providers/getUserByEmail.provider.js");
const generateTokenProvider = require("./generateTokenProvider.js");

async function loginProvider(req, res) {
  const validatedData = matchedData(req);

  try {
    // get the user from the database
    const user = await getUserByEmail(validatedData.email);

    // compare the password with the hashed password in the database
    const result = await bcrypt.compare(validatedData.password, user.password);

    if (!result) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Please check your credentials.",
      });
    }

    const token = generateTokenProvider(user);

    // if the password matches, return a success response
    return res.status(StatusCodes.OK).json({
      accessToken: token,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    errorLogger("Error while logging in", req, error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason:
        "Unable to process your request at the moment, please try again later.",
    });
  }
}

module.exports = loginProvider;
