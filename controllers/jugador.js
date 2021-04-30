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
            //res.redirect('/jugador/LogInJugador');
            res.redirect('/jugador/descargarJuego');
        })
        .catch(error => {
            console.log('Error al insertar en Jugador.');
        })
};

exports.getDownload = (req,res)=>{
    console.log(path.join(__dirname,'..','public','images','planet.png'));
    res.download(path.join(__dirname,'..','public','images','planet.png'));
    res.redirect('/ProyectoMarte');
}

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

exports.getLogIn = (req, res)=>{
    //Select jugadro where...
    console.log(req.body);
    Jugador.findAll({
        where: {
            gamertag:req.body.gamertag,
            contrasena:req.body.contrasena
        }
    }).then(result=>{
        if (result[0] != undefined){
            console.log("Log in exitoso");
            res.send(result[0].gamertag);
        }
        else{
            res.send("Log in fallido, inténtelo de nuevo");
        }
    }).catch(error=>{
        console.log(error);
        res.send("Log in fallido, inténtelo de nuevo");
    })
};

exports.postLogOut = (req,res)=>{
    console.log(req.body);
    Jugador.findAll({
        where: {
            gamertag:req.body.gamertag
        }
    }).then(result=>{
        console.log(result[0].dataValues.tiempoTotal);
        Jugador.update({
            tiempoTotal: result[0].dataValues.tiempoTotal + parseInt(req.body.tiempoTotal)
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
    }).catch(error=>console.log(error))
};

exports.getMostrarLogIn = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'LogIn.html'));
};

exports.postLogInWeb = (req,res)=>{
    //Select jugadro where...
    console.log(req.body);
    Jugador.findAll({
        where: {
            gamertag:req.body.gamertag,
            contrasena:req.body.password
        }
    }).then(result=>{
        console.log("Log in exitoso");
        res.send(result[0].gamertag);
        //res.redirect('/jugador/EstatusJugador');
    }).catch(error=>{
        console.log(error);
        res.send("Log in fallido, inténtelo de nuevo");
    })
};