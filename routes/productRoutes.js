const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router.post("/create", ProductController.createProductPost);
router.get("/create", ProductController.createProduct);
router.post("/remove/:id", ProductController.removeProduct);
router.get("/:id", ProductController.getProduct);
router.get("/edit/:id", ProductController.editProduct);
router.post("/edit", ProductController.editProductPost);

router.get("/:id", ProductController.getProduct);
router.get("/", ProductController.showProducts);

module.exports = router;
