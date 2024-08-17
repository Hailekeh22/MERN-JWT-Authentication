const bodyParser = require("body-parser");
const express = require("express");
const { SignUpRoute } = require("./routes/signUpRoute");
const { loginRoute } = require("./routes/loginRoute");
const { homeRoute } = require("./routes/homeRoute");
const cors = require("cors");

//middlewared
const app = express();
const port = 3434;
app.use(bodyParser.json());
app.use(cors());

//routes
app.use(SignUpRoute);
app.use(loginRoute);
app.use(homeRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
