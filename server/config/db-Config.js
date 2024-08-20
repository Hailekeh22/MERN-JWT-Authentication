const mongoose = require("mongoose");

const connetDb = async () => {
  try {
    const con = await mongoose.connect("mongodb://localhost:27017/user-data");
    if (con) {
      console.log("Connected to the database");
    } else {
      console.log("Can not connect to the database");
    }
  } catch (e) {
    console.log("Error");
  }
};

module.exports = { connetDb };
