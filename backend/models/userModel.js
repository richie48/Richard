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

//called on the instance of a model... this.password accesses the password in the database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//we didn't just equate to userSchema because we are trying to create a model with the schema first.
module.exports = mongoose.model('User', userSchema);
