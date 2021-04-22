// Archivo que contiene las rutas relacionadas con la tabla Jugador.

const router = require('express').Router();
const preguntaController = require('../controllers/pregunta');

router.post('/insertarPregunta', preguntaController.postInsertarPregunta);

router.post('/confirmacion', preguntaController.getConfirmacion);

router.get('/verPreguntasDato', preguntaController.getSelectPreguntasDato);

router.get('/verPreguntas', preguntaController.getSelectPreguntas);

router.post('/eliminarPregunta', preguntaController.postEliminarPregunta);

router.post('/actualizarPregunta', preguntaController.postActualizarPregunta);

module.exports = router;
