const express = require('express');
const router = express.Router();
const PublicacionController = require('../controller/publicacion.controller');

router.use(express.json());

//Crear
router.post('/crear', (req, res) => {
    PublicacionController.publicar(req.body)
    .then(PublicationCreated => {
        res.json({ status: 200, message: PublicationCreated});
    })
    .catch(error => res.json({ status: 500, mesage: error}));
});

//Leer
router.get('/leer', (req, res) => {
    PublicacionController.read()
    .then(_Publicaciones => res.json({ status: 200, mesage: _Publicaciones }))
    .catch(error => res.json({ status: 500, mesage: error }));
});

//Eliminar
router.put('/eliminar', (req, res) => {
    PublicacionController.eliminar(req.body)
    .then(_ => { res.json({ status: 200, message: 'Publicacion eliminada' }) })
    .catch(error => res.json({ status: 500, mesage: error }));
});

//Actualizar
router.put('/actualizar/:idPublicacion', (req, res) => {
    PublicacionController.actualizar()
    .then( _ => { res.json({ status: 200, message: 'Publicacion actualizada'})})
    .catch(error => res.json({ status: 500, mesage: error }));
});

module.exports = router;