const UsuarioController = require('../controller/usuario.controller');
const express = require('express');
const router = express.Router();

router.use(express.json());

//LeerById
router.put('/consultar/:id', (req, res) => {
    UsuarioController.readById(req.params)
    .then(result => { res.json({ status: 200, message: result }) })
    .catch(error => { res.json({ status: 500, error: error.details[0].message }) });
});

//Actualizar
router.put('/actualizar', (req, res) => {
    UsuarioController.update(req.body)
    .then(result => { res.json({ status:200, message:result }) })
    .catch(error => { res.json({ status: 500, error: error.details[0].message }) });
});

module.exports = router;