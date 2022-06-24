const { ProductsClothing } = require("../../models/Products/ProductsClothing");
const slugify = require("slugify");

exports.GetAllProductClothing = async (req, res) => {
  const categorySlugify = req.query.categorySlugify;
  const color = req.query.color;
  const material = req.query.material;
  const size = req.query.size;
  const brand = req.query.brand;
  const price = req.query.price;
  const dimensions = req.query.dimensions;
  const height = req.query.height;
  const design = req.query.design;
  const pattern = req.query.pattern;
  const armLenght = req.query.armLenght;
  const armType = req.query.armType;
  const areaOfUsage = req.query.areaOfUsage;
  const fabricType = req.query.fabricType;
  const model = req.query.model;
  const style = req.query.style;
  const collarType = req.query.collarType;
  const trousersType = req.query.trousersType;
  const waistType = req.query.waistType;
  const Silhouette = req.query.Silhouette;
  const thickness = req.query.thickness;

  let filter = {};
  if (color) {
    filter = {
      ...filter,
      color: { $regex: color, $options: "i" },
    };
  } else if (categorySlugify) {
    filter = {
      ...filter,
      categorySlugify: { $regex: categorySlugify, $options: "i" },
    };
  }
  if (material) {
    filter = {
      ...filter,
      material: { $regex: material, $options: "i" },
    };
  }
  if (size) {
    filter = {
      ...filter,
      size: { $regex: size, $options: "i" },
    };
  }
  if (brand) {
    filter = {
      ...filter,
      brand: { $regex: brand, $options: "i" },
    };
  }
  if (price) {
    filter = {
      ...filter,
      price: {
        $gte: price.split("-")[0],
        $lte: price.split("-")[1],
      },
    };
  }
  if (dimensions) {
    filter = {
      ...filter,
      dimensions: { $regex: dimensions, $options: "i" },
    };
  }
  if (height) {
    filter = {
      ...filter,
      height: {
        $regex: height,
        $options: "i",
        $gte: req.query.$gte,
        $lte: height.lte,
      },
    };
  }
  if (design) {
    filter = {
      ...filter,
      design: { $regex: design, $options: "i" },
    };
  }
  if (pattern) {
    filter = {
      ...filter,
      pattern: { $regex: pattern, $options: "i" },
    };
  }
  if (armLenght) {
    filter = {
      ...filter,

      armLenght: {
        $regex: armLenght,
        $options: "i",
        $gte: armLenght.$gte,
        $lte: armLenght.lte,
      },
    };
  }
  if (armType) {
    filter = {
      ...filter,
      armType: { $regex: armType, $options: "i" },
    };
  }
  if (areaOfUsage) {
    filter = {
      ...filter,
      areaOfUsage: { $regex: areaOfUsage, $options: "i" },
    };
  }
  if (fabricType) {
    filter = {
      ...filter,

      fabricType: { $regex: fabricType, $options: "i" },
    };
  }
  if (model) {
    filter = {
      ...filter,
      model: { $regex: model, $options: "i" },
    };
  }
  if (style) {
    filter = {
      ...filter,
      style: { $regex: style, $options: "i" },
    };
  }
  if (collarType) {
    filter = {
      ...filter,
      collarType: { $regex: collarType, $options: "i" },
    };
  }
  if (trousersType) {
    filter = {
      ...filter,

      trousersType: { $regex: trousersType, $options: "i" },
    };
  }
  if (waistType) {
    filter = {
      ...filter,
      waistType: { $regex: waistType, $options: "i" },
    };
  }
  if (Silhouette) {
    filter = {
      ...filter,
      Silhouette: { $regex: Silhouette, $options: "i" },
    };
  }
  if (thickness) {
    filter = {
      ...filter,

      thickness: { $regex: thickness, $options: "i" },
    };
  }

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
