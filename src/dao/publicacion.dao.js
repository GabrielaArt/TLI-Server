require('../../config/db');
const Publicacion = require('../models/Publicacion');

//Crear
create = async (Publication) => {
    try {
        //Setteo del objeto
        const publicacion = new Publicacion(Publication);

        //Guardar [publicacion]
        await publicacion.save();
        return true;
    } 
    catch(error){
        console.log(error);
    }
}; 

//Leer
read = async () => {
    try {
        Publicacion.find({ deleted_at: null }, (error, _Publicaciones) => {
            if(!error){
                return _Publicaciones;
            }
            throw error;
        });
    }
    catch(error){
        console.log(error);
    }
};

//Actualizar
update = async (Publication) => {
    const { _id, encabezado, contenido, fotoRoute, estado } = Publication;

    try {
        //Actualizar
        Publicacion.findOneAndUpdate({ _id }, { encabezado, contenido, fotoRoute, estado, updated_now: new Date() }, error => {
            if(error){
                throw error;
            }
            return true;
        });
    }
    catch(error){
        console.log(error);
    }
};

//Eliminar
deleted = async (_id) => {
    try{
        Publicacion.findOneAndUpdate({ _id }, { deleted_at: new Date() }, (error) => {
            if(error){
                throw error;
            }
        });
        return true;
    }
    catch(error){
        console.log(error);
    }
};

module.exports = { create, read, deleted, update };