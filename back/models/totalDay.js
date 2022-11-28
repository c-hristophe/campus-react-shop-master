const mongoose = require('mongoose');

// Création du model article pour la BD
const totalDaySchema = mongoose.Schema({
   
    day: { type: Date, required: true },
    articles : { type: Array, required: true },
    total : { type: Number, required: true },
    
});

module.exports = mongoose.model('totalDay', totalDaySchema);