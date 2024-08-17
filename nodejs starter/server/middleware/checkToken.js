const jwt = require("jsonwebtoken");
const { returnSecrete } = require("../constants");

const verifyToken = async (req, res, next) => {
  const secrete = await returnSecrete();
  const token = req.headers["authorization"];
  console.log(token);
  if (!token) {
    return res.status(403).send("Token Required");
  }
  jwt.verify(token, secrete, (err, user) => {
    if (err) {
      return res.status(401).send("Invalid Token");
    }
    req.user = user;
    next();
  });
};

module.exports = { verifyToken };
