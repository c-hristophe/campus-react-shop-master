const mongoose = require('mongoose');

// Création du model article pour la BD
const customerSchema = mongoose.Schema(
    {
    name : { type: String, required: true },
    email: { type: String, required: true },
    comment : { type: String, required: true },
    article : { type: Array, required: false },
   
    
});

module.exports = mongoose.model('customer', customerSchema);