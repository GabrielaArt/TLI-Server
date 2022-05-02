require('dotenv').config();
const jwt = require('jsonwebtoken');
const DAOUser = require('../dao/usuario.dao');
const EncryptController = require('../controller/encrypt.controller');

//Login
login = async(Usuario) => {
    try{
        //Desencriptar contrasenia
        Usuario.contrasenia = await EncryptController.desencriptar(Usuario.contrasenia);

        //Comprobar existencia -usuario-
        let result = await DAOUser.readUserAndPasswd(Usuario);

        if(result != true){
            return { status: 404, message: result, token: null }
        }

        //Firmar el -LogIn- con token()
        const token = jwt.sign({ _id:Usuario._id, mail: Usuario.mail  }, process.env.TOKEN_SECRET);

        return { status: 200, token }
    }
    catch(error){
        console.log(error);
    }
};

//Logout



module.exports = { login };