const Sequelize = require('sequelize');

const Administrador = (sequelize) => {
    sequelize.define('Administrador', {
        idAdministrador: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        contrasena: {
            type: Sequelize.STRING,
            allowNull: false        //Es necesario para iniciar sesión
        }
    })
};

module.exports = Administrador;