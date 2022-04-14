const mongoose = require('mongoose');
const { Schema } = mongoose;

const comentarioSchema = new Schema({
    contenido: String,
    fotoRoute: String,
    created_at: { type: Date, default: new Date() },
    deleted_at: { type: Date, default: null },
    updated_at: { type: Date, default: null },
    _idUsuario: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }], /* FK */
    _idPublicacion: [{ type: Schema.Types.ObjectId, ref: 'Publicacion' }] /* FK */
});

module.exports = model('Comentario', comentarioSchema);