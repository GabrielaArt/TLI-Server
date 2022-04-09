const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nombre: String,
    primerApellido: String,
    segundoApellido: String,
    mail: String,
    contrasenia: String,
    celular: String,
    fotoRoute: String
});

module.exports = model('Usuario', usuarioSchema);