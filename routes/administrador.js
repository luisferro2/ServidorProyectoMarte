const router = require('express').Router();
const administradorController = require('../controllers/administrador');

router.get('/confirmacion', administradorController.getConfirmacion);

router.get('/verAdministrador', administradorController.getSelectAdministrador);

router.post('/insertarAdministrador', administradorController.postInsertarAdministrador);

router.post('/actualizarAdministrador', administradorController.postActualizarAdministrador);

router.post('/eliminarAdministrador', administradorController.postEliminarAdministrador);

router.post('/LogIn', administradorController.getLogIn);

router.get('/LogInAdministrador', administradorController.getMostrarLogIn);

router.get('/registro', administradorController.getMostrarFormulario);

module.exports = router;