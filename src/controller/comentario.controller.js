const FilesController = require('../controller/files.controller');
const DAOComment = require('../dao/usuario.dao');

//Comentar
guardar = async(Comment) => {
    try{
        /* Guardar foto de comentario */
        //Generar ruta y nombre del archivo
        let date = new Date();
        date = Date.parse(date);

        let path = __dirname + '../app/resources/comentario/';
        let fileName = Comment._idUsuario + '_' + date + '.jpg'

        //Guardar foto
        // Comment.fotoRoute = await FilesController.upFile({ path, name: fileName, file: Comment.fotoRoute });

        //Guardar comentario
        if(await DAOComment.create(Comment) === true){
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