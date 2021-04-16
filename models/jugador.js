// Archivo con el diseño de la tabla Jugador de la base de datos.

const Sequelize = require('sequelize');

const Jugador = (sequelize) => {
    sequelize.define('Jugador', {
        gamertag: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        contrasena: Sequelize.STRING,
        tiempoTotal: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        genero: Sequelize.STRING,
        fechaNacimiento: Sequelize.DATE,
        estado: Sequelize.STRING
    });
};
module.exports = Jugador;