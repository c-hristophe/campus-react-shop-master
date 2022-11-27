const mongoose = require('mongoose');

// Création du model article pour la BD
const contactSchema = mongoose.Schema(
    {
    name : { type: String, required: true },
    email: { type: String, required: true },
    message : { type: String, required: true },
    
});

module.exports = mongoose.model('contact', contactSchema);