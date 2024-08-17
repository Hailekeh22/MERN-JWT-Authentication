const dotenv = require("dotenv").config();

const returnSecrete = () => {
  const secrete = process.env.JWT_SECRETE;

  return secrete;
};

module.exports = { returnSecrete };
