const DAOUbication = require('../dao/ubicacion.dao');

//Guardar
module.exports.guardar = async (Ubication) => {
    try{
        const _idUbicacion = await DAOUbication.create(Ubication);
        return _idUbicacion;
    } 
    catch(error){
        console.log(error);
    }
};