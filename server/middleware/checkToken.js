const jwt = require("jsonwebtoken");
const { secrete } = require("../constants");

const verifyToken = async (req, res, next) => {
  const jwtsecret = await secrete;
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(403).send("Token Required");
  }
  jwt.verify(token, jwtsecret, (err, user) => {
    if (err) {
      return res.status(401).send("Invalid Token");
    }
    req.user = user;
    next();
  });
};

module.exports = { verifyToken };
