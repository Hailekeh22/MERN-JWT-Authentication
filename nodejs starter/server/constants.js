const dotenv = require("dotenv").config();

const secrete = process.env.JWT_SECRETE;

module.exports = { secrete };
