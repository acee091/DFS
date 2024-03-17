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

app.get('/cadastro', function(req, res){
    res.render('cadastro')
})

app.get('/cadastrocarro', function(req, res){
    res.render('cadastrocarro')
})
app.listen(5000, function() {
    console.log("Server is running on port " + 5000);
});