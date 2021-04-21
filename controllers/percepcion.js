// Archivo con funciones que se ejecuten a las llamadas get y post relacionados con la tabla Percepcion.

// Importar biblioteca para manejar rutas de archivos.
const path = require('path');

const Percepcion = require('../util/database').models.Percepcion;

exports.postInsertarPercepcion = (req, res) => {
    console.log(req.body);
    Percepcion.create({
        'idPercepcion': req.body.idPercepcion,
        'calificacion': req.body.calificacion
    })
        .then(resultado => {
            console.log('Percepcion insertada.');
        })
        .catch(error => {
            console.log('Error al insertar en Percepcion.');
        })
    res.send('Confirmado');
};

exports.getSelectPercepcion = (req,res)=>{
    //select * from Percepcion where idPercepcion = ..
    console.log(req.query)
    Respuesta.findAll()
        .then(result=>{
            res.send(result);
        })
        .catch(error=>{
            console.log(error)
            res.send(error);
        })
};
