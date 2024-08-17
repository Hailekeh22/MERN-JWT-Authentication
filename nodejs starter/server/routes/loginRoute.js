const { Router } = require("express");
const { login } = require("../controller/loginController");

const loginRoute = Router();

loginRoute.post("/login", login);

module.exports = { loginRoute };
