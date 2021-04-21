// Archivo con el diseño de la tabla Jugador de la base de datos.

const Sequelize = require('sequelize');

const Jugador = (sequelize) => {
    sequelize.define('Jugador', {
        gamertag: {
            type: Sequelize.STRING,
            allowNull: false,       //Es necesario para reconocer al jugador
            primaryKey: true
        },
        contrasena: {
            type: Sequelize.STRING,
            allowNull: false        //Es necesario para iniciar sesión
        },
        tiempoTotal: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        genero: {
            type: Sequelize.STRING,
            allowNull: false        //Debe registrarse
        },
        fechaNacimiento: {
            type: Sequelize.DATE,
            allowNull: false        //Debe registrarse
        },
        estado: {
            type: Sequelize.STRING,
            allowNull: false        //Debe registrarse
        }
    });
};
module.exports = Jugador;