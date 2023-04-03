require("dotenv").config();
const express = require("express");
const router = require("./routes/index");
const favsRouter = require("./routes/favsRouter");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use("/rickandmorty", router);
server.use("/rickandmorty/fav", favsRouter);

server.use((req, res) => {
  res.status(404).send("404: Not Found");
});

module.exports = server;
