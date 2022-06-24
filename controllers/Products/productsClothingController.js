const { ProductsClothing } = require("../../models/Products/ProductsClothing");
const slugify = require("slugify");
const filterModes = {
  regexOnly: val => ({ $regex: val, $options: "i" }),
  range: val => ({
    $gte: val.split("-")[0],
    $lte: val.split("-")[1],
  }),
  regexAndRange: val => ({$regex: val,
  $options: "i",
  $gte: val.$gte,
  $lte: val.lte,})

}

const filterConfig = {
  "color": filterModes.regexOnly,
  "material": filterModes.regexOnly,
  "size": filterModes.regexOnly,
  "brand": filterModes.regexOnly,
  "price": filterModes.range,
  "dimensions": filterModes.regexOnly,
  "height": filterModes.regexAndRange,
  "design": filterModes.regexOnly,
  "pattern": filterModes.regexOnly,
  "armLenght": filterModes.regexOnly,
  "armType": filterModes.regexOnly,
  "areaOfUsage": filterModes.regexOnly,
  "fabricType": filterModes.regexOnly,
  "model": filterModes.regexOnly,
  "style": filterModes.regexOnly,
  "collarType": filterModes.regexOnly,
  "trousersType": filterModes.regexOnly,
  "waistType": filterModes.regexOnly,
  "Silhouette": filterModes.regexOnly,
  "thickness": filterModes.regexOnly,
};

exports.GetAllProductClothing = async (req, res) => {
  
  const filter = Object.keys(filterConfig)
    .map(key => {
      const valueFromQuery = req.query[key];
      const callbackFilterObject = filterConfig[key];
      const filterObject = callbackFilterObject(valueFromQuery);
      return { [key]: filterObject };
    }).reduce((acc, curr) => ({ ...acc, ...curr}), {});
  
  const productClothing = await ProductsClothing.find(filter);

  try {
    res.status(200).json(productClothing);
    console.log(filter);
  } catch (err) {
    res.status(404).json(`Errorsss :${err}`);
  }
};

exports.GetGenderProductClothing = async (req, res) => {
  const categorySlugify = req.params.categorySlugify;
  const productClothing = await ProductsClothing.findOne({ categorySlugify });
  try {
    res.status(200).json(productClothing);
  } catch (err) {
    res.status(404).json(`Errorsss :${err}`);
  }
};

exports.GetProductClothing = async (req, res) => {
  const nameSlugify = req.params.nameSlugify;
  const brandSlugify = req.params.brandSlugify;
  const productClothing = await ProductsClothing.find({
    nameSlugify,
    brandSlugify,
  });
  try {
    res.status(200).json(productClothing);
  } catch (err) {
    res.status(404).json(`Errorsss :${err}`);
  }
};

exports.CreateProductClothing = async (req, res) => {
  const nameSlugify = slugify(req.body.name, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
    separator: "-",
  });

  const categorySlugify = slugify(req.body.gender + " " + req.body.category);
  const brandSlugify = slugify(req.body.brand);
  const {
    name,
    image,
    category,
    price,
    brand,
    link,
    stars,
    store,
    gender,
    color,
    description,
    material,
    size,
    stockQuantity,
    dimensions,
    height,
    design,
    pattern,
    armLenght,
    armType,
    areaOfUsage,
    fabricType,
    model,
    style,
    collarType,
    trousersType,
    waistType,
    Silhouette,
    thickness,
  } = req.body;
  const productClothing = new ProductsClothing({
    name,
    image,
    category,
    price,
    brand,
    link,
    stars,
    store,
    gender,
    color,
    description,
    material,
    size,
    stockQuantity,
    dimensions,
    height,
    design,
    pattern,
    armLenght,
    armType,
    areaOfUsage,
    fabricType,
    model,
    style,
    collarType,
    trousersType,
    waistType,
    Silhouette,
    thickness,
    nameSlugify,
    categorySlugify,
    brandSlugify,
  });

  try {
    const newProductClothing = await productClothing.save();
    res.status(200).json(newProductClothing);
  } catch (err) {
    res.status(404).json(`Errorsss :${err}`);
  }
};

exports.UpdateProductClothing = async (req, res) => {
  const nameSlugify = slugify(req.params.nameSlugify);

  const brandSlugify = slugify(req.params.brandSlugify);

  const updatenameSlugify = slugify(req.body.name, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
    separator: "-",
  });

  const categorySlugify = slugify(req.body.gender + " " + req.body.category);
  const updatebrandSlugify = slugify(req.body.brand);
  const {
    name,
    image,
    category,
    price,
    brand,
    link,
    stars,
    store,
    gender,
    color,
    description,
    material,
    size,
    stockQuantity,
    dimensions,
    height,
    design,
    pattern,
    armLenght,
    armType,
    areaOfUsage,
    fabricType,
    model,
    style,
    collarType,
    trousersType,
    waistType,
    Silhouette,
    thickness,
  } = req.body;
  const productClothing = await ProductsClothing.findOneAndUpdate(
    { nameSlugify, brandSlugify },
    {
      name,
      image,
      category,
      price,
      brand,
      link,
      stars,
      store,
      gender,
      color,
      description,
      material,
      size,
      stockQuantity,
      dimensions,
      height,
      design,
      pattern,
      armLenght,
      armType,
      areaOfUsage,
      fabricType,
      model,
      style,
      collarType,
      trousersType,
      waistType,
      Silhouette,
      thickness,
      nameSlugify: updatenameSlugify,
      categorySlugify,
      brandSlugify: updatebrandSlugify,
    },
    { new: true }
  );
  try {
    res.status(200).json(productClothing);
  } catch (err) {
    res.status(404).json(`Errorsss :${err}`);
  }
};

exports.DeleteProductClothing = async (req, res) => {
  const nameSlugify = slugify(req.params.nameSlugify);
  const brandSlugify = slugify(req.params.brandSlugify);
  const productClothing = await ProductsClothing.findOneAndDelete({
    nameSlugify,
    brandSlugify,
  });
  try {
    res.status(200).json(productClothing);
  } catch (err) {
    res.status(404).json(`Errorsss :${err}`);
  }
};

exports.GetProductClothingByCategory = async (req, res) => {
  const categorySlugify = req.params.categorySlugify;
  const productClothing = await ProductsClothing.find({ categorySlugify });
  try {
    res.status(200).json(productClothing);
  } catch (err) {
    res.status(404).json(`Errorsss :${err}`);
  }
};
