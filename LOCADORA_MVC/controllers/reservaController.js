const Reserva = require('../models/Reserva')

module.exports = class ReservaController{
    static registerReserva(req, res){
        res.render('Reserva/cadastroreserva')
    }
    static queryReserva(req, res){
        res.render('Reserva/consultareserver')
    }

    static registerReservaSave(req, res){
        const reserva = {
            ClienteId: req.body.ClienteId,
            CarId: req.body.CarId,
            data_inicio: req.body.data_inicio,
            data_fim: req.body.data_fim
        }
        Reserva.create(reserva)
        .then(res.redirect('/home'))
        .catch((err) => console.log(err))
}
}