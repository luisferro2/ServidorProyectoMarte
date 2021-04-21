// Archivo que contiene el diseño de la tabla Juega de la base de datos.

// Importo el módulo sequelize.
const Sequelize = require('sequelize');

// Función anónima que recibe el objeto de conexión a la base de datos y crea la tabla.
const Juega = (sequelize) => {
    sequelize.define('Juega', {
        // Las llaves primarias (foráneas) hacia las tablas relacionadas se agregan en la relación.
        idJuega: {
            type: Sequelize.INTEGER,
            primaryKey = true,
            allowNull: false
        },
        tiempoInicio: {
            type: Sequelize.DATE,
            allowNull: false // Se debe llenar al iniciar el juego.
        },
        tiempoFinal: {
            type: Sequelize.DATE,
            allowNull: true // Este se puede quedar como null porque puede todavía estar jugando.   
        },
        calificacion: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        puntuacion: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    });
};

module.exports = Juega;