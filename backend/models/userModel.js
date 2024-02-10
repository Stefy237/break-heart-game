import { MongoClient } from "mongodb";

const userSchema = new MongoClient.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pseudo: {
      type: String,
      default: null,
      required: false,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = MongoClient.model("users", userSchema);
