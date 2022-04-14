const mongoose = require('mongoose');
const { Schema } = mongoose;

const ubicacionSchema = new Schema({
    ubicacionText: String
});

module.exports = model('Ubicacion', ubicacionSchema);