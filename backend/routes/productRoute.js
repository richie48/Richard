const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const Product = require('../models/ProductModel');

//req must always be referenced before res
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find();

    res.json(products);
  })
);

//get a single product
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404); //if this not added it will be 500 by default
      throw new Error('product not found');

      //   we could have tried this approach but the problem is we dont have access to next since this isnt a middleware
      //   const error = new Error('product not found');
      //   res.status(404);
      //   next(error);
    }
  })
);
module.exports = router;
