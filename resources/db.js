const mongoose = require("mongoose");

const url = process.env.URL;

mongoose.connect(url).then(() => {
  console.log(`database is connected...`);
});

module.exports = mongoose;
