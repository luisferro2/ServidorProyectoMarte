// Archivo con funciones que se ejecuten a las llamadas get y post relacionados con la tabla Opcion.

// Importar biblioteca para manejar rutas de archivos.
const path = require('path');

const Opcion = require('../util/database').models.Opcion;

exports.getSelectOpcion = (req,res)=>{
    //select * from Opcion  = ..
    console.log(req.query)
    Opcion.findAll()
        .then(result=>{
            res.send(result);
        })
        .catch(error=>{
            console.log(error)
            res.send(error);
        })
};

exports.getSelectOpcionPregunta = (req,res)=>{
    //select * from Opcion where IdPregunta = ..
    console.log(req.query)
    Opcion.findAll({
        //where:{
        //    PreguntumId:req.query.PreguntumId
        //},
        attributes: ['texto']
        })
        .then(result=>{
            res.send(result);
        })
        .catch(error=>{
            console.log(error)
            res.send(error);
        })
};

exports.postInsertarOpcion = (req, res) => {
    console.log(req.body);
    Pregunta.create({
        'idOpcion': req.body.idOpcion,
        'texto': req.body.texto,
    })
        .then(resultado => {
            console.log('Opcion insertada.');
            res.send("Opcion insertada.");
        })
        .catch(error => {
            console.log('Error al insertar en Opcion.');
            res.send("Error al insertar en Opcion.");
        })
};