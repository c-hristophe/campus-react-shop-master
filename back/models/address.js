const mongoose = require('mongoose');

// Création du model article pour la BD
const addressSchema = mongoose.Schema(
    {
    name : { type: String, required: true },
    email: { type: String, required: true },
    address : { type: String, required: true },
    town : { type: String, required: true },
    phone : { type: String, required: true },
    article  : { type: Array, required: true },
});

module.exports = mongoose.model('address', addressSchema);