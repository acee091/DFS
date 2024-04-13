const User = require('../models/User');
const db = require('../db/conn')
const app = require('../index.js/app');
const bcrypt = require('bcrypt');

module.exports = class Auth {
    static register(req, res){
        res.render('/register')
    }
    static login(req, res){
        res.render('/login')
    }
    static UserRegister(req, res){
        const user = {
            nome: req.body.name,
            email: req.body.email,
            password: req.body.password,
            datacadastro: new Date()
        }
            bcrypt.hash(user.password, 10)
            .then(hash => {
                user.password = hash;
                let consulta = 'SELECT * FROM user WHERE email LIKE ?';

                db.query(consulta, [user.email], function(err, results){
                    if (results.length > 0) {
                        var message = 'E-mail já cadastrado';
                        res.render('/register', {message: message});
                    } else {
                        var message = 'Usuário adicionado!';
                        User.create(user)
                        .then(() => {
                            res.redirect('/login', {message: message});
                        })
                }
            });
        })
}
    static UserQuery(req, res){
        User.findAll({raw: true})
        .then((data)=> res.render('/profile', {users: data}))
    }
    static SessionDestroy(req, res){
        var message = "";
        req.session.destroy()
        res.render('/register', {message:message}) 
    }
    static UserDelete(req, res){
        const email = req.session.email
        var message = 'Usuário excluído!'
        User.destroy({
            where: {email: email}
        })
        .then(res.redirect('/'), {message: message})
        .catch((err)=> console.log(err))
    }
    static UserUpdate(req, res){
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

    static UserLogin(req, res){
        let email = req.body.email
        let password = req.body.password

        User.findOne({
            where: {
                email: email,
                password: password
            }
        })
        .then((data) =>{
            if(data){
                res.render('/')
            } else{
                let message = 'Login incorreto'
                res.render('/login', {message: message})
            }
        })
    }
}