const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Waiting to handle request events");

  res.end("Hello world");
});

server.listen(5000, () => {
  console.log("Server is running on port: 5000");
});
