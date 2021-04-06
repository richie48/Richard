const express = require('express');
//To use the import rather than require i will need to add "type":"module" in my package.json
const products = require('./data/products');
const dotenv = require('dotenv');
const connectDB = require('./db');
const colors = require('colors');
//we didn't need to set a path since we put the file i application root
dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`.cyan
  )
);

//req must always be referenced before res
app.get('/api/products', (req, res) => {
  res.json(products);
});

//get a single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => (product._id = req.params.id));
  res.json(product);
});
