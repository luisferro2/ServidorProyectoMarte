const router = require('express').Router();
const nivelController = require('../controllers/nivel');

router.post('/insertarNivel', nivelController.postInsertarNivel);
router.get('/verNivel', nivelController.getVerNivel);

module.exports = router;