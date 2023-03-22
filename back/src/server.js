const http = require("http");
const characters = require("./utils/data.js");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  // http://localhost:3001/rickandmorty/character/1
  if (req.url.includes("rickandmorty/character")) {
    const characterId = req.url.split("/")[3];
    const character = characters.find((c) => c.id === parseInt(characterId));
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(character));
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
});
