const Campaigns = require("../models/Campaigns");

exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaigns.find();
    res.json(campaigns);
  } catch (err) {
    res.status(404).json(`Errorsssss: ${err}`);
  }
};

exports.CreateCampaign = async (req, res) => {
  const { name, image, category, link, store, newcampaign } = req.body;

  const slugify = name.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
  const campaign = new Campaigns({
    name,
    image,
    category,
    link,
    store,
    newcampaign,
    slugify,
  });

  try {
    const savedCampaign = await campaign.save();
    res.status(201).json(savedCampaign);
  } catch (err) {
    res.status(404).json(`Errorsssss: ${err}`);
  }
};
