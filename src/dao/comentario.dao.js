require('../../config/db');
const Comentario = require('../models/Comentario');

//Crear
create = async (Comment) => {
    try{
        //Setteo del objeto
        const comentario = new Comentario(Comment);

        //Guardar [comentario]
        await comentario.save();

        //
        return { status: 200, message: comentario };
    }
    catch(error){
        console.log(error);
    }
};

//Consultar todos los [Comentarios] pertenecientes a una [Publicacion]
readByPublication = async (Publicacion) => {
    let { _id } = Publicacion;

    try{
        let _Comentarios = await Comentario.find({ Publicacion: _id })
        .populate('Usuario')
        .exec()
        .then(_Comentarios => {
            return _Comentarios;
        })
        .catch(error => { return error });
    
        //
        if(_Comentarios.length > 0){
            return { status: 200, message: _Comentarios }
        }
        else{
            return { status: 404, message: 'Not found' };
        }
    }
    catch(error){
        console.log(error);
    }
};

//Eliminar
deleted = async (_id) => {
    try{
        //Borrado logico
        Comentario.findOneAndUpdate({ _id }, { deleted_at: new Date() }, (error) => {
            throw error;
        });
        return true;
    }
    catch(error){
        console.log(error);
    }
};

//Actualizar
update = async (Comment) => {
    const { _id, contenido, fotoRoute/*File*/ } = Comment;

    try{
        Comentario.findOneAndUpdate({ _id: _id }, { contenido, fotoRoute }, error => {
            if(!error){
                return true;
            }
            throw error;
        });
    }
    catch(error){
        console.log(error);
    }
};

module.exports = { create, readByPublication, deleted, update };