const Car = require('../models/Car')

module.exports = class CarController{
    static registerCar(req, res){
        res.render('Car/cadastrocarro')
    }
    static inicioCar(req, res){
        res.render('Car/carroinicio')
    }
    static queryCar(req, res){
        Car.findAll({raw: true})
        .then((data) => {
            res.render(('Car/consultacarro'), {cars: data})
        })
        .catch((err)=> console.log(err))
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
        .then(res.redirect('/Car/inicio'))
        .catch((err) => console.log(err))
    }
}