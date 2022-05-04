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

//Leer por usuario
readByUser = async (_idUser) => {
    try{
        let _Publicaciones = await Publicacion.find({ Usuario: _idUser, deleted_at: null }).exec();

        if(_Publicaciones.length > 0){
            return { status: 200, message: _Publicaciones }
        }

        return { status: 404, message: 'Not Found' };
    }
    catch(error){
        console.log(error);
    }
}

//Actualizar
update = async (Publication) => {
    const { _id, encabezado, contenido, fotoRoute, estado } = Publication;

    try {
        //Actualizar
        Publicacion.findOneAndUpdate({ _id }, { encabezado, contenido, fotoRoute, estado, updated_now: new Date() }).exec();

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

module.exports = { create, read, readByUser, deleted, update };