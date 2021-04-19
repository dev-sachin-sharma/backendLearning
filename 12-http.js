const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hey this is response from home server");
  }

  if (req.url === "/about") {
    res.end("Hey this is response from about server");
  }

  res.end(`<h1>
    OPPssss......
    </h1>
    <p>the page you request is not there</p>`);
});

server.listen(5000);
