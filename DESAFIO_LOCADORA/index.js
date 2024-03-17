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
app.get('/consultacliente', function(req, res){
    const query = `SELECT * FROM tbl_cliente`

    pool.query(query, function(err, data){
        if(err){console.log(err)}

    const clientes = data
    console.log(data)
    res.render('consultacliente', { clientes })
    })
})

app.get('/consultacarro', function(req, res){
    const query = `SELECT * FROM tbl_veiculos`

    pool.query(query, function(err, data){
        if(err){console.log(err)}

    const carros = data
    console.log(data)
    res.render('consultacarro', { carros })
    })
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