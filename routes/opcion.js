// Archivo que contiene las rutas relacionadas con la tabla Jugador.

const router = require('express').Router();
const opcionController = require('../controllers/opcion');

router.get('/verOpcion', opcionController.getSelectOpcion);

router.get('/insertarOpcion', opcionController.postInsertarOpcion);

module.exports = router;