const mongoose = require('mongoose');

// Création du model article pour la BD
const cartSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    state: { type: String, required: true },
    price : { type: Number, required: true },
    image : { type: String, required: true },
  
});

module.exports = mongoose.model('cart', cartSchema);