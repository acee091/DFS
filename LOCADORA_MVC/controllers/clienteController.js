const Cliente = require('../models/Cliente')

module.exports = class ClienteController{
    static registerCliente(req, res){
        res.render('Cliente/cadastrocliente')
    }
    static queryCliente(req, res){
        res.render('Cliente/consultacliente')
    }

    static registerClienteSave(req, res){
        const cliente = {
            nome: req.body.nome,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            email: req.body.email
        }
        Cliente.create(cliente)
        .then(res.redirect('/home'))
        .catch((err) => console.log(err))
    }
}