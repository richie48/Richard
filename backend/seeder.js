const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

//sample data we want in our database
const users = require('./data/users');
const products = require('./data/products');

//The model i will use on the data
const User = require('./models/UserModel');
const Product = require('./models/ProductModel');
const Order = require('./models/OrderModel');

const connectDB = require('./db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    User.remove({ email: 'admin@example.com' });
    //to put the created uaers in an array
    const createdUsers = await User.insertMany(users);
    //because we want to have the admin user's id from mongoose

    const adminUserId = createdUsers[0]._id;

    //Since we want all the products to be added by the admin user we map through the products and used the
    //spread operator so we can have everything in the product object but then change the user id to the admins

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUserId };
    });
    await Product.insertMany(sampleProducts);
    console.log('Data imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
//products were having issues withi getting imported

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else if (process.argv[2] === '-i') {
  importData();
}
