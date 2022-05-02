const ComentarioController = require('../controller/comentario.controller');
const express = require('express');
const router = express.Router();

router.use(express.json());

//publicar
router.post('/publicar', (req, res) => {
    let socketIO = req.app.get('socketio');
    
    ComentarioController.guardar()
    .then(result => { 
        socketIO.on('connection', socket => {
            socket.emmit('srv:NewComment', { status:200, message: result });
        });
    })
    .catch(error => { res.json({ status:500, error }) });
});

//leerByPublicacion
router.get('/leer', (req, res) => {
    ComentarioController.consultarByPublicacion()
    .then(result => { res.json({ status:200, message: result }) })
    .catch(error => { res.json({ status:500, error: error.details[0].message }) });
});

//actualizar
router.put('/actualizar', (req, res) => {
    ComentarioController.actualizar()
    .then(result => { res.json({ status:200, message: result }) })
    .catch(error => { res.json({ status:500, error: error.details[0].message }) });
});

//eliminar
router.put('/eliminar/:id', (req, res) => {
    ComentarioController.eliminar()
    .then(result => { res.json({ status:200, message: result }) })
    .catch(error => { res.json({ status:500, error: error.details[0].message }) });
});

module.exports = router;