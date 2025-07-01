const express = require("express");
const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");
const authController = require("./auth.controller.js");
const loginValidator = require("./validators/login.validator.js");



const authRouter = express.Router();

/**
 * @swagger
 * 
 * /auth/login:
 *  post:
 *    summary: User login
 *    tags: [Authentication]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        description: User login successfully
 *        content:
 *          application/json:
 *            example:
 *              status: success
 *              statusCode: 200
 *              message: Ok
 *              data:
 *                accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30
 */

authRouter.post("/login", loginValidator, (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return authController.handleLogin(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});

module.exports = authRouter;

/**
 * @swagger
 * 
 * components:
 *   schemas:
 *    Login:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *         description: A valid email address of the user
 *       password:
 *        type: string
 *        description: Must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.
 *     example:
 *      email: john@doe.com
 *      password: Password123!
 *
 * */
