const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  // Récupérer le chemin du fichier HTML
  const filePath = path.join(__dirname, "../index.html");

  // Renvoyer le fichier HTML
  res.sendFile(filePath);
});

app.post("/process-form", (req, res) => {
  // Récupérer les données du formulaire
  const name = req.body.name;
  const pseudo = req.body.pseudo;

  // Traitement des données du formulaire
  // ...

  // Rediriger l'utilisateur vers une autre page
  const rulesPath = path.join(__dirname, "../rules.html");
  res.redirect(rulesPath);
});

const port = 3000; // Port sur lequel le serveur sera écouté
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
