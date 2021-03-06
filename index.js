// Archivo índice del servidor para el juego Proyecto Marte.
// Autores: 


// Importando la biblioteca para crear servidores.
const express = require('express');

// Importando biblioteca para manejar json.
// Importando biblioteca para manejar json.
const bodyParser = require('body-parser');
const { kMaxLength } = require('buffer');

// importando el objeto de conexión a la base de datos.
const sequelize = require('./util/database');

// Importar las rutas relacionadas con la tabla Jugador.
const jugadorRoutes = require('./routes/jugador');
const respuestaRoutes = require('./routes/respuesta');
const nivelRoutes = require('./routes/nivel');
const preguntaRoutes = require('./routes/pregunta');
const juegaRoutes = require('./routes/juega');
const opcionRoutes = require('./routes/opcion');
const percepcionRoutes = require('./routes/percepcion');
const vocacionRoutes = require('./routes/vocacion');
const administradorRoutes = require('./routes/administrador');


// Importar biblioteca para manejar rutas de archivos.
const path = require('path');

// Crear el servidor.
const app = express();

// Middleware permite que se reciban archivos json por medio de get. 
app.use(bodyParser.json());

// Middleware para recibir json desde formulario.
app.use(bodyParser.urlencoded({extended:true}));

// middleware para que se use /usuario como ruta principal para los metodos de alumnoRoutes.
app.use('/jugador', jugadorRoutes);
app.use('/respuesta', respuestaRoutes);
app.use('/nivel', nivelRoutes);
app.use('/pregunta', preguntaRoutes);
app.use('/juega', juegaRoutes);
app.use('/opcion', opcionRoutes);
app.use('/percepcion', percepcionRoutes);
app.use('/vocacion', vocacionRoutes);
app.use('/administrador', administradorRoutes);

// Middleware permite que el folder public sea público. 
app.use(express.static(path.join(__dirname, 'public')));

// Configurar ejs para incrustar código javascript en documentos html.
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/ProyectoMarte',(req,res)=>{
    console.log(path.join(__dirname, 'views', 'Bienvenida.html'));
    res.sendFile(path.join(__dirname, 'views', 'Bienvenida.html'));
});

//{force:true}
sequelize.sync()
    .then(resultado => {
        console.log("Conexión exitosa de sequelize.")
        // Atender peticiones en el puerto 8080.
        app.listen(8080, ()=>{
            console.log('Servidor en línea en el puerto 8080')
        });
    })
    .catch(error => console.log(error))