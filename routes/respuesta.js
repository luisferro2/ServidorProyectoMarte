// Archivo que contiene las rutas relacionadas con la tabla Respuesta.

const router = require('express').Router();
const respuestaController = require('../controllers/respuesta');

router.get('/confirmacion', respuestaController.getConfirmacion);

router.post('/insertarRespuesta', respuestaController.postInsertarRespuesta);

router.get('/verRespuestas', respuestaController.getSelectRespuesta);

router.post('/eliminarRespuesta', respuestaController.postEliminarRespuesta);

router.post('/actualizarRespuesta', respuestaController.postActualizarRespuesta);

module.exports = router;