/* [ Requires ] */
require('dotenv').config();
const express = require('express'); //Constante que instancia la libreria 'express'.
const http = require('http');
const validarToken = require('./middleware/validateToken');//Middleware 

/* [ Initializations ] */
const application = express();
const server = http.createServer(application); 
const io = require('socket.io')(server);

/* [ Settings ] */
application.set('port', process.env.PORT);
application.set('socketio', io);

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
const authRoute = require('./routes/authentication.routes');
const usuarioRoute = require('./routes/usuario.routes');
const publicacionRoute = require('./routes/publicacion.routes');
const comentarioRoute = require('./routes/comentario.routes');
// const notificacionRoute = require('./routes/notificacion.routes');

/* [ Middlewares ] */
//Routes
application.use('/api/auth', authRoute);
application.use('/api/usuario',  usuarioRoute);
application.use('/api/publicacion',  publicacionRoute);
application.use('/api/comentario',  comentarioRoute);
// application.use('/api/notificacion', validarToken, notificacionRoute);

//StaticFiles
application.use(express.static(__dirname + '/public'));

/* [ Arranque ] */
server.listen(application.get('port'), () => {
    console.log('Servidor iniciado en el puerto: ', application.get('port'));
});