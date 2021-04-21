const path = require('path');
const Nivel = require('../util/database').models.Nivel;

exports.postInsertarNivel = (req, res)=>{
    console.log(req.body);
    Nivel.create(req.body)
        .then(resultado=>{
            console.log("Nivel creado");
            res.send("Nivel creado");
        })
        .catch(error=>{
            console.log(error);
            res.send("Hubo un error al insertar el Nivel");
            console.log("Hubo un error al insertar el Nivel");
        })
};

exports.getVerNivel = (req, res)=>{
    console.log(req.body);
    Nivel.findAll(req.body.idNivel)
        .then(resultado=>{
            console.log(resultado);
            res.send("Nivel creado");
            console.log('Nivel creado');
        })
        .catch(error=>{
            console.log(error);
            res.send("Hubo un error al ver el nivel");
            console.log('Hubo un error al ver el nivel');
        })
};

exports.postInsertarNivel = (req, res) => {
    console.log(req.body);
    Nivel.create({
        'idNivel': req.body.idNivel,
        'nombre': req.body.nombre
    })
        .then(resultado => {
            console.log('Nivel insertado.');
            res.send("Nivel insertado");
        })
        .catch(error => {
            console.log('Error al insertar en el Nivel.');
            res.send("Error al insertar en el Nivel.");
        })
    res.redirect('/nivel/confirmacion');
};