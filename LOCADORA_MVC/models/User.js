const db = require('../db/conn')
const bcrypt = require('bcrypt')
const { DataTypes } = require('sequelize')

const User = db.define('User',{
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    datacadastro: {
        type: DataTypes.DATE
    }
})
// beforeCreate é um hook específico que é executado antes de criar um novo registro nessa tabela.
User.beforeCreate(async (user) => {
    // await -> usada para esperar que uma operação assíncrona seja concluída e retornar seu resultado antes de continuar com a execução do código.
    const hashedPassword = await bcrypt.hash(user.password, 10);
    // método assíncrono que gera um hash seguro da senha.
    user.password = hashedPassword;
  });
module.exports = User
