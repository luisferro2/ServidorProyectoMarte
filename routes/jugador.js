// Archivo que contiene las rutas relacionadas con la tabla Jugador.

const router = require('express').Router();
const jugadorController = require('../controllers/jugador');

router.get('/confirmacion', jugadorController.getConfirmacion);

router.get('/verJugador', jugadorController.getSelectJugador);

router.post('/insertarJugador', jugadorController.postInsertarJugador);

router.post('/actualizarJugador', jugadorController.postActualizarJugador);

router.post('/eliminarJugador', jugadorController.postEliminarJugador);

router.get('/registro', jugadorController.getMostrarFormulario);





module.exports = router;


