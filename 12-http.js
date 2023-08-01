const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.end(`
    <h1>Resourse don't exist</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">Back home</a>
  `);
  }
});

server.listen(5000);
