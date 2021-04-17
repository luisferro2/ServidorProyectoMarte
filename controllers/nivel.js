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
            res.send("Hubo un error");
        })
};

exports.getVerNivel = (req, res)=>{
    console.log(req.body);
    Nivel.findAll(req.body.idNivel)
        .then(resultado=>{
            console.log(resultado);
            res.send("Nivel creado");
        })
        .catch(error=>{
            console.log(error);
            res.send("Hubo un error");
        })
};