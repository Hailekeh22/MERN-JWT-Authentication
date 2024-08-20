const mongoose = require("mongoose");

const closeCon = () => {
  mongoose.disconnect();
};

module.exports = { closeCon };
