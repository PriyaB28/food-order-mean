const mongoose = require("mongoose");

const dbConnection = () => {
  try {
    mongoose.connect(process.env.MONGO_ATLAS_URI);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = dbConnection;
