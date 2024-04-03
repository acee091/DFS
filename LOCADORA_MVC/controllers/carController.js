const Car = require('../models/Car')

module.exports = class CarController{
    static registerCar(req, res){
        res.render('Car/cadastrocarro')
    }
    static queryCar(req, res){
        res.render('Car/consultacarro')
    }

    static registerCarSave(req, res){
        const car = {
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: req.body.ano,
            placa: req.body.placa,
            disponibilidade: req.body.disponibilidade
        }
        Car.create(car)
        .then(res.redirect('/home'))
        .catch((err) => console.log(err))
    }
}