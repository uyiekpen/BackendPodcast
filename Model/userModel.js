const mongoose = require("mongoose");

const RegisterModel = mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    DateofBirth: {
      type: String,
    },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("users", RegisterModel);
