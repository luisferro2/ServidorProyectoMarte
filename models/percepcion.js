// Archivo que contiene el diseño de la tabla Percepcion de la base de datos.

// Importo el módulo sequelize.
const Sequelize = require('sequelize');

// Función anónima que recibe el objeto de conexión a la base de datos y crea la tabla.
const Percepcion = (sequelize) => {
    sequelize.define('Percepcion', {
        // Las llaves primarias (foráneas) hacia las tablas relacionadas se agregan en la relación.
        idPercepcion: {
            type: Sequelize.INTEGER,
            primaryKey = true,
            allowNull: false
        },
        calificacion: Sequelize.INTEGER
    });
};

module.exports = Percepcion;