const express = require("express");

const app = express();
const port = 3434;

app.get("/", (req, res) => {
  res.send("Hello WOrld");
  console.log("endpoint accessed");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
