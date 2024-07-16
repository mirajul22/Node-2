const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

console.log("URI ", uri);

const connectdb = async () => {
  try {
    await mongoose.connect(uri, {});
  } catch (error) {
    console.warn(error);
  }
};
module.exports = connectdb;
