const FilesController = require('../controller/files.controller');
const EncryptController = require('../controller/encrypt.controller');
const DAOUser = require('../dao/usuario.dao');
const path = require('path');

//Registrar
save = async(Usuario) => {
    try{
        //Validar si hay foto
        if(Usuario.fotoRoute != null){
            /* Guardar foto de usuario */
            //Generar ruta y nombre del archivo
            let date = new Date();
            date = Date.parse(date);

            // let pathRoute = __dirname + '../app/resources/perfil/';
            // let fileName = Usuario.nombre + Usuario.primerApellido + Usuario.segundoApellido + 'Profile' + '_' + date + path.extname(Usuario.fotoRoute)/* extension del archivo */;
            
            //Guardar foto
            // Usuario.fotoRoute = await FilesController.upFile({ path: pathRoute, name: fileName, file: Usuario.fotoRoute });
        }

        //Encriptar contrasenia
        Usuario.contrasenia = await EncryptController.encriptar(Usuario.contrasenia);

        //Guardar usuario
        if(await DAOUser.create(Usuario) === true){
            return 'Usuario registrado exitosamente!';
        }
    }
    catch(error){
        console.log(error);
    }
};

//Actualizar
update = async(Usuario) => {
    try{
        //Encriptar contrasenia
        Usuario.contrasenia = EncryptController.encriptar(Usuario.contrasenia);

        //Actualizar
        if(await DAOUser.update(Usuario) === true){
            return 'Usuario actualizado';
        }
    }
    catch(error){
        console.log(error);
    }
};

//Consultar [login]
login = async(Usuario) => {
    try{
        //Desencriptar contrasenia
        Usuario.contrasenia = await EncryptController.desencriptar(Usuario.contrasenia);

        //Comprobar existencia -usuario-
        let result = await DAOUser.readUserAndPasswd(Usuario);

        if(result != true){
            return { status: 404, message: result }
        }

        return { status: 200 }
    }
    catch(error){
        console.log(error);
    }
};

module.exports = { save, update, login };