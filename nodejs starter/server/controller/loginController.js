const { connetDb } = require("../config/db-Config");
const { User } = require("../schema/userSchema");
const { closeCon } = require("../utils/closeDb");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { returnSecrete } = require("../constants");

const login = async (req, res) => {
  const { email, pwd } = req.body;

  const secrete = await returnSecrete();
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

    closeCon();

    const token = jwt.sign({ email }, secrete, { expiresIn: "100h" });

    res.json({ token });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { login };
