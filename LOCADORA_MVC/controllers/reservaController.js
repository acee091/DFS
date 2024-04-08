const Reserva = require('../models/Reserva')
const db = require('../db/conn');

module.exports = class ReservaController{
    static registerReserva(req, res){
        res.render('Reserva/cadastroreserva')
    }
    
    static queryReserva(req, res) {
        const sqlQuery = `
            SELECT c.nome, c.telefone, r.data_inicio, r.data_fim, car.placa
            FROM Clientes c
            INNER JOIN Reservas r ON c.id = r.ClienteId
            INNER JOIN cars car ON car.id = r.CarId;
        `;
    
        // Executar a consulta SQL
        db.query(sqlQuery, (err, data) => {
            if (err) {
                console.error('Erro ao executar a consulta:', err);
                res.status(500).send('Erro ao executar a consulta');
                return;
            }
    
            const reserva = data;
            console.log(data);
            res.render('Reserva/consultareserva', { reserva });
        });
    }
    static inicioReserva(req, res){
        res.render('Reserva/reservainicio')        
    }
    static registerReservaSave(req, res){
        const reserva = {
            ClienteId: req.body.ClienteId,
            CarId: req.body.CarId,
            data_inicio: req.body.data_inicio,
            data_fim: req.body.data_fim
        }
        Reserva.create(reserva)
        .then(res.redirect('/Reserva/inicio'))
        .catch((err) => console.log(err))
}
}