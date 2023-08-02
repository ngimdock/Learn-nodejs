const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1>Home page</h1>`);
  } else if (req.url === "/about") {
    // Blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end(`<h1>About page</h1>`);
  } else {
    res.end(`
    <h1>Resourse don't exist</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">Back home</a>
  `);
  }
});

server.listen(5000);
