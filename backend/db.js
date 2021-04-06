const mongoose = require('mongoose');

//it makes sense to do this whole operation in a function so we can just call the function when we need it to run.
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    //so basically all it needs to connect to mongo db is mongoose.connect(the mongo-string,{conditions})
    console.log(`mongoDb connected ${conn.connection.host}`.cyan);
  } catch (error) {
    console.error(`Error:${error.message}`.red);
    //mean it will exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
