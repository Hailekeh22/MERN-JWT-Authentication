const { connetDb } = require("../config/db-Config");
const { User } = require("../schema/userSchema");
const { closeCon } = require("../utils/closeDb");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { secrete } = require("../constants");

const login = async (req, res) => {
  const { email, pwd } = req.body;

  const jwtsecrete = await secrete;

  try {
    await connetDb();
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).send("email not found");
    }

    const userPwd = await bcrypt.compare(pwd, user.password);

    if (!userPwd) {
      return res.send("Incorect password");
    }

    const token = jwt.sign({ email }, jwtsecrete, { expiresIn: "100h" });
    res.json({ token });
  } catch (e) {
    console.log("Error Happened");
  } finally {
    closeCon();
  }
};

module.exports = { login };
