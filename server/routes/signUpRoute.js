const { Router } = require("express");
const { registerUser } = require("../controller/signupController");

const SignUpRoute = Router();

SignUpRoute.post("/signup", registerUser);

module.exports = { SignUpRoute };
