const { Router } = require("express");
const router = Router();
const connection = require("../db");

router.get("/", async (req, res) => {
  connection.query("SELECT * FROM category", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
