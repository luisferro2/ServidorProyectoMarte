const Sequelize = require('sequelize');

const Nivel = (sequelize) => {
    sequelize.define('Nivel', {
        idNivel: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idVocacion: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
};

module.exports = Nivel;