const FilesController = require('../controller/files.controller');
const UbicacionController = require('../controller/ubicacion.controller');
const DAOPublication = require('../dao/publicacion.dao');
const path = require('path');

//Publicar
publicar = async(Publicacion) => {
    try {
        //Comprobar si la publicacion viene con imagen
        if(Publicacion.fotoRoute != null){
            //Generar ruta y nombre
            let date = new Date();
            date = Date.parse(date);

            let pathRoute = __dirname + '../app/resources/publicacion/';
            let fileName = Usuario.nombre + Usuario.primerApellido + Usuario.segundoApellido + 'Profile' + '_' + date + '.' + path.extname(Publicacion.fotoRoute);

            //Guardar foto
            Publicacion.fotoRoute = await FilesController.upFile({ path: pathRoute, name: fileName, file: Usuario.fotoRoute });
        }

        //Guardar Ubicacion y settear al objeto el _Id de la ubicacion que se guardo
        Publicacion.Ubicacion = await UbicacionController.guardar(Publicacion.Ubicacion);

        //Guardar publicacion
        let publicacionResult = await DAOPublication.create(Publicacion);

        if(publicacionResult.status === 200){
            return publicacionResult.message;
        }

        throw 'Se genero un error al intentar crear la publicacion' + publicacionResult;
    } 
    catch(error){
        console.log(error);
    }
};

//Leer
leer = async () => {
    try {
        let _Publicaciones = await DAOPublication.read();
        return _Publicaciones;
    } 
    catch(error){
        console.log(error);
    }
};

leerByUsuario = async (idUsuario) => {
    try {
        let _Publicaciones = await DAOPublication.readByUser(idUsuario);
        return _Publicaciones;
    } 
    catch(error){
        console.log(error);
    }
}

//Actualizar
actualizar = async(Publicacion) => {
    try {
        //Actualizar
        if(await DAOPublication.update(Publicacion) === true){
            return 'Publicacion actualizada';
        }
    }
    catch(error){
        console.log(error);
    }
};

//Eliminar
eliminar = async (_id) => {
    try {
        if(await DAOPublication.deleted(_id) === true){
            return true;
        }
    } 
    catch(error){
        console.log(error);
    }
};

module.exports = { publicar, leer, leerByUsuario, actualizar, eliminar };