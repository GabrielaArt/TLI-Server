const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/usuario.controller');

router.use(express.json());

//Crear
router.post('/crear', (req, res) => {
    UsuarioController.save(req.body)
    .then(UserCreated => {
        res.json({ status: 200, message: UserCreated });
    })
    .catch(error => {
        res.json({ status: 500, message: error });
    });
});

//Login
router.put('/login', (req, res) => {
    UsuarioController.login(req.body)
    .then(Login => {
        res.json({ status: 200, message: Login });
    })
    .catch(error => {
        res.json({ status: 500, message: error });
    });
});

module.exports = router;