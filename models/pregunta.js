// Archivo con el diseño de la tabla Pregunta de la base de datos.

const Sequelize = require('sequelize');

const Pregunta = (sequelize) => {
    sequelize.define('Pregunta', {
        texto: Sequelize.STRING,
        opcion_correcta: Sequelize.CHAR
    });
};

module.exports = Pregunta;