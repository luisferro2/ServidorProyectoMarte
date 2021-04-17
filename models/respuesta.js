// Archivo con el diseño de la tabla Jugador de la base de datos.

const Sequelize = require('sequelize');

const Respuesta = (sequelize) => {
    sequelize.define('Respuesta', {
        respuesta: Sequelize.STRING,
        estado: Sequelize.BOOLEAN
    });
};  
module.exports = Respuesta;