require("dotenv").config();
const express = require("express");
const router = require("./routes/index");
const favsRouter = require("./routes/favsRouter");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use("/rickandmorty", router);
server.use("/rickandmorty/fav", favsRouter);

server.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
