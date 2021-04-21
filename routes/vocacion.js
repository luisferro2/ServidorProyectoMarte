// Archivo que contiene las rutas relacionadas con la tabla Juega.

// El router para juntar las rutas.
const router = require('express').Router();

// Importamos el controlador con las funciones para cada funcion de http.
const vocacionController = require('../controllers/vocacion');

router.get('/verVocaciones', vocacionController.getSelectVocacion);

router.post('/insertarVocacion', vocacionController.postInsertarVocacion);

module.exports = router;