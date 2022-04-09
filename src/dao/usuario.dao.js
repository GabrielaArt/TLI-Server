require('../config/db');
const Usuario = require('./models/Usuario');

//Crear usuario
create = async (User) => {
    try{
        const usuario = new Usuario(User);
        let userSaved = await usuario.save();
        return userSaved;
    }
    catch(error){
        console.log(error);
    }
};