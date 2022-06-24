const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
const campaingsRouter = require("./routers/campaignsRouter");

require("dotenv").config();

const productRouter = require("./routers/Products/productsPhoneRouter");
const productClothingRouter = require("./routers/Products/productsClothingRouter");
app.use(bodyParser.json({ type: "application/*+json" }));

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASSWORD}@trendyoldb.ycsujx8.mongodb.net/?retryWrites=true&w=majority`,
  (e) => {
    if (e) {
      console.log(e);
    } else {
      console.log("MongoDB connected");
    }
  }
);
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/campaings", jsonParser, campaingsRouter);
app.use("/phone", jsonParser, urlencodedParser, productRouter);
app.use("/clothing", jsonParser, urlencodedParser, productClothingRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
