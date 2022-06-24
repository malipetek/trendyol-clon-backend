const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productPhoneSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  link: { type: String, required: true },
  createAT: { type: Date, default: Date.now },
  stars: { type: Number, required: true },
  store: { type: String, required: true },
  slugify: { type: String, required: true },
  description: { type: String, required: true },

  model: { type: String, required: true },
  color: { type: String, required: true },
  WarrantyType: { type: String, required: true },

  internalMemory: { type: String, required: true },
  ram: { type: String, required: true },
  cpu: { type: String, required: true },
  cpuRange: { type: Array, required: true },

  batteryCapacity: { type: String, required: true },
  fastCharging: { type: Boolean, required: true },
  wirelessCharging: { type: Boolean, required: true },
  chargeSpeed: { type: String, required: true },
  chargingUnit: { type: String, required: true },

  camera: { type: String, required: true },
  VideoRecordingResolution: { type: Array, required: true },
  FrontCameraResolutionRange: { type: String, required: true },
  mainCameraResolutionRange: { type: String, required: true },
  frontCameraResolution: { type: String, required: true },
  videoChat: { type: Boolean, required: true },
  numberOfRearCameras: { type: String, required: true },
  displayType: { type: String, required: true },
  imagingTechnology: { type: String, required: true },
  screenRefreshRate: { type: String, required: true },
  screenSize: { type: String, required: true },
  displayTechnology: { type: String, required: true },

  mobileConnectionSpeed: { type: String, required: true },
  os: { type: String, required: true },
  waterDustResistance: { type: String, required: true },
  nfc: { type: Boolean, required: true },
  doubleLine: { type: Boolean, required: true },
  processorModel: { type: String, required: true },
  processorBrand: { type: String, required: true },
  cellPhoneModel: { type: String, required: true },
  headphoneJack: { type: String, required: true },
  touchScreen: { type: Boolean, required: true },
  faceRecognition: { type: Boolean, required: true },
  fingerprintreader: { type: Boolean, required: true },
});

const productPhone = mongoose.model("productPhone", productPhoneSchema);

module.exports = {
  productPhone: productPhone,
};
