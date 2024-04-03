const {DataTypes} = require('sequelize');

const db = require('../db/conn')

const Car = db.define('car', {
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ano: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    placa: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    disponibilidade: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
})

module.exports = Car