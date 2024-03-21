// MODELS - criação de tabelas

const { DataTypes } = require('sequelize')

const db = require('../db/conn')

// definir que task vai ter o titulo e etc(criação de tabela)
const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
    },
    done:{
        type: DataTypes.BOOLEAN
    },
})

module.exports = Task