const mongoose = require('mongoose');

// Création du model article pour la BD
const boxSchema = mongoose.Schema({
   
    title: { type: String, required: true },
    price : { type: Number, required: true },
    id : { type: String, required: true },
});

module.exports = mongoose.model('box', boxSchema);