const slugify = require("slugify");
const { productPhone } = require("../../models/Products/ProductsPhone");

exports.GetAllProductPhone = async (req, res) => {
  try {
    const productPhones = await productPhone.find();
    res.status(200).json(productPhones);
  } catch (err) {
    res.status(404).json(`Errorsss :${err}`);
  }
};

exports.UpdateProductPhone = async (req, res) => {
  const slugifys = req.params.slugify;

  const {
    name,
    image,
    category,
    price,
    brand,
    link,
    stars,
    store,

    description,
    model,
    color,
    WarrantyType,
    internalMemory,
    ram,
    cpu,
    cpuRange,
    batteryCapacity,
    fastCharging,
    wirelessCharging,
    chargeSpeed,
    chargingUnit,
    camera,
    VideoRecordingResolution,
    FrontCameraResolutionRange,
    mainCameraResolutionRange,
    frontCameraResolution,
    videoChat,
    numberOfRearCameras,
    displayType,
    imagingTechnology,
    screenRefreshRate,
    screenSize,
    displayTechnology,
    mobileConnectionSpeed,
    os,
    waterDustResistance,
    nfc,
    doubleLine,
    processorModel,
    processorBrand,
    cellPhoneModel,
    headphoneJack,
    touchScreen,
    faceRecognition,
    fingerprintreader,
  } = req.body;
  try {
    const productPhones = await productPhone.findOneAndUpdate(
      { slugifys },
      {
        $set: {
          name: name,
          image: image,
          category: category,
          price: price,
          brand: brand,
          link: link,
          stars: stars,
          store: store,
          description: description,
          model: model,
          color: color,
          WarrantyType: WarrantyType,
          internalMemory: internalMemory,
          ram: ram,
          cpu: cpu,
          cpuRange: cpuRange,
          batteryCapacity: batteryCapacity,
          fastCharging: fastCharging,
          wirelessCharging: wirelessCharging,
          chargeSpeed: chargeSpeed,
          chargingUnit: chargingUnit,
          camera: camera,
          VideoRecordingResolution: VideoRecordingResolution,
          FrontCameraResolutionRange: FrontCameraResolutionRange,
          mainCameraResolutionRange: mainCameraResolutionRange,
          frontCameraResolution: frontCameraResolution,
          videoChat: videoChat,
          numberOfRearCameras: numberOfRearCameras,
          displayType: displayType,
          imagingTechnology: imagingTechnology,
          screenRefreshRate: screenRefreshRate,
          screenSize: screenSize,
          displayTechnology: displayTechnology,
          mobileConnectionSpeed: mobileConnectionSpeed,
          os: os,
          waterDustResistance: waterDustResistance,
          nfc: nfc,
          doubleLine: doubleLine,
          processorModel: processorModel,
          processorBrand: processorBrand,
          cellPhoneModel: cellPhoneModel,
          headphoneJack: headphoneJack,
          touchScreen: touchScreen,
          faceRecognition: faceRecognition,
          fingerprintreader: fingerprintreader,
          slugify: slugify(name),
        },
      },
      { new: true }
    );

    res.status(200).json(productPhones);
  } catch (err) {
    res.status(404).json(`Errorsss :${err}`);
  }
};
exports.DeleteProductPhone = async (req, res) => {
  const slugify = req.params.slugify;
  try {
    const productPhones = await productPhone.findOneAndDelete({ slugify });
    res.status(200).json(productPhones);
  } catch (err) {
    res.status(404).json(`Errorsss :${err}`);
  }
};

exports.GetProductPhone = async (req, res) => {
  const slugify = req.params.slugify;
  try {
    const productPhones = await productPhone.findOne({ slugify });
    res.status(200).json(productPhones);
  } catch (err) {
    res.status(404).json(`Errorsss :${err}`);
  }
};

exports.CreateProductPhone = async (req, res) => {
  const {
    name,
    image,
    category,
    price,
    brand,
    link,
    stars,
    store,

    description,
    model,
    color,
    WarrantyType,
    internalMemory,
    ram,
    cpu,
    cpuRange,
    batteryCapacity,
    fastCharging,
    wirelessCharging,
    chargeSpeed,
    chargingUnit,
    camera,
    VideoRecordingResolution,
    FrontCameraResolutionRange,
    mainCameraResolutionRange,
    frontCameraResolution,
    videoChat,
    numberOfRearCameras,
    displayType,
    imagingTechnology,
    screenRefreshRate,
    screenSize,
    displayTechnology,
    mobileConnectionSpeed,
    os,
    waterDustResistance,
    nfc,
    doubleLine,
    processorModel,
    processorBrand,
    cellPhoneModel,
    headphoneJack,
    touchScreen,
    faceRecognition,
    fingerprintreader,
  } = req.body;
  const productPhones = new productPhone({
    name,
    image,
    category,
    price,
    brand,
    link,
    stars,
    store,
    description,
    model,
    color,
    WarrantyType,
    internalMemory,
    ram,
    cpu,
    cpuRange,
    batteryCapacity,
    fastCharging,
    wirelessCharging,
    chargeSpeed,
    chargingUnit,
    camera,
    VideoRecordingResolution,
    FrontCameraResolutionRange,
    mainCameraResolutionRange,
    frontCameraResolution,
    videoChat,
    numberOfRearCameras,
    displayType,
    imagingTechnology,
    screenRefreshRate,
    screenSize,
    displayTechnology,
    mobileConnectionSpeed,
    os,
    waterDustResistance,
    nfc,
    doubleLine,
    processorModel,
    processorBrand,
    cellPhoneModel,
    headphoneJack,
    touchScreen,
    faceRecognition,
    fingerprintreader,
    slugify: slugify(name, {
      lower: true,
      separator: "-",
      remove: /[^\w\s-]/g,
    }),
  });

  try {
    const savedProductPhone = await productPhones.save();
    res.status(201).json(savedProductPhone);
  } catch (err) {
    res.status(404).json(`Errorsss :${err}`);
  }
};

// Compare this snippet from models\Products.js:
