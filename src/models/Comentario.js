const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const comentarioSchema = new Schema({
    contenido: String,
    fotoRoute: { type: String, default: null},
    created_at: { type: Date, default: new Date() },
    deleted_at: { type: Date, default: null },
    updated_at: { type: Date, default: null },
    _idUsuario: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }], /* FK */
    _idPublicacion: [{ type: Schema.Types.ObjectId, ref: 'Publicacion' }] /* FK */
});

module.exports = model('Comentario', comentarioSchema);