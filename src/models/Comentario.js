const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const comentarioSchema = new Schema({
    contenido: { type: String, required: true },
    // fotoRoute: { type: String, default: null},  
    created_at: { type: Date, default: new Date() },
    deleted_at: { type: Date, default: null },
    updated_at: { type: Date, default: null },
    Usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    Publicacion: { type: Schema.Types.ObjectId, ref: 'Publicacion' }
});

module.exports = model('Comentario', comentarioSchema);