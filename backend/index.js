const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  // Récupérer le chemin du fichier HTML
  const filePath = path.join(__dirname, "../index.html");

  // Renvoyer le fichier HTML
  res.sendFile(filePath);
});

const port = 3000; // Port sur lequel le serveur sera écouté
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
