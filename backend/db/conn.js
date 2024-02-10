

const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGODB_URI;
const db_name = process.env.DB_NAME;

mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

db.on("error", (err) => {
  console.log("Mongo DB Connection Failed");
});

module.exports = db;
