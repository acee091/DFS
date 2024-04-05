const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Cliente = db.define('Cliente', {
    nome: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    },
    endereco: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },

})

module.exports = Cliente