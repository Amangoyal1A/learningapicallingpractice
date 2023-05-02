const mongoose = require("mongoose");
require("dotenv").config();

function connectwithDB() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Db connected");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}

module.exports = {connectwithDB};
