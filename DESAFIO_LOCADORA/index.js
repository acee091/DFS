const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const pool = require('./db/conn')
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true,
    }),
)
app.get('/', function(req, res){
    res.render('home')
})
app.post('/cadastro/cliente', function(req, res){
    const nome = req.body.nome
    const endereco = req.body.endereco
    const telefone = req.body.telefone
    const email = req.body.email

    const query = `INSERT INTO tbl_cliente (??, ??, ??, ??) VALUES (?, ?, ?, ?)`
    const data = ['nome','endereco', 'telefone', 'email', 
    nome, endereco, telefone, email]

    pool.query(query, data, function (err) {
        if (err) {
          console.log(err)
        }
    
        res.redirect(`/cadastro`)
    })
})

app.post('/cadastro/carro', function(req, res){
    const modelo = req.body.modelo
    const ano = req.body.ano
    const placa = req.body.placa
    const marca = req.body.marca
    const disponibilidade = req.body.disponibilidade
    
    const query = `INSERT INTO tbl_veiculos (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)`
    const data = ['marca', 'modelo', 'ano', 'placa', 'disponibilidade',
    marca, modelo, ano, placa, disponibilidade]
    
    pool.query(query, data, function(err){
        if(err){console.log(err)}
    })
    res.redirect(`/cadastrocarro`)
})
// app.post('/cadastro/reserva', function(req, res){
//     const idCliente = req.body.idCliente
//     const idVeiculo = req.body.idVeiculo
//     const data_inicio = req.body.data_inicio
//     const data_fim = req.body.data_fim

//     const query = `INSERT INTO tbl_reserva (??, ??, ??, ??) VALUES (?, ?, ?, ?)`
//     const data = ['idCliente', 'idVeiculo', 'data_inicio', 'data_fim',
//     idCliente, idVeiculo, data_inicio, data_fim]

//     const updateQuery = `UPDATE tbl_veiculos SET disponibilidade = ? WHERE idVeiculo = ?`;
//     const updateData = [0, idVeiculo];

//     pool.query(query, data, function(err){
//         if(err){console.log(err)}
//     })
//     pool.query(updateQuery, updateData, function(err) {
//         if (err) {
//             console.log("Erro ao atualizar disponibilidade do veículo:", err);
//             return res.status(500).send("Erro ao atualizar disponibilidade do veículo.");
//         }
//     res.redirect('/reservas')
//     })
// })
app.post('/cadastro/reserva', function(req, res){
    const idCliente = req.body.idCliente;
    const idVeiculo = req.body.idVeiculo;
    const data_inicio = req.body.data_inicio;
    const data_fim = req.body.data_fim;

    const insertQuery = `INSERT INTO tbl_reserva (idCliente, idVeiculo, data_inicio, data_fim) VALUES (?, ?, ?, ?)`;
    const insertData = [idCliente, idVeiculo, data_inicio, data_fim];

    const updateQuery = `UPDATE tbl_veiculos SET disponibilidade = ? WHERE idVeiculo = ?`;
    const updateData = [0, idVeiculo];
    pool.query("SELECT disponibilidade FROM tbl_veiculos WHERE idVeiculo = ?", [idVeiculo], function(err, results) {
        if (err) {
            console.log(err)
        }

        // // Verificar se o veículo está disponível (disponibilidade = 0)
        // if (results.length > 0 && results[0].disponibilidade === 0) {
        //     res.redirect('cadastroindisponivel')
        // }
    pool.query(insertQuery, insertData, function(err) {
        if (err) {
            console.log(err)
        }
        pool.query(updateQuery, updateData, function(err) {
            if (err) {
                console.log(err)
            }
            res.redirect('/reservas');
        })
    })
})
})
app.get('/consultacliente', function(req, res){
    const query = `SELECT * FROM tbl_cliente`

    pool.query(query, function(err, data){
        if(err){console.log(err)}

    const clientes = data
    console.log(data)
    res.render('consultacliente', { clientes })
    })
})
app.get('/consultareserva', function(req, res){
    const query = `SELECT C.nome, C.telefone, V.placa, V.marca, V.modelo, R.data_inicio, R.data_fim
    FROM tbl_reserva R INNER JOIN tbl_veiculos V ON V.idVeiculo = R.idVeiculo 
    INNER JOIN tbl_cliente C ON C.idCliente = R.idCliente ORDER BY data_fim;`

    pool.query(query, function(err, data){
        const reserva = data
        console.log(data)
        res.render('consultareserva', {reserva})
    })
})
app.get('/consultacarro', function(req, res){
    const query = `SELECT * FROM tbl_veiculos ORDER BY marca`

    pool.query(query, function(err, data){
        if(err){console.log(err)}

    const carros = data
    console.log(data)
    res.render('consultacarro', { carros })
    })
})

app.get('/reservas', function(req, res){
    res.render('reservas')
})
app.get('/cadastroreserva', function(req, res){
    res.render('cadastroreserva')
})
app.get('/cadastro', function(req, res){
    res.render('cadastro')
})
app.get('/carro', function(req, res){
    res.render('carro')
})
app.get('/cliente', function(req, res){
    res.render('cliente')
})
app.get('/consultacliente', function(req, res){
    res.render('consultacliente')
})
app.get('/cadastrocarro', function(req, res){
    res.render('cadastrocarro')
})
app.listen(5000, function() {
    console.log("Server is running on port " + 5000);
});