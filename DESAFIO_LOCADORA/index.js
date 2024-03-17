const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function(req, res){
    res.render('home')
})
app.post('/cadastro', function(req, res){
    const nome = req.body.nome
    const endereco = req.body.endereco
    const telefone = req.body.telefone
    const email = req.body.email

    const query = `INSERT INTO tbl_cliente ?? = ?, ?? = ?
    ?? = ?, ?? = ?`
    const data = ['nome', nome, 'endereco', endereco, 
    'telefone', telefone, 'email', email]

    pool.query(query, data, function (err, data) {
        if (err) {
          console.log(err)
        }
    
        const book = data[0]
    
        console.log(data[0])
        res.redirect(`/`)
    })
})

app.get('/cadastro', function(req, res){
    res.render('cadastro')
})
app.listen(5000, function() {
    console.log("Server is running on port " + 5000);
});