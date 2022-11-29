const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/user');
const articleRoutes = require('./routes/article');
const boxRoutes = require('./routes/box');
const totalDayRoutes = require('./routes/totalDay');
const cartRoutes = require('./routes/cart');
const contactRoutes = require('./routes/contact');
const customerRoutes = require('./routes/customer');
const path = require('path');


mongoose.connect('mongodb+srv://christophe:aqwzsx123@cluster0.1a5sp3i.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  app.use('/images', express.static(path.join(__dirname, 'images')));

// Définition de headers pour éviters les erreurs de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

  app.use(bodyParser.json());

  // Enregistrement router

app.use('/api/auth', userRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/box', boxRoutes);
app.use('/api/totalDay', totalDayRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/customer', customerRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;