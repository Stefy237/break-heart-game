import { MongoClient } from "mongodb";

const mongoURI = process.env.MONGODB_URI;
const db_name = process.env.DB_NAME;

async function getDB() {
  try {
    const client = await MongoClient.connect(mongoURI);
    console.log("Database connected");

    const db = client.db(db_name);

    return db;
  } catch (err) {
    console.error("error when trying to connect to database : " + err);
  }
}

module.exports = getDB;
