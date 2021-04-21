// Archivo que contiene las funciones anónimas utilizadas para las rutas relacionadas con la tabla Vocacion.

// Para mostrar archivos.
const path = require('path');

// Para obtener el modelo ya creado de sequelize.
const Vocacion = require('../util/database').models.Vocacion;

// Get para poder visualizar los datos sobre la tabla Juega.
exports.getSelectVocacion = (req, res) => {
    // SELECT * FROM Juega
    Juega.findAll()
        .then(registros => {
            var data = [];
            registros.forEach(registro => {
                data.push(registro);               
            });
            res.render("tablero.html", {
                vocaciones: data
            });// Incluir página de muestra de querys.

        })
        .catch(error => {
            console.log(error);
            res.send(error);
        })
};

// Post para insertar datos desde Unity en la tabla Vocacion.
exports.postInsertarVocacion = (req, res) => {
    console.log(req.body);
    Juega.create({
        'nombre': req.body.nombre
    })
        .then(resultado => {
            console.log('Datos insertados.');
        })
        .catch(error => {
            console.log('Error al insertar en Vocacion.');
        })
    res.send('confirmado');
    //res.redirect('/juega/confirmacion');
};