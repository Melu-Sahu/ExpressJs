const express = require("express");
const productController = require('../controller/product');

const router = express.Router();



exports.router.get("/products", productController.getAllProduct)
.get("/product/:id", productController.getproduct)
.post('/addProduct', productController.createProduct)
.put("/product/:id", productController.replaceProduct)
.patch("product/:id", productController.updateProduct);