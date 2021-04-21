// Archivo con funciones que se ejecuten a las llamadas get y post relacionados con la tabla Jugador.

// Importar biblioteca para manejar rutas de archivos.
const path = require('path');

const Jugador = require('../util/database').models.Jugador;

exports.getConfirmacion = (req, res) => {
    res.send('Confirmadísimo')
};

exports.getMostrarFormulario = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'formulario.html'));
};

exports.getSelectJugador = (req, res) => {
    // select * from Jugador
    Jugador.findAll()
        .then(registros => {
            var data=[];
            registros.forEach(registro => {
                data.push(registro.dataValues);
            })
            console.log(data);
            res.render('Tablero.html',{
                jugadores: data,
            });
        })
        .catch(error=>console.log(error))
};

exports.postInsertarJugador = (req, res) => {
    console.log(req.body);
    Jugador.create({
        'gamertag': req.body.gamertag,
        'contrasena': req.body.password,
        'genero': req.body.genero,
        'fechaNacimiento': req.body.fecha_nacimiento,
        'estado': req.body.estado
    })
        .then(resultado => {
            console.log('Jugador insertado.');
        })
        .catch(error => {
            console.log('Error al insertar en Jugador.');
        })
    res.redirect('/jugador/confirmacion');
};

exports.postActualizarJugador = (req, res)=>{
    //update from Jugador where id=..
    console.log(req.body);
    Jugador.update({
        contrasena: req.body.contrasena,
        genero: req.body.genero,
        fecha_nacimiento: req.body.fecha_nacimiento,
        estado: req.body.estado
    },{
        where:{
            gamertag:req.body.gamertag
        }
    }).then(()=>{
        console.log("Jugador actualizado");
        res.send("Jugador actualizado")
    }).catch(error=>{
        console.log(error);
        res.send("Error en actualizar al Jugador")
    })
};

exports.postEliminarJugador = (req, res)=>{
    //delete from Jugador where id=..
    console.log(req.body);
    Jugador.destroy({
        where:{
            gamertag:req.body.gamertag
        }
    }).then(()=>{
        console.log("Jugador eliminado");
        res.send("Jugador eliminado")
    }).catch(error=>{
        console.log(error);
        res.send("Error en eliminar al Jugador")
    })
};