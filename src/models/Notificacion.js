const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificacionSchema = new Schema({
    contenido: String,
    created_at: { type: Date, default: new Date() },
    Usuario: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }]
});

module.exports = model('Notificacion', notificacionSchema);