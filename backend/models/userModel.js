const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    //An alternative to creating a field createdAt this is updated automatically
    timestamps: true,
  }
);

//we didn't just equate to userSchema because we are trying to create a model with the schema first.
module.exports = mongoose.model('User', userSchema);
