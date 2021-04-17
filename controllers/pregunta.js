// Archivo con funciones que se ejecuten a las llamadas get y post relacionados con la tabla Pregunta.

// Importar biblioteca para manejar rutas de archivos.
const path = require('path');

const Pregunta = require('../util/database').models.Pregunta;

exports.getConfirmacion = (req, res) => {
    res.send('Confirmadísimo')
};

exports.postInsertarPregunta = (req, res) => {
    console.log(req.body);
    Pregunta.create({
        'idNivel': req.body.idNivel,
        'texto': req.body.texto,
        'opcion_correcta': req.body.opcion_correcta
    })
        .then(resultado => {
            console.log('Pregunta insertada.');
        })
        .catch(error => {
            console.log('Error al insertar en Pregunta.');
        })
    res.redirect('/pregunta/confirmacion');
};

exports.getSelectPreguntas = (req,res)=>{
    //select * from pregunta where idNivel = ..
    console.log(req.query)
    Pregunta.findAll()
        .then(result=>{
            res.send(result);
        })
        .catch(error=>{
            console.log(error)
            res.send(error);
        })
};

exports.postEliminarPregunta = (req, res)=>{
    //delete from pregunta where id=..
    console.log(req.body);
    Pregunta.destroy({
        where:{
            idPregunta:req.body.idPregunta
        }
    }).then(()=>{
        console.log("Pregunta eliminada");
        res.send("Pregunta eliminada")
    }).catch(error=>{
        console.log(error);
        res.send("Error en el proceso")
    })
}

exports.postActualizarPregunta = (req, res)=>{
    //update from pregunta where id=..
    console.log(req.body);
    Pregunta.update({
        texto: req.body.texto,
        opcion_correcta: req.body.opcion_correcta
    },{
        where:{
            idPregunta:req.body.idPregunta
        }
    }).then(()=>{
        console.log("Pregunta actualizada");
        res.send("Pregunta actualizada")
    }).catch(error=>{
        console.log(error);
        res.send("Error en el proceso")
    })
}