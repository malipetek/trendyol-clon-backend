const express = require("express");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
const campaingsController = require("../controllers/campaignsController");
const router = express.Router();

router.get("/", campaingsController.getCampaigns);

router.post("/", urlencodedParser, campaingsController.CreateCampaign);

module.exports = router;
