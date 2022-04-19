require('../../config/db');
const Ubicacion = require('../models/Ubicacion');

//Crear
module.exports.create = async (Ubication) => {
    try {
        //Settear modelo
        const ubicacion = new Ubicacion({ubicacionText: Ubication});

        //Guardar [Ubicacion]
        await ubicacion.save();
        return ubicacion.id;
    } 
    catch(error){
        console.log(error);
    }
};