require('dotenv').config();
const jwt = require('jsonwebtoken');
const DAOUser = require('../dao/usuario.dao');
const EncryptController = require('../controller/encrypt.controller');

//Login
login = async(Usuario) => {
    try{
        //Comprobar existencia -usuario-
        let result = await DAOUser.readUserAndPasswd(Usuario);

        //Firmar el -LogIn- con token()
        // const token = jwt.sign({ _id:Usuario._id, mail: Usuario.mail  }, process.env.TOKEN_SECRET);

        return result;
    }
    catch(error){
        console.log(error);
    }
};

//Logout



module.exports = { login };