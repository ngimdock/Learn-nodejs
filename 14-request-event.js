const http = require("http");

const server = http.createServer();

// Here the server use the method '.on()' provided by the EventEmitter
server.on("request", (req, res) => {
  res.end(
    `<h1>The 'http' module extends the 'EventEmitter' class or interface</h1>`
  );
});

server.listen(5000, () => {
  console.log("Server is running on port: 5000");
});
