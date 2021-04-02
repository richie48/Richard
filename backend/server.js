const express = require('express');
const products = require('./data/products');

const app = express();

const server = app.listen(5000, console.log('server running'));

//req must always be referenced before response
app.get('/api/products', (req, res) => {
  res.json(products);
});

//get a single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => (product._id = req.params.id));
  res.json(product);
});
