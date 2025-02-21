const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/mern_admin";
const URI = process.env.MONGO_URI;

// mongoose.connect(URI)
const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("database connection seccessful");
  } catch (error) {
    console.error("database connection failed", error.message);
    process.exit(0);
  }
};

module.exports = connectdb;
