// Archivo que contiene las rutas relacionadas con la tabla Percepcion.

const router = require('express').Router();
const percepcionController = require('../controllers/percepcion');

router.post('/insertarPercepcion', percepcionController.postInsertarPercepcion);

router.get('/verPercepcion', percepcionController.getSelectPercepcion);

module.exports = router;