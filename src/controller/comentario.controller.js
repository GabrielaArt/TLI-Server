const FilesController = require('../controller/files.controller');
const DAOComment = require('../dao/comentario.dao');
const path = require('path');

//Comentar
guardar = async(Comentario) => {
    try{
        if(Comentario.fotoRoute != null){
            /* Guardar foto de comentario */
            //Generar ruta y nombre del archivo
            let date = new Date();
            date = Date.parse(date);

            let pathRoute = __dirname + '../app/resources/comentario/';
            let fileName = Comentario.Usuario + '_' + date + '.' + path.extname(Comentario.fotoRoute);

            //Guardar foto
            Comentario.fotoRoute = await FilesController.upFile({ path: pathRoute, name: fileName, file: Comentario.fotoRoute });
        }

        //Guardar comentario
        let comentarioResult = await DAOComment.create(Comentario);

        if(comentarioResult === true){
            return 'Comentario registrado con exito';
        }
    }
    catch(error){
        console.log(error);
    }
};

//ConsultarByPublication
consultarByPublicacion = async (_idPublicacion) => {
    try{
        let _Comentarios = await DAOComment.readByPublication(_idPublicacion);
        return _Comentarios;
    }
    catch(error){
        console.log(error);
    }
};

//Eliminar
eliminar = async (_idComentario) => {
    try{
        if(await DAOComment.deleted(_idComentario) === true){
            return true;
        }
    }
    catch(error){
        console.log(error);
    }
};

//Actualizar
actualizar = async (Comentario) => {
    try{
        if(await DAOComment.update(Comentario) === true){
            return 'Comentario actualizado';
        }
    }
    catch(error){
        console.log(error);
    }
};

module.exports = { guardar, consultarByPublicacion, eliminar, actualizar };