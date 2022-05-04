const AuthController = require('../controller/auth.controller');
const UsuarioController = require('../controller/usuario.controller');
const express = require('express');
const router = express.Router();

router.use(express.json());

//Crear
router.post('/crear', (req, res) => {
    UsuarioController.save(req.body)
    .then(result => { res.json({ status:200, message: result }) })
    .catch(error => { res.json({ status: 500, error: error.details[0].message }) });
});

//login
router.post('/login', (req, res) => { 
    AuthController.login(req.body)
    .then(result => { 
        res.json(result);

        // if(result.token != null){
        //     res.header('auth-token', result.token).json({
        //         data: { status: 200, message: message.result }
        //     });
        // }
    })
    .catch(error => { res.json({status:500, error: error.details[0].message }) });
});


module.exports = router;