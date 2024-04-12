const User = require('../models/User');
const db = require('../db/conn')
const app = require('../app');
const bcrypt = require('bcrypt');

module.exports = class Auth {
    static register(req, res){
        res.render('/register')
    }
    static UserRegister(req, res){
        const user = {
            nome: req.body.name,
            email: req.body.email,
            password: req.body.password,
            datacadastro: new Date()
        }
        let consulta = 'SELECT * FROM user WHERE email LIKE ?'

        db.query(consulta, [email], function(err, results){
            if(results.length > 0){
                var message = 'E-mail já cadastrado';
                res.render('/register', {message: message})
            } else{
                var message = 'Usuário adicionado!'
                User.create(user)
                .then(res.redirect('/login', {message: message}))
            }
        })
    }

    static queryUser(req, res){
        User.findAll({raw: true})
        .then((data)=> res.render('/profile', {users: data}))
    }
    static sessionDestroy(req, res){
        var message = "";
        req.session.destroy()
        res.render('/register', {message:message}) 
    }
    static userDelete(req, res){
        const email = req.session.email
        var message = 'Usuário excluído!'
        User.destroy({
            where: {email: email}
        })
        .then(res.redirect('/'), {message: message})
        .catch((err)=> console.log(err))
    }
    static userUpdate(req, res){
        const user = {
            nome: req.body.name,
            email: req.body.email,
            password: req.body.password,
            datacadastro: new Date()
        }
        const email = req.body.email
        User.findOne({
            where: {email:email}, raw: true
        })
        .then((data)=> res.render('/profile', data))

        User.update(user, {where:{email:email}})
        .then(res.redirect('/profile'))
    }
    static sessionOn(req,res){
        if(req.session.user){
            User.findOne({
                where: {email:email}
            })
        }
    }
}