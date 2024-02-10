const getDB = require("../db/conn");
const User = require("../models/userModel");

exports.login = async (req, res) => {
  try {
    const db = await getDB();
    const usersCollection = db.collection("users");

    const { name, pseudo } = req.body;
    const newUser = new User({ name, pseudo });

    const result = await usersCollection.insertOne(newUser);

    if (result.insertedCount !== 1) {
      throw new Error("Erreur lors de l'enregistrement de l'utilisateur");
    }

    res.status(201).json({ message: "Nouvel utilisateur enregistré" });
  } catch (err) {
    console.error("Erreur lors de l'enregistrement de l'utilisateur :", err);
    res
      .status(500)
      .json({ message: "Erreur lors de l'enregistrement de l'utilisateur" });
  }
};
