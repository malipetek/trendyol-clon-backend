const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CampaignsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  store: {
    type: String,
  },
  slugify: {
    type: String,
  },
  newcampaign: Boolean,
  createAT: {
    type: Date,
    default: Date.now,
  },
});
const Campaigns = mongoose.model("Campaigns", CampaignsSchema);
module.exports = Campaigns;
