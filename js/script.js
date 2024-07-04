// wirteFile
// appendFile
// readFile
// rename
// unLink
// exsists

const http = require("http");
const port = 8081;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("Hi this is http server ddfdf");
});

myServer.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
