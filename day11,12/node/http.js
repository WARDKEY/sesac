const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write("<h1>Hello!</h1>");
  res.write("<p>server listen</p>");
  res.end("<p>End</p>");
});

server.on("request", () => {
  console.log("request 이벤트");
});

server.on("connection", () => {
  console.log("connection 이벤트");
});

server.listen(8080, function () {
  console.log("8080 server listen");
});
