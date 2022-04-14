const express = require('express');
const router = express.Router();
const NotificacionController = require('../controller/notificacion.controller');

//Crear
router.post('/crear',(req, res) => {
    NotificacionController.crear()
    .then( _ => res.json({ status: 200 }))
    .catch(err => res.json({ status: 500, message: err }));
});

//Leer
router.get('/leer', (req,res)=>{
    NotificacionController.leer()
    .then(_Notificaciones => { res.json({ status: 200, message: _Notificaciones }) })
    .catch(err => res.json({ status: 500, message: err }))
});

module.exports = router;