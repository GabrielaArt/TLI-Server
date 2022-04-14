require('../../config/db');
const Notificacion = require('../models/Notificacion');

//Crear
create = async (Notification) => {
    try{
        //Settear
        const notificacion = new Notificacion(Notificacion);

        //Guardar
        await notificacion.save(error => {
            if(!error){
                return true;
            }
            return false;
        });
    }
    catch(error){
        console.log(error);
    }
};

//Leer
read = async () => {
    try{
        let _Notificaciones = await Notificacion.find().exec(); 
        return _Notificaciones;
    }
    catch(error){
        console.log(error);
    }
};

module.exports = { create, read };