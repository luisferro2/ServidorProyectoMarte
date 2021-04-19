// Archivo que contiene las funciones anónimas utilizadas para las rutas relacionadas con la tabla Juega.

// Para mostrar archivos.
const path = require('path');

// Para obtener el modelo ya creado de sequelize.
const Juega = require('../util/database').models.Juega;

// Get para poder visualizar los datos sobre la tabla Juega.
exports.getSelectJuega() = (req, res) => {
    // SELECT * FROM Juega
    Juega.findAll()
        .then(registros => {
            var data = [];
            registros.forEach(registro => {
                data.push(registro);               
            });
            res.render("tablero.html", {
                juegas: data
            });// Incluir página de muestra de querys.

        })
        .catch(error => {
            console.log(error);
            res.send(error);
        })
}

// Post para insertar datos desde Unity en la tabla Juega.

// Post para actualizar los datos desde Unity en la tabla Juega.