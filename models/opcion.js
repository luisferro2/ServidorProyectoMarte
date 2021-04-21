// Archivo que contiene el diseño de la tabla Vocacion de la base de datos.

// Importo el módulo sequelize.
const Sequelize = require('sequelize');

// Función anónima que recibe el objeto de conexión a la base de datos y crea la tabla.
const Opcion = (sequelize) => {
    sequelize.define('Opcion', {
        // Las llaves primarias (foráneas) hacia las tablas relacionadas se agregan en la relación.
        idOpcion: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        texto: {
            type: Sequelize.STRING,
            allowNull: false        //Es necesario un nombre
        }
    });
};

module.exports = Opcion;