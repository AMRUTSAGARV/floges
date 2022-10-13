const express = require("express");
const router = express.Router();

const productsControl = require("../controllers/products.controller");

router.get("/", productsControl.getAllProducts);
router.get("/products/:id", productsControl.getProduct);

module.exports = router;
