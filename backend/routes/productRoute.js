const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const {
  getProducts,
  getProductById,
} = require('../controllers/productController');

//req must always be referenced before res
router.route('/').get(getProducts);
//get a single product
router.route('/:id').get(getProductById);

module.exports = router;
