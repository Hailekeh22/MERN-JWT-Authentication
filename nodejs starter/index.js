const http = require("http");

const requesthandler = (req, res) => {
  if (req.method == "GET" && req.url == "/") {
    console.log(req);
    res.end("Hello World");
  }
};

const server = http.createServer(requesthandler);

server.listen("3000", () => {
  console.log("server is running on port 3000");
});
