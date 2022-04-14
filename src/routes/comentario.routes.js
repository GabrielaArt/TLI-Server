const express = require('express');
const router = express.Router();
const ComentarioController = require('../controller/comentario.controller');

router.use(express.json());

//Crear
router.post('/crear', (req, res) => {
    ComentarioController.guardar(req.body)
    .then(saved => {
        res.json({ status: 200, message: saved });
    })
    .catch(err => {
        res.json({ status: 500, message: err });
    });
});

//Consultar todos los comentarios de una [Publicacion]
router.get('/consultar/:idPublicacion', (req, res) => {
    ComentarioController.consultarByPublicacion(req.param)
    .then(_comentarios => {
        res.json({ status: 200, message: _comentarios });
    })
    .catch(error => { 
        res.json({ status: 500, message: error })
    });
});

//Eliminar
router.put('/eliminar/:idComentario', (req, res) => {
    ComentarioController.eliminar(req.param)
    .then(deleted => res.json({ status: 200, message: deleted }))
    .catch(error => { res.json({ status: 500, message: error }) });
})

//Actualizar
router.put('/actualizar', (req, res) => {
    ComentarioController.actualizar()
    .then(updated => res.json({ status: 200, message: updated }))
    .catch(error => { res.json({ status: 500, message: error })});
});

module.exports = router;