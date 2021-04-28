const Sequelize = require('sequelize');

const Administrador = (sequelize) => {
    sequelize.define('Administrador', {
        idAdministrador: {
            type: Sequelize.STRING,
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