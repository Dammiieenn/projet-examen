const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost/cafe-db', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Définition des routes
app.use('/api', require('./routes/api'));

// Démarrage du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});