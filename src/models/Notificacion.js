const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificacionSchema = new Schema({
    contenido: String,
    created_at: { type: Date, default: null },
    Usuario: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }]
});

module.exports = model('Notificacion', notificacionSchema);