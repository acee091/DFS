const {DataTypes} = require('sequelize');

const db = require('../db/conn')

const Car = db.define('Car', {
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING
    },
    ano: {
        type: DataTypes.NUMBER
    },
    placa: {
        type: DataTypes.STRING
    },
    disponibilidade: {
        type: DataTypes.BOOLEAN,
    }
})

module.exports = Car