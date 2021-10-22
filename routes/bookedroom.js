const express = require("express");
const router = express.Router();

const bookedroom = require("./bookedroom.json");

// READ
router.get("/", (req, res) => {
  res.send(bookedroom);
});
router.get("/:id", (req, res) => {
  res.send({ ...req.body });
});

// CREATE
router.post("/", (req, res) => {
  // req.body => Body data
  res.send({ ...req.body, id: 11 });
});

// UPDATE
router.put("/:id", (req, res) => {
  // req.params => URL Parameters
  res.send({ ...req.body, ...req.params });
});

// DELETE
router.delete("/:id", (req, res) => {
  res.send({});
});

module.exports = router;