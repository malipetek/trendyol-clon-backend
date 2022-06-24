const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsClothingSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  link: { type: String, required: true },
  createAT: { type: Date, default: Date.now },
  stars: { type: Number, required: true },
  store: { type: String, required: true },
  gender: { type: String, required: true },
  color: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: Array, required: true },
  material: { type: String, required: true },
  size: { type: Array, required: true },
  stockQuantity: { type: Number, required: true },
  dimensions: { type: Array },
  height: { type: String },
  design: { type: String },
  pattern: { type: String },
  armLenght: { type: String },
  armType: { type: String },
  areaOfUsage: { type: String },
  fabricType: { type: String },
  model: { type: String },
  style: { type: String },
  collarType: { type: String },
  trousersType: { type: String },
  waistType: { type: String },
  Silhouette: { type: String },
  thickness: { type: String },
  nameSlugify: { type: String, required: true },
  categorySlugify: { type: String, required: true },
  brandSlugify: { type: String, required: true },
});
const ProductsClothing = mongoose.model(
  "ProductsClothing",
  ProductsClothingSchema
);
module.exports = { ProductsClothing };
