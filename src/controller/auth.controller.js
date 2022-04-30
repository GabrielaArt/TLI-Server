const EncryptController = require('../controller/encrypt.controller');
const DAOUser = require('../dao/usuario.dao');

//Login
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

//Logout

module.exports = { login };