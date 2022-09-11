const { Router } = require("express");
const productsRouter = require("./products.js");
const categoriesRouter = require("./categories.js");
const router = Router();
router.use("/products", productsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
