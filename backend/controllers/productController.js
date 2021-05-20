const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel.js');

//
exports.getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

// @access  Public
exports.getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
    //   we could have tried this approach but the problem is we dont have access to next since this isnt a middleware
    //   const error = new Error('product not found');
    //   res.status(404);
    //   next(error);
  }
});
