const mongoose = require('mongoose');
const { Schema, model } = mongoose;

let usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    primerApellido: { type: String, required: true },
    segundoApellido: String,
    mail: { type: String, unique: true },
    contrasenia: { type: String, required: true },
    celular: String,
    // fotoRoute: String,
    created_at: { type: Date, default: new Date() },
    deleted_at: { type: Date, default: null },
    updated_at: { type: Date, default: null }
});

/*#region [Validations] */
//Mail : [unique]
usuarioSchema.path('mail').validate(async (mail) => {
    const mailCount = await mongoose.models.Usuario.countDocuments({ mail });
    return !mailCount;
}, 'Corre existente!');

/*#endregion */

module.exports = model('Usuario', usuarioSchema);