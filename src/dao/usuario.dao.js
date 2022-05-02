require('../../config/db');
const Usuario = require('../models/Usuario');
const EncryptController = require('../controller/encrypt.controller');

//Crear
create = async (User) => {
    try{
        //Setteo del objeto recibido por parametro al Schema/Model
        const usuario = new Usuario(User);

        //Guardar [usuario]
        await usuario.save();
        return true;
    }
    catch(error){
        console.log(error);
    }
};

//ConsultarById
readById = async (_id) => {
    try{
        let UserResult = await Usuario.findOne({ _id: _id, deleted_at: null }).exec();

        //Se encontro el usuario
        if(UserResult != null){
            return UserResult;
        }

        return false;
    }
    catch(error){
        console.log(error);
    }
};

//Login
readUserAndPasswd = async (User) => {
    let { mail, contrasenia } = User;

    try{
        //Consultar -user- con las coincidencias de [mail] y este activo [isDeleted: 0]
        let UserResult = await Usuario.findOne({ mail: mail, deleted_at: null }).exec();
        
        //Se encontro el usuario
        if(UserResult != null){
            if(await EncryptController.desencriptar(UserResult.contrasenia) === contrasenia){
                return true;
            }
            else{
                return 'Contrasenia incorrecta';
            }
        }
        else{
            return 'Usuario no encontrado';
        }
    }
    catch(error){
        console.log(error);
    }
};

//Actualizar 
update = async (User) => {
    const { _id, nombre, primerApellido, segundoApellido, contrasenia, fotoRoute/*fotoFile*/ } = User;

    try{
        Usuario.findOneAndUpdate({ _id }, { nombre, primerApellido, segundoApellido, contrasenia, fotoRoute, updatedAt: new Date() }, error => {
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

//Eliminar (logico)
deleted = async (_id) => {
    try{
        //Actualizar campo [deleted_at] a -1- (para hacer el borrado logico)
        Usuario.findOneAndUpdate({ _id }, { deleted_at: new Date() }, (error) => {
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

module.exports = { create, update, readById, readUserAndPasswd };