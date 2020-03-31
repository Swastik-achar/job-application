const mongoose = require("mongoose");

const setUpDB = async () => {
  try {
   await mongoose.connect("mongodb://localhost:27017/job-app");
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
  }
};

module.exports= setUpDB