const express = require("express");

const phonesController = require("../../controllers/Products/phonesController");
const router = express.Router();

router.get("/", phonesController.GetAllProductPhone);
router.get("/:slugify", phonesController.GetProductPhone);
router.put("/:slugify", phonesController.UpdateProductPhone);
router.post("/", phonesController.CreateProductPhone);
router.delete("/:slugify", phonesController.DeleteProductPhone);

module.exports = router;
