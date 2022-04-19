/* [ Requires ] */
require('dotenv').config();
const express = require('express'); //Constante que instancia la libreria 'express'.
const http = require('http');

/* [ Initializations ] */
const application = express();
const server = http.createServer(application);

/* [ Settings ] */
application.set('port', process.env.PORT);

/* [Ruta_Inicial] */
application.get('/api', (req,res) => {
    res.json({
        name: 'API - TLIapp',
        author: '@LH420[2019-2022]',
        description: 'Interfaz de Programacion de Aplicaciones',
        version: '0.0.1?'
    });
});

/* [ Routes - Directories ] */
const usuarioRoute = require('./routes/usuario.routes');
const publicacionRoute = require('./routes/publicacion.routes');
const comentarioRoute = require('./routes/comentario.routes');
const notificacionRoute = require('./routes/notificacion.routes');

/* [ Middlewares ] */
//Routes
application.use('/api/usuario',usuarioRoute);
application.use('/api/publicacion',publicacionRoute);
application.use('/api/comentario',comentarioRoute);
application.use('/api/notificacion',notificacionRoute);

//StaticFiles
application.use(express.static(__dirname + '/public'));

/* [ Arranque ] */
server.listen(application.get('port'), () => {
    console.log('Servidor iniciado en el puerto: ', application.get('port'));
});