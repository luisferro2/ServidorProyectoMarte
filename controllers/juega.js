// Archivo que contiene las funciones anónimas utilizadas para las rutas relacionadas con la tabla Juega.

// Para mostrar archivos.
const path = require('path');

// Para obtener el modelo ya creado de sequelize.
const Juega = require('../util/database').models.Juega;

//Get para recibir confirmación 
exports.getConfirmacion = (req, res) => {
    res.send('Confirmadísimo')
};

// Get para poder visualizar los datos sobre la tabla Juega.
exports.getSelectJuega = (req, res) => {
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
};

// Post para insertar datos desde Unity en la tabla Juega.
//Formato fecha 2010-06-18 22:34:10.0000000 +00:00
exports.postInsertarJuega = (req, res) => {
    console.log(req.body);
    Juega.create({
        'tiempoInicio': (req.body.ano + "-" + req.body.mes + "-" + req.body.diaInicio + " " + req.body.horaInicio + ":" + req.body.minutoInicio + ":00.0000000 +00:00"),
        'tiempoFinal': (req.body.ano + "-" + req.body.mes + "-" + req.body.diaFin + " " + req.body.horaFin + ":" + req.body.minutoFin + ":00.0000000 +00:00"),
        'calificacion': parseInt(req.body.calificacion),
        'puntuacion': parseFloat(req.body.puntuacion),
        'JugadorGamertag': req.body.JugadorGamertag,
        'NivelIdNivel': parseInt(req.body.NivelIdNivel)
    })
        .then(resultado => {
            console.log('Datos insertados.');
        })
        .catch(error => {
            console.log(error);
        })
    res.redirect('/juega/confirmacion');
};

// Post para actualizar los datos desde Unity en la tabla Juega.
exports.postActualizarJuega = (req, res)=>{
    //update from juega where id=..
    console.log(req.body);
    Juega.update({
        tiempoInicio: req.body.tiempoInicio,
        tiempoFinal: req.body.tiempoFinal,
        calificacion: req.body.calificacion,
        puntuacion: req.body.puntuacion
    },{
        where:{
            idJuega:req.body.idJuega
        }
    }).then(()=>{
        console.log("Datos actualizados de la tabla Juega");
        res.send("Datos actualizados de la tabla Juega")
    }).catch(error=>{
        console.log(error);
        res.send("Error en actualización de datos en la tabla Juega")
    })
};

exports.postEliminarJuega = (req, res)=>{
    //delete from Juega where id=..
    console.log(req.body);
    Juega.destroy({
        where:{
            idJuega:req.body.idJuega
        }
    }).then(()=>{
        console.log("Datos eliminados de la tabla Juega");
        res.send("Datos eliminados de la tabla Juega")
    }).catch(error=>{
        console.log(error);
        res.send("Error en eliminación de datos en la tabla Juega")
    })
};