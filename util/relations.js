function applyRelations(sequelize){
    console.log(sequelize.models);
    const Jugador = sequelize.models.Jugador;
    const Juega = sequelize.models.Juega;
    const Nivel = sequelize.models.Nivel;
    const Opcion = sequelize.models.Opcion;
    const Percepcion = sequelize.models.Percepcion;
    const Vocacion = sequelize.models.Vocacion;
    const Pregunta = sequelize.models.Pregunta;
    const Respuesta = sequelize.models.Respuesta;

    Jugador.belongsToMany(Nivel, {through:Juega});
    Nivel.belongsToMany(Jugador, {through:Juega});

    Jugador.belongsToMany(Vocacion, {through:Percepcion});
    Vocacion.belongsToMany(Jugador, {through:Percepcion});

    Jugador.belongsToMany(Pregunta, {through:Respuesta});
    Pregunta.belongsToMany(Jugador, {through:Respuesta});

    //Nivel.belongsTo(Vocacion);
    Vocacion.belongsTo(Nivel);

    Nivel.hasMany(Pregunta);
    Pregunta.belongsTo(Nivel);

    Pregunta.hasMany(Opcion);
    Opcion.belongsTo(Pregunta);
}

module.exports = {applyRelations};
