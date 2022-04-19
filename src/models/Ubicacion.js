const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ubicacionSchema = new Schema({
    ubicacionText: String
});

module.exports = model('Ubicacion', ubicacionSchema);