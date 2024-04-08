const Cliente = require('../models/Cliente')

module.exports = class ClienteController{
    static registerCliente(req, res){
        res.render('Cliente/cadastrocliente')
    }
    static queryCliente(req, res){
        Cliente.findAll({raw: true})
        .then((data) =>{
            res.render('Cliente/consultacliente', {cliente: data})
        })
        .catch((err)=> console.log(err))
    }
    static inicioCliente(req,res){
        res.render('Cliente/clienteinicio')
    }
    static registerClienteSave(req, res){
        const clientes = {
            nome: req.body.nome,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            email: req.body.email
        }
        Cliente.create(clientes)
        .then(res.redirect('Cliente/register'))
        .catch((err) => console.log(err))
    }
}