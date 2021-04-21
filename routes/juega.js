// Archivo que contiene las rutas relacionadas con la tabla Juega.

const router = require('express').Router();
const juegaController = require('../controllers/juega');

router.get('/confirmacion', juegaController.getConfirmacion);

router.get('/verJuega', juegaController.getSelectJuega);

router.post('/insertarJuega', juegaController.postInsertarJuega);

router.post('/actualizarJuega', juegaController.postActualizarJuega);

router.post('/eliminarJuega', juegaController.postEliminarJuega);

module.exports = router;