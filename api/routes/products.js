const { Router, json } = require("express");
const router = Router();
const connection = require("../db");

router.get("/", async (req, res) => {
  connection.query("SELECT * FROM product", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

router.get(`/search/:name`, async (req, res) => {
  const name = req.params.name;
  connection.query("SELECT * FROM product", function (err, result) {
    if (err) throw err;
    let filterRe = result.filter((r) =>
      r.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filterRe);
  });
});

router.get(`/orderHigher`, async (req, res) => {
  connection.query("SELECT * FROM product", function (err, result, fields) {
    if (err) throw err;
    res.json(
      result.sort((a, b) => {
        return b.price - a.price;
      })
    );
  });
});

router.get(`/orderLower`, async (req, res) => {
  connection.query("SELECT * FROM product", function (err, result, fields) {
    if (err) throw err;
    res.json(
      result.sort((a, b) => {
        return a.price - b.price;
      })
    );
  });
});

router.get(`/filterBy/:id`, async (req, res) => {
  const categoryId = req.params.id;
  connection.query("SELECT * FROM product", function (err, result, fields) {
    if (err) throw err;
    res.json(result.filter((r) => r.category === parseInt(categoryId)));
  });
});

router.get(`/filterBy/:id/orderHigher`, async (req, res) => {
  const categoryId = req.params.id;
  connection.query("SELECT * FROM product", function (err, result, fields) {
    if (err) throw err;
    res.json(
      result
        .filter((r) => r.category === parseInt(categoryId))
        .sort((a, b) => {
          return b.price - a.price;
        })
    );
  });
});

router.get(`/filterBy/:id/orderLower`, async (req, res) => {
  const categoryId = req.params.id;
  connection.query("SELECT * FROM product", function (err, result, fields) {
    if (err) throw err;
    res.json(
      result
        .filter((r) => r.category === parseInt(categoryId))
        .sort((a, b) => {
          return a.price - b.price;
        })
    );
  });
});

module.exports = router;
