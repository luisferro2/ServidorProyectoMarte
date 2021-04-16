// Esta código incluye la confuguración de la base de datos.

// Configuración de biblioteca sequalize para hacer consultas en la compu windows base de datos específica.
const Sequelize = require('sequelize');
const sequelize = new Sequelize('ProyectoMarte', 'sa', 'Password1234$', 
{
    host: '192.168.0.120', // Ip de mi compu en la red.
    dialect: 'mssql', 
    dialectOptions: {
        options: {
            useUTC: false,
            dateFirst: 1
        }
    }, 
    define: {
        timestamps: false, 
        freezeTableName: true
    }
});

// Cargar las referencias de los modelos
// Arreglo con las funciones que crean las tablas.
const modelDefiners = [
    require('../models/jugador'), 
];

// Usamos la configuración de sequelize para pasarlo a las funciones que definen cada tabla.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
};

// Incluir relaciones entre tablas.
//const {applyRelations} = require('./relaciones');

//applyRelations(sequelize);

module.exports = sequelize;