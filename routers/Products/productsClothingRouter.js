const express = require("express");

const productsClothingController = require("../../controllers/Products/productsClothingController");
const router = express.Router();

router.get("/", productsClothingController.GetAllProductClothing);

router.get(
  "/:categorySlugify",
  productsClothingController.GetGenderProductClothing
);
router.get(
  "/:brandSlugify/:nameSlugify",
  productsClothingController.GetProductClothing
);

router.post("/", productsClothingController.CreateProductClothing);

module.exports = router;
