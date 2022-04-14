const DAONotificacion = require('../dao/notificacion.dao');

//Crear
crear = async (Notification) => {
    try{
        if(await DAONotificacion.create(Notification) === true){
            return true;
        }
    } 
    catch(error){
        console.log(error);
    }
};

//Leer
leer = async () => {
    try{
        let _Notificaciones = await DAONotificacion.read();
        return _Notificaciones;
    }
    catch(error){
        console.log(error);
    }
};

module.exports = { crear, leer };