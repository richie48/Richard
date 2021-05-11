const express = require('express');
const productRoute = require('./routes/productRoute');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
//To use the import rather than require i will need to add "type":"module" in my package.json
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

app.use('/api/products', productRoute);

app.use(notFound);
app.use(errorHandler);
