const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const publicacionSchema = new Schema({
    encabezado: { type: String, default: null },
    contenido: { type: String, default: null },
    // fotoRoute: String,
    estado: { type: Number, default: 0 /* 0 -> Extrabiado, 1 -> Encontrado */ },
    created_at: { type: Date, default: new Date() },
    deleted_at: { type: Date, default: null },
    updated_at: { type: Date, default: null },
    Usuario: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }],
    Ubicacion: [{ type: Schema.Types.ObjectId, ref: 'Ubicacion' }]
});

module.exports = model('Publicacion', publicacionSchema);