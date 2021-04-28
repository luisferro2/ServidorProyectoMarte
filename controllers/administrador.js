const path = require('path');
const Administrador = require('../util/database').models.Administrador;

exports.getConfirmacion = (req, res) => {
    res.send('Confirmadísimo')
};

exports.getMostrarFormulario = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'formularioAdmin.html'));
};

exports.getSelectAdministrador = (req, res) => {
    // SELECT * FROM Administrador
    Administrador.findAll()
        .then(registros => {
            var data = [];
            registros.forEach(registro => {
                data.push(registro);               
            });
            res.render("tablero.html", {
                admin: data
            });// Incluir página de muestra de querys.

        })
        .catch(error => {
            console.log(error);
            res.send(error);
        })
};

exports.postInsertarAdministrador = (req, res) => {
    console.log(req.body);
    if (req.body.code == '5678'){
        Administrador.create({
            'idAdministrador': req.body.gamertag,
            'contrasena': req.body.password,
        })
            .then(resultado => {
                console.log('Datos insertados.');
            })
            .catch(error => {
                console.log(error);
            })
        res.redirect('/administrador/confirmacion');
    }else{
        res.send('Código de acceso denegado');
    }
};

exports.postActualizarAdministrador = (req, res)=>{
    //update from Adminisitrador where id=..
    console.log(req.body);
    Administrador.update({
        contrasena: req.body.contrasena,
    },{
        where:{
            idAdministrador:req.body.idAdministrador
        }
    }).then(()=>{
        console.log("Administrador actualizado");
        res.send("Administrador actualizado")
    }).catch(error=>{
        console.log(error);
        res.send("Error en actualizar al Administrador")
    })
};

exports.postEliminarAdministrador = (req, res)=>{
    //delete from Administrador where id=..
    console.log(req.body);
    Administrador.destroy({
        where:{
            idAdministrador:req.body.idAdministrador
        }
    }).then(()=>{
        console.log("Administrador eliminado");
        res.send("Administrador eliminado")
    }).catch(error=>{
        console.log(error);
        res.send("Error en eliminar al Administrador")
    })
};

exports.getMostrarLogIn = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'LogInAdmin.html'));
};

exports.getLogIn = (req, res)=>{
    //Select administrador where...
    console.log(req.body);
    Administrador.findAll({
        where: {
            idAdministrador:req.body.gamertag,
            contrasena:req.body.password
        }
    }).then(result=>{
        console.log("Log in exitoso");
        res.send(result[0].idAdministrador);
        //res.redirect("Tableau");
    }).catch(error=>{
        console.log(error);
        res.send("Log in fallido, inténtelo de nuevo");
    })
};

