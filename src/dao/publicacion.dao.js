require('../../config/db');
const Publicacion = require('../models/Publicacion');

//Crear
create = async (Publication) => {
    try {
        //Setteo del objeto
        const publicacion = new Publicacion(Publication);

        //Guardar [publicacion]
        await publicacion.save();

        //
        return { status: 200, message: publicacion };
    } 
    catch(error){
        console.log(error);
    }
}; 

/*Leer - Todas las publicaciones, limitadas por un rango de fecha*/
read = async () => {
    let listPublicaciones = await Publicacion.find({ deleted_at: null })
    .populate('Usuario')
    .exec()
    .then(_Publicaciones => { 
        return _Publicaciones })
    .catch(error => { return error });

    return listPublicaciones;
};

//Actualizar
update = async (Publication) => {
    const { _id, encabezado, contenido, fotoRoute, estado } = Publication;

    try {
        //Actualizar
        Publicacion.findOneAndUpdate({ _id }, { encabezado, contenido, fotoRoute, estado, updated_now: new Date() }, error => {
            if(error){
                throw 'Error: %e',error;
            }
        });

        return true;
    }
    catch(error){
        console.log(error);
    }
};

//Eliminar
deleted = async (_id) => {
    try{
        Publicacion.findOneAndUpdate({ _id }, { deleted_at: new Date() }, (error) => {
            if(error) throw error;
        });
        return true;
    }
    catch(error){
        console.log(error);
    }
};

module.exports = { create, read, deleted, update };