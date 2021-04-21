// Archivo que contiene el diseño de la tabla Vocacion de la base de datos.

// Importo el módulo sequelize.
const Sequelize = require('sequelize');

// Función anónima que recibe el objeto de conexión a la base de datos y crea la tabla.
const Vocacion = (sequelize) => {
    sequelize.define('Vocacion', {
        // Las llaves primarias (foráneas) hacia las tablas relacionadas se agregan en la relación.
        idVocacion: {
            type: Sequelize.INTEGER,
            primaryKey = true,
            allowNull: false
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false        //Es necesario un nombre
        }
    });
};

module.exports = Vocacion;