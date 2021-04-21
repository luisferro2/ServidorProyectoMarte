const Sequelize = require('sequelize');

const Nivel = (sequelize) => {
    sequelize.define('Nivel', {
        idNivel: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
};

//Hola
module.exports = Nivel;