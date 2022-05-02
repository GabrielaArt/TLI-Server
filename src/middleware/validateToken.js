require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.validateToken = function(req, res, next){
    try{
        const token = req.header('auth-token');

        //Validar si existe -token-
        if(!token){
            return res.json({ status: 401, error: 'Acceso denegado' });
        }

        //
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.Usuario = verified;
        next();
    }
    catch(error){
        console.log(error);
    }
}