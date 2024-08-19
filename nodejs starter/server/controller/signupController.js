const { connetDb } = require("../config/db-Config");
const { User } = require("../schema/userSchema");
const { closeCon } = require("../utils/closeDb");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { fname, lname, email, pwd } = req.body;

  const hasedPwd = await bcrypt.hash(pwd, 12);

  await connetDb();
  const newUser = new User({
    fname: fname,
    lname: lname,
    email: email,
    password: hasedPwd,
  });

  const saveUser = await newUser.save();
  if (saveUser) {
    res.send("Sucessfully Added");
    await closeCon();
  } else {
    res.send("Registration failed");
  }
};

module.exports = { registerUser };
