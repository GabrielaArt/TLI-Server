const PublicacionController = require('../controller/publicacion.controller');
const express = require('express');
const router = express.Router();

router.use(express.json());

//publicar
router.post('/publicar', (req, res) => {
    let socketIO = req.app.get('socketio');

    PublicacionController.publicar(req.body)
    .then(result => { 
        socketIO.on('connection', socket => {
            socket.emmit('srv:NewPost', { status:200, message: result});
        });
    })
    .catch(error => { res.json({ status:500, error: error.details[0].message }) });
});

//leer
router.get('/leer', (req, res) => {
    PublicacionController.leer()
    .then(result => { res.json({ status:200, message: result }) })
    .catch(error => { res.json({ status:500, error: error.details[0].message }) });
});

//actualizar
router.put('/actualizar', (req, res) => {
    PublicacionController.actualizar(req.body)
    .then(result => { res.json({ status:200, message: result }) })
    .catch(error => { res.json({ status:500, error: error.details[0].message }) });
});

//eliminar
router.put('/eliminar/:id', (req, res) => {
    PublicacionController.eliminar(req.parms)
    .then(result => { res.json({ status:200, message: result }) })
    .catch(error => { res.json({ status:500, error: error.details[0].message }) });
});


module.exports = router;