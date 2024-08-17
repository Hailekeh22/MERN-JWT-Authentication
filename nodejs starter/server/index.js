const bodyParser = require("body-parser");
const express = require("express");
const { SignUpRoute } = require("./routes/signUpRoute");

//middlewared
const app = express();
const port = 3434;
app.use(bodyParser.json());

//routes
app.use(SignUpRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
