var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Hi! I'm Kyle");
});

module.exports = router;
