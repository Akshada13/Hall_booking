const express = require("express");
const router = express.Router();

const customer = require("./customer.json");

// READ
router.get("/", (req, res) => {
  res.send(customer);
});
router.get("/:id", (req, res) => {
  res.send({ ...req.body });
});

// CREATE
router.post("/:id", (req, res) => {
  // req.body => Body data
  res.send({ ...req.body });
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