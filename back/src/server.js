const http = require("http");
const { getCharById } = require("./controllers/getCharById");
const { getCharDetail } = require("./controllers/getCharDetail");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url.includes("onsearch")) {
    const id = req.url.split("/").at(-1);
    getCharById(res, id);
  } else if (req.url.includes("detail")) {
    const id = req.url.split("/").at(-1);
    getCharDetail(res, id);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
