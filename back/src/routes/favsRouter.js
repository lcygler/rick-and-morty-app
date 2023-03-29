const { Router } = require("express");
let favs = require("../utils/favs");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json(favs);
});

router.post("/", (req, res) => {
  favs.push(req.body);
  res.status(200).json({ status: "ok" });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  favs = favs.filter((char) => char.id != id);
  res.status(200).json({ status: "ok" });
});

module.exports = router;
