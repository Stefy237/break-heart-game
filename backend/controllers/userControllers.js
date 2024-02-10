const getDB = require("../db/conn");
const User = require("../models/userModel");

exports.login = async (req, res) => {
  const user = new User({
    name: req.body.name,
    pseudo: req.body.pseudo,
  });

  user
    .save()
    .then(() => res.status(201).json({ message: "User register successfully" }))
    .catch((error) => res.status(400).json({ error }));
};
