const { TonalityTwoTone } = require('@material-ui/icons');
const mongoose = require('mongoose');

// Création du model article pour la BD
const cartSchema = mongoose.Schema({
    title: { type: String, required: true },
    name :{ type: String, required: true },
    address:{ type: String, required: true },
    town:{ type: String, required: true },
    phone:{ type: String, required: true },
    email:{ type: String, required: true },
    price : { type: Number, required: true },
    image : { type: String, required: true },
  
});

module.exports = mongoose.model('cart', cartSchema);