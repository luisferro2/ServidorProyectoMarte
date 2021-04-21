// Archivo con funciones que se ejecuten a las llamadas get y post relacionados con la tabla Respuesta.

// Importar biblioteca para manejar rutas de archivos.
const path = require('path');

const Respuesta = require('../util/database').models.Respuesta;


exports.getConfirmacion = (req, res) => {
    res.send('Confirmadísimo')
};


exports.postInsertarRespuesta = (req, res) => {
    console.log(req.body);
    Respuesta.create({
        'idRespuesta': req.body.idRespuesta,
        'respuesta': req.body.respuesta,
        'estado': req.body.estado
    })
        .then(resultado => {
            console.log('Respuesta insertada.');
        })
        .catch(error => {
            console.log('Error al insertar en Respuesta.');
        })
    res.redirect('/respuesta/confirmacion');
};

exports.getSelectRespuesta = (req,res)=>{
    //select * from respuesta where idNivel = ..
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

exports.postEliminarRespuesta = (req, res)=>{
    //delete from respuesta where id=..
    console.log(req.body);
    Respuesta.destroy({
        where:{
            idRespuesta:req.body.idRespuesta
        }
    }).then(()=>{
        console.log("Respuesta eliminada");
        res.send("Respuesta eliminada")
    }).catch(error=>{
        console.log(error);
        res.send("Error en el proceso")
    })
};

exports.postActualizarRespuesta = (req, res)=>{
    //update from respuesta where id=..
    console.log(req.body);
    Respuesta.update({
        respuesta: req.body.respuesta,
        estado: req.body.estado    
    },{
        where:{
            idRespuesta:req.body.idRespuesta
        }
    }).then(()=>{
        console.log("Respuesta actualizada");
        res.send("Respuesta actualizada")
    }).catch(error=>{
        console.log(error);
        res.send("Error en el proceso")
    })
};