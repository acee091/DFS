const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Car = require('../models/Car')
const Cliente = require('../models/Cliente')
const Reserva = db.define('Reserva', {
    data_inicio: {
        type: DataTypes.DATE
    },
    data_fim: {
        type: DataTypes.DATE
    },
})

Cliente.hasMany(Reserva);
Car.hasMany(Reserva);

module.exports = Reserva
